function StarIcon() {
  return (
    <svg className="w-4 h-4 text-soft-teal" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
  );
}

const testimonials = [
  {
    name: "Sarah T.",
    location: "Sydney",
    text: "Instead of rushing on a $300 call-out, the plumber showed me exactly how to fix my hot water problem over video call. Same magic!",
    initials: "ST",
  },
  {
    name: "Daniel P.",
    location: "Brisbane",
    text: "I'd never booked a plumber like this before. They saved me a lot of money by diagnosing the problem first. It's incredibly easy and helpful.",
    initials: "DP",
  },
  {
    name: "Kate W.",
    location: "Melbourne",
    text: "The fact that I could talk to a real tradie on video made all the difference. Best service experience I've had in years.",
    initials: "KW",
  },
  {
    name: "Emma R.",
    location: "Gold Coast",
    text: "A simple, no-pressure approach. The perfect call to assess. We'll make it better. I think this service experience I've had in years.",
    initials: "ER",
  },
  {
    name: "Josh K.",
    location: "Newcastle",
    text: "I love that they gave me peace of mind. The plumber diagnosed the issue over video, and I knew exactly what I needed to do. Saved me $200.",
    initials: "JK",
  },
  {
    name: "Emma R.",
    location: "Gold Coast",
    text: "Finally a tradie who didn't want to upsell me. They checked the issue on video, made all the difference. The best service experience I've had in years.",
    initials: "ER",
  },
  {
    name: "Rachel L.",
    location: "Adelaide",
    text: "Booking by video meant I didn't have to wait around for a tradie to assess my job. Super simple and so convenient.",
    initials: "RL",
  },
  {
    name: "John S.",
    location: "Adelaide",
    text: "A safe, clever service. The best bit? I pressure you. The plumber diagnoses the problem and figures exactly what to do next. No commitment.",
    initials: "JS",
  },
  {
    name: "Lauren M.",
    location: "Newcastle",
    text: "Very secure. The plumber quickly found the issue and explained my options. No pressure, no upsell. Great service.",
    initials: "LM",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-blue text-center mb-12">
          What our customers say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-sm font-medium text-gray-600">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-blue text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-warm-grey">{testimonial.location}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-3">
                <StarRating />
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-blue leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
