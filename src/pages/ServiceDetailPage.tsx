import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ServiceDropdownIcon } from '../components/Icons';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();

  // If no slug is specified, show the full services catalog
  if (!slug) {
    return (
      <div className="services-catalog-page">
        <div className="section-container">
          <div className="page-header">
            <span className="section-badge">Danh mục dịch vụ</span>
            <h1 className="page-title">Tất Cả Dịch Vụ Thiết Kế & Chăm Sóc Website</h1>
            <p className="page-subtitle">
              Chọn dịch vụ phù hợp nhất với mô hình kinh doanh và mục tiêu tăng trưởng của bạn.
            </p>
          </div>

          <div className="services-grid-cards">
            {servicesData.map((item) => (
              <Link key={item.id} to={`/dich-vu/${item.slug}`} className="service-card">
                <div className="service-card-header">
                  <div className="service-card-icon">
                    <ServiceDropdownIcon type={item.iconType} />
                  </div>
                  {item.badge && <span className="service-badge">{item.badge}</span>}
                </div>
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.description}</p>
                <div className="service-card-footer">
                  <span className="service-link-text">Xem chi tiết dịch vụ →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/dich-vu" replace />;
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug);

  return (
    <div className="service-detail-page">
      {/* Detail Hero */}
      <section className="service-detail-hero">
        <div className="section-container">
          <div className="service-breadcrumb">
            <Link to="/">Trang chủ</Link>
            <span>/</span>
            <Link to="/dich-vu">Dịch vụ</Link>
            <span>/</span>
            <span className="current">{service.title}</span>
          </div>

          <div className="service-hero-content">
            <div className="service-hero-icon">
              <ServiceDropdownIcon type={service.iconType} />
            </div>
            <div className="service-hero-text">
              <div className="service-hero-title-wrap">
                {service.badge && <span className="service-badge">{service.badge}</span>}
                <h1 className="service-main-title">{service.title}</h1>
              </div>
              <p className="service-main-subtitle">
                {service.details?.tagline || service.description}
              </p>
              <div className="service-hero-actions">
                <a href="#consult-form" className="btn-primary">
                  Đăng ký tư vấn miễn phí
                </a>
                <span className="service-price-pill">
                  {service.details?.priceRange ? `Giá tham khảo: ${service.details.priceRange}` : 'Báo giá theo yêu cầu'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details & Features */}
      <section className="service-body-section">
        <div className="section-container">
          <div className="service-body-grid">
            <div className="service-main-col">
              <div className="card-box">
                <h2 className="box-title">Đặc Điểm & Lợi Thế Vượt Trội</h2>
                <p className="box-lead">{service.description}</p>
                
                {service.details?.features && (
                  <ul className="features-checklist">
                    {service.details.features.map((feat, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.details?.targetAudience && (
                  <div className="target-audience-box">
                    <strong>Phù hợp cho:</strong> {service.details.targetAudience}
                  </div>
                )}
              </div>

              {/* Consultation Form Box */}
              <div id="consult-form" className="card-box consultation-card">
                <h3 className="box-title">Nhận Báo Giá & Bản Demo Miễn Phí</h3>
                <p className="text-muted">Chuyên viên tư vấn giải pháp sẽ liên hệ lại với bạn trong vòng 15 phút.</p>
                <form className="consult-form" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ trong ít phút.'); }}>
                  <div className="form-group">
                    <label>Họ và tên *</label>
                    <input type="text" placeholder="Nguyễn Văn A" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại *</label>
                    <input type="tel" placeholder="0909 123 456" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Ghi chú yêu cầu thêm</label>
                    <textarea rows={3} placeholder="Ví dụ: Cần website bán hàng mỹ phẩm, giao diện tối giản..." className="form-input" />
                  </div>
                  <button type="submit" className="btn-primary w-full">Gửi yêu cầu tư vấn</button>
                </form>
              </div>
            </div>

            {/* Sidebar with other services */}
            <div className="service-sidebar-col">
              <div className="sidebar-box">
                <h3 className="sidebar-title">Các Dịch Vụ Khác</h3>
                <div className="sidebar-links-list">
                  {otherServices.map((item) => (
                    <Link
                      key={item.id}
                      to={`/dich-vu/${item.slug}`}
                      className="sidebar-service-link"
                    >
                      <span className="link-title">{item.title}</span>
                      {item.badge && <span className="hot-badge-mini">{item.badge}</span>}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sidebar-box hotline-banner">
                <h4>Cần Hỗ Trợ Nhanh?</h4>
                <p>Gọi ngay hotline tư vấn 24/7 của chúng tôi:</p>
                <a href="tel:0909123456" className="hotline-phone">1900 6868</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
