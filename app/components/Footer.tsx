"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useState, FormEvent, ChangeEvent } from 'react'
import toast from 'react-hot-toast'
import AnimatedEntrance from '../../components/AnimatedEntrance'
import { ANIMATION_PRESETS, STAGGER_DELAYS } from '../../utils/constants/animations'

export default function Footer() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (emailError) setEmailError(null);
    }, [emailError]);

    const handleSubscribe = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = /\S+@\S+\.\S+/.test(email.trim());
        if (!email.trim()) {
            setEmailError("Email is required");
            toast.error("Please enter your email.");
            return;
        }
        if (!isValid) {
            setEmailError("Enter a valid email");
            toast.error("Enter a valid email.");
            return;
        }
        setIsSubmitting(true);
        try {
            await new Promise((r) => setTimeout(r, 900));
            toast.success("Subscribed successfully!");
            setEmail("");
            setEmailError(null);
        } finally {
            setIsSubmitting(false);
        }
    }, [email]);

    return (
        <>

            {/* Newsletter Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                <section className="py-8 sm:py-12 md:py-16 bg-white -mt-6 sm:-mt-8 md:-mt-10 -mb-16 sm:-mb-24 md:-mb-32 px-4 sm:px-6 lg:px-20">
                    <div className="max-w-6xl mx-auto">
                        <div className="rounded-xl sm:rounded-2xl px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:px-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 group-hover:scale-105" style={{
                                background: "linear-gradient(90deg, #A1FFCE 0%, #FAFFD1 100%)",
                            }}>

                            </div>
                            <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8 sm:-translate-y-12 sm:translate-x-12 md:-translate-y-16 md:translate-x-16 transition-transform duration-700 group-hover:rotate-12"></div>
                            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-white/10 rounded-full translate-y-6 -translate-x-6 sm:translate-y-9 sm:-translate-x-9 md:translate-y-12 md:-translate-x-12 transition-transform duration-700 group-hover:-rotate-12"></div>
                            <div className="relative text-black z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
                                <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                                    <div className="text-center md:text-left">
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                                            Stay Connected with Us
                                        </h2>
                                        <p className="max-w-lg opacity-70 text-sm sm:text-base leading-relaxed">
                                            Get updates on land administration, survey & mapping, development control, and housing projects across Imo State. We&apos;re committed to transparent, citizen‑focused service.
                                        </p>
                                    </div>
                                </AnimatedEntrance>
                                <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={400}>
                                    <Link href="/contact" className="flex-shrink-0">
                                        <button className="bg-[#FF7700] text-white hover:bg-[#FF7700]/90 hover:scale-105 active:scale-95 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl cursor-pointer">
                                            Contact Us
                                        </button>
                                    </Link>
                                </AnimatedEntrance>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Footer */}
            <footer className="bg-[#4A5568] text-white pb-8 sm:pb-12 md:pb-16 pt-16 sm:pt-24 md:pt-32">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
                        {/* Logo and Description */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="sm:col-span-2 md:col-span-1">
                                <Link href="/" className="group cursor-pointer">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                                            <Image
                                                src="/assets/ng-logo.png"
                                                alt="Logo"
                                                width={64}
                                                height={64}
                                                className="h-8 w-8 sm:h-10 sm:w-10 md:h-[64px] md:w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <span className="text-base sm:text-lg md:text-xl font-bold flex-1 leading-tight transition-colors duration-300 group-hover:text-green-300">Imo State Ministry of Lands, Survey, Housing and Urban Planning</span>
                                    </div>
                                </Link>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base hover:text-gray-200 transition-colors duration-300">
                                    Responsible for land administration, surveying and mapping, urban planning, and housing policy—issuing secure land titles and advancing digitization through IGIS for efficient, transparent services.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Quick Links */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 md:mb-6 text-white relative">
                                    Quick Links
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></div>
                                </h4>
                                <ul className="space-y-2 sm:space-y-3">
                                    <li><Link href="/projects" className="text-gray-300 hover:text-green-300 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base inline-block">Projects</Link></li>
                                    <li><Link href="/services" className="text-gray-300 hover:text-green-300 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base inline-block">Services</Link></li>
                                    <li><Link href="/department" className="text-gray-300 hover:text-green-300 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base inline-block">Department</Link></li>
                                    <li><Link href="/events" className="text-gray-300 hover:text-green-300 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base inline-block">Events</Link></li>
                                </ul>
                            </div>
                        </AnimatedEntrance>


                        {/* Newsletter Signup */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 md:mb-6 text-white">Signup to Our Newsletter</h4>
                                <form onSubmit={handleSubscribe} noValidate className="space-y-3 sm:space-y-4">
                                    <input
                                        type="email"
                                        name="newsletter-email"
                                        aria-invalid={Boolean(emailError)}
                                        aria-describedby={emailError ? 'newsletter-email-error' : undefined}
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder="Enter your email address"
                                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 border text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition-all duration-300 text-sm sm:text-base ${emailError ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-white/20 focus:ring-green-500 focus:border-green-500 focus:bg-white/15'}`}
                                    />
                                    {emailError && (
                                        <p id="newsletter-email-error" className="text-red-300 text-xs sm:text-sm">{emailError}</p>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`cursor-pointer w-full bg-green-500 hover:bg-green-600 hover:scale-105 active:scale-95 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                                    </button>
                                </form>
                                <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300 grid">
                                    <a href="tel:+2348035066722" className="hover:text-green-300 transition-colors duration-300 cursor-pointer">+234 803 506 6722</a>
                                    <a href="tel:+2348038704368" className="hover:text-green-300 transition-colors duration-300 cursor-pointer">+234 803 870 4368</a>
                                    <a href="mailto:info@landsurvey.im.gov" className="hover:text-green-300 transition-colors duration-300 cursor-pointer">info@landsurvey.im.gov</a>
                                    <p className="leading-relaxed hover:text-gray-200 transition-colors duration-300">
                                        Block 7, Imo State Secretariat, Port Harcourt Road, PMB 1532, Owerri, Imo State, Nigeria
                                    </p>
                                    <div className="flex space-x-4 mt-2">
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors duration-300 cursor-pointer">
                                            Facebook
                                        </a>
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors duration-300 cursor-pointer">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimatedEntrance>
                    </div>

                    <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN} delay={600}>
                        <div className="border-t border-gray-600 mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 md:pt-8 text-center">
                            <p className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors duration-300">Powered by <a href="https://imodigitalcity.com/" target="_blank" rel="noopener noreferrer" className="text-green-500 font-semibold hover:text-green-400 transition-colors duration-300">Imo Digital City</a></p>
                        </div>
                    </AnimatedEntrance>
                </div>
            </footer>
        </>
    )
}
