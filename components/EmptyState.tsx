import Link from "next/link";
import { FaImages } from "react-icons/fa6";
import { MdOutlineFindInPage } from "react-icons/md";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS } from "../utils/constants/animations";

interface EmptyStateProps {
    type?: "no-content" | "page-no-content";
    btnLink?: string;
}

export default function EmptyState({ type = "no-content", btnLink = "/media" }: EmptyStateProps) {
    const config = {
        "no-content": {
            title: "No Media Available",
            description:
                "There are currently no media items available. Please check back later for updates.",
            icon: <FaImages className="text-green-600" size={32} />,
            bg: "bg-green-100",
            btnText: "Return to Homepage",
            btnLink,
        },
        "page-no-content": {
            title: "No Content on This Page",
            description:
                "Looks like this page has no media to show. Try going back or browsing other pages.",
            icon: <MdOutlineFindInPage className="text-green-600" size={32} />,
            bg: "bg-green-100",
            btnText: "Go to First Page",
            btnLink,
        },
    };

    const { title, description, icon, bg, btnText, btnLink: btnLinkConfig } = config[type];

    return (
        <div>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
                <div className="bg-white rounded-lg p-8 text-center border border-slate-200 shadow-sm">
                    <div className="flex justify-center mb-4">
                        <div className={`w-20 h-20 rounded-full ${bg} flex items-center justify-center`}>
                            {icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-6">{description}</p>
                    <Link
                        href={btnLinkConfig}
                        className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors duration-300"
                    >
                        {btnText}
                    </Link>
                </div>
            </AnimatedEntrance>
        </div>
    );
}
