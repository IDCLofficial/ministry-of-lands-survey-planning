import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS } from "../utils/constants/animations";
import MediaGallery from "./MediaGallery";
import EmptyState from "./EmptyState";
import { contentfulService } from "@/utils/contentful";
import { Media } from "@/utils/contentful/types";

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
}

const ministryId = process.env.NEXT_PUBLIC_MINISTRY_ID;

const fetchEvents = async (page: number = 1): Promise<MediaItem[]> => {
  try {
    if (!ministryId) {
      console.error('Ministry ID not found');
      return [];
    }

    const mediaData = await contentfulService.getMediaByMinistryId(ministryId, page);
    
    if (!mediaData || mediaData.length === 0) {
      return [];
    }

    const transformedEvents = transformMediaData(mediaData);
    return transformedEvents;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

const fetchMediaCount = async (): Promise<number> => {
  try {
    if (!ministryId) {
      console.error('Ministry ID not found');
      return 0;
    }

    const mediaCount = await contentfulService.getMediaCountByMinistryId(ministryId);
    return mediaCount;
  } catch (error) {
    console.error('Error fetching media count:', error);
    return 0;
  }
};

const transformMediaData = (mediaData: Media[]): MediaItem[] => {
  return mediaData.map((item) => ({
    id: item.sys.id,
    type: item.fields.img.isVideo ? 'video' : 'image',
    src: `https:${item.fields.img.fields.file.url}`,
    alt: item.fields.img.fields.file.fileName,
    title: item.fields.title,
  }));
};

export default async function MediaSection({ currentlyViewing, page }: { currentlyViewing: string, page: string }) {
  const mediaItems: MediaItem[] = await fetchEvents(parseInt(page));
  const mediaCount = await fetchMediaCount();
  const hasMedia = mediaItems && mediaItems.length > 0;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Media Gallery
          </h2>
        </AnimatedEntrance>

        {hasMedia ? (
          <MediaGallery page={parseInt(page)} mediaItems={mediaItems} currentlyViewing={currentlyViewing} mediaCount={mediaCount} />
        ) : (
          <EmptyState type={mediaCount ? "page-no-content" : "no-content"} />
        )}
      </div>
    </section>
  );
}