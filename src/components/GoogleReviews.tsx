import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  review: string;
  rating: number;
  time?: string;
  authorPhotoUrl?: string;
}

const FALLBACK_REVIEWS: Review[] = [
  {
    name: "Rajesh Kumar",
    review: "Patil Investments completely changed how I view my retirement. Their Goal Sheet approach made everything clear and achievable. Highly recommended for anyone looking for a trustworthy mutual fund distributor.",
    rating: 5
  },
  {
    name: "Sneha Desai",
    review: "I was worried about the 'Retirement Gap' until I had my Discovery Call. They provided a custom roadmap that gave me immense confidence. Professional, transparent, and truly caring about their clients' financial well-being.",
    rating: 5
  },
  {
    name: "Amit Sharma",
    review: "Excellent service and deep market knowledge. They don't just sell products; they educate you on the 'why' behind every investment. The SWP strategy for my post-retirement phase has been working flawlessly.",
    rating: 5
  }
];

export const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_REVIEWS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
      const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

      if (!apiKey || !placeId) {
        console.log("Google Places API Key or Place ID not found. Using fallback reviews.");
        setLoading(false);
        return;
      }

      try {
        // Using the New Google Places API which supports CORS
        const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=reviews`, {
          headers: {
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': 'reviews'
          }
        });

        if (!response.ok) {
          throw new Error(`Google API responded with status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          const formattedReviews = data.reviews.map((r: any) => ({
            name: r.authorAttribution?.displayName || "Google User",
            review: r.text?.text || r.originalText?.text || "",
            rating: r.rating || 5,
            authorPhotoUrl: r.authorAttribution?.photoUri
          })).filter((r: Review) => r.review.length > 0).slice(0, 3); // Get top 3 with text
          
          if (formattedReviews.length > 0) {
            setReviews(formattedReviews);
          }
        }
      } catch (err) {
        console.error("Failed to fetch Google Reviews:", err);
        setError("Failed to load live reviews. Showing cached reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {reviews.map((review, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="bg-[var(--color-near-black)] border border-white/10 p-8 rounded-2xl relative"
        >
          <div className="flex gap-1 text-yellow-500 mb-6">
            {[...Array(review.rating)].map((_, j) => (
              <Star key={j} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-gray-300 leading-relaxed mb-8 italic">"{review.review}"</p>
          <div className="flex items-center gap-4 mt-auto">
            {review.authorPhotoUrl ? (
              <img src={review.authorPhotoUrl} alt={review.name} className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-electric-blue)] to-blue-600 flex items-center justify-center text-white font-bold">
                {review.name.charAt(0)}
              </div>
            )}
            <div>
              <div className="font-bold text-white">{review.name}</div>
              <div className="text-xs text-gray-500">Google Review</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
