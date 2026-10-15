import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import PageSection from "../components/PageSection";
import testimonials from "../data/testimonials.json";

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];
  
  return (
    <section id="testimonials" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageSection
          eyebrow="Testimonials"
          title="Trusted by founders, teams, and collaborators."
          description="The work is shaped to make complex ideas feel clear, usable, and valuable."
          centered
        />

        <div className="mt-14 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#f8fbf8] to-[#f7f5ef] p-8 shadow-xl lg:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <img src={activeTestimonial.image} alt={activeTestimonial.name} className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#550000]">{activeTestimonial.name}</h3>
                    <p className="text-slate-600">{activeTestimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#FBC02D]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>
              <p className="mt-8 text-lg leading-8 text-slate-700">“{activeTestimonial.quote}”</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${activeIndex === index ? 'bg-[#550000]' : 'bg-slate-300'}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;