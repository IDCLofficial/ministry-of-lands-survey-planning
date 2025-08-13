"use client";

import { useState } from "react";
import Image from "next/image";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import AnimatedEntrance from "@/components/AnimatedEntrance";

interface TabItem {
    id: string;
    label: string;
    content: {
        title: string;
        imageSrc: string;
        imageAlt: string;
        description: string;
        additionalInfo?: string[];
    };
}

interface TabContentSystemProps {
    tabs: TabItem[];
    sidebarTitle: string;
    className?: string;
}

export default function TabContentSystem({ tabs, className = "" }: TabContentSystemProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

    return (
        <section className={`py-12 md:py-16 ${className}`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Tabs */}
                    <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                        <div className="w-full md:w-64 flex-shrink-0">
                            <div className="border border-gray-200">
                                <ul className="">
                                    {tabs.map((tab) => (
                                        <li 
                                            key={tab.id}
                                            className={`cursor-pointer transition-colors p-4 ${
                                                activeTab === tab.id 
                                                    ? "text-white font-medium bg-green-600" 
                                                    : "text-gray-700 hover:text-green-600"
                                            }`}
                                            onClick={() => handleTabClick(tab.id)}
                                        >
                                            {tab.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </AnimatedEntrance>

                    {/* Main Content */}
                    {activeContent && (
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]} key={activeTab}>
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">{activeContent.title}</h2>
                                <div className="mb-8">
                                    <div className="w-full h-[400px] md:h-[420px] relative rounded-lg overflow-hidden mb-6">
                                        <Image 
                                            src={activeContent.imageSrc}
                                            alt={activeContent.imageAlt}
                                            fill
                                            className="object-cover object-top"
                                        />
                                    </div>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        {activeContent.description}
                                    </p>
                                    {activeContent.additionalInfo && activeContent.additionalInfo.length > 0 && (
                                        <div className="mt-6">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Functions:</h3>
                                            <ul className="space-y-2">
                                                {activeContent.additionalInfo.map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-green-600 mr-2 mt-1">•</span>
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AnimatedEntrance>
                    )}
                </div>
            </div>
        </section>
    );
}
