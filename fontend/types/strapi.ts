// Base Strapi types
export interface StrapiData<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEntity {
  id: number;
  attributes: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface StrapiMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: Record<string, unknown>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
  };
}

// Strapi Blocks content type
export interface StrapiBlocks {
  type: string;
  children: Array<{
    type: string;
    text: string;
    bold?: boolean;
  }>;
}

// Strapi Rich Text content type  
export interface StrapiRichText {
  type: string;
  children: Array<{
    type: string;
    text: string;
    bold?: boolean;
    italic?: boolean;
  }>;
}

// Content Type Interfaces
export interface HeroSection {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    backgroundImage: {
      data: StrapiMedia;
    };
    ctaButton: {
      text: string;
      url: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Service {
  id: number;
  attributes: {
    title: string;
    description: StrapiBlocks[];
    order: number;
    icon: {
      data: StrapiMedia;
    };
    features: Array<{
      id: number;
      title: string;
      description: string;
    }>;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface CompanyInfo {
  id: number;
  attributes: {
    companyName: string;
    foundedYear: string;
    address: string;
    phone: string;
    email: string;
    description: StrapiBlocks[];
    mission: StrapiBlocks[];
    version: StrapiBlocks[];
    logo: {
      data: StrapiMedia;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ContactInfo {
  id: number;
  attributes: {
    address: StrapiRichText[];
    phone: string;
    email: string;
    businessHours: string;
    mapEmbedCode: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Partner {
  id: number;
  attributes: {
    name: string;
    website: string;
    description: string;
    category: 'Technology' | 'Business' | 'Strategic';
    order: number;
    logo: {
      data: StrapiMedia;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
} 

export interface Home {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    backgroundImage: {
      data: StrapiMedia;
    };
    ctaButton: {
      text: string;
      url: string;
    };
    description: StrapiBlocks[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}