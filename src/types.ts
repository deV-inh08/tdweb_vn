import type React from 'react';

export type TemplateCategory = 'ecommerce' | 'corporate' | 'tech' | 'fb' | 'realestate' | 'service';

// Data model for sample website templates
export interface TemplateItem {
  id: number;
  title: string;
  category: TemplateCategory;
  categoryName: string;
  url: string;
  desc: string;
  pageSpeed: string;
  deliveryTime: string;
  primaryColor: string;
  bannerBg: string;
  thumbnailImage: string;
  mockupContent?: React.ReactNode;
  isVisible?: boolean;
}

export type LeadStatus = 'new' | 'contacted' | 'quoted' | 'won' | 'lost';

export interface LeadItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  industry: string;
  template: string;
  budget: string;
  notes: string;
  timestamp: string;
  status?: LeadStatus;
  adminNotes?: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  isPopular?: boolean;
  badgeText?: string;
  ctaLabel?: string;
}

export interface SiteSettings {
  companyName: string;
  shortName: string;
  taxCode: string;
  representative: string;
  hotline: string;
  hotlineDisplay: string;
  email: string;
  headOffice: string;
  hcmBranch: string;
  adminUsername: string;
  adminPassword?: string;
}
