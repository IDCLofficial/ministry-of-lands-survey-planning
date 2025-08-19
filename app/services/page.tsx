import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import { FaUsers, FaShieldHalved, FaLeaf, FaHandshake } from 'react-icons/fa6';
import { FaHandsHelping } from 'react-icons/fa';

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.SERVICES} />

            {/* Main Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Lands, Survey, Housing and Urban Planning provides comprehensive land administration, surveying, and urban planning services to support sustainable development in Imo State.
                        </p>
                    </AnimatedEntrance>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 - Land Administration */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaUsers className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Land Administration
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We provide comprehensive land administration services including title issuance, land allocation, and ownership verification to ensure secure land tenure in Imo State.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Issuance of Certificate of Occupancy
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Processing of land allocations
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Title verification services
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 2 - Survey and Mapping */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaShieldHalved className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Survey and Mapping
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Professional surveying and mapping services to support land administration, urban planning, and infrastructure development across Imo State.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Survey plan approval
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Geospatial mapping services
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Boundary demarcation
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 3 - Physical & Urban Planning */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[4]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaLeaf className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Physical & Urban Planning
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Comprehensive urban planning services to guide sustainable development and organized growth across Imo State&apos;s urban and rural areas.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Development control
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Building permit approvals
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Urban renewal programs
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 4 - Land Use Charge & Revenue */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[5]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaHandsHelping className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Land Use Charge & Revenue
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Efficient collection of land use charges and other revenue streams to support infrastructure development and public services in Imo State.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Land use charge computation
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Online payment processing
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Revenue reconciliation
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 5 - Digital Land Services (IGIS) */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <FaHandshake className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Digital Land Services (IGIS)
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Modern digital solutions for land administration through the Imo Geographic Information Service (IGIS) for efficient and transparent service delivery.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Digital land registry
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Online land applications
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Geospatial database services
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>
                    </div>
                </div>
            </section>
        </div>
    );
}
