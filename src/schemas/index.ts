import { z } from 'zod';

export const TemplateCategorySchema = z.enum([
  'ecommerce',
  'corporate',
  'tech',
  'fb',
  'realestate',
  'service',
]);

export const LeadStatusSchema = z.enum([
  'new',
  'contacted',
  'quoted',
  'won',
  'lost',
]);

export const AdminLoginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, 'Tên tài khoản phải có ít nhất 3 ký tự'),
  password: z
    .string()
    .min(8, 'Mật khẩu bảo mật phải có ít nhất 8 ký tự'),
});

export const TemplateFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Tên mẫu website phải có ít nhất 3 ký tự'),
  category: TemplateCategorySchema,
  url: z
    .string()
    .trim()
    .url('Đường dẫn Demo URL phải bắt đầu bằng https:// hoặc http://'),
  desc: z
    .string()
    .trim()
    .min(10, 'Mô tả mẫu giao diện phải có ít nhất 10 ký tự'),
  pageSpeed: z
    .string()
    .trim()
    .min(2, 'Vui lòng nhập điểm PageSpeed (VD: 99/100)'),
  deliveryTime: z
    .string()
    .trim()
    .min(2, 'Vui lòng nhập thời gian bàn giao (VD: 3 ngày)'),
  primaryColor: z
    .string()
    .trim()
    .regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, 'Mã màu chủ đạo phải có dạng HEX (VD: #08482D)'),
  bannerBg: z.string().trim().min(1),
  thumbnailImage: z
    .string()
    .trim()
    .url('Link ảnh đại diện (Thumbnail) phải là một URL hợp lệ'),
  isVisible: z.boolean(),
});

export const PricingPlanFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Tên gói dịch vụ phải có ít nhất 3 ký tự'),
  description: z
    .string()
    .trim()
    .min(5, 'Mô tả gói dịch vụ phải có ít nhất 5 ký tự'),
  price: z
    .string()
    .trim()
    .min(2, 'Vui lòng nhập mức giá hiển thị (VD: 6.800.000₫)'),
  unit: z.string().trim().min(1, 'Vui lòng nhập đơn vị tính'),
  features: z
    .array(z.string().trim().min(1))
    .min(1, 'Phải có ít nhất 1 quyền lợi trong gói dịch vụ'),
  isPopular: z.boolean(),
  badgeText: z.string().optional(),
  ctaLabel: z.string().optional(),
});

export const ConsultationLeadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Vui lòng nhập họ và tên (ít nhất 2 ký tự)'),
  phone: z
    .string()
    .trim()
    .regex(
      /^(0|\+84)[0-9.\-\s]{8,13}$/,
      'Số điện thoại không hợp lệ (VD: 0908123456)'
    ),
  email: z
    .union([z.literal(''), z.string().trim().email('Địa chỉ Email không hợp lệ')])
    .default(''),
  industry: z.string().trim().min(1, 'Vui lòng chọn lĩnh vực hoạt động'),
  template: z.string().trim().default('Tư vấn theo phong cách riêng'),
  budget: z.string().trim().min(1, 'Vui lòng chọn dự toán ngân sách'),
  notes: z.string().trim().default(''),
  status: LeadStatusSchema.default('new'),
  adminNotes: z.string().trim().optional(),
});

export const NotifyEmailSchema = z
  .string()
  .trim()
  .email('Địa chỉ Email nhận thông báo không hợp lệ');

export type AdminLoginInput = z.infer<typeof AdminLoginSchema>;
export type TemplateFormInput = z.infer<typeof TemplateFormSchema>;
export type PricingPlanFormInput = z.infer<typeof PricingPlanFormSchema>;
export type ConsultationLeadInput = z.infer<typeof ConsultationLeadSchema>;
