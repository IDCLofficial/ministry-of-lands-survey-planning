import Image from "next/image";
import {
    FaRegEye, FaBullseye, FaEye, FaClipboardCheck, FaShieldHalved, FaUsers,
    FaBuilding, FaFileContract,
    FaChartLine, FaHouse, FaMapPin, FaFileSignature, FaLandmark, FaCity,
    FaTree
} from "react-icons/fa6";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                            <Image
                                src="/photos/About - MINISTRY OF LANDS, SURVEY & PHYSICAL PLANNING.jpg"
                                alt="Imo State Ministry of Lands, Survey, Housing and Urban Planning – Overview"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full md:h-full h-[400px] object-top object-cover hover:shadow-xl transition-shadow duration-300"
                            />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Imo State Ministry of Lands, Survey, Housing and Urban Planning is the statutory organ of government responsible for land administration, urban spatial planning, and the development of housing policy across the state. Guided by modern principles of transparency and accountability, the ministry plays a central role in facilitating equitable land distribution, surveying and mapping services, layout planning, and the issuance of secure land titles, such as Certificates of Occupancy.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    Working in collaboration with the Imo State Geographic Information Service (IGIS), the ministry is at the forefront of digitizing land records and modernizing land administration processes. Our comprehensive mandate encompasses land allocation, survey plan approvals, physical planning, development control, and the implementation of urban renewal initiatives across Imo State.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    Under the leadership of Chief Barr. Enyinna Victor Onuegbu, KSC, the ministry is committed to implementing Governor Hope Uzodinma&apos;s vision for transparent, efficient, and technology-driven land administration that supports sustainable development and enhances public confidence in the state&apos;s land management systems.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission & Core Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Our Guiding Principles</h2>
                        <div className="mt-4 h-1 w-24 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <FaRegEye className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To foster a transparent, efficient, and digitally enabled land management and urban planning system that supports sustainable development and public confidence in Imo State.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Mission Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <FaBullseye className="w-6 h-6 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    To administer land and property services with integrity—leveraging digital systems like Imo Land Information Service Centre (IMLISC) for land registration, C of O issuance, and urban planning guidance—while restoring trust and enhancing equitable access.
                                </p>
                                <h4 className="font-semibold text-gray-800 mt-4 mb-2">Our Core Objectives:</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Digitize and automate land administration processes through IGIS",
                                        "Ensure transparent and efficient land title registration and issuance",
                                        "Promote sustainable urban and regional planning",
                                        "Implement development control and building regulations",
                                        "Facilitate affordable housing initiatives",
                                        "Enhance revenue generation through efficient land use charge administration"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            </div>
                                            <span className="text-gray-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedEntrance>
                    </div>

                    {/* Core Values */}
                    <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={STAGGER_DELAYS.MEDIUM[2]}>
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Transparency", icon: <FaEye className="w-6 h-6 text-green-600" /> },
                                    { title: "Accountability", icon: <FaClipboardCheck className="w-6 h-6 text-green-600" /> },
                                    { title: "Peacebuilding", icon: <FaShieldHalved className="w-6 h-6 text-green-600" /> },
                                    { title: "Community Engagement", icon: <FaUsers className="w-6 h-6 text-green-600" /> },
                                    { title: "Sustainable Development", icon: <FaTree className="w-6 h-6 text-green-600" /> },
                                    { title: "Data-Driven Approach", icon: <FaChartLine className="w-6 h-6 text-green-600" /> }
                                ].map((value, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            {value.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedEntrance>
                </div>
            </section>

            {/* Commissioner Profile Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Chief Barr. Enyinna Victor Onuegbu, KSC
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Honourable Commissioner for Lands, Survey and Physical Planning
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Chief Barr. Enyinna Victor Onuegbu, KSC, serves as the Honourable Commissioner for Lands, Survey and Physical Planning in Imo State under the administration of His Excellency, Senator Hope Uzodinma. A distinguished legal practitioner and astute administrator, Barr. Onuegbu brings a wealth of experience in public service and governance to his role.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                Hailing from Umuokoro-Eziama in Ngor Okpala Local Government Area, Barr. Onuegbu is a respected community leader who holds the traditional title of Ebekuodike (Prime Minister) of his community. He is married to Magistrate Uche Onuegbu, and together they are blessed with four children. His career in public service has been marked by a strong commitment to due process, transparency, and the efficient delivery of government services to the people of Imo State.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image
                                src="/photos/Barr. Enyinnaya  Onuegbu Honorable Commiissioner for Lands, Survey and Physical Planning.jpeg"
                                alt="Chief Barr. Enyinna Victor Onuegbu, KSC – Honourable Commissioner for Lands, Survey and Physical Planning"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Core Services
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Land Administration */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaFileContract className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Land Administration
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Managing land allocation, registration, and documentation including issuance of Certificates of Occupancy and processing of land transactions with transparency and efficiency.
                            </p>
                        </div>

                        {/* Survey and Mapping */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaChartLine className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Survey and Mapping
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Providing professional surveying services, boundary demarcation, and maintaining accurate geospatial data through modern GIS technology.
                            </p>
                        </div>

                        {/* Urban Planning */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaBuilding className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Urban Planning
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Developing and implementing master plans, zoning regulations, and development control measures for sustainable urban growth.
                            </p>
                        </div>

                        {/* Housing Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaHouse className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Housing Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Facilitating affordable housing initiatives and implementing housing policies to meet the shelter needs of Imo State residents.
                            </p>
                        </div>

                        {/* Development Control */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <FaShieldHalved className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Development Control
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Regulating physical development through building plan approvals, compliance monitoring, and enforcement of planning standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Goals</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Lands, Survey, Housing and Urban Planning is committed to transforming land administration and urban development in Imo State through innovation, transparency, and efficient service delivery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Digitize 100% of land records through IGIS for transparent and efficient service delivery.",
                            "Issue 50,000 Certificates of Occupancy annually to property owners across Imo State.",
                            "Implement comprehensive urban renewal programs in Owerri, Orlu, and Okigwe.",
                            "Reduce land disputes by 60% through improved surveying and mapping services.",
                            "Achieve 80% automation of land administration processes within three years.",
                            "Develop and implement master plans for all major cities in Imo State.",
                            "Enhance public access to land information through online portals and mobile applications.",
                            "Train and certify 1,000 professionals in modern land administration practices.",
                            "Establish a one-stop-shop for all land-related services at the state secretariat.",
                            "Implement sustainable housing policies to address urban housing deficits."
                        ].map((goal, index) => (
                            <AnimatedEntrance
                                key={index}
                                {...ANIMATION_PRESETS.CARD_FADE_UP}
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet the dedicated leaders driving land administration, urban planning, and housing development in Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Honourable Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Barr. Enyinnaya  Onuegbu Honorable Commiissioner for Lands, Survey and Physical Planning.jpeg"
                                    alt="Barr. Enyinnaya  Onuegbu Honorable Commiissioner for Lands, Survey and Physical Planning"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Chief Barr. Enyinna Victor Onuegbu, KSC</h3>
                                <p className="text-green-700 font-medium mt-1">Honourable Commissioner</p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/OHIRI ANGELINA A PERMANENT SECRETARY (CD) MINISTRY OF LANDS, SURVEY & PHYSICAL PLANNING.jpeg"
                                    alt="OHIRI ANGELINA A PERMANENT SECRETARY (CD) MINISTRY OF LANDS, SURVEY & PHYSICAL PLANNING"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover object-top    "
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 capitalize">OHIRI ANGELINA A</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                                The Ministry of Lands, Survey, Housing and Urban Planning operates through a well-defined hierarchical structure designed to effectively manage land administration, urban planning, and housing development across Imo State. Our organizational setup ensures efficient service delivery, policy implementation, and coordination with relevant stakeholders in the built environment sector.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/photos/MINISTRY OF LANDS, SURVEY & PHYSICAL PLANNING..jpg"
                                alt="Ministry of Lands, Survey, Housing and Urban Planning - Organizational Structure"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Land Administration Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaLandmark className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Land Administration</h3>
                            <p className="text-sm text-gray-400">Manages land allocation, registration, and documentation including C of O issuance and land transactions.</p>
                        </div>

                        {/* Survey Department */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaMapPin className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Survey Department</h3>
                            <p className="text-sm text-gray-400">Responsible for land surveying, mapping, and maintaining geospatial data records.</p>
                        </div>

                        {/* Urban & Regional Planning */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaCity className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Urban & Regional Planning</h3>
                            <p className="text-sm text-gray-400">Handles physical planning, development control, and implementation of urban policies.</p>
                        </div>

                        {/* Housing Development */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaHouse className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Housing Development</h3>
                            <p className="text-sm text-gray-400">Oversees housing policies, programs, and initiatives for affordable housing delivery.</p>
                        </div>

                        {/* Development Control */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaClipboardCheck className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Development Control</h3>
                            <p className="text-sm text-gray-400">Ensures compliance with building regulations and approved development plans.</p>
                        </div>

                        {/* Documentation & Records */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaFileSignature className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Documentation & Records</h3>
                            <p className="text-sm text-gray-400">Manages land records, titles, and documentation in collaboration with IGIS.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
