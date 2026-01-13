import Button from "@/components/ui/Button";

interface CTASectionProps {
  onGetStarted: () => void;
}

export default function CTASection({ onGetStarted }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-blue mb-6 whitespace-nowrap">
          Not every plumbing issue needs a call-out.
        </h2>
        <p className="text-lg text-warm-grey mb-8 leading-relaxed">
          Many plumbing problems are misdiagnosed or over-escalated. All Sorted helps you
          understand the issue first, so you don&apos;t rush into the wrong decision.
        </p>
        <Button onClick={onGetStarted} size="lg">
          GET A VIDEO DIAGNOSIS
        </Button>
        <p className="mt-4 text-sm text-warm-grey">
          <span className="inline-flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-soft-teal mr-1.5" />
            Takes 15 minutes
          </span>
          <span className="mx-2">·</span>
          <span className="inline-flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-soft-teal mr-1.5" />
            No obligation
          </span>
        </p>
      </div>
    </section>
  );
}
