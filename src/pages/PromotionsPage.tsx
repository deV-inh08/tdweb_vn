import React from 'react';
import { Link } from 'react-router-dom';

export const PromotionsPage: React.FC = () => {
  const coupons = [
    {
      code: 'TDWEB50',
      discount: 'Giảm 50%',
      title: 'Thiết kế website trọn gói',
      desc: 'Áp dụng cho khách hàng đăng ký thiết kế website trong tuần này.',
      expire: 'Hạn dùng: 30/11/2026'
    },
    {
      code: 'HOSTINGFREE',
      discount: 'Miễn phí 100%',
      title: 'Hosting Cloud SSD 1 năm',
      desc: 'Tặng kèm gói Hosting 5GB tốc độ cao khi ký hợp đồng website doanh nghiệp.',
      expire: 'Hạn dùng: Còn 15 suất'
    },
    {
      code: 'AIASSIST',
      discount: 'Tặng 3 Tháng',
      title: 'Trợ Lý Ảo AI Tự Động',
      desc: 'Trải nghiệm miễn phí Chatbot AI thông minh chăm sóc khách hàng 24/7.',
      expire: 'Hạn dùng: 31/12/2026'
    }
  ];

  return (
    <div className="promotions-page">
      <div className="section-container">
        <div className="page-header">
          <div className="hero-pill">
            <span>🏷️ Voucher & Quà Tặng Độc Quyền</span>
          </div>
          <h1 className="page-title">Chương Trình Ưu Đãi Đặc Biệt</h1>
          <p className="page-subtitle">
            Nhập mã voucher để nhận ngay chiết khấu trực tiếp và gói quà tặng dịch vụ giá trị từ TDWeb.
          </p>
        </div>

        <div className="coupons-grid">
          {coupons.map((c, idx) => (
            <div key={idx} className="coupon-card">
              <div className="coupon-left">
                <span className="coupon-discount-text">{c.discount}</span>
                <span className="coupon-tag-lbl">VOUCHER</span>
              </div>
              <div className="coupon-right">
                <h3 className="coupon-title">{c.title}</h3>
                <p className="coupon-desc">{c.desc}</p>
                <div className="coupon-footer-row">
                  <div className="coupon-code-box">
                    <span>Mã: <strong>{c.code}</strong></span>
                  </div>
                  <button
                    type="button"
                    className="btn-copy"
                    onClick={() => {
                      navigator.clipboard?.writeText(c.code);
                      alert(`Đã sao chép mã ${c.code}!`);
                    }}
                  >
                    Sao chép mã
                  </button>
                </div>
                <div className="coupon-expire">{c.expire}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="promotions-cta-box">
          <h2>Bạn Cần Tư Vấn Gói Ưu Đãi Phù Hợp Nhất?</h2>
          <p>Liên hệ ngay với bộ phận chăm sóc khách hàng để nhận báo giá ưu đãi cá nhân hóa.</p>
          <div className="cta-action-row">
            <Link to="/dich-vu" className="btn-primary">
              Xem các gói dịch vụ
            </Link>
            <a href="tel:19006868" className="btn-secondary">
              Gọi hotline: 1900 6868
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
