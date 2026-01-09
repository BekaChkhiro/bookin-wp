"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface TradieLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TradieLoginModal({ isOpen, onClose }: TradieLoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Always show error
    setError("Invalid credentials");
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="border-b border-gray-100 p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-blue">Tradie Portal</h2>
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
          <p className="text-warm-grey text-sm mb-6">
            Sign in to access your tradie dashboard
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-blue mb-1">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg
                           text-slate-blue placeholder:text-warm-grey
                           focus:outline-none focus:ring-2 focus:ring-soft-teal"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-blue mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg
                           text-slate-blue placeholder:text-warm-grey
                           focus:outline-none focus:ring-2 focus:ring-soft-teal"
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-error-red text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full mt-6"
              size="lg"
              disabled={isSubmitting || !username || !password}
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <p className="text-xs text-warm-grey text-center mt-4">
            Contact support if you need help accessing your account
          </p>
        </div>
      </div>
    </div>
  );
}
