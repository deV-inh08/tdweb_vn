import type React from 'react';

// Data model for sample website templates
export interface TemplateItem {
  id: number;
  title: string;
  category: 'ecommerce' | 'corporate' | 'tech' | 'fb' | 'realestate' | 'service';
  categoryName: string;
  url: string;
  desc: string;
  pageSpeed: string;
  deliveryTime: string;
  primaryColor: string;
  bannerBg: string;
  thumbnailImage: string;
  mockupContent: React.ReactNode;
}
