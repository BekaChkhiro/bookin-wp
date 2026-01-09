function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-soft-teal" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TrustPilotLogo() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </div>
      <span className="font-semibold text-slate-blue">TrustPilot</span>
    </div>
  );
}

function TradeCheckLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-[#1a5276] rounded flex items-center justify-center">
        <svg className="w-4 h-4 text-[#f4d03f]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="font-semibold text-slate-blue">TradeCheck</span>
    </div>
  );
}

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg text-slate-blue mb-6 italic">
          Why Australians love All Sorted
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {/* TrustPilot */}
          <div className="flex items-center gap-3">
            <TrustPilotLogo />
            <div className="flex items-center gap-0.5">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>

          {/* TradeCheck */}
          <div className="flex items-center gap-3">
            <TradeCheckLogo />
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <span className="text-slate-blue font-medium ml-1">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
