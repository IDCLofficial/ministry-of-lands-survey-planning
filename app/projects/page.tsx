import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import Image from "next/image";

// Special Projects
const SPECIAL_PROJECTS = [
    {
        number: 1,
        title: "Land Titling & Regularization Program",
        description: "A comprehensive initiative to issue Certificates of Occupancy and regularize land titles across Imo State, bringing more properties into the formal land administration system.",
        location: "Statewide Implementation",
        category: "Land Administration",
        status: "Ongoing",
        partners: "IGIS, Local Government Areas, Traditional Rulers"
    },
    {
        number: 2,
        title: "Digital Land Registry Implementation",
        description: "Modernization of land records through the Imo Geographic Information Service (IGIS) for efficient land administration and transparent service delivery.",
        location: "Imo State Secretariat, Owerri",
        category: "Digital Transformation",
        status: "Active",
        partners: "IGIS, Ministry of Digital Economy"
    },
    {
        number: 3,
        title: "Urban Renewal & Slum Upgrading Initiative",
        description: "Comprehensive urban renewal program focusing on infrastructure development, slum upgrading, and improved urban planning in major cities across Imo State.",
        location: "Owerri, Orlu, Okigwe",
        category: "Urban Development",
        status: "Ongoing",
        partners: "Owerri Capital Development Authority, Local Communities"
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="bg-white" />
            
            {/* Projects Description */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Initiatives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore our key projects and initiatives aimed at modernizing land administration, enhancing urban development, 
                            and providing efficient services to the people of Imo State. Each project reflects our commitment to transparency, 
                            digital transformation, and sustainable development in land management and urban planning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Updates</h3>
                        <p className="text-gray-600 mb-6">
                            Stay informed about our ongoing and upcoming initiatives in land administration, urban planning, and housing development 
                            across Imo State. Each project is designed to enhance service delivery and promote sustainable development in our communities.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
                            <li>Land titling and regularization programs</li>
                            <li>Digital transformation of land records</li>
                            <li>Urban renewal and slum upgrading initiatives</li>
                            <li>Infrastructure development projects</li>
                            <li>Stakeholder engagement and capacity building</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SPECIAL_PROJECTS.map((project, index) => (
                            <AnimatedEntrance 
                                key={project.number} 
                                {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                            >
                                <div className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                    <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={'/assets/no-image-lg.jpg'}
                                            alt={project.title}
                                            width={400}
                                            height={200}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {project.title}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                project.status === "Active" ? "bg-blue-100 text-blue-800" :
                                                project.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                                                project.status === "Completed" ? "bg-green-100 text-green-800" :
                                                project.status === "Ongoing" ? "bg-orange-100 text-orange-800" :
                                                "bg-gray-100 text-gray-800"
                                            }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        
                                        <div className="space-y-3 text-sm border-t border-gray-100 pt-4 mt-4">
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Location:</span>
                                                <span className="text-gray-900">{project.location}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Category:</span>
                                                <span className="text-gray-900">{project.category}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="text-gray-600 w-24 flex-shrink-0">Partners:</span>
                                                <span className="text-gray-900">{project.partners}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <div className="flex items-center text-sm text-green-600">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">
                            For the latest updates, follow us on our social media platforms or check back regularly.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <FaFacebookF className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                <span className="sr-only">X (Twitter)</span>
                                <FaXTwitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
