"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface HeroProps {
  onGetStarted: () => void;
}

const problemOptions = [
  "Leaking tap or pipe",
  "Blocked drain",
  "Hot water issue",
  "Toilet problem",
  "Gas fitting",
  "Bathroom renovation",
  "Kitchen plumbing",
  "General plumbing advice",
  "Other",
];

export default function Hero({ onGetStarted }: HeroProps) {
  const [selectedProblem, setSelectedProblem] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGetStarted();
  };

  return (
    <section className="bg-off-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 items-center">
          {/* Left side - Text & CTA */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-blue leading-tight">
              Show a plumber the problem on video
            </h1>
            <p className="mt-6 text-lg md:text-xl text-warm-grey">
              Either fix it yourself, understand the problem or have a plumber sent out already diagnosed.
            </p>

            {/* CTA Box */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-semibold text-slate-blue mb-6">
                  What&apos;s the problem?
                </h2>

                {/* Problem Dropdown */}
                <div className="mb-4">
                  <select
                    value={selectedProblem}
                    onChange={(e) => setSelectedProblem(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-slate-blue
                             focus:outline-none focus:ring-2 focus:ring-soft-teal focus:border-transparent
                             bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option value="">Select your issue...</option>
                    {problemOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Postcode Input */}
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Enter your postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    maxLength={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-slate-blue
                             placeholder:text-warm-grey focus:outline-none focus:ring-2
                             focus:ring-soft-teal focus:border-transparent"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" className="w-full" size="lg">
                  GET A VIDEO DIAGNOSIS
                </Button>

                {/* Availability */}
                <div className="mt-4 flex items-center justify-center gap-4 text-sm text-warm-grey">
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-soft-teal mr-1.5" />
                    Takes 15 minutes
                  </span>
                  <span>·</span>
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-soft-teal mr-1.5" />
                    No obligation
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:block">
            <Image
              src="/images/plumber-call.webp"
              alt="Video call with a licensed plumber"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
