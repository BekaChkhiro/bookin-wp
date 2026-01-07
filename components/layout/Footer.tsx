import Link from "next/link";
import Image from "next/image";

function SupportIcon() {
  return (
    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
  );
}

function LicenseIcon() {
  return (
    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center">
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-blue text-white">
      {/* Trust Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Customer Support */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <SupportIcon />
              <div>
                <h4 className="font-semibold text-lg">Customer support</h4>
                <p className="text-gray-300 text-sm">Our team is here if you need help.</p>
                <Link href="mailto:hello@allsorted.com.au" className="text-soft-teal text-sm hover:underline">
                  Contact us
                </Link>
              </div>
            </div>

            {/* Registered and Licensed */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <LicenseIcon />
              <div>
                <h4 className="font-semibold text-lg">Registered and licensed</h4>
                <p className="text-gray-300 text-sm">ABNs and licenses checked.</p>
                <Link href="/terms" className="text-soft-teal text-sm hover:underline">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/booking-logo.png"
                alt="All Sorted"
                width={140}
                height={35}
                className="h-9 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Get a clear plumbing diagnosis before you book a call-out.
              Licensed Australian plumbers available for video consultations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/terms" className="hover:text-soft-teal transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/terms#privacy" className="hover:text-soft-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Australia Wide</li>
              <li>
                <a href="mailto:hello@allsorted.com.au" className="hover:text-soft-teal transition-colors">
                  hello@allsorted.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} All Sorted. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
