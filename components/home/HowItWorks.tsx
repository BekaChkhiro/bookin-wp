// Icons
function VideoIcon() {
  return (
    <svg className="w-10 h-10 text-soft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="w-10 h-10 text-soft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function CalendarPlusIcon() {
  return (
    <svg className="w-10 h-10 text-soft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 11v6m-3-3h6" />
    </svg>
  );
}

const steps = [
  {
    icon: VideoIcon,
    title: "Get a quick diagnosis",
    description: "Jump on a 15-minute video call with a licensed plumber to understand what's really going on.",
  },
  {
    icon: ClipboardIcon,
    title: "Decide the right next step",
    description: "You decide to:\n• Fix it yourself if it's simple\n• Get a clear explanation and know your next steps\n• We send a plumber who already knows the issue to fix it",
  },
  {
    icon: CalendarPlusIcon,
    title: "Book a plumber only if needed",
    description: "If a call-out's required, we'll book it with the diagnosis already done — saving time and money.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-left">
              <div className="mb-4">
                <step.icon />
              </div>
              <h3 className="text-xl font-semibold text-slate-blue mb-3">
                {step.title}
              </h3>
              <p className="text-warm-grey leading-relaxed whitespace-pre-line">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
