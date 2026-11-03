import type { LeadItem } from '../types';

const DEFAULT_NOTIFY_EMAIL =
  (import.meta.env.VITE_NOTIFY_EMAIL as string | undefined)?.trim() ||
  'vintd2004@gmail.com';

const NOTIFY_EMAIL_STORAGE_KEY = 'webcraft_notify_email';

export function getNotifyEmail(): string {
  try {
    const saved = localStorage.getItem(NOTIFY_EMAIL_STORAGE_KEY)?.trim();
    if (saved) return saved;
  } catch {
    // ignore
  }
  return DEFAULT_NOTIFY_EMAIL;
}

export function setNotifyEmailStorage(email: string) {
  try {
    localStorage.setItem(NOTIFY_EMAIL_STORAGE_KEY, email.trim());
  } catch {
    // ignore
  }
}

/**
 * Gửi email thông báo tự động khi có khách đặt hàng / đăng ký tư vấn.
 * Sử dụng dịch vụ miễn phí FormSubmit AJAX (không cần server riêng).
 */
export async function sendOrderNotificationEmail(
  lead: LeadItem,
  customRecipient?: string
): Promise<{ ok: boolean; error?: string }> {
  const recipient = (customRecipient || getNotifyEmail()).trim();
  if (!recipient) {
    return { ok: false, error: 'Chưa cấu hình email nhận thông báo' };
  }

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[CNS Dung Trọng] Đơn đặt hàng / Tư vấn mới (${lead.id}) - ${lead.name}`,
          _template: 'table',
          _captcha: 'false',
          'Mã yêu cầu': lead.id,
          'Họ và tên khách': lead.name,
          'Số điện thoại / Zalo': lead.phone,
          'Email khách': lead.email || 'Không cung cấp',
          'Lĩnh vực hoạt động': lead.industry,
          'Mẫu website đặt / quan tâm': lead.template,
          'Ngân sách dự kiến': lead.budget,
          'Ghi chú yêu cầu': lead.notes || 'Không có ghi chú',
          'Thời gian gửi': new Date(lead.timestamp).toLocaleString('vi-VN'),
        }),
      }
    );

    if (!response.ok) {
      return { ok: false, error: `HTTP ${response.status}` };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'Không thể gửi email thông báo',
    };
  }
}
