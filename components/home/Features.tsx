const features = [
  "Licensed Australian plumbers",
  "Get clear advice on what to do next including pricing",
  "No obligation",
  "Australia wide",
];

function CheckIcon() {
  return (
    <div className="w-6 h-6 rounded-full bg-soft-teal flex items-center justify-center flex-shrink-0">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start space-x-3 bg-white p-4 rounded-lg"
            >
              <CheckIcon />
              <span className="text-slate-blue font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
