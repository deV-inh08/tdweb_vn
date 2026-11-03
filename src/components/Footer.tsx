import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: About */}
          <div className="footer-col brand-col">
            <Link to="/" className="brand-logo footer-logo">
              <div className="logo-badge">TD</div>
              <span className="logo-text">TDWeb<span className="logo-tld">.vn</span></span>
            </Link>
            <p className="footer-desc">
              Giải pháp thiết kế website chuyên nghiệp, chuyển đổi số toàn diện cho doanh nghiệp. Chuẩn SEO, tốc độ cao và bảo mật tối đa.
            </p>
            <div className="footer-contact-info">
              <p>📍 Hotline: 1900 6868 - 0909 123 456</p>
              <p>✉️ Email: support@tdweb.vn</p>
              <p>🏢 Địa chỉ: Hà Nội & TP. Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>

          {/* Col 2: Dịch vụ website */}
          <div className="footer-col">
            <h4 className="footer-heading">Dịch Vụ Thiết Kế</h4>
            <ul className="footer-links">
              {servicesData.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <Link to={`/dich-vu/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Giải pháp doanh nghiệp */}
          <div className="footer-col">
            <h4 className="footer-heading">Giải Pháp Nổi Bật</h4>
            <ul className="footer-links">
              {servicesData.slice(4, 8).map((s) => (
                <li key={s.id}>
                  <Link to={`/dich-vu/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Khám phá */}
          <div className="footer-col">
            <h4 className="footer-heading">Khám Phá Thêm</h4>
            <ul className="footer-links">
              <li>
                <Link to="/sale-gia-tot">Sale giá tốt</Link>
              </li>
              <li>
                <Link to="/tro-ly-ao">Trợ Lý Ảo AI</Link>
              </li>
              <li>
                <Link to="/kho-giao-dien">Kho giao diện 400+ mẫu</Link>
              </li>
              <li>
                <Link to="/uu-dai">Chương trình ưu đãi</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TDWeb.vn. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Chính sách bảo mật</a>
            <span>•</span>
            <a href="#terms">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
