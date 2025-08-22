import Image from "next/image";
import StatisticsSection from "../components/StatisticsSection";
import HeroSection from "../components/HeroSection";
import AnimatedEntrance from "../components/AnimatedEntrance";
import { HOME_STATISTICS } from "../utils/constants/statistics";
import { HERO_CONFIGS } from "../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaLightbulb, FaHandsHolding, FaUsers } from "react-icons/fa6";
import Link from "next/link";
import CustomImage from "./components/CustomImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Hero Section */}
      <HeroSection {...HERO_CONFIGS.HOME}>
        <Link href="/about">
            <button className="bg-white/90 hover:bg-white text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium active:scale-95 transition-colors">
            Learn About Us
            </button>
          </Link>
      </HeroSection>

      {/* Statistics Section */}
      <StatisticsSection statistics={HOME_STATISTICS} />

      {/* Ministry Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                <Image
                  src="/photos/Chief Barr. Enyinna Victor Onuegbu, KSC and His Excellency, Senator (Dr.) Hope Uzodimma CON GSSRS.jpg"
                  alt="Imo State Ministry of Lands, Survey, Housing and Urban Planning – Overview"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
                />
            </AnimatedEntrance>
            <div className="grid gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Welcome to the Ministry of Lands, Survey, Housing and Urban Planning
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  The Imo State Ministry of Lands, Survey, Housing and Urban Planning is the statutory organ of government responsible for land administration, urban spatial planning, and the development of housing policy across the state. Guided by modern principles of transparency and accountability, the ministry plays a central role in facilitating equitable land distribution, surveying and mapping services, layout planning, and the issuance of secure land titles, such as Certificates of Occupancy.
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <Link href="/services">
                  <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer w-fit text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                    Learn More About Our Services
                  </button>
                </Link>
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Commissioner Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-32 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  A Message from the Honorable Commissioner
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Chief Barr. Enyinna Victor Onuegbu, KSC</h3>
                <p className="text-gray-600 text-sm mb-4">Honourable Commissioner for Lands, Survey, Housing and Urban Planning</p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Under the visionary leadership of His Excellency, Senator Hope Uzodinma, we are committed to transforming land administration in Imo State through transparency, efficiency, and digital innovation. Our focus remains on simplifying land transactions, ensuring secure land titles, and promoting sustainable urban development that benefits all Imolites.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  As your Commissioner, I am dedicated to eliminating irregularities in land administration and restoring public trust in our systems. Through the Imo Geographic Information Service (IGIS), we are digitizing land records to ensure efficient service delivery and eliminate fraud. Our goal is to make land transactions seamless, transparent, and accessible to all citizens.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  I invite all citizens, investors, and development partners to work with us in building a modern, well-planned Imo State. Together, we can create sustainable communities and unlock the full potential of our land resources for the benefit of present and future generations.
                </p>
              </AnimatedEntrance>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP}>
                  <Image
                    src="/photos/Chief Barr. Enyinna Victor Onuegbu, KSC in Office.jpg"
                    alt="Chief Barr. Enyinna Victor Onuegbu, KSC – Honourable Commissioner for Lands, Survey, Housing and Urban Planning"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
              Delivering efficient and transparent land administration, urban planning, and housing development services to the people of Imo State through innovation and digital transformation
            </p>
          </AnimatedEntrance>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* SkillUp Imo Digital */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaLightbulb size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Land Administration</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Managing land resources through transparent processes for title issuance, land allocation, and property registration
                </p>
                <Link href="/projects" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* MSME Employment Initiative */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaHandsHolding size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Survey & Mapping</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Providing accurate geospatial data, survey plans, and boundary demarcation services for proper land management
                </p>
                <Link href="/projects" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* Cooperative Labour Scheme */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaUsers size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Urban Planning</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Guiding sustainable urban development through master planning, development control, and building regulations
                </p>
                <Link href="/projects" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
            {/* Industrial Relations Reform */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaHandsHolding size="1.75em" className="text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Housing Development</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-grow">
                  Promoting affordable housing solutions and implementing sustainable housing policies across Imo State
                </p>
                <Link href="/services" className="text-green-600 font-medium text-xs sm:text-sm hover:text-green-700 transition-colors inline-block">
                  Learn More →
                </Link>
              </div>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {/* <LatestNews /> */}

      {/* Our Partners Section */}
      <section className="py-8 sm:py-12 md:py-16 relative bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/pattern.svg"
            alt="Background Pattern"
            width={1440}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-20 relative z-10">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our Key Partners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              Collaborating with government agencies, professional bodies, and development partners to deliver efficient land administration and urban development services across Imo State
            </p>
          </AnimatedEntrance>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            {[{ name: 'Imo Geographic Information Service (IGIS)', logo: '/photos/Imo Geographic Information Service (IGIS).avif' },
              { name: 'Imo Housing Corporation', logo: '/photos/Imo Housing Corporation.jpg' },
              { name: 'OCDA', logo: '/photos/OCDA.png' },
              { name: 'Ministry of Works', logo: '/assets/ng-logo.png' },
              { name: 'NITP', logo: '/photos/NITP.png' },
            ].map((partner, index) => (
              <AnimatedEntrance
                key={partner.name}
                {...ANIMATION_PRESETS.CARD_FADE_UP}
                delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                className="flex items-stretch justify-center"
              >
                <div className="text-center w-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300 cursor-pointer h-24">
                  <div className="bg-white p-2 rounded-lg shadow-sm w-24 sm:w-32 md:w-40 h-full">
                    <CustomImage
                      src={partner.logo}
                      alt={`Partner ${partner.name}`}
                      width={100}
                      title={`Partner ${partner.name}`}
                      height={60}
                      className="w-auto h-full object-contain mx-auto"
                    />
                  </div>
                </div>
              </AnimatedEntrance>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
