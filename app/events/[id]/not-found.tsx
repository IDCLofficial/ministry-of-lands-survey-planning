import Link from "next/link";
import AnimatedEntrance from "@/components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "@/utils/constants/animations";
import { FaCalendarAlt, FaHome, FaArrowLeft } from "react-icons/fa";

export default function EventNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
              <FaCalendarAlt className="text-green-600" size={48} />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Event Not Found
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We couldn&apos;t find the event you&apos;re looking for. It may have been moved, deleted, or the link might be incorrect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.FAST[0]}>
              <Link 
                href="/events" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                <FaArrowLeft className="mr-2" size={16} />
                Back to Events
              </Link>
            </AnimatedEntrance>

            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.FAST[1]}>
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors duration-300"
              >
                <FaHome className="mr-2" size={16} />
                Go Home
              </Link>
            </AnimatedEntrance>
          </div>

          {/* Additional Help */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Need help finding what you&apos;re looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link href="/contact" className="text-green-600 hover:text-green-700 transition-colors">
                Contact Support
              </Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link href="/events" className="text-green-600 hover:text-green-700 transition-colors">
                Browse All Events
              </Link>
              <span className="hidden sm:inline text-gray-300">|</span>
              <Link href="/news" className="text-green-600 hover:text-green-700 transition-colors">
                Latest News
              </Link>
            </div>
          </div>
        </AnimatedEntrance>
      </div>
    </div>
  );
}
