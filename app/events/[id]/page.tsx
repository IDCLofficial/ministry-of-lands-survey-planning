import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import AnimatedEntrance from "@/components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "@/utils/constants/animations";
import { contentfulService } from "@/utils/contentful";
import { Events } from "@/utils/contentful/types";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import { getRelativeTime } from "@/utils";
import Link from "next/link";

// Hardcoded Imo Economic Summit 2025 event data
const HARDCODED_EVENT_DATA: Events = {
    sys: {
        id: 'imo-economic-summit-2025'
    },
    fields: {
        eventName: 'Imo Economic Summit 2025',
        briefDescription: 'A powerful gathering of leaders, investors, and visionaries ready to unlock new opportunities for growth and innovation.',
        fullDescription: `## About the Summit\n\nOn December 4–5, Imo State will host a powerful gathering of leaders, investors, and visionaries ready to unlock new opportunities for growth and innovation.\n\nFrom digital transformation to agriculture, education, energy, and youth empowerment, this summit is where ideas meet investment — and where the future of Imo's economy takes shape.\n\n## Key Focus Areas\n\n- **Digital Transformation**: Leveraging technology for economic growth\n- **Agriculture**: Modernizing farming and agribusiness\n- **Education**: Building skills for tomorrow's workforce\n- **Energy**: Sustainable power solutions\n- **Youth Empowerment**: Creating opportunities for the next generation\n\n## Contact Information\n\nFor more information, please contact us at info@imoeconomicsummit.com\n\nLet's shape Imo's tomorrow, together. 💪`,
        eventDate: '2025-12-04T09:00:00.000Z',
        location: 'Owerri, Imo State',
        contactPhoneNumber: '+234 803 610 1044',
        bannerImage: {
            fields: {
                file: {
                    url: '/event-imo.jpeg'
                }
            }
        } as unknown,
        ministry: {
            fields: {
                ministryName: 'Ministry of Lands, Survey and Planning'
            }
        } as unknown
    }
} as Events;

interface PageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const getEventData = async (id: string): Promise<Events | null> => {
    try {
        // Check if this is the hardcoded event
        if (id === 'imo-economic-summit-2025') {
            return HARDCODED_EVENT_DATA;
        }
        
        const event = await contentfulService.getEventById(id);
        return event;
    } catch (error) {
        console.error('Error fetching event:', error);
        return null;
    }
};


const buildImageUrl = (imageField: Events["fields"]["firstSpeakerPicture"]): string | null => {
    const url = imageField?.fields?.file?.url;
    if (url && url.startsWith('/') && !url.startsWith('//')) {
        return url;
    }
    return url ? `https:${url}` : null;
};

const EventDetails = ({ event }: { event: Events }) => {
    const eventDate = getRelativeTime(event.fields.eventDate);

    const details = [
        {
            label: 'DATE:',
            value: eventDate,
            show: true
        },
        {
            label: 'PHONE:',
            value: event.fields.contactPhoneNumber,
            show: !!event.fields.contactPhoneNumber
        },
        {
            label: 'LOCATION:',
            value: event.fields.location,
            show: !!event.fields.location
        },
        {
            label: 'ORGANIZER:',
            value: event.fields.ministry?.fields?.ministryName || 'Ministry',
            show: !!event.fields.ministry
        }
    ].filter(detail => detail.show);

    return (
        <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN} delay={STAGGER_DELAYS.MEDIUM[2]}>
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">EVENT DETAILS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {details.map((detail) => {
                            const isPhone = detail.label === 'PHONE:';
                            
                            return (
                                <div key={detail.label}>
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                        {detail.label}
                                    </h3>
                                    {isPhone ? (
                                        <Link 
                                            href={`tel:${detail.value}`} 
                                            className="text-gray-900 hover:text-green-600 transition-colors underline"
                                        >
                                            {detail.value}
                                        </Link>
                                    ) : (
                                        <p className="text-gray-900">{detail.value}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </AnimatedEntrance>
    );
};

const SpeakerCard = ({
    speaker,
    imageUrl,
    delay
}: {
    speaker: string;
    imageUrl: string | null;
    delay: number;
}) => (
    <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={delay}>
        <div className="text-center hover:shadow-lg transition-shadow duration-300">
            {imageUrl && (
                <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                    <Image
                        src={imageUrl}
                        alt={speaker}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                </div>
            )}
            <p className="text-sm text-gray-600 mb-1">Speaker</p>
            <h3 className="text-lg font-bold text-gray-900">{speaker}</h3>
        </div>
    </AnimatedEntrance>
);

const SpeakersSection = ({ event }: { event: Events }) => {
    const firstSpeakerImageUrl = buildImageUrl(event.fields.firstSpeakerPicture);
    const secondSpeakerImageUrl = buildImageUrl(event.fields.secondSpeakerPicture);

    const speakers = [
        {
            name: event.fields.firstSpeaker,
            imageUrl: firstSpeakerImageUrl,
            show: !!event.fields.firstSpeaker
        },
        {
            name: event.fields.secondSpeaker,
            imageUrl: secondSpeakerImageUrl,
            show: !!event.fields.secondSpeaker
        }
    ].filter(speaker => speaker.show);

    if (speakers.length === 0) return null;

    return (
        <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN} delay={STAGGER_DELAYS.MEDIUM[3]}>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">SPEAKERS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                        {speakers.map((speaker, index) => (
                            <SpeakerCard
                                key={speaker.name}
                                speaker={speaker.name || "Speaker"}
                                imageUrl={speaker.imageUrl}
                                delay={STAGGER_DELAYS.MEDIUM[index]}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedEntrance>
    );
};

const EventContent = ({ event }: { event: Events }) => {
    const bannerImageUrl = buildImageUrl(event.fields.bannerImage) || "/hero_section.png";

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
                    <div className="absolute inset-0">
                        <Image
                            src={bannerImageUrl}
                            alt={event.fields.eventName || 'Event banner'}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-50 z-10" />
                    </div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 flex items-center h-full">
                        <div className="max-w-8xl px-4 sm:px-6 lg:px-20">
                            <div className="max-w-7xl">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                                    {event.fields.eventName}
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Event Image Section */}
            {bannerImageUrl && bannerImageUrl !== "/hero_section.png" && (
                <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_ZOOM_IN} delay={STAGGER_DELAYS.MEDIUM[0]}>
                    <section className="py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                            <div className="w-full md:max-h-[70vh] max-h-[50vh] relative rounded-lg overflow-hidden">
                                <Image
                                    src={bannerImageUrl}
                                    alt={event.fields.eventName || 'Event image'}
                                    width={1000}
                                    height={1000}
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                        </div>
                    </section>
                </AnimatedEntrance>
            )}

            {/* Event Description */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN} delay={STAGGER_DELAYS.MEDIUM[1]}>
                <section className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        {event.fields.briefDescription && (
                            <div className="prose max-w-none mb-8">
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {event.fields.briefDescription}
                                </p>
                            </div>
                        )}

                        {event.fields.fullDescription && (
                            <MarkdownRenderer content={event.fields.fullDescription} />
                        )}
                    </div>
                </section>
            </AnimatedEntrance>

            <EventDetails event={event} />
            <SpeakersSection event={event} />
        </div>
    );
};

const LoadingState = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Loading */}
            <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] bg-gray-200 animate-pulse">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="relative z-10 flex items-center h-full">
                    <div className="max-w-8xl px-4 sm:px-6 lg:px-20">
                        <div className="max-w-7xl">
                            <div className="h-12 bg-gray-400 rounded mb-4 w-3/4"></div>
                            <div className="h-6 bg-gray-400 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Loading */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
                <div className="space-y-8">
                    <div className="w-full h-80 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default async function EventDetailPage({ params, searchParams }: PageProps) {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;

    // Extract and validate event ID
    const eventIdFromParams = resolvedParams.id;
    const eventIdFromSearch = typeof resolvedSearchParams.id === 'string'
        ? resolvedSearchParams.id
        : Array.isArray(resolvedSearchParams.id)
            ? resolvedSearchParams.id[0]
            : undefined;

    const actualEventId = eventIdFromSearch || eventIdFromParams;

    if (!actualEventId) {
        notFound();
    }

    const event = await getEventData(actualEventId);

    if (!event) {
        notFound();
    }

    return (
        <Suspense fallback={<LoadingState />}>
            <EventContent event={event} />
        </Suspense>
    );
}