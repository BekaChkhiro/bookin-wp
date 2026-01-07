import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions | All Sorted",
  description: "Terms and Conditions for All Sorted video plumbing diagnosis service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-off-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-blue mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                1. Introduction
              </h2>
              <p className="text-warm-grey leading-relaxed">
                Welcome to All Sorted. These terms and conditions outline the rules and
                regulations for the use of our video plumbing diagnosis service. By
                accessing this website and using our services, you accept these terms
                and conditions in full.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                2. Services
              </h2>
              <p className="text-warm-grey leading-relaxed">
                All Sorted provides video consultation services with licensed Australian
                plumbers. Our service is designed to help diagnose plumbing issues
                remotely and provide advice on the appropriate next steps. The service
                costs $29 for a 15-minute video consultation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                3. Limitations
              </h2>
              <p className="text-warm-grey leading-relaxed">
                While our plumbers are licensed professionals, video diagnosis has
                limitations. Some issues may require an in-person assessment for
                accurate diagnosis. Our advice is provided in good faith but should not
                be considered a substitute for professional on-site inspection where
                necessary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                4. Payment
              </h2>
              <p className="text-warm-grey leading-relaxed">
                Payment is processed securely through Stripe. By booking a consultation,
                you agree to pay the service fee of $29 AUD. Refunds may be provided at
                our discretion if we are unable to deliver the service as promised.
              </p>
            </section>

            <section className="mb-8" id="privacy">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                5. Privacy Policy
              </h2>
              <p className="text-warm-grey leading-relaxed mb-4">
                We collect and process personal information in accordance with
                Australian privacy laws. Information collected includes:
              </p>
              <ul className="list-disc pl-6 text-warm-grey space-y-2">
                <li>Name and contact details</li>
                <li>Information about your plumbing issue</li>
                <li>Photos you choose to upload</li>
                <li>Video consultation recordings (if applicable)</li>
              </ul>
              <p className="text-warm-grey leading-relaxed mt-4">
                Your information is used solely to provide our services and will not be
                sold to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                6. Contact
              </h2>
              <p className="text-warm-grey leading-relaxed">
                For questions about these terms or our services, please contact us at{" "}
                <a
                  href="mailto:hello@allsorted.com.au"
                  className="text-soft-teal hover:underline"
                >
                  hello@allsorted.com.au
                </a>
              </p>
            </section>
          </div>

          <p className="text-sm text-warm-grey mt-8">
            Last updated: January 2025
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
