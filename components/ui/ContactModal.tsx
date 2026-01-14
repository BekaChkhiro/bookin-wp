"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (!formData.surname.trim()) {
      setError("Please enter your surname");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your phone number");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData(initialFormData);
    setIsSuccess(false);
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-blue">Contact Us</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-soft-teal mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-2">
                Message Sent!
              </h3>
              <p className="text-warm-grey mb-6">
                Thank you for contacting us. We&apos;ll get back to you as soon as possible.
              </p>
              <Button onClick={handleClose} variant="outline">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-warm-grey text-sm mb-6">
                Have a question? Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg
                             text-slate-blue placeholder:text-warm-grey
                             focus:outline-none focus:ring-2 focus:ring-soft-teal"
                  />
                  <input
                    type="text"
                    placeholder="Surname"
                    value={formData.surname}
                    onChange={(e) => updateFormData("surname", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg
                             text-slate-blue placeholder:text-warm-grey
                             focus:outline-none focus:ring-2 focus:ring-soft-teal"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg
                           text-slate-blue placeholder:text-warm-grey
                           focus:outline-none focus:ring-2 focus:ring-soft-teal"
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg
                           text-slate-blue placeholder:text-warm-grey
                           focus:outline-none focus:ring-2 focus:ring-soft-teal"
                />

                <textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg
                           text-slate-blue placeholder:text-warm-grey resize-none
                           focus:outline-none focus:ring-2 focus:ring-soft-teal"
                />
              </div>

              {error && (
                <p className="text-error-red text-sm mt-4">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full mt-6"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
