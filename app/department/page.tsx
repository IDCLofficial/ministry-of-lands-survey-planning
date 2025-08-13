import HeroSection from "@/components/HeroSection";
import TabContentSystem from "../components/TabContentSystem";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";

export default function Department() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.DEPARTMENT} />    

            {/* Main Content Section with Tab System */}
            <TabContentSystem 
                sidebarTitle="Our Departments"
                tabs={[
                    {
                        id: "land-administration",
                        label: "Land Administration",
                        content: {
                            title: "Department of Land Administration",
                            imageSrc: "/photos/DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.jpg",
                            imageAlt: "Department of Land Administration",
                            description: "The Department of Land Administration oversees all land-related matters in Imo State, ensuring transparent and efficient land management systems. The department is responsible for land allocation, title documentation, and the implementation of land policies in line with state regulations.",
                            additionalInfo: [
                                "Processing and issuance of Certificates of Occupancy (C-of-O)",
                                "Management of land allocation and leasehold administration",
                                "Verification of land titles and processing of land documents",
                                "Implementation of land use policies and regulations",
                                "Resolution of land disputes and boundary matters"
                            ]
                        }
                    },
                    {
                        id: "survey-mapping",
                        label: "Survey & Mapping",
                        content: {
                            title: "Department of Survey and Mapping",
                            imageSrc: "/photos/DPT - Chief Barr. Enyinna Victor Onuegbu, KSC.jpg",
                            imageAlt: "Department of Survey and Mapping",
                            description: "The Department of Survey and Mapping is responsible for conducting cadastral, topographical, and engineering surveys across Imo State. The department maintains accurate geospatial data and provides mapping services to support land administration and urban planning.",
                            additionalInfo: [
                                "Approval and verification of survey plans",
                                "Conducting boundary surveys and re-establishment of beacons",
                                "Production of topographical and cadastral maps",
                                "Provision of geospatial data for planning and development",
                                "Maintenance of survey records and control points"
                            ]
                        }
                    },
                    {
                        id: "urban-planning",
                        label: "Urban & Regional Planning",
                        content: {
                            title: "Department of Urban and Regional Planning",
                            imageSrc: "/photos/Urban DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.jpg",
                            imageAlt: "Department of Urban and Regional Planning",
                            description: "The Department of Urban and Regional Planning is responsible for the physical development and spatial organization of urban and rural areas in Imo State. The department formulates and implements policies for sustainable human settlements and infrastructure development.",
                            additionalInfo: [
                                "Preparation and implementation of physical development plans",
                                "Processing and approval of layout plans and building permits",
                                "Enforcement of urban development control regulations",
                                "Urban renewal and slum upgrading initiatives",
                                "Collaboration with local planning authorities"
                            ]
                        }
                    },
                    {
                        id: "housing-development",
                        label: "Housing Development",
                        content: {
                            title: "Department of Housing Development",
                            imageSrc: "/photos/Housing DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.jpg",
                            imageAlt: "Department of Housing Development",
                            description: "The Department of Housing Development formulates and implements housing policies and programs to meet the shelter needs of Imo State residents. The department promotes affordable housing delivery and public-private partnerships in the housing sector.",
                            additionalInfo: [
                                "Implementation of state housing policies and programs",
                                "Development of affordable housing schemes and estates",
                                "Facilitation of public-private partnerships in housing delivery",
                                "Regulation of housing standards and building materials",
                                "Coordination of housing finance and mortgage schemes"
                            ]
                        }
                    },
                    {
                        id: "development-control",
                        label: "Development Control",
                        content: {
                            title: "Department of Development Control",
                            imageSrc: "/photos/Development DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.jpg",
                            imageAlt: "Department of Development Control",
                            description: "The Department of Development Control ensures compliance with approved physical development plans and building regulations across Imo State. The department enforces development standards and monitors construction activities to maintain orderly urban growth.",
                            additionalInfo: [
                                "Enforcement of development control regulations and standards",
                                "Monitoring and control of building construction activities",
                                "Removal of illegal and non-conforming developments",
                                "Processing and approval of building plan applications",
                                "Public enlightenment on building regulations and standards"
                            ]
                        }
                    },
                    {
                        id: "documentation-records",
                        label: "Documentation & Records",
                        content: {
                            title: "Department of Documentation and Records",
                            imageSrc: "/photos/Documentation DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.jpg",
                            imageAlt: "Department of Documentation and Records",
                            description: "The Department of Documentation and Records is responsible for the proper keeping, maintenance, and retrieval of all land and housing records in Imo State. The department ensures the security and integrity of all official documents and facilitates efficient information management.",
                            additionalInfo: [
                                "Custody and management of land title documents",
                                "Digitization and archiving of land and housing records",
                                "Processing of requests for certified true copies of documents",
                                "Maintenance of an efficient records management system",
                                "Provision of search and retrieval services for land documents"
                            ]
                        }
                    },
                    {
                        id: "igis",
                        label: "IGIS Services",
                        content: {
                            title: "Imo Geographic Information Service (IGIS)",
                            imageSrc: "/photos/IGIS DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.png",
                            imageAlt: "Imo Geographic Information Service (IGIS)",
                            description: "The Imo Geographic Information Service (IGIS) is responsible for digitizing land records, managing geospatial data, and providing land registry services. Established under the Imo State Lands Administration and Geographic Information Service Law 2021, IGIS enhances transparency and efficiency in land administration.",
                            additionalInfo: [
                                "Digitization of land records and cadastral mapping",
                                "Online land title processing and verification",
                                "Geospatial data management and analysis",
                                "Land information system development and maintenance",
                                "Technical support for land administration processes"
                            ]
                        }
                    },
                    {
                        id: "legal-services",
                        label: "Legal Services",
                        content: {
                            title: "Department of Legal Services",
                            imageSrc: "/photos/Legal DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.jpg",
                            imageAlt: "Department of Legal Services",
                            description: "The Department of Legal Services provides legal advisory and support services to the Ministry on all land and housing matters. The department handles litigation, contract vetting, and ensures compliance with land administration laws and regulations in Imo State.",
                            additionalInfo: [
                                "Legal advisory services on land and housing matters",
                                "Drafting and vetting of legal documents and contracts",
                                "Representation of the ministry in court cases and disputes",
                                "Review and interpretation of land laws and regulations",
                                "Handling of land title disputes and litigation matters"
                            ]
                        }
                    },
                    {
                        id: "finance-accounts",
                        label: "Finance & Accounts",
                        content: {
                            title: "Department of Finance and Accounts",
                            imageSrc: "/photos/Finance DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.jpg",
                            imageAlt: "Department of Finance and Accounts",
                            description: "The Department of Finance and Accounts manages the financial resources of the Ministry, ensuring proper budgeting, accounting, and financial reporting. The department oversees revenue collection from land transactions and ensures compliance with financial regulations.",
                            additionalInfo: [
                                "Preparation and management of annual budgets",
                                "Processing of payments and financial transactions",
                                "Revenue collection and accounting for land-related fees",
                                "Financial reporting and audit coordination",
                                "Management of payroll and staff welfare matters"
                            ]
                        }
                    },
                    {
                        id: "admin-hr",
                        label: "Admin & HR",
                        content: {
                            title: "Department of Administration and Human Resources",
                            imageSrc: "/photos/Admin HR DPT - Imo State Ministry of Lands, Survey, Housing and Urban Planning.jpg",
                            imageAlt: "Department of Administration and Human Resources",
                            description: "The Department of Administration and Human Resources is responsible for the effective management of the Ministry's human capital and administrative functions. The department ensures smooth operations through efficient personnel management and administrative support services.",
                            additionalInfo: [
                                "Recruitment, training, and development of staff",
                                "Personnel management and welfare services",
                                "Office administration and general services",
                                "Staff discipline and performance management",
                                "Coordination of meetings and official correspondence"
                            ]
                        }
                    }
                ]}
            />
        </div>
    );
}
