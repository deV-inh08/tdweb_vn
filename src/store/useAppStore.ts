import React from 'react';
import { create } from 'zustand';
import { TEMPLATES } from '../data/templates';
import { supabaseFetch } from '../lib/supabase';
import {
  AdminLoginSchema,
  ConsultationLeadSchema,
  PricingPlanFormSchema,
  TemplateFormSchema,
} from '../schemas';
import type {
  LeadItem,
  LeadStatus,
  PricingPlan,
  SiteSettings,
  TemplateCategory,
  TemplateItem,
} from '../types';

const AUTH_SESSION_KEY = 'webcraft_admin_auth';

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  ecommerce: 'Bán Hàng E-Commerce',
  corporate: 'Doanh Nghiệp & B2B',
  tech: 'Công Nghệ & SaaS',
  fb: 'Nhà Hàng & F&B',
  realestate: 'Bất Động Sản',
  service: 'Y Tế, Spa & Giáo Dục',
};

export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-landing',
    title: 'Landing Page Giới Thiệu',
    description: 'Phù hợp chạy quảng cáo ra mắt sản phẩm mới hoặc dịch vụ đơn lẻ.',
    price: '3.500.000₫',
    unit: '/ trọn gói',
    features: [
      'Thiết kế 1 trang dài tối ưu chuyển đổi',
      'Tặng Tên miền quốc tế + SSL bảo mật',
      'Miễn phí Hosting tốc độ cao 1 năm',
      'Nút gọi, Chat Zalo, Form gửi email',
      'Bàn giao nhanh trong 2-3 ngày',
    ],
    isPopular: false,
    ctaLabel: 'Đăng Ký Tư Vấn Gói Này',
  },
  {
    id: 'plan-corporate',
    title: 'Doanh Nghiệp Chuẩn SEO',
    description: 'Hoàn hảo cho công ty, thương hiệu xây dựng uy tín lâu dài.',
    price: '6.800.000₫',
    unit: '/ trọn gói',
    features: [
      'Đầy đủ Trang Chủ, Giới Thiệu, Dịch Vụ, Tin Tức, Liên Hệ',
      'Hệ thống CMS quản trị tiếng Việt cực dễ dùng',
      'Tối ưu điểm Google PageSpeed 95+',
      'Tặng Tên miền .com + Hosting SSD 1 năm',
      'Hướng dẫn SEO bài viết lên Top Google',
      'Bàn giao trong 4-6 ngày làm việc',
    ],
    isPopular: true,
    badgeText: 'PHỔ BIẾN NHẤT',
    ctaLabel: 'Đăng Ký Tư Vấn Gói Này',
  },
  {
    id: 'plan-ecommerce',
    title: 'Bán Hàng & E-Commerce',
    description: 'Dành cho shop bán lẻ, nhãn hàng thời trang, mỹ phẩm, đồ gia dụng.',
    price: '11.500.000₫',
    unit: '/ trọn gói',
    features: [
      'Giỏ hàng, Quản lý kho & Biến thể sản phẩm',
      'Tích hợp thanh toán QR Ngân Hàng, Momo, COD',
      'Kết nối tự động đơn vị vận chuyển (GHN, GHTK)',
      'Hệ thống mã giảm giá & Tích điểm khách hàng',
      'Tặng Hosting cao cấp chịu tải lớn 1 năm',
      'Hỗ trợ kỹ thuật 24/7 trọn đời',
    ],
    isPopular: false,
    ctaLabel: 'Đăng Ký Tư Vấn Gói Này',
  },
];

const ENV_ADMIN_USER =
  (import.meta.env.VITE_ADMIN_USERNAME as string | undefined)?.trim() || 'cns_admin';
const ENV_ADMIN_PASS =
  (import.meta.env.VITE_ADMIN_PASSWORD as string | undefined)?.trim() || 'DungTrong@2026!';

export const DEFAULT_SETTINGS: SiteSettings = {
  companyName: 'CÔNG TY TNHH CÔNG NGHỆ SỐ DUNG TRỌNG',
  shortName: 'CNS Dung Trọng',
  taxCode: '1900640597',
  representative: 'Lý Hữu Trọng',
  hotline: '0832555500',
  hotlineDisplay: '0832.555.500',
  email: 'lienhe@cnsdungtrong.vn',
  headOffice: 'Số 17 Lê Văn Năm, Khóm 17, Phường Bạc Liêu, Tỉnh Cà Mau, Việt Nam',
  hcmBranch: '18/1/21 Hoàng Hữu Nam, Phường Long Bình, Thành phố Hồ Chí Minh',
  adminUsername: ENV_ADMIN_USER,
  adminPassword: ENV_ADMIN_PASS,
};

const SAMPLE_LEADS: LeadItem[] = [
  {
    id: 'WC-8492',
    name: 'Nguyễn Minh Hoàng',
    phone: '0908123456',
    email: 'hoang.nm@luxfashion.vn',
    industry: 'Bán lẻ / Thời trang / Mỹ phẩm',
    template: 'Aura Luxe Fashion',
    budget: '10 - 20 triệu (E-Commerce & Thanh toán tự động)',
    notes: 'Cần tích hợp thanh toán VietQR tự động và đồng bộ kho từ KiotViet.',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    status: 'new',
    adminNotes: 'Khách cần demo trong chiều nay.',
  },
  {
    id: 'WC-7310',
    name: 'Trần Thị Thu Hà',
    phone: '0912987654',
    email: 'hatran@lumiereclinic.vn',
    industry: 'Y tế / Phòng khám / Thẩm mỹ / Giáo dục',
    template: 'Lumière Dental & Spa',
    budget: '5 - 10 triệu (Doanh nghiệp chuẩn SEO)',
    notes: 'Muốn làm tính năng đặt lịch hẹn bác sĩ gửi thông báo qua Zalo.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    status: 'contacted',
    adminNotes: 'Đã gọi tư vấn lần 1, khách đang xem báo giá.',
  },
  {
    id: 'WC-6105',
    name: 'Lê Quốc Bảo',
    phone: '0987654321',
    email: 'baole@horizonland.vn',
    industry: 'Bất động sản / Kiến trúc / Nội thất',
    template: 'Horizon Luxury Villa',
    budget: '5 - 10 triệu (Doanh nghiệp chuẩn SEO)',
    notes: 'Thiết kế landing page mở bán phân khu biệt thự biển.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    status: 'won',
    adminNotes: 'Đã ký hợp đồng 6.8tr, đang lên layout.',
  },
];

export function renderFallbackMockup(item: Omit<TemplateItem, 'mockupContent'>): React.ReactNode {
  const original = TEMPLATES.find((t) => t.id === item.id);
  if (original?.mockupContent) {
    return original.mockupContent;
  }

  return React.createElement(
    'div',
    { className: 'p-6 bg-[#f8fafc] min-h-full font-sans' },
    React.createElement(
      'div',
      { className: 'flex justify-between items-center border-b border-slate-200 pb-3 mb-5' },
      React.createElement(
        'span',
        {
          className: 'font-extrabold text-lg tracking-tight uppercase',
          style: { color: item.primaryColor || '#08482D' },
        },
        item.title
      ),
      React.createElement(
        'span',
        {
          className:
            'text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800',
        },
        item.categoryName
      )
    ),
    React.createElement(
      'div',
      {
        className:
          'text-white p-6 rounded-xl mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4',
        style: { background: item.bannerBg || item.primaryColor || '#08482D' },
      },
      React.createElement(
        'div',
        null,
        React.createElement(
          'span',
          {
            className: 'bg-white/20 text-white text-[11px] font-bold px-2.5 py-0.5 rounded',
          },
          `GIAO DIỆN ĐỘC QUYỀN • PAGESPEED ${item.pageSpeed}`
        ),
        React.createElement('h2', { className: 'text-xl font-extrabold my-2' }, item.title),
        React.createElement('p', { className: 'text-xs opacity-90 max-w-md' }, item.desc)
      )
    ),
    React.createElement(
      'div',
      { className: 'rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm' },
      React.createElement('img', {
        src: item.thumbnailImage,
        alt: item.title,
        className: 'w-full h-44 object-cover',
      })
    )
  );
}

function stripMockup(item: TemplateItem): Omit<TemplateItem, 'mockupContent'> {
  const { mockupContent: _, ...rest } = item;
  return {
    ...rest,
    isVisible: item.isVisible !== false,
  };
}

function hydrateTemplate(raw: Omit<TemplateItem, 'mockupContent'>): TemplateItem {
  return {
    ...raw,
    isVisible: raw.isVisible !== false,
    mockupContent: renderFallbackMockup(raw),
  };
}

export interface AppStoreState {
  // Storefront UI state
  categoryFilter: string;
  activeModalItem: TemplateItem | null;
  selectedTemplateName: string;
  clientNotes: string;
  showToast: boolean;
  setCategoryFilter: (cat: string) => void;
  setActiveModalItem: (item: TemplateItem | null) => void;
  setSelectedTemplateName: (name: string) => void;
  setClientNotes: (notes: string) => void;
  setShowToast: (show: boolean) => void;

  // Data state
  templates: TemplateItem[];
  pricingPlans: PricingPlan[];
  leads: LeadItem[];
  settings: SiteSettings;
  isAuthenticated: boolean;
  isSyncing: boolean;
  dbError: string | null;

  // Auth with Zod validation
  login: (username: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;

  // Templates CRUD with Zod validation
  addTemplate: (
    tpl: Omit<TemplateItem, 'id' | 'mockupContent'>
  ) => Promise<{ ok: boolean; error?: string }>;
  updateTemplate: (
    id: number,
    tpl: Partial<Omit<TemplateItem, 'id' | 'mockupContent'>>
  ) => Promise<{ ok: boolean; error?: string }>;
  deleteTemplate: (id: number) => Promise<void>;
  toggleTemplateVisibility: (id: number) => Promise<void>;
  resetTemplates: () => Promise<void>;

  // Pricing CRUD with Zod validation
  addPricingPlan: (
    plan: Omit<PricingPlan, 'id'>
  ) => Promise<{ ok: boolean; error?: string }>;
  updatePricingPlan: (
    id: string,
    plan: Partial<PricingPlan>
  ) => Promise<{ ok: boolean; error?: string }>;
  deletePricingPlan: (id: string) => Promise<void>;
  resetPricingPlans: () => Promise<void>;

  // Leads CRUD with Zod validation
  addLead: (
    lead: Omit<LeadItem, 'id' | 'timestamp'>
  ) => Promise<{ ok: boolean; error?: string; data?: LeadItem }>;
  updateLeadStatus: (id: string, status: LeadStatus) => Promise<void>;
  updateLeadNotes: (id: string, adminNotes: string) => Promise<void>;
  deleteLead: (id: string) => Promise<void>;

  // Sync
  refreshFromSupabase: () => Promise<{ ok: boolean; message: string }>;
}

export const useAppStore = create<AppStoreState>((set, get) => ({
  // Storefront UI state
  categoryFilter: 'all',
  activeModalItem: null,
  selectedTemplateName: '',
  clientNotes: '',
  showToast: false,
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setActiveModalItem: (activeModalItem) => set({ activeModalItem }),
  setSelectedTemplateName: (selectedTemplateName) => set({ selectedTemplateName }),
  setClientNotes: (clientNotes) => set({ clientNotes }),
  setShowToast: (showToast) => set({ showToast }),

  // Data state
  templates: TEMPLATES.map((t) => ({ ...t, isVisible: true })),
  pricingPlans: DEFAULT_PRICING_PLANS,
  leads: [],
  settings: DEFAULT_SETTINGS,
  isAuthenticated: (() => {
    try {
      return sessionStorage.getItem(AUTH_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  })(),
  isSyncing: false,
  dbError: null,

  // Auth with Zod validation
  login: (username, password) => {
    const parsed = AdminLoginSchema.safeParse({ username, password });
    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message || 'Thông tin đăng nhập không hợp lệ',
      };
    }

    const { settings } = get();
    const validUser = settings.adminUsername || ENV_ADMIN_USER;
    const validPass = settings.adminPassword || ENV_ADMIN_PASS;

    if (
      parsed.data.username.toLowerCase() === validUser.toLowerCase() &&
      parsed.data.password === validPass
    ) {
      set({ isAuthenticated: true });
      try {
        sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
      } catch {
        // ignore
      }
      return { ok: true };
    }

    return {
      ok: false,
      error: 'Tài khoản hoặc mật khẩu quản trị không chính xác!',
    };
  },

  logout: () => {
    set({ isAuthenticated: false });
    try {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    } catch {
      // ignore
    }
  },

  refreshFromSupabase: async () => {
    set({ isSyncing: true, dbError: null });

    try {
      const [tplRes, planRes, leadRes] = await Promise.all([
        supabaseFetch<
          Array<{
            id: number;
            title: string;
            category: TemplateCategory;
            category_name: string;
            url: string;
            description: string;
            page_speed: string;
            delivery_time: string;
            primary_color: string;
            banner_bg: string;
            thumbnail_image: string;
            is_visible: boolean;
          }>
        >('templates?order=id.asc'),
        supabaseFetch<
          Array<{
            id: string;
            title: string;
            description: string;
            price: string;
            unit: string;
            features: string[];
            is_popular: boolean;
            badge_text: string;
            cta_label: string;
          }>
        >('pricing_plans'),
        supabaseFetch<
          Array<{
            id: string;
            name: string;
            phone: string;
            email: string;
            industry: string;
            template: string;
            budget: string;
            notes: string;
            timestamp: string;
            status: LeadStatus;
            admin_notes: string;
          }>
        >('leads?order=timestamp.desc'),
      ]);

      if (tplRes.error) {
        set({ dbError: tplRes.error, isSyncing: false });
        return { ok: false, message: `Lỗi kết nối: ${tplRes.error}` };
      }

      // 1. Templates: If fewer than 10 on first seed or empty, ensure templates are loaded
      if (tplRes.data && tplRes.data.length > 0) {
        set({
          templates: tplRes.data.map((r) =>
            hydrateTemplate({
              id: r.id,
              title: r.title,
              category: r.category,
              categoryName: r.category_name,
              url: r.url,
              desc: r.description,
              pageSpeed: r.page_speed,
              deliveryTime: r.delivery_time,
              primaryColor: r.primary_color,
              bannerBg: r.banner_bg,
              thumbnailImage: r.thumbnail_image,
              isVisible: r.is_visible,
            })
          ),
        });
      } else {
        const seedTpl = TEMPLATES.map((t) => ({
          id: t.id,
          title: t.title,
          category: t.category,
          category_name: t.categoryName,
          url: t.url,
          description: t.desc,
          page_speed: t.pageSpeed,
          delivery_time: t.deliveryTime,
          primary_color: t.primaryColor,
          banner_bg: t.bannerBg,
          thumbnail_image: t.thumbnailImage,
          is_visible: true,
        }));
        await supabaseFetch('templates', {
          method: 'POST',
          prefer: 'resolution=merge-duplicates',
          body: seedTpl,
        });
        set({ templates: TEMPLATES.map((t) => ({ ...t, isVisible: true })) });
      }

      // 2. Pricing Plans
      if (planRes.data && planRes.data.length > 0) {
        set({
          pricingPlans: planRes.data.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            unit: p.unit,
            features: Array.isArray(p.features) ? p.features : [],
            isPopular: p.is_popular,
            badgeText: p.badge_text,
            ctaLabel: p.cta_label,
          })),
        });
      } else {
        const seedPlans = DEFAULT_PRICING_PLANS.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          price: p.price,
          unit: p.unit,
          features: p.features,
          is_popular: Boolean(p.isPopular),
          badge_text: p.badgeText || '',
          cta_label: p.ctaLabel || '',
        }));
        await supabaseFetch('pricing_plans', {
          method: 'POST',
          prefer: 'resolution=merge-duplicates',
          body: seedPlans,
        });
        set({ pricingPlans: DEFAULT_PRICING_PLANS });
      }

      // 3. Leads
      if (leadRes.data && leadRes.data.length > 0) {
        set({
          leads: leadRes.data.map((l) => ({
            id: l.id,
            name: l.name,
            phone: l.phone,
            email: l.email,
            industry: l.industry,
            template: l.template,
            budget: l.budget,
            notes: l.notes,
            timestamp: l.timestamp,
            status: l.status || 'new',
            adminNotes: l.admin_notes || '',
          })),
        });
      } else {
        const seedLeads = SAMPLE_LEADS.map((l) => ({
          id: l.id,
          name: l.name,
          phone: l.phone,
          email: l.email,
          industry: l.industry,
          template: l.template,
          budget: l.budget,
          notes: l.notes,
          timestamp: l.timestamp,
          status: l.status || 'new',
          admin_notes: l.adminNotes || '',
        }));
        await supabaseFetch('leads', {
          method: 'POST',
          prefer: 'resolution=merge-duplicates',
          body: seedLeads,
        });
        set({ leads: SAMPLE_LEADS });
      }

      set({ isSyncing: false });
      return { ok: true, message: 'Đã cập nhật dữ liệu mới nhất!' };
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Không thể tải dữ liệu.';
      set({ dbError: msg, isSyncing: false });
      return { ok: false, message: msg };
    }
  },

  addTemplate: async (tpl) => {
    const parsed = TemplateFormSchema.safeParse({
      title: tpl.title,
      category: tpl.category,
      url: tpl.url,
      desc: tpl.desc,
      pageSpeed: tpl.pageSpeed,
      deliveryTime: tpl.deliveryTime,
      primaryColor: tpl.primaryColor,
      bannerBg: tpl.bannerBg,
      thumbnailImage: tpl.thumbnailImage,
      isVisible: tpl.isVisible !== false,
    });

    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message || 'Dữ liệu mẫu website không hợp lệ',
      };
    }

    const { templates } = get();
    const nextId = templates.reduce((max, t) => Math.max(max, t.id), -1) + 1;
    const rawNew: Omit<TemplateItem, 'mockupContent'> = {
      ...parsed.data,
      id: nextId,
      categoryName: CATEGORY_LABELS[parsed.data.category],
    };
    const hydrated = hydrateTemplate(rawNew);
    set({ templates: [hydrated, ...templates] });

    await supabaseFetch('templates', {
      method: 'POST',
      prefer: 'resolution=merge-duplicates',
      body: {
        id: rawNew.id,
        title: rawNew.title,
        category: rawNew.category,
        category_name: rawNew.categoryName,
        url: rawNew.url,
        description: rawNew.desc,
        page_speed: rawNew.pageSpeed,
        delivery_time: rawNew.deliveryTime,
        primary_color: rawNew.primaryColor,
        banner_bg: rawNew.bannerBg,
        thumbnail_image: rawNew.thumbnailImage,
        is_visible: rawNew.isVisible,
      },
    });

    return { ok: true };
  },

  updateTemplate: async (id, updates) => {
    const { templates } = get();
    const existing = templates.find((t) => t.id === id);
    if (!existing) {
      return { ok: false, error: 'Không tìm thấy mẫu website' };
    }

    const mergedRaw = stripMockup({ ...existing, ...updates });
    const parsed = TemplateFormSchema.safeParse({
      title: mergedRaw.title,
      category: mergedRaw.category,
      url: mergedRaw.url,
      desc: mergedRaw.desc,
      pageSpeed: mergedRaw.pageSpeed,
      deliveryTime: mergedRaw.deliveryTime,
      primaryColor: mergedRaw.primaryColor,
      bannerBg: mergedRaw.bannerBg,
      thumbnailImage: mergedRaw.thumbnailImage,
      isVisible: mergedRaw.isVisible !== false,
    });

    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message || 'Dữ liệu cập nhật không hợp lệ',
      };
    }

    const finalItem: Omit<TemplateItem, 'mockupContent'> = {
      ...mergedRaw,
      ...parsed.data,
      categoryName: CATEGORY_LABELS[parsed.data.category],
    };

    set({
      templates: templates.map((t) => (t.id === id ? hydrateTemplate(finalItem) : t)),
    });

    await supabaseFetch(`templates?id=eq.${id}`, {
      method: 'PATCH',
      body: {
        title: finalItem.title,
        category: finalItem.category,
        category_name: finalItem.categoryName,
        url: finalItem.url,
        description: finalItem.desc,
        page_speed: finalItem.pageSpeed,
        delivery_time: finalItem.deliveryTime,
        primary_color: finalItem.primaryColor,
        banner_bg: finalItem.bannerBg,
        thumbnail_image: finalItem.thumbnailImage,
        is_visible: finalItem.isVisible,
      },
    });

    return { ok: true };
  },

  deleteTemplate: async (id) => {
    set((state) => ({
      templates: state.templates.filter((t) => t.id !== id),
    }));
    await supabaseFetch(`templates?id=eq.${id}`, { method: 'DELETE' });
  },

  toggleTemplateVisibility: async (id) => {
    const target = get().templates.find((t) => t.id === id);
    if (!target) return;
    await get().updateTemplate(id, { isVisible: target.isVisible === false });
  },

  resetTemplates: async () => {
    const defaults = TEMPLATES.map((t) => ({ ...t, isVisible: true }));
    set({ templates: defaults });
    const payload = defaults.map((t) => ({
      id: t.id,
      title: t.title,
      category: t.category,
      category_name: t.categoryName,
      url: t.url,
      description: t.desc,
      page_speed: t.pageSpeed,
      delivery_time: t.deliveryTime,
      primary_color: t.primaryColor,
      banner_bg: t.bannerBg,
      thumbnail_image: t.thumbnailImage,
      is_visible: true,
    }));
    await supabaseFetch('templates', {
      method: 'POST',
      prefer: 'resolution=merge-duplicates',
      body: payload,
    });
  },

  addPricingPlan: async (plan) => {
    const parsed = PricingPlanFormSchema.safeParse({
      title: plan.title,
      description: plan.description,
      price: plan.price,
      unit: plan.unit,
      features: plan.features,
      isPopular: Boolean(plan.isPopular),
      badgeText: plan.badgeText,
      ctaLabel: plan.ctaLabel,
    });

    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message || 'Thông tin gói báo giá không hợp lệ',
      };
    }

    const newPlan: PricingPlan = {
      ...parsed.data,
      id: 'plan-' + Date.now(),
    };
    set((state) => ({ pricingPlans: [...state.pricingPlans, newPlan] }));

    await supabaseFetch('pricing_plans', {
      method: 'POST',
      prefer: 'resolution=merge-duplicates',
      body: {
        id: newPlan.id,
        title: newPlan.title,
        description: newPlan.description,
        price: newPlan.price,
        unit: newPlan.unit,
        features: newPlan.features,
        is_popular: Boolean(newPlan.isPopular),
        badge_text: newPlan.badgeText || '',
        cta_label: newPlan.ctaLabel || '',
      },
    });

    return { ok: true };
  },

  updatePricingPlan: async (id, updates) => {
    const { pricingPlans } = get();
    const existing = pricingPlans.find((p) => p.id === id);
    if (!existing) {
      return { ok: false, error: 'Không tìm thấy gói dịch vụ' };
    }

    const merged = { ...existing, ...updates };
    const parsed = PricingPlanFormSchema.safeParse({
      title: merged.title,
      description: merged.description,
      price: merged.price,
      unit: merged.unit,
      features: merged.features,
      isPopular: Boolean(merged.isPopular),
      badgeText: merged.badgeText,
      ctaLabel: merged.ctaLabel,
    });

    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message || 'Dữ liệu gói dịch vụ không hợp lệ',
      };
    }

    const finalPlan: PricingPlan = { ...merged, ...parsed.data };
    set({
      pricingPlans: pricingPlans.map((p) => (p.id === id ? finalPlan : p)),
    });

    await supabaseFetch(`pricing_plans?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: {
        title: finalPlan.title,
        description: finalPlan.description,
        price: finalPlan.price,
        unit: finalPlan.unit,
        features: finalPlan.features,
        is_popular: Boolean(finalPlan.isPopular),
        badge_text: finalPlan.badgeText || '',
        cta_label: finalPlan.ctaLabel || '',
      },
    });

    return { ok: true };
  },

  deletePricingPlan: async (id) => {
    set((state) => ({
      pricingPlans: state.pricingPlans.filter((p) => p.id !== id),
    }));
    await supabaseFetch(`pricing_plans?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
  },

  resetPricingPlans: async () => {
    set({ pricingPlans: DEFAULT_PRICING_PLANS });
    const payload = DEFAULT_PRICING_PLANS.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      price: p.price,
      unit: p.unit,
      features: p.features,
      is_popular: Boolean(p.isPopular),
      badge_text: p.badgeText || '',
      cta_label: p.ctaLabel || '',
    }));
    await supabaseFetch('pricing_plans', {
      method: 'POST',
      prefer: 'resolution=merge-duplicates',
      body: payload,
    });
  },

  addLead: async (leadInput) => {
    const parsed = ConsultationLeadSchema.safeParse(leadInput);
    if (!parsed.success) {
      return {
        ok: false,
        error: parsed.error.issues[0]?.message || 'Thông tin khách hàng không hợp lệ',
      };
    }

    const newLead: LeadItem = {
      ...parsed.data,
      id: 'WC-' + Math.floor(1000 + Math.random() * 9000),
      timestamp: new Date().toISOString(),
      status: parsed.data.status || 'new',
      adminNotes: parsed.data.adminNotes || '',
    };

    set((state) => ({ leads: [newLead, ...state.leads] }));

    await supabaseFetch('leads', {
      method: 'POST',
      prefer: 'resolution=merge-duplicates',
      body: {
        id: newLead.id,
        name: newLead.name,
        phone: newLead.phone,
        email: newLead.email,
        industry: newLead.industry,
        template: newLead.template,
        budget: newLead.budget,
        notes: newLead.notes,
        timestamp: newLead.timestamp,
        status: newLead.status,
        admin_notes: newLead.adminNotes,
      },
    });

    return { ok: true, data: newLead };
  },

  updateLeadStatus: async (id, status) => {
    set((state) => ({
      leads: state.leads.map((l) => (l.id === id ? { ...l, status } : l)),
    }));
    await supabaseFetch(`leads?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: { status },
    });
  },

  updateLeadNotes: async (id, adminNotes) => {
    set((state) => ({
      leads: state.leads.map((l) => (l.id === id ? { ...l, adminNotes } : l)),
    }));
    await supabaseFetch(`leads?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: { admin_notes: adminNotes },
    });
  },

  deleteLead: async (id) => {
    set((state) => ({
      leads: state.leads.filter((l) => l.id !== id),
    }));
    await supabaseFetch(`leads?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
  },
}));
