
interface Props {
  setCategoryFilter: (c: string) => void;
}

/** ChĂ¢n trang: thĂ´ng tin cĂ´ng ty, liĂªn káº¿t */
export default function Footer({ setCategoryFilter }: Props) {
  return (
    <>
      {/* =====================================================================
          FOOTER
          ===================================================================== */}
      <footer className="bg-[#0F172A] text-[#CBD5E1] py-16 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <h4 className="font-['Inter_Tight'] text-xl md:text-2xl text-white font-bold mb-2">
              CÔNG TY TNHH CÔNG NGHỆ SỐ DUNG TRỌNG
            </h4>
            <div className="text-xs text-[var(--teal-soft)] font-medium mb-3">
              Tên viết tắt: CÔNG TY TNHH CNS DUNG TRỌNG &bull; MST: 1900640597
            </div>
            <p className="text-sm leading-relaxed text-[#94A3B8] mb-4">
              Cung cấp các giải pháp công nghệ thông tin, phần mềm, thiết kế website chuẩn SEO và chuyển đổi số toàn diện cho cá nhân, cửa hàng, tổ chức và doanh nghiệp.
            </p>
            <div className="text-xs text-white space-y-1">
              <div><strong>Người đại diện pháp luật:</strong> Lý Hữu Trọng</div>
              <div>
                <strong>Hotline / Zalo 24/7:</strong>{' '}
                <a href="tel:0832555500" className="text-[var(--teal-soft)] hover:underline font-semibold">0832.555.500</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-sm font-semibold text-white mb-4">Dự Án Mẫu</h5>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li><a href="#showcase" onClick={() => setCategoryFilter('ecommerce')} className="hover:text-[var(--secondary)] transition-all duration-200">Website Bán Hàng</a></li>
              <li><a href="#showcase" onClick={() => setCategoryFilter('corporate')} className="hover:text-[var(--secondary)] transition-all duration-200">Doanh Nghiệp &amp; B2B</a></li>
              <li><a href="#showcase" onClick={() => setCategoryFilter('tech')} className="hover:text-[var(--secondary)] transition-all duration-200">Công Nghệ &amp; SaaS</a></li>
              <li><a href="#showcase" onClick={() => setCategoryFilter('fb')} className="hover:text-[var(--secondary)] transition-all duration-200">Nhà Hàng &amp; F&amp;B</a></li>
              <li><a href="#showcase" onClick={() => setCategoryFilter('realestate')} className="hover:text-[var(--secondary)] transition-all duration-200">Bất Động Sản</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-sm font-semibold text-white mb-4">Liên Kết Nhanh</h5>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li><a href="#hero" className="hover:text-[var(--secondary)] transition-all duration-200">Về Đầu Trang</a></li>
              <li><a href="#features" className="hover:text-[var(--secondary)] transition-all duration-200">Ưu Điểm Vượt Trội</a></li>
              <li><a href="#process" className="hover:text-[var(--secondary)] transition-all duration-200">Quy Trình 4 Bước</a></li>
              <li><a href="#pricing" className="hover:text-[var(--secondary)] transition-all duration-200">Bảng Giá Dịch Vụ</a></li>
              <li><a href="#consultation" className="hover:text-[var(--secondary)] transition-all duration-200">Biểu Mẫu Nhận Báo Giá</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-sm font-semibold text-white mb-4">Trụ Sở &amp; Chi Nhánh</h5>
            <div className="text-xs leading-relaxed text-[#94A3B8] space-y-2.5">
              <p>
                <strong className="text-white">📍 Trụ sở chính:</strong><br />
                Số 17 Lê Văn Năm, Khóm 17, Phường Bạc Liêu, Tỉnh Cà Mau, Việt Nam
              </p>
              <p>
                <strong className="text-white">📍 Chi nhánh TP. Hồ Chí Minh:</strong><br />
                18/1/21 Hoàng Hữu Nam, Phường Long Bình, Thành phố Hồ Chí Minh<br />
                <span className="text-[11px] opacity-85">(MST chi nhánh: 1900640597-001)</span>
              </p>
              <p>
                📞 Điện thoại: <a href="tel:0832555500" className="text-white hover:underline">0832555500</a>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#94A3B8] gap-4">
          <div>&copy; {new Date().getFullYear()} CÔNG TY TNHH CÔNG NGHỆ SỐ DUNG TRỌNG (MST: 1900640597). All rights reserved.</div>
          <div className="flex gap-5">
            <span>Bảo mật thông tin</span>
            <span>Cam kết tiến độ</span>
            <span>Bảo hành trọn đời</span>
          </div>
        </div>
      </footer>
    </>
  );
}
