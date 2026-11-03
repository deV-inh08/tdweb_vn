import React, { useState } from 'react';
import {
  WebcraftLogoIcon,
  IconShieldWarranty,
  IconFreePledge,
  IconNdaLock,
  IconDirectChat,
  IconSendPaperPlane,
  IconAnimatedCheck
} from '../CustomIcons.tsx';

interface Props {
  selectedTemplateName: string;
  setSelectedTemplateName: (v: string) => void;
  clientNotes: string;
  setClientNotes: (v: string) => void;
  setShowToast: (v: boolean) => void;
}

/** SECTION 5: Form Ä‘Äƒng kĂ½ tÆ° váº¥n */
export default function Consultation({
  selectedTemplateName,
  setSelectedTemplateName,
  clientNotes,
  setClientNotes,
  setShowToast,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // Form State
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientIndustry, setClientIndustry] = useState<string>('Bán lẻ / Thời trang / Mỹ phẩm');
  const [clientBudget, setClientBudget] = useState<string>('5 - 10 triệu (Doanh nghiệp chuẩn SEO)');

  const handleSubmitConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission = {
      id: 'WC-' + Math.floor(1000 + Math.random() * 9000),
      name: clientName,
      phone: clientPhone,
      email: clientEmail,
      industry: clientIndustry,
      template: selectedTemplateName || 'Tư vấn theo phong cách riêng',
      budget: clientBudget,
      notes: clientNotes,
      timestamp: new Date().toISOString()
    };

    try {
      const list = JSON.parse(localStorage.getItem('webcraft_leads') || '[]');
      list.unshift(submission);
      localStorage.setItem('webcraft_leads', JSON.stringify(list));
    } catch (err) {}

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowToast(true);
      // Reset form
      setClientName('');
      setClientPhone('');
      setClientEmail('');
      setClientNotes('');
      setSelectedTemplateName('');

      // Temporarily show success on button for 3.5s
      setTimeout(() => {
        setIsSuccess(false);
      }, 3500);

      setTimeout(() => {
        setShowToast(false);
      }, 4500);
    }, 600);
  };

  return (
    <>
      {/* =====================================================================
          SECTION 5: DETAILED CONSULTATION FORM (Scroll Reveal)
          ===================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-8 md:py-10" id="consultation">
        <div className="scroll-reveal bg-white border border-[var(--border)] rounded-3xl p-5 sm:p-8 md:p-14 shadow-xl grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Guidance & Value */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[var(--teal-soft)] text-[var(--secondary-dark)] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <WebcraftLogoIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
                Hỗ Trợ Trực Tiếp 24/7
              </span>
              <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[var(--text)] mb-2.5 sm:mb-3">
                Nhận Tư Vấn &amp; Bản Phác Thảo Website Miễn Phí
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)] mb-5 sm:mb-6">
                Hãy chia sẻ ý tưởng hoặc nhu cầu về website và chuyển đổi số của bạn. Đội ngũ <strong>Công ty TNHH Công Nghệ Số Dung Trọng</strong> sẽ phân tích và gửi lại phương án giao diện, tính năng cùng bảng dự toán chi tiết trong <strong>30 phút</strong>.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex gap-3 items-start p-3 bg-[var(--bg-soft)]/80 rounded-xl border border-[var(--primary)]/8 hover:border-[var(--primary)]/25 transition-all">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center shrink-0 shadow-[var(--shadow)]">
                    <IconFreePledge className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-[var(--text)]">Không Ràng Buộc Chi Phí</div>
                    <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Nhận tư vấn, báo giá và demo giao diện hoàn toàn miễn phí.</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-[var(--bg-soft)]/80 rounded-xl border border-[var(--primary)]/8 hover:border-[var(--primary)]/25 transition-all">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center shrink-0 shadow-[var(--shadow)]">
                    <IconNdaLock className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-[var(--text)]">Bảo Mật Ý Tưởng Tuyệt Đối</div>
                    <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Mọi thông tin kinh doanh và tài liệu của bạn được cam kết bảo mật 100%.</div>
                  </div>
                </div>

                <div className="flex gap-3 items-start p-3 bg-[var(--bg-soft)]/80 rounded-xl border border-[var(--primary)]/8 hover:border-[var(--primary)]/25 transition-all">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center shrink-0 shadow-[var(--shadow)]">
                    <IconDirectChat className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs sm:text-sm text-[var(--text)]">Liên Hệ Trực Tiếp Qua Zalo / Hotline</div>
                    <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Chuyên viên kỹ thuật phụ trách tư vấn trực tiếp, không qua trung gian.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-[var(--bg-soft)] rounded-2xl border border-[var(--border)]">
              <div className="text-xs text-[var(--text-muted)] mb-1">Cần tư vấn gấp? Gọi ngay chuyên viên:</div>
              <a href="tel:0832555500" className="text-base sm:text-lg font-bold text-[var(--primary)] font-['Inter_Tight'] hover:underline flex items-center gap-2">
                <IconDirectChat className="w-5 h-5 text-[var(--primary)]" />
                <span>0832.555.500 (Zalo 24/7)</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmitConsultation} className="space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text)]">
                    Họ và tên của bạn <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn Hưng"
                    className="w-full h-11 sm:h-12 px-3.5 sm:px-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl text-sm focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text)]">
                    Số điện thoại / Zalo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="09xxxxxxxx"
                    className="w-full h-11 sm:h-12 px-3.5 sm:px-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl text-sm focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text)]">Email (nhận báo giá PDF)</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="tenban@congty.com"
                    className="w-full h-11 sm:h-12 px-3.5 sm:px-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl text-sm focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text)]">Lĩnh vực hoạt động</label>
                  <select
                    value={clientIndustry}
                    onChange={(e) => setClientIndustry(e.target.value)}
                    className="w-full h-11 sm:h-12 px-3.5 sm:px-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl text-sm focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 outline-none transition-all cursor-pointer"
                  >
                    <option value="Bán lẻ / Thời trang / Mỹ phẩm">Bán lẻ / Thời trang / Mỹ phẩm</option>
                    <option value="Doanh nghiệp B2B / Sản xuất">Doanh nghiệp B2B / Sản xuất</option>
                    <option value="Bất động sản / Kiến trúc / Nội thất">Bất động sản / Kiến trúc / Nội thất</option>
                    <option value="Công nghệ / Dịch vụ SaaS / Phần mềm">Công nghệ / Dịch vụ SaaS / Phần mềm</option>
                    <option value="Nhà hàng / Quán Cafe / F&B">Nhà hàng / Quán Cafe / F&B</option>
                    <option value="Y tế / Phòng khám / Nha khoa / Spa">Y tế / Phòng khám / Nha khoa / Spa</option>
                    <option value="Giáo dục / Khóa học / Tuyển sinh">Giáo dục / Khóa học / Tuyển sinh</option>
                    <option value="Khác">Khác...</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text)]">Mẫu website bạn đang quan tâm</label>
                  <input
                    type="text"
                    value={selectedTemplateName}
                    onChange={(e) => setSelectedTemplateName(e.target.value)}
                    placeholder="Tất cả các mẫu hoặc tên mẫu ưng ý"
                    className="w-full h-11 sm:h-12 px-3.5 sm:px-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl text-sm focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text)]">Dự toán ngân sách mong muốn</label>
                  <select
                    value={clientBudget}
                    onChange={(e) => setClientBudget(e.target.value)}
                    className="w-full h-11 sm:h-12 px-3.5 sm:px-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl text-sm focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 outline-none transition-all cursor-pointer"
                  >
                    <option value="Dưới 5 triệu (Landing page nhanh)">Dưới 5 triệu (Landing page nhanh)</option>
                    <option value="5 - 10 triệu (Doanh nghiệp chuẩn SEO)">5 - 10 triệu (Doanh nghiệp chuẩn SEO)</option>
                    <option value="10 - 20 triệu (E-commerce / Bán hàng nâng cao)">10 - 20 triệu (E-commerce / Bán hàng nâng cao)</option>
                    <option value="Trên 20 triệu (Custom tính năng riêng)">Trên 20 triệu (Custom tính năng riêng)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text)]">Ghi chú hoặc yêu cầu tính năng đặc biệt</label>
                <textarea
                  rows={3}
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="Mô tả ngắn gọn về sản phẩm, link website bạn thích, hoặc thời gian bạn dự kiến khai trương website..."
                  className="w-full p-3.5 sm:p-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl text-sm focus:bg-white focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 outline-none transition-all resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full min-h-[50px] sm:h-14 px-5 py-3 rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md mt-2 disabled:opacity-95 group whitespace-nowrap ${
                  isSuccess
                    ? 'bg-[var(--primary-dark)] text-white ring-4 ring-[var(--teal-soft)]/60 shadow-lg scale-[1.01]'
                    : isSubmitting
                    ? 'bg-[image:var(--gradient)] opacity-80 text-white cursor-wait'
                    : 'bg-[image:var(--gradient)] text-white hover:brightness-105 hover:shadow-lg'
                }`}
              >
                {isSuccess ? (
                  <>
                    <IconAnimatedCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--teal-soft)] shrink-0" color="var(--teal-soft)" />
                    <span className="font-bold tracking-wide">Đã gửi thành công!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin shrink-0"></span>
                    <span>Đang gửi thông tin...</span>
                  </>
                ) : (
                  <>
                    <span className="sm:hidden">Gửi Yêu Cầu &amp; Nhận Báo Giá</span>
                    <span className="max-sm:hidden">Gửi Yêu Cầu Tư Vấn &amp; Nhận Báo Giá Ngay</span>
                    <IconSendPaperPlane className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
              <div className="text-[11px] sm:text-[12px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1.5 leading-snug">
                <IconShieldWarranty className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                <span>Cam kết bảo mật thông tin. Liên hệ lại qua Zalo/SĐT trong 30 phút.</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
