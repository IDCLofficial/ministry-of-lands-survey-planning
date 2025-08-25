import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import { contentfulService } from "@/utils/contentful";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function FarmerEmpowermentProgram({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params;

    const blogData = await contentfulService.getBlogBySlug(id);

    if (!blogData) {
        notFound();
    }
    
    return (
        <div className="min-h-screen bg-white">
            {/* Featured Image */}
            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20">
                    <h1 className="md:text-4xl text-2xl font-extrabold text-gray-900 mb-6 capitalize">{blogData?.fields.title.toLowerCase()}</h1>
                    <div className="w-full h-fit relative rounded-lg overflow-hidden">
                        <Image
                            src={blogData?.fields.featuredImage?.fields.file.url ? `https:${blogData?.fields.featuredImage?.fields.file.url}` : "/assets/no-image-lg.jpg"}
                            alt="Industrial facility"
                            width={1000}
                            height={1000}
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Author Section */}
            {blogData?.fields.author?.fields?.name && <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="flex items-center gap-4">
                        <Image
                            src={blogData?.fields.author?.fields?.avatar?.fields?.file?.url ? `https:${blogData?.fields.author?.fields.avatar?.fields.file.url}` : "/assets/avatar.png"}
                            alt="Industrial facility"
                            width={100}
                            height={100}
                            className="rounded-full w-8 h-8"
                        />
                        <div>
                            <h2 className="font-bold text-gray-900">{blogData?.fields.author?.fields?.name}</h2>
                        </div>
                    </div>
                </div>
            </section>}

            {/* Article Content */}
            <section className="py-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-20">
                    <MarkdownRenderer content={blogData?.fields.fullNews || ''} />
                </div>
            </section>
        </div>
    );
}
