"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  propertyType: string;
  jobType: string;
  serviceType: string;
  jobStage: string;
  description: string;
  photos: File[];
  name: string;
  email: string;
  phone: string;
};

const initialFormData: FormData = {
  propertyType: "",
  jobType: "",
  serviceType: "",
  jobStage: "",
  description: "",
  photos: [],
  name: "",
  email: "",
  phone: "",
};

const propertyTypes = ["Residential", "Commercial"];

const jobTypes = [
  "Repairs",
  "Installation",
  "Maintenance",
  "Renovations",
  "New Build",
  "Other",
];

const serviceTypes = [
  "Tap/Water Outlets",
  "Sewer/Stormwater",
  "Gas Outlets",
  "Solar Heating",
  "Kitchen Appliances",
  "Bathroom Items",
  "Hot Water",
  "Other",
];

const jobStages = [
  "Planning & Budgeting",
  "Ready to hire",
  "Emergency - Need to get it fixed ASAP",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ description?: string; name?: string; email?: string; phone?: string }>({});
  const totalSteps = 7;

  if (!isOpen) return null;

  const updateFormData = (field: keyof FormData, value: string | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Here you would typically send data to backend
    console.log("Form submitted:", formData);
    setStep(8); // Go to confirmation
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepContainer title="Is this commercial or residential?">
            <div className="grid grid-cols-2 gap-4">
              {propertyTypes.map((type) => (
                <SelectionCard
                  key={type}
                  label={type}
                  selected={formData.propertyType === type}
                  onClick={() => {
                    updateFormData("propertyType", type);
                    nextStep();
                  }}
                />
              ))}
            </div>
          </StepContainer>
        );

      case 2:
        return (
          <StepContainer title="What type of job is this?">
            <div className="grid grid-cols-2 gap-4">
              {jobTypes.map((type) => (
                <SelectionCard
                  key={type}
                  label={type}
                  selected={formData.jobType === type}
                  onClick={() => {
                    updateFormData("jobType", type);
                    nextStep();
                  }}
                />
              ))}
            </div>
          </StepContainer>
        );

      case 3:
        return (
          <StepContainer title="Type of service you require">
            <div className="grid grid-cols-2 gap-4">
              {serviceTypes.map((type) => (
                <SelectionCard
                  key={type}
                  label={type}
                  selected={formData.serviceType === type}
                  onClick={() => {
                    updateFormData("serviceType", type);
                    nextStep();
                  }}
                />
              ))}
            </div>
          </StepContainer>
        );

      case 4:
        return (
          <StepContainer title="What stage is your job at?">
            <div className="flex flex-col gap-3">
              {jobStages.map((stage) => (
                <SelectionCard
                  key={stage}
                  label={stage}
                  selected={formData.jobStage === stage}
                  onClick={() => {
                    updateFormData("jobStage", stage);
                    nextStep();
                  }}
                  fullWidth
                />
              ))}
            </div>
          </StepContainer>
        );

      case 5:
        return (
          <StepContainer title="Describe what you need done">
            <textarea
              value={formData.description}
              onChange={(e) => {
                updateFormData("description", e.target.value);
                if (errors.description) setErrors((prev) => ({ ...prev, description: undefined }));
              }}
              placeholder="Please describe your plumbing issue in detail..."
              className={`w-full h-40 px-4 py-3 border rounded-lg
                       text-slate-blue placeholder:text-warm-grey resize-none
                       focus:outline-none focus:ring-2 focus:ring-soft-teal ${
                         errors.description ? "border-red-500" : "border-gray-200"
                       }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
            <Button
              onClick={() => {
                if (!formData.description.trim()) {
                  setErrors((prev) => ({ ...prev, description: "Please describe your plumbing issue" }));
                  return;
                }
                nextStep();
              }}
              className="w-full mt-4"
            >
              Continue
            </Button>
          </StepContainer>
        );

      case 6:
        return (
          <StepContainer title="Add photos (optional)">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-off-white mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-warm-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="text-warm-grey mb-4">Click to upload photos of the issue</p>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                id="photo-upload"
                onChange={(e) => {
                  if (e.target.files) {
                    updateFormData("photos", Array.from(e.target.files));
                  }
                }}
              />
              <label htmlFor="photo-upload">
                <Button type="button" variant="outline" className="cursor-pointer">
                  Choose Files
                </Button>
              </label>
              {formData.photos.length > 0 && (
                <p className="mt-4 text-sm text-soft-teal">
                  {formData.photos.length} file(s) selected
                </p>
              )}
            </div>
            <Button onClick={nextStep} className="w-full mt-4">
              Continue
            </Button>
          </StepContainer>
        );

      case 7:
        const validateContact = () => {
          const newErrors: { name?: string; email?: string; phone?: string } = {};
          if (!formData.name.trim()) newErrors.name = "Name is required";
          if (!formData.email.trim()) {
            newErrors.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
          }
          if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
        };

        return (
          <StepContainer title="Your contact details">
            <p className="text-sm text-warm-grey mb-4">
              These will be used to connect you to a qualified plumber
            </p>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name *"
                  value={formData.name}
                  onChange={(e) => {
                    updateFormData("name", e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  className={`w-full px-4 py-3 border rounded-lg
                           text-slate-blue placeholder:text-warm-grey
                           focus:outline-none focus:ring-2 focus:ring-soft-teal ${
                             errors.name ? "border-red-500" : "border-gray-200"
                           }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={(e) => {
                    updateFormData("email", e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  className={`w-full px-4 py-3 border rounded-lg
                           text-slate-blue placeholder:text-warm-grey
                           focus:outline-none focus:ring-2 focus:ring-soft-teal ${
                             errors.email ? "border-red-500" : "border-gray-200"
                           }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone number *"
                  value={formData.phone}
                  onChange={(e) => {
                    updateFormData("phone", e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  className={`w-full px-4 py-3 border rounded-lg
                           text-slate-blue placeholder:text-warm-grey
                           focus:outline-none focus:ring-2 focus:ring-soft-teal ${
                             errors.phone ? "border-red-500" : "border-gray-200"
                           }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Info box */}
            <div className="mt-6 p-4 bg-soft-teal/10 rounded-lg">
              <p className="text-slate-blue font-medium text-center">
                You&apos;re on the right track to have your problem all sorted
              </p>
              <div className="flex justify-center gap-8 mt-2 text-sm text-warm-grey">
                <span>82% resolved on phone</span>
                <span>No obligation</span>
              </div>
            </div>

            {/* Terms */}
            <p className="text-xs text-warm-grey mt-4">
              By pressing Book a 15 min video call, you agree to the All Sorted{" "}
              <a href="/terms" className="underline">Terms & Conditions</a>,{" "}
              <a href="/terms#privacy" className="underline">Privacy Policy</a> and consent to receive
              marketing communications from All Sorted and its partners. You may unsubscribe at any time.
            </p>

            <Button
              onClick={() => {
                if (validateContact()) {
                  handleSubmit();
                }
              }}
              className="w-full mt-4"
              size="lg"
            >
              Book a 15 min Video Call
            </Button>
          </StepContainer>
        );

      case 8:
        return (
          <StepContainer title="Booking confirmed!">
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-soft-teal mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-2">
                Thank you, {formData.name}!
              </h3>
              <p className="text-warm-grey mb-6">
                Your video consultation is booked. Check your email for confirmation and the meeting link.
              </p>
              <p className="text-lg font-medium text-slate-blue">
                $29 for 15 minutes
              </p>
              <p className="text-sm text-warm-grey mt-1">
                Payment will be processed via Calendly/Stripe
              </p>

              {/* Placeholder for Calendly embed */}
              <div className="mt-6 p-4 border border-dashed border-gray-200 rounded-lg">
                <p className="text-warm-grey text-sm">
                  [Calendly booking widget will appear here]
                </p>
              </div>

              <Button onClick={onClose} variant="outline" className="mt-6">
                Close
              </Button>
            </div>
          </StepContainer>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          {step > 1 && step < 8 && (
            <button
              onClick={prevStep}
              className="p-2 hover:bg-gray-100 rounded-lg"
              aria-label="Go back"
            >
              <svg className="w-5 h-5 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div className="flex-1" />
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-slate-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        {step < 8 && (
          <div className="px-6 pt-4">
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-soft-teal transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
            <p className="text-xs text-warm-grey mt-2 text-center">
              Step {step} of {totalSteps}
            </p>
          </div>
        )}

        {/* Content */}
        <div className="p-6">{renderStep()}</div>
      </div>
    </div>
  );
}

// Helper components
function StepContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-blue mb-6">{title}</h2>
      {children}
    </div>
  );
}

function SelectionCard({
  label,
  selected,
  onClick,
  fullWidth = false,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  fullWidth?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-4 border-2 rounded-lg text-left transition-all ${
        fullWidth ? "w-full" : ""
      } ${
        selected
          ? "border-soft-teal bg-soft-teal/5 text-slate-blue"
          : "border-gray-200 text-slate-blue hover:border-soft-teal/50"
      }`}
    >
      <span className="font-medium">{label}</span>
    </button>
  );
}
