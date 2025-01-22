import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content:
      "Emotiplay has revolutionized my downtime. It's like having a personal mood-boosting assistant!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "As someone who struggles with mood swings, Emotiplay has been a game-changer. It always knows what I need to watch.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Teacher",
    content:
      "I use Emotiplay to find calming videos after a long day of teaching. It's incredibly accurate and helpful.",
    rating: 4,
  },
];

const TestimonialCard: React.FC<{ testimonial: (typeof testimonials)[0] }> = ({
  testimonial,
}) => (
  <motion.div
    key={testimonial.id}
    className="bg-white rounded-lg shadow-lg p-6"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
      <div className="flex">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
  </motion.div>
);

const TestimonialsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the new testimonial to your backend
    console.log("New testimonial submitted:", newTestimonial);
    // Reset the form
    setNewTestimonial({ name: "", role: "", content: "", rating: 5 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-purple-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Users Say
        </motion.h1>

        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
            />
          </AnimatePresence>
          <motion.button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-purple-600 text-white rounded-full p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-purple-600 text-white rounded-full p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        <motion.div
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Share Your Experience</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Your Name"
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, name: e.target.value })
                }
                required
              />
              <Input
                placeholder="Your Role"
                value={newTestimonial.role}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, role: e.target.value })
                }
                required
              />
            </div>
            <Textarea
              placeholder="Your Testimonial"
              value={newTestimonial.content}
              onChange={(e) =>
                setNewTestimonial({
                  ...newTestimonial,
                  content: e.target.value,
                })
              }
              className="mb-4"
              required
            />
            <div className="flex items-center mb-4">
              <span className="mr-2">Rating:</span>
              {[1, 2, 3, 4, 5].map((rating) => (
                <motion.button
                  key={rating}
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    setNewTestimonial({ ...newTestimonial, rating })
                  }
                >
                  <Star
                    className={`w-6 h-6 ${
                      rating <= newTestimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Submit Testimonial
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
