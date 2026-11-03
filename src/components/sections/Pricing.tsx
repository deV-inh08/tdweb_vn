import {
  IconStudioCheck
} from '../CustomIcons.tsx';

interface Props {
  handleSelectPlan: (planTitle: string) => void;
}

/** SECTION 4: Báº£ng giĂ¡ */
export default function Pricing({ handleSelectPlan }: Props) {
  return (
    <>
      {/* =====================================================================
          SECTION 4: ESTIMATED PRICING (Scroll Reveal with Intersection Observer)
          ===================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 md:py-20" id="pricing">
        <div className="scroll-reveal text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1 bg-[var(--teal-soft)] text-[var(--secondary-dark)] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
            Bảng Giá Minh Bạch
          </span>
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-2.5">
            Gói Dịch Vụ Thiết Kế Website Phù Hợp
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            Không phí ẩn, không phụ phí duy trì hàng tháng. Cam kết chỉ nhận thanh toán khi khách hàng ưng ý.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {/* Plan 1 */}
          <div className="scroll-reveal stagger-1 bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 flex flex-col shadow-[var(--shadow)]">
            <h3 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold mb-1.5">Landing Page Giới Thiệu</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-4 sm:mb-5">Phù hợp chạy quảng cáo ra mắt sản phẩm mới hoặc dịch vụ đơn lẻ.</p>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] font-['Inter_Tight'] mb-5 sm:mb-6">
              3.500.000₫ <span className="text-xs sm:text-sm font-medium text-slate-500">/ trọn gói</span>
            </div>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[var(--text)] mb-6 sm:mb-8 flex-1">
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Thiết kế 1 trang dài tối ưu chuyển đổi</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Tặng Tên miền quốc tế + SSL bảo mật</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Miễn phí Hosting tốc độ cao 1 năm</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Nút gọi, Chat Zalo, Form gửi email</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Bàn giao nhanh trong 2-3 ngày</span></li>
            </ul>
            <button
              onClick={() => handleSelectPlan('Landing Page Giới Thiệu (3.5 Triệu)')}
              className="w-full h-11 sm:h-12 bg-[var(--primary)] text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-[var(--primary-dark)] transition-all duration-200 cursor-pointer"
            >
              Đăng Ký Tư Vấn Gói Này
            </button>
          </div>

          {/* Plan 2 (Popular) */}
          <div className="scroll-reveal stagger-2 bg-white border-2 border-[var(--primary)] rounded-3xl p-6 sm:p-8 flex flex-col relative shadow-xl">
            <div className="absolute -top-3.5 right-6 bg-[var(--accent)] text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full">
              PHỔ BIẾN NHẤT
            </div>
            <h3 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold mb-1.5">Doanh Nghiệp Chuẩn SEO</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-4 sm:mb-5">Hoàn hảo cho công ty, thương hiệu xây dựng uy tín lâu dài.</p>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] font-['Inter_Tight'] mb-5 sm:mb-6">
              6.800.000₫ <span className="text-xs sm:text-sm font-medium text-slate-500">/ trọn gói</span>
            </div>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[var(--text)] mb-6 sm:mb-8 flex-1">
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Đầy đủ Trang Chủ, Giới Thiệu, Dịch Vụ, Tin Tức, Liên Hệ</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Hệ thống CMS quản trị tiếng Việt cực dễ dùng</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Tối ưu điểm Google PageSpeed 95+</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Tặng Tên miền .com + Hosting SSD 1 năm</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Hướng dẫn SEO bài viết lên Top Google</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Bàn giao trong 4-6 ngày làm việc</span></li>
            </ul>
            <button
              onClick={() => handleSelectPlan('Doanh Nghiệp Chuẩn SEO (6.8 Triệu)')}
              className="w-full h-11 sm:h-12 bg-[var(--primary)] text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-[var(--primary-dark)] transition-all duration-200 cursor-pointer"
            >
              Đăng Ký Tư Vấn Gói Này
            </button>
          </div>

          {/* Plan 3 */}
          <div className="scroll-reveal stagger-3 bg-white border border-[var(--border)] rounded-3xl p-6 sm:p-8 flex flex-col shadow-[var(--shadow)]">
            <h3 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold mb-1.5">Bán Hàng &amp; E-Commerce</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-4 sm:mb-5">Dành cho shop bán lẻ, nhãn hàng thời trang, mỹ phẩm, đồ gia dụng.</p>
            <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] font-['Inter_Tight'] mb-5 sm:mb-6">
              11.500.000₫ <span className="text-xs sm:text-sm font-medium text-slate-500">/ trọn gói</span>
            </div>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[var(--text)] mb-6 sm:mb-8 flex-1">
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Giỏ hàng, Quản lý kho &amp; Biến thể sản phẩm</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Tích hợp thanh toán QR Ngân Hàng, Momo, COD</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Kết nối tự động đơn vị vận chuyển (GHN, GHTK)</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Hệ thống mã giảm giá &amp; Tích điểm khách hàng</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Tặng Hosting cao cấp chịu tải lớn 1 năm</span></li>
              <li className="flex items-center gap-2"><IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" /> <span>Hỗ trợ kỹ thuật 24/7 trọn đời</span></li>
            </ul>
            <button
              onClick={() => handleSelectPlan('Bán Hàng E-Commerce (11.5 Triệu)')}
              className="w-full h-11 sm:h-12 bg-[var(--primary)] text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-[var(--primary-dark)] transition-all duration-200 cursor-pointer"
            >
              Đăng Ký Tư Vấn Gói Này
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
