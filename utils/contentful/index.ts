import client from './client';
import { NewsPost, Ministry, Media, Events, Project, Category } from './types';


class ContentfulService {
  // Fetch all ministries
  async getMinistries(): Promise<Ministry[]> {
    try {
      const response = await client.getEntries({
        content_type: 'ministry',
        order: ['fields.ministryName'],
      });

      return response.items as unknown as Ministry[];
    } catch (error) {
      console.error('Error fetching ministries:', error);
      return [];
    }
  }

  async getBlogsByMinistry(ministryId: string, page: number = 1): Promise<NewsPost[]> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.ministry.sys.id': ministryId,
        order: ['-sys.createdAt'],
        include: 2,
        skip: (page - 1) * 10,
        limit: 10,
      });

      return response.items as unknown as NewsPost[];
    } catch (error) {
      console.error('Error fetching blogs by ministry:', error);
      return [];
    }
  }

  // Fetch the total number of blogs by ministry
  async getBlogCountByMinistry(ministryId: string): Promise<number> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.ministry.sys.id': ministryId,
        select: ['sys.id'],
      });
  
      return response.total; // total count from Contentful
    } catch (error) {
      console.error('Error fetching blog count by ministry:', error);
      return 0;
    }
  }

  async getBlogCountByCategoryId(categoryId: string, ministryId: string): Promise<number> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.ministry.sys.id': ministryId,
        'fields.category.sys.id': categoryId,
        select: ['sys.id'],
      });
  
      return response.total; // total count from Contentful
    } catch (error) {
      console.error('Error fetching blog count by category id:', error);
      return 0;
    }
  }
  

  async getBlogByMinistrySlug(slug: string): Promise<NewsPost | null> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.ministry.fields.slug': slug,
        include: 2,
        limit: 1,
      });

      return response.items[0] as unknown as NewsPost || null;
    } catch (error) {
      console.error('Error fetching blog by ministry slug:', error);
      return null;
    }
  }

  // Fetch all blogs
  async getAllBlogs(): Promise<NewsPost[]> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        order: ['-sys.createdAt'],
        include: 2,
      });

      return response.items as unknown as NewsPost[];
    } catch (error) {
      console.error('Error fetching all blogs:', error);
      return [];
    }
  }

  // Fetch blog titles for suggestions
  async getBlogTitlesAndSlugsByMinistryId(ministryId: string): Promise<{ title: string; slug: string }[]> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': ministryId,
        select: ['fields.title', 'fields.slug'],
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return response.items.map((item: any) => ({
        title: item.fields.title,
        slug: item.fields.slug
      }));
    } catch (error) {
      console.error('Error fetching blog titles:', error);
      return [];
    }
  }

  // Fetch a single blog post by slug
  async getBlogBySlug(slug: string): Promise<NewsPost | null> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.slug': slug,
        include: 2,
        limit: 1,
      });

      return response.items[0] as unknown as NewsPost || null;
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      return null;
    }
  }
  // Fetch a single blog post by slug
  async getBlogById(id: string): Promise<NewsPost | null> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'sys.id': id,
        include: 2,
        limit: 1,
      });

      return response.items[0] as unknown as NewsPost || null;
    } catch (error) {
      console.error('Error fetching blog by id:', error);
      return null;
    }
  }

  // Fetch a ministry by slug
  async getMinistryBySlug(slug: string): Promise<Ministry | null> {
    try {
      const response = await client.getEntries({
        content_type: 'ministry',
        'fields.slug': slug,
        include: 2,
        limit: 1,
      });

      return response.items[0] as unknown as Ministry || null;
    } catch (error) {
      console.error('Error fetching ministry by slug:', error);
      return null;
    }
  }

  async getMediaByMinistryId(id: string, page: number = 1): Promise<Media[] | null> {
    try {
      const response = await client.getEntries({
        content_type: 'media',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        include: 1,
        skip: (page - 1) * 10,
        limit: 10,

      });

      const result = response.items.map((i) => {
        return {
          title: i.fields.title,
          img: i.fields.img,
          isVideo: i.fields.isVideo,
          ministry: i.fields.ministry,
          id: i.sys.id,
          ministryId: i.fields.ministry,
          i
        }
      })
      return response.items as unknown as Media[] || null;
    } catch (error) {
      console.error('Error fetching media by ministry id:', error);
      return null;
    }
  }

  async getEventsByMinistryId(id: string, page: number = 1): Promise<Events[] | null> {
    try {
      const response = await client.getEntries({
        content_type: 'events',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        include: 1,
        skip: (page - 1) * 10,
        limit: 10,
      });

      return response.items as unknown as Events[] || null;
    } catch (error) {
      console.error('Error fetching events by ministry id:', error);
      return null;
    }
  }

  async getMediaCountByMinistryId(id: string): Promise<number> {
    try {
      const response = await client.getEntries({
        content_type: 'media',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        select: ['sys.id'],
      });
  
      return response.total; // total count from Contentful
    } catch (error) {
      console.error('Error fetching media count by ministry id:', error);
      return 0;
    }
  }

  // Fetch a single event by ID
  async getEventById(id: string): Promise<Events | null> {
    try {
      const response = await client.getEntries({
        content_type: 'events',
        'sys.id': id,
        include: 2,
        limit: 1,
      });

      return response.items[0] as unknown as Events || null;
    } catch (error) {
      console.error('Error fetching event by id:', error);
      return null;
    }
  }

  // Fetch events count by ministry id
  async getEventCountByMinistryId(id: string): Promise<number> {
    try {
      const response = await client.getEntries({
        content_type: 'events',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        select: ['sys.id'],
      });
  
      return response.total; // total count from Contentful
    } catch (error) {
      console.error('Error fetching event count by ministry id:', error);
      return 0;
    }
  }
  
  async getProjectsByMinistryId(id: string, page: number = 1): Promise<Project[] | null> {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        include: 1,
        skip: (page - 1) * 10,
        limit: 10,
      });

      return (response.items as unknown as Project[]) || null;
    } catch (error) {
      console.error('Error fetching projects by ministry id:', error);
      return null;
    }
  }

  async getProjectsCountByMinistryId(id: string): Promise<number> {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
        "fields.ministry.sys.id[exists]": true,
        'fields.ministry.sys.id': id,
        select: ['sys.id'],
      });
  
      return response.total; // total count from Contentful
    } catch (error) {
      console.error('Error fetching projects count by ministry id:', error);
      return 0;
    }
  }

  async getProjectById(id: string) {
    try {
      const response = await client.getEntries({
        content_type: 'projects',
        'sys.id': id,
        include: 2,
        limit: 1,
      });

      return response.items[0] as unknown as Project || null;
    } catch (error) {
      console.error('Error fetching project by id:', error);
      return null;
    }
  } 

  // Fetch all categories
  async getCategories(): Promise<Category[]> {
    try {
      const response = await client.getEntries({
        content_type: 'category',
        order: ['fields.category_name'],
      });
      
      return response.items as unknown as Category[];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  // Fetch a Blogs by category id
  async getBlogsByCategoryId(id: string, ministryId: string, page: number = 1): Promise<NewsPost[]> {
    try {
      const response = await client.getEntries({
        content_type: 'blogs',
        'fields.ministry.sys.id': ministryId,
        'fields.category.sys.id': id,
        order: ['-sys.createdAt'],
        include: 2,
        skip: (page - 1) * 10,
        limit: 10,
      });

      return response.items as unknown as NewsPost[];
    } catch (error) {
      console.error('Error fetching blogs by category id:', error);
      return [];
    }
  }
}

// Export an instance to maintain the same usage pattern
export const contentfulService = new ContentfulService(); 