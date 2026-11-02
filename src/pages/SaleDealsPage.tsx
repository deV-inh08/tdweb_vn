import React from 'react';

export const SaleDealsPage: React.FC = () => {
  const deals = [
    {
      id: 1,
      title: 'Combo Khởi Nghiệp Toàn Diện',
      originalPrice: '12.000.000đ',
      salePrice: '5.990.000đ',
      discount: '-50%',
      badge: 'Bán chạy nhất',
      features: [
        'Website chuẩn SEO bảo hành trọn đời',
        'Miễn phí 01 Tên miền quốc tế .com',
        'Miễn phí Hosting SSD Cloud 5GB tốc độ cao',
        'Tặng chứng chỉ bảo mật SSL vĩnh viễn',
        'Tặng Trợ lý ảo AI CSKH 3 tháng'
      ]
    },
    {
      id: 2,
      title: 'Gói Website Bán Hàng E-Commerce Pro',
      originalPrice: '18.000.000đ',
      salePrice: '9.490.000đ',
      discount: '-47%',
      badge: 'Doanh nghiệp',
      features: [
        'Giao diện giỏ hàng, thanh toán tự động đa kênh',
        'Tích hợp VNPAY, Momo, ShopeePay, Viettel Post',
        'Miễn phí Hosting SSD dung lượng không giới hạn',
        'Đồng bộ hóa Facebook Shop & TikTok Shop',
        'Hỗ trợ cấu hình banner quảng cáo độc quyền'
      ]
    },
    {
      id: 3,
      title: 'Thiết Kế Landing Page Thần Tốc 48H',
      originalPrice: '4.500.000đ',
      salePrice: '1.990.000đ',
      discount: '-55%',
      badge: 'Hot Deal',
      features: [
        'Bàn giao hoàn thiện trong vòng 48 giờ',
        'Tối ưu tỷ lệ chuyển đổi form đăng ký & gọi điện',
        'Tặng gói tối ưu tốc độ Google PageSpeed > 90',
        'Tích hợp Pixel Facebook, Google Tag Manager',
        'Miễn phí hướng dẫn chạy quảng cáo chuyển đổi'
      ]
    }
  ];

  return (
    <div className="sale-deals-page">
      <div className="section-container">
        <div className="page-header">
          <div className="hero-pill">
            <span>🔥 Ưu đãi sốt dẻo có hạn</span>
          </div>
          <h1 className="page-title">Sale Giá Tốt - Bùng Nổ Ưu Đãi Website</h1>
          <p className="page-subtitle">
            Cơ hội sở hữu website chuyên nghiệp, chuẩn SEO với chi phí tiết kiệm lên đến 50%. Duy nhất trong tháng này!
          </p>
        </div>

        <div className="deals-grid">
          {deals.map((deal) => (
            <div key={deal.id} className="deal-card">
              <div className="deal-badge-row">
                <span className="deal-badge">{deal.badge}</span>
                <span className="discount-tag">{deal.discount}</span>
              </div>
              <h3 className="deal-title">{deal.title}</h3>
              <div className="deal-pricing">
                <span className="sale-price">{deal.salePrice}</span>
                <span className="original-price">{deal.originalPrice}</span>
              </div>
              <ul className="deal-features">
                {deal.features.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-mark">✓</span> {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="btn-primary w-full"
                onClick={() => alert(`Bạn đã chọn ${deal.title}! Tư vấn viên sẽ liên hệ ngay.`)}
              >
                Nhận ưu đãi ngay
              </button>
            </div>
          ))}
        </div>

        <div className="sale-guarantee-box">
          <div className="guarantee-item">
            <span className="guarantee-icon">🛡️</span>
            <div>
              <strong>Bảo hành trọn đời</strong>
              <p>Cam kết hỗ trợ kỹ thuật và bảo trì website xuyên suốt quá trình vận hành</p>
            </div>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-icon">⚡</span>
            <div>
              <strong>Bàn giao đúng hẹn</strong>
              <p>Hoàn tiền 100% nếu trễ tiến độ thỏa thuận trong hợp đồng dịch vụ</p>
            </div>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-icon">🎁</span>
            <div>
              <strong>Tặng kèm quà giá trị</strong>
              <p>Tên miền + Hosting + SSL miễn phí kèm hướng dẫn sử dụng chi tiết</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
