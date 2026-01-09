import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions | All Sorted",
  description: "Terms and Conditions and Privacy Policy for All Sorted video plumbing diagnosis service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-off-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Terms & Conditions */}
          <h1 className="text-4xl font-semibold text-slate-blue mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-warm-grey leading-relaxed mb-6">
              These Terms & Conditions (&quot;Terms&quot;) govern your use of the All Sorted website and services. By accessing our website or booking a service, you agree to these Terms. If you do not agree, please do not use our services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                1. About All Sorted
              </h2>
              <p className="text-warm-grey leading-relaxed">
                All Sorted provides video-based plumbing diagnosis services designed to help customers understand a plumbing issue and decide the appropriate next step. All Sorted does not provide plumbing repairs through the website itself and does not guarantee that an issue can be resolved remotely.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                2. Nature of the service
              </h2>
              <h3 className="text-lg font-medium text-slate-blue mb-2">2.1 Video diagnosis only</h3>
              <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                <li>The service provided is a diagnostic and advisory service only.</li>
                <li>We help assess the issue and explain likely causes, risks, and options.</li>
                <li>We do not provide step-by-step repair instructions or supervised DIY repairs.</li>
              </ul>
              <h3 className="text-lg font-medium text-slate-blue mb-2">2.2 No guarantee of resolution</h3>
              <ul className="list-disc pl-6 text-warm-grey space-y-2">
                <li>Some issues can be clarified remotely.</li>
                <li>Many issues will still require an on-site plumber.</li>
                <li>All Sorted does not guarantee that a problem can be resolved without a call-out.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                3. Not a substitute for emergency services
              </h2>
              <p className="text-warm-grey leading-relaxed mb-4">
                You must not use All Sorted for emergencies, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                <li>Gas leaks</li>
                <li>Flooding that cannot be isolated</li>
                <li>Electrical hazards</li>
                <li>Sewage overflows</li>
                <li>Situations involving immediate risk to people or property</li>
              </ul>
              <p className="text-warm-grey leading-relaxed">
                In these cases, you should contact emergency services or a licensed plumber immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                4. Booking and fees
              </h2>
              <h3 className="text-lg font-medium text-slate-blue mb-2">4.1 Fees</h3>
              <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                <li>Fees for video diagnosis are displayed at the time of booking.</li>
                <li>Payment is required upfront.</li>
              </ul>
              <h3 className="text-lg font-medium text-slate-blue mb-2">4.2 Credits</h3>
              <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                <li>Where stated, the diagnosis fee may be credited toward an on-site service booked through All Sorted.</li>
                <li>Credits are non-transferable and have no cash value.</li>
              </ul>
              <h3 className="text-lg font-medium text-slate-blue mb-2">4.3 Refunds</h3>
              <p className="text-warm-grey leading-relaxed mb-2">
                Refunds may be issued at All Sorted&apos;s discretion where:
              </p>
              <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-2">
                <li>The service could not be delivered</li>
                <li>The issue was clearly outside the advertised scope</li>
              </ul>
              <p className="text-warm-grey leading-relaxed">
                No refunds will be provided for completed diagnosis sessions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                5. On-site services
              </h2>
              <p className="text-warm-grey leading-relaxed mb-4">
                If an on-site plumber is required:
              </p>
              <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                <li>All Sorted may assist in arranging a plumber</li>
                <li>On-site services are performed by independent licensed tradespeople</li>
                <li>Pricing, scope, and timing of on-site work are agreed directly with the plumber</li>
              </ul>
              <p className="text-warm-grey leading-relaxed">
                All Sorted is not responsible for the performance of on-site work beyond facilitating the introduction and diagnosis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                6. Independent contractors
              </h2>
              <ul className="list-disc pl-6 text-warm-grey space-y-2">
                <li>Plumbers engaged through All Sorted are independent contractors, not employees.</li>
                <li>All Sorted does not control how on-site work is performed.</li>
                <li>Any disputes regarding on-site services should be raised directly with the plumber.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                7. User responsibilities
              </h2>
              <p className="text-warm-grey leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                <li>Provide accurate and honest information</li>
                <li>Follow safety instructions, including advice to stop or isolate systems</li>
                <li>Not attempt repairs beyond your skill or licence</li>
                <li>Seek professional assistance where advised</li>
              </ul>
              <p className="text-warm-grey leading-relaxed">
                All Sorted is not responsible for issues arising from incomplete, inaccurate, or misleading information provided by you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                8. Limitation of liability
              </h2>
              <p className="text-warm-grey leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                <li>All Sorted is not liable for indirect, incidental, or consequential loss</li>
                <li>All Sorted does not accept liability for damage caused by actions taken by users following a diagnosis</li>
                <li>Liability is limited to the amount paid for the service</li>
              </ul>
              <p className="text-warm-grey leading-relaxed">
                Nothing in these Terms excludes rights under Australian Consumer Law that cannot be excluded.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                9. Intellectual property
              </h2>
              <p className="text-warm-grey leading-relaxed">
                All content on the website, including text, branding, logos, and materials, is owned by or licensed to All Sorted and must not be used without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                10. Privacy
              </h2>
              <p className="text-warm-grey leading-relaxed">
                Personal information is handled in accordance with our Privacy Policy below, which forms part of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                11. Changes to these Terms
              </h2>
              <p className="text-warm-grey leading-relaxed">
                All Sorted may update these Terms from time to time. The most current version will be published on the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                12. Governing law
              </h2>
              <p className="text-warm-grey leading-relaxed">
                These Terms are governed by the laws of New South Wales, Australia, and the parties submit to the jurisdiction of its courts.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                13. Contact details
              </h2>
              <p className="text-warm-grey leading-relaxed">
                For questions regarding these Terms, contact:<br />
                All Sorted<br />
                Email:{" "}
                <a href="mailto:hello@allsorted.online" className="text-soft-teal hover:underline">
                  hello@allsorted.online
                </a>
              </p>
            </section>

            {/* Privacy Policy */}
            <div className="border-t border-gray-200 pt-12" id="privacy">
              <h1 className="text-4xl font-semibold text-slate-blue mb-8">
                Privacy Policy
              </h1>

              <p className="text-warm-grey leading-relaxed mb-6">
                All Sorted (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and disclose your information when you use our website and services.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  1. What information we collect
                </h2>
                <p className="text-warm-grey leading-relaxed mb-4">
                  When you use All Sorted, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                  <li>Your name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Address or suburb/postcode</li>
                  <li>Information about your plumbing issue</li>
                  <li>Photos or videos you choose to upload</li>
                  <li>Details related to booking a video diagnosis</li>
                  <li>Any communications you have with us</li>
                </ul>
                <p className="text-warm-grey leading-relaxed">
                  We only collect information that is reasonably necessary to provide our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  2. How we collect your information
                </h2>
                <p className="text-warm-grey leading-relaxed mb-4">
                  We collect information when you:
                </p>
                <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                  <li>Complete a form on our website</li>
                  <li>Book a video diagnosis</li>
                  <li>Upload photos or videos</li>
                  <li>Communicate with us by phone, email, or video call</li>
                </ul>
                <p className="text-warm-grey leading-relaxed">
                  We do not collect personal information without your knowledge or consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  3. How we use your information
                </h2>
                <p className="text-warm-grey leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                  <li>Provide video plumbing diagnoses</li>
                  <li>Assess and understand your plumbing issue</li>
                  <li>Communicate with you about your booking</li>
                  <li>Arrange an on-site plumber if required</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal or regulatory requirements</li>
                </ul>
                <p className="text-warm-grey leading-relaxed">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  4. Video calls, photos, and recordings
                </h2>
                <p className="text-warm-grey leading-relaxed mb-4">
                  Video calls may be conducted to help diagnose plumbing issues.
                </p>
                <ul className="list-disc pl-6 text-warm-grey space-y-2">
                  <li>Calls are not recorded unless explicitly stated and agreed to</li>
                  <li>Photos or videos you upload are used solely for diagnosis and service delivery</li>
                  <li>Media files are stored securely and only for as long as reasonably required</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  5. Disclosure of your information
                </h2>
                <p className="text-warm-grey leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-warm-grey space-y-2 mb-4">
                  <li>Licensed plumbers or service providers involved in diagnosing or resolving your issue</li>
                  <li>Third-party tools used to operate our website, booking system, or payments</li>
                  <li>Legal or regulatory authorities if required by law</li>
                </ul>
                <p className="text-warm-grey leading-relaxed">
                  We only share the minimum information necessary to deliver the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  6. Storage and security
                </h2>
                <p className="text-warm-grey leading-relaxed">
                  We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, or disclosure. Information may be stored electronically using secure third-party systems. While we take security seriously, no system can be guaranteed to be completely secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  7. Marketing communications
                </h2>
                <p className="text-warm-grey leading-relaxed">
                  We may contact you with service-related messages (such as booking confirmations or follow-ups). We will only send marketing communications if permitted by law, and you can opt out at any time by contacting us or using any unsubscribe option provided.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  8. Access and correction
                </h2>
                <p className="text-warm-grey leading-relaxed">
                  You may request access to, or correction of, your personal information by contacting us using the details below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  9. Cookies and website analytics
                </h2>
                <p className="text-warm-grey leading-relaxed">
                  Our website may use basic cookies or analytics tools to understand how visitors use the site and to improve performance. These tools do not identify you personally.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  10. Changes to this policy
                </h2>
                <p className="text-warm-grey leading-relaxed">
                  We may update this Privacy Policy from time to time. The most current version will always be available on our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-blue mb-4">
                  11. Contact us
                </h2>
                <p className="text-warm-grey leading-relaxed">
                  If you have any questions about this Privacy Policy or how your information is handled, you can contact us at:<br />
                  All Sorted<br />
                  Email:{" "}
                  <a href="mailto:hello@allsorted.online" className="text-soft-teal hover:underline">
                    hello@allsorted.online
                  </a>
                </p>
              </section>
            </div>
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
