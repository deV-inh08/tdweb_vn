import {
  WebcraftLogoIcon,
  IconSpeedSprint,
  IconSeoGrowth,
  IconMobileTouch,
  IconShieldWarranty,
  IconStepSurvey,
  IconStepPrototype,
  IconStepCoding,
  IconStepLaunch
} from '../CustomIcons.tsx';

/** SECTION 3: Æ¯u Ä‘iá»ƒm & Quy trĂ¬nh 4 bÆ°á»›c */
export default function Features() {
  return (
    <>
      {/* =====================================================================
          SECTION 3: FEATURES & PROCESS (Scroll Reveal with Intersection Observer)
          ===================================================================== */}
      <section className="bg-white border-y border-[var(--border)] py-12 md:py-20" id="features">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="inline-flex items-center gap-1.5 bg-[var(--teal-soft)] text-[var(--secondary-dark)] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
              <WebcraftLogoIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
              Cam Kết Chất Lượng Độc Bản
            </span>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-2.5">
              Tại Sao Nên Chọn Giải Pháp Website Tại CNS Dung Trọng?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)]">
              Chúng tôi không bán những giao diện có sẵn rập khuôn. Mỗi website là một công cụ kinh doanh sắc bén.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 md:mb-20">
            <div className="scroll-reveal stagger-1 p-5 sm:p-7 bg-[var(--bg-soft)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/35 hover:-translate-y-1 transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[var(--teal-soft)] rounded-xl flex items-center justify-center mb-3.5 text-[var(--primary)] group-hover:scale-110 transition-transform">
                <IconSpeedSprint className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--secondary-dark)]" color="#0F766E" />
              </div>
              <h3 className="font-['Inter_Tight'] text-base sm:text-lg font-bold mb-1.5">Tốc Độ Tải Dưới 1.2 Giây</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">Tối ưu hóa hình ảnh WebP, CDN toàn cầu và mã nguồn sạch giúp giữ chân khách hàng ngay từ giây đầu tiên.</p>
            </div>

            <div className="scroll-reveal stagger-2 p-5 sm:p-7 bg-[var(--bg-soft)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/35 hover:-translate-y-1 transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[var(--teal-soft)] rounded-xl flex items-center justify-center mb-3.5 text-[var(--primary)] group-hover:scale-110 transition-transform">
                <IconSeoGrowth className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--secondary-dark)]" color="#0F766E" />
              </div>
              <h3 className="font-['Inter_Tight'] text-base sm:text-lg font-bold mb-1.5">Chuẩn SEO On-page Google</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">Cấu trúc schema rich snippets, sitemap tự động và thẻ OpenGraph hoàn chỉnh giúp bài viết và sản phẩm lên top nhanh.</p>
            </div>

            <div className="scroll-reveal stagger-3 p-5 sm:p-7 bg-[var(--bg-soft)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/35 hover:-translate-y-1 transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[var(--teal-soft)] rounded-xl flex items-center justify-center mb-3.5 text-[var(--primary)] group-hover:scale-110 transition-transform">
                <IconMobileTouch className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--secondary-dark)]" color="#0F766E" />
              </div>
              <h3 className="font-['Inter_Tight'] text-base sm:text-lg font-bold mb-1.5">Mobile First Tối Ưu Tỉ Lệ Chốt</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">Nút gọi, chat Zalo, đặt hàng nhanh nổi bật ngay vị trí ngón cái, gia tăng tỷ lệ khách điền form và gọi tư vấn.</p>
            </div>

            <div className="scroll-reveal stagger-4 p-5 sm:p-7 bg-[var(--bg-soft)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/35 hover:-translate-y-1 transition-all group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[var(--teal-soft)] rounded-xl flex items-center justify-center mb-3.5 text-[var(--primary)] group-hover:scale-110 transition-transform">
                <IconShieldWarranty className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--secondary-dark)]" color="#0F766E" />
              </div>
              <h3 className="font-['Inter_Tight'] text-base sm:text-lg font-bold mb-1.5">Bảo Hành Kỹ Thuật Trọn Đời</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">Hỗ trợ backup dữ liệu hàng tuần, phòng chống mã độc và hỗ trợ cập nhật nội dung bất cứ khi nào bạn cần.</p>
            </div>
          </div>

          {/* 4-Step Process */}
          <div id="process">
            <div className="scroll-reveal text-center max-w-xl mx-auto mb-8 md:mb-10">
              <span className="inline-flex items-center gap-1.5 bg-[var(--teal-soft)] text-[var(--secondary-dark)] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
                <WebcraftLogoIcon className="w-3.5 h-3.5 text-[var(--primary)]" />
                Minh Bạch &amp; Nhanh Chóng
              </span>
              <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)]">
                Quy Trình Triển Khai 4 Bước Chuyên Nghiệp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="scroll-reveal stagger-1 bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-5 sm:p-7 hover:-translate-y-1.5 transition-all group">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-gradient">01</div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--teal-soft)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconStepSurvey className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--secondary-dark)]" color="#0F766E" />
                  </div>
                </div>
                <h4 className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-[var(--text)] mb-1.5">Khảo Sát &amp; Tư Vấn Miễn Phí</h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">Tiếp nhận nhu cầu, phân tích đối thủ cạnh tranh và đề xuất mẫu website cùng lộ trình chi phí tối ưu nhất.</p>
              </div>

              <div className="scroll-reveal stagger-2 bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-5 sm:p-7 hover:-translate-y-1.5 transition-all group">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-gradient">02</div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--teal-soft)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconStepPrototype className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--secondary-dark)]" color="#0F766E" />
                  </div>
                </div>
                <h4 className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-[var(--text)] mb-1.5">Thiết Kế Bản Vẽ &amp; Duyệt Mẫu</h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">Khách hàng trải nghiệm bản demo trực tiếp với màu sắc nhận diện thương hiệu, chỉnh sửa đến khi hoàn toàn hài lòng.</p>
              </div>

              <div className="scroll-reveal stagger-3 bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-5 sm:p-7 hover:-translate-y-1.5 transition-all group">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-gradient">03</div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--teal-soft)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconStepCoding className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--secondary-dark)]" color="#0F766E" />
                  </div>
                </div>
                <h4 className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-[var(--text)] mb-1.5">Lập Trình &amp; Nhập Liệu Chuẩn SEO</h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">Triển khai code tối ưu tốc độ cao, cấu hình cổng thanh toán, domain, SSL và nhập liệu sản phẩm mẫu ban đầu.</p>
              </div>

              <div className="scroll-reveal stagger-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl p-5 sm:p-7 hover:-translate-y-1.5 transition-all group">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-gradient">04</div>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--teal-soft)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconStepLaunch className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--secondary-dark)]" color="#0F766E" />
                  </div>
                </div>
                <h4 className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-[var(--text)] mb-1.5">Bàn Giao &amp; Hướng Dẫn 1-1</h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">Bàn giao toàn bộ mã nguồn, hướng dẫn quản trị dễ dàng qua video/Zalo và kích hoạt bảo hành kỹ thuật trọn đời.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
