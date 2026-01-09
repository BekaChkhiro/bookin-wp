"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import HowItWorks from "@/components/home/HowItWorks";
import CTASection from "@/components/home/CTASection";
import Testimonials from "@/components/home/Testimonials";
import BookingModal from "@/components/booking/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero onGetStarted={() => setIsModalOpen(true)} />
        <HowItWorks />
        <TrustBadges />
        <CTASection onGetStarted={() => setIsModalOpen(true)} />
        <Testimonials />
      </main>

      <Footer />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
