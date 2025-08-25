import Image from "next/image";
import Link from "next/link";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaCalendarAlt } from "react-icons/fa";
import { contentfulService } from "../utils/contentful";
import { Events } from "../utils/contentful/types";
import Pagination from "./Pagination";
import { slugify } from "@/utils";

interface TransformedEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  detailsUrl: string;
}
    
interface EventsSectionProps {
  page?: string;
}

const ministryId = process.env.NEXT_PUBLIC_MINISTRY_ID;

const transformEventsData = (events: Events[]): TransformedEvent[] => {
  return events.map((item) => ({
    id: item.sys.id,
    title: item.fields.eventName,
    description: item.fields.briefDescription || "No description available",
    date: new Date(item.fields.eventDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    location: item.fields.location || "Location TBA",
    imageUrl: item.fields.bannerImage?.fields?.file?.url ? `https:${item.fields.bannerImage.fields.file.url}` : "https://i.pravatar.cc/400?u=event",
    detailsUrl: `/${slugify(item.fields.eventName)}?id=${item.sys.id}`
  }));
};

const fetchEvents = async (page: number = 1): Promise<TransformedEvent[]> => {
  try {
    if (!ministryId) {
      console.error('Ministry ID not found');
      return [];
    }

    const eventsData = await contentfulService.getEventsByMinistryId(ministryId, page);
    
    if (!eventsData || eventsData.length === 0) {
      return [];
    }

    const transformedEvents = transformEventsData(eventsData);
    return transformedEvents;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};


const getEventCount = async (ministryId?: string): Promise<number> => {
  try {
    if (!ministryId) {
      console.error('Ministry ID not found');
      return 0;
    }
    const count = await contentfulService.getEventCountByMinistryId(ministryId);
    return count;
  } catch (error) {
    console.error('Error fetching event count:', error);
    return 0;
  }
};

const EmptyState: React.FC = () => {
  return (
    <div className="">
      <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
        <div className="bg-white rounded-lg p-8 text-center border border-slate-200 shadow-sm">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <FaCalendarAlt className="text-green-600" size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Upcoming Events</h3>
          <p className="text-gray-600 mb-6">
            There are currently no upcoming events scheduled for this ministry. New events will appear here as they become available.
          </p>
          <Link href="/events" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-300">
            View All Events
          </Link>
        </div>
      </AnimatedEntrance>
    </div>
  );
};

// const ErrorState: React.FC<{ onRetry: () => void }> = ({ onRetry }) => {
//   return (
//     <div className="">
//       <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
//         <div className="bg-white rounded-lg p-8 text-center border border-red-200 shadow-sm">
//           <div className="flex justify-center mb-4">
//             <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
//               <FaCalendarAlt className="text-red-600" size={32} />
//             </div>
//           </div>
//           <h3 className="text-xl font-bold text-gray-900 mb-2">Error Loading Events</h3>
//           <p className="text-gray-600 mb-6">
//             We encountered an error while loading the events. Please try again.
//           </p>
//           <button 
//             onClick={onRetry}
//             className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-300"
//           >
//             Try Again
//           </button>
//         </div>
//       </AnimatedEntrance>
//     </div>
//   );
// };

export default async function EventsSection({ page = "1" }: EventsSectionProps) {
  const events = await fetchEvents(parseInt(page));
  const eventCount = await getEventCount(ministryId);

  const hasEvents = events && events.length > 0;



  return (
    <> 
        {hasEvents ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <EventCard 
                  key={event.id} 
                  event={event} 
                  index={index}
                />
              ))}
            </div>
            {eventCount > 10 && (
              <Pagination
                pageSize={10}
                totalCount={eventCount}
                showFirstLast={false}
                siblingCount={2}
                className="mt-8 w-full"
                currentPage={parseInt(page)}
                type="events"
              />
            )}
          </>
        ) : (
          <EmptyState />
        )}
      </>
    
  );
}

interface EventCardProps {
  event: TransformedEvent;
  index: number;
}

function EventCard({ event, index }: EventCardProps) {
  const cardContent = (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48">
        <Image
          src={event.imageUrl}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {event.description}
        </p>
        <div className="space-y-2 text-sm mb-4">
          <div className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            {event.date}
          </div>
          <div className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            {event.location}
          </div>
        </div>
        <Link href={`/events/${event.detailsUrl}`} className="block w-full">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );

  // Use AnimatedEntrance for first 6 cards
  if (index < 6) {
    return (
      <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[index]}>
        {cardContent}
      </AnimatedEntrance>
    );
  }

  return cardContent;
}
