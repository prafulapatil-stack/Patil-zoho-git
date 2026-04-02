import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

async function generate() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  console.log('Generating image...');
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: 'A photorealistic, high-quality image of a professional Indian couple in their late 50s or early 60s, dressed in elegant smart-casual attire, looking confidently towards the future. Subtle backdrop of a modern Indian city skyline blended with a serene park setting. Professional, aspirational, cinematic lighting, suitable for a wealth management financial services website background.',
      config: {
        imageConfig: {
          aspectRatio: '16:9',
        },
      },
    });

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        const publicDir = path.join(process.cwd(), 'public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir);
        }
        fs.writeFileSync(path.join(publicDir, 'hero-bg.png'), buffer);
        console.log('Image saved to public/hero-bg.png');
        return;
      }
    }
    console.log('No image data found in response.');
  } catch (e) {
    console.error('Error generating image:', e);
  }
}
generate();
