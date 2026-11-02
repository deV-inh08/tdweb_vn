import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ServiceDropdownIcon } from '../components/Icons';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-pill">
              <span className="pill-pulse" />
              <span>Nền tảng thiết kế Website số 1 Việt Nam</span>
            </div>
            <h1 className="hero-title">
              Kiến Tạo Website Chuẩn SEO <br />
              <span className="text-gradient">Bứt Phá Doanh Thu Vượt Trội</span>
            </h1>
            <p className="hero-subtitle">
              Hơn 400+ mẫu giao diện độc quyền, tối ưu trải nghiệm người dùng, tích hợp Trợ lý ảo AI và giải pháp thương mại điện tử toàn diện.
            </p>
            <div className="hero-actions">
              <Link to="/kho-giao-dien" className="btn-primary">
                Khám phá kho giao diện
              </Link>
              <Link to="/sale-gia-tot" className="btn-secondary">
                Xem gói khuyến mãi hot 🔥
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-num">400+</span>
                <span className="stat-label">Mẫu website đa ngành</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">24+</span>
                <span className="stat-label">Năm kinh nghiệm</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">100k+</span>
                <span className="stat-label">Khách hàng tin tưởng</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">99.9%</span>
                <span className="stat-label">Thời gian uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-overview-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Hệ sinh thái dịch vụ</span>
            <h2 className="section-title">Giải Pháp Thiết Kế & Chăm Sóc Website Toàn Diện</h2>
            <p className="section-desc">
              Đáp ứng trọn vẹn nhu cầu từ cá nhân kinh doanh, startup cho tới doanh nghiệp và tập đoàn lớn.
            </p>
          </div>

          <div className="services-grid-cards">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={`/dich-vu/${service.slug}`}
                className="service-card"
              >
                <div className="service-card-header">
                  <div className="service-card-icon">
                    <ServiceDropdownIcon type={service.iconType} />
                  </div>
                  {service.badge && (
                    <span className="service-badge">{service.badge}</span>
                  )}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <div className="service-card-footer">
                  <span className="service-link-text">Chi tiết giải pháp →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Nav Highlight Section */}
      <section className="section highlights-section">
        <div className="section-container">
          <div className="highlights-grid">
            <div className="highlight-card bg-orange-gradient">
              <div className="highlight-tag">🔥 Giá sốc trong tuần</div>
              <h3>Sale Giá Tốt</h3>
              <p>Giảm tới 50% trọn gói website kèm tên miền quốc tế và hosting SSD siêu tốc.</p>
              <Link to="/sale-gia-tot" className="btn-light">
                Xem ngay ưu đãi
              </Link>
            </div>

            <div className="highlight-card bg-blue-gradient">
              <div className="highlight-tag">🤖 Công nghệ 4.0</div>
              <h3>Trợ Lý Ảo AI</h3>
              <p>Tự động tư vấn chốt đơn 24/7, đồng bộ đa kênh và nâng tầm trải nghiệm khách hàng.</p>
              <Link to="/tro-ly-ao" className="btn-light">
                Trải nghiệm AI
              </Link>
            </div>

            <div className="highlight-card bg-indigo-gradient">
              <div className="highlight-tag">🎨 Mẫu mã phong phú</div>
              <h3>Kho Giao Diện</h3>
              <p>Thư viện giao diện chuẩn UI/UX, hỗ trợ xem trước trực tiếp trên điện thoại & máy tính.</p>
              <Link to="/kho-giao-dien" className="btn-light">
                Duyệt 400+ mẫu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
