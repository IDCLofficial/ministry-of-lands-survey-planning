import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import { contentfulService } from "@/utils/contentful";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ id?: string }>;
}

export default async function ProjectDetail({ params, searchParams }: PageProps) {
    const { slug } = await params;
    const { id } = await searchParams;

    if (!id) {
        notFound();
    }

    const projectData = await contentfulService.getProjectById(id);

    if (!projectData) {
        notFound();
    }

    const formatDate = (dateString: string) => {
        if (!dateString) return 'Not specified';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getStatusColor = (status: string) => {
        return status === 'Ongoing' ? 'text-green-600' : 'text-gray-600';
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Featured Image */}
            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20">
                    <h1 className="md:text-4xl text-2xl font-extrabold text-gray-900 mb-6">
                        {projectData?.fields.projectTitle}
                    </h1>
                    <div className="w-full h-fit relative rounded-lg overflow-hidden">
                        <Image
                            src={projectData?.fields.projectImage?.fields.file.url 
                                ? `https:${projectData?.fields.projectImage?.fields.file.url}` 
                                : "/assets/no-image-lg.jpg"}
                            alt={projectData?.fields.projectTitle || "Project image"}
                            width={1000}
                            height={600}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Project Details Section */}
            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Start Date</h3>
                            <p className="text-gray-600">{formatDate(projectData?.fields.startDate || '')}</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">End Date</h3>
                            <p className="text-gray-600">{formatDate(projectData?.fields.proposedEndDate || '')}</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-gray-900 mb-2">Status</h3>
                            <div className="flex items-center">
                                <span className={`w-2 h-2 rounded-full mr-2 ${
                                    new Date(projectData?.fields.proposedEndDate || '').getTime() > new Date().getTime() 
                                        ? 'bg-green-500' 
                                        : 'bg-gray-500'
                                }`}></span>
                                <span className={getStatusColor(
                                    new Date(projectData?.fields.proposedEndDate || '').getTime() > new Date().getTime() 
                                        ? 'Ongoing' 
                                        : 'Completed'
                                )}>
                                    {new Date(projectData?.fields.proposedEndDate || '').getTime() > new Date().getTime() 
                                        ? 'Ongoing' 
                                        : 'Completed'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Partners Section */}
                    {projectData?.fields.partners && projectData.fields.partners.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Partners</h3>
                            <div className="flex flex-wrap gap-2">
                                {projectData.fields.partners.map((partner, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                                    >
                                        {partner.fields.title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Project Description */}
            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Description</h2>
                    <MarkdownRenderer content={projectData?.fields.projectDescription || ''} />
                </div>
            </section>
        </div>
    );
}