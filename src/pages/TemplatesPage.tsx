import React, { useState } from 'react';

export const TemplatesPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả (400+)' },
    { id: 'ecommerce', name: 'Website Bán Hàng' },
    { id: 'corporate', name: 'Doanh Nghiệp / Công Ty' },
    { id: 'realestate', name: 'Bất Động Sản' },
    { id: 'landing', name: 'Landing Page' },
    { id: 'service', name: 'Dịch Vụ / Spa / Y Tế' }
  ];

  const templates = [
    {
      id: 1,
      name: 'Web4s Tech Modern',
      cat: 'corporate',
      catName: 'Doanh Nghiệp',
      tag: 'Phổ biến nhất',
      color: 'linear-gradient(135deg, #1d68ed 0%, #0d47a1 100%)'
    },
    {
      id: 2,
      name: 'E-Shop Trendy Fashion',
      cat: 'ecommerce',
      catName: 'Bán Hàng',
      tag: 'Bán chạy',
      color: 'linear-gradient(135deg, #ff6b00 0%, #d84315 100%)'
    },
    {
      id: 3,
      name: 'LandCity Real Estate Luxury',
      cat: 'realestate',
      catName: 'Bất Động Sản',
      tag: 'Dự án hot',
      color: 'linear-gradient(135deg, #0288d1 0%, #01579b 100%)'
    },
    {
      id: 4,
      name: 'ConvertX Landing Page',
      cat: 'landing',
      catName: 'Landing Page',
      tag: 'Tỷ lệ chốt cao',
      color: 'linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%)'
    },
    {
      id: 5,
      name: 'Beauty Spa & Healthcare',
      cat: 'service',
      catName: 'Dịch Vụ Spa',
      tag: 'Giao diện mới',
      color: 'linear-gradient(135deg, #e91e63 0%, #ad1457 100%)'
    },
    {
      id: 6,
      name: 'MegaMart Multi-Vendor',
      cat: 'ecommerce',
      catName: 'Bán Hàng',
      tag: 'Chuẩn SEO',
      color: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)'
    }
  ];

  const filtered = selectedCat === 'all' ? templates : templates.filter((t) => t.cat === selectedCat);

  return (
    <div className="templates-page">
      <div className="section-container">
        <div className="page-header">
          <div className="hero-pill">
            <span>🎨 Kho Giao Diện 400+ Mẫu Đẹp</span>
          </div>
          <h1 className="page-title">Kho Giao Diện Website Chuyên Nghiệp</h1>
          <p className="page-subtitle">
            Khám phá hơn 400+ mẫu giao diện độc quyền được tối ưu UX/UI chuẩn quốc tế, tương thích mượt mà trên mọi thiết bị di động.
          </p>
        </div>

        {/* Filter categories */}
        <div className="category-filter-bar">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`cat-pill ${selectedCat === c.id ? 'active' : ''}`}
              onClick={() => setSelectedCat(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="templates-grid">
          {filtered.map((item) => (
            <div key={item.id} className="template-card">
              <div className="template-preview" style={{ background: item.color }}>
                <span className="template-tag">{item.tag}</span>
                <div className="template-screen-mockup">
                  <div className="mockup-bar" />
                  <div className="mockup-content">
                    <span className="mockup-logo">TD</span>
                    <span className="mockup-title">{item.name}</span>
                  </div>
                </div>
              </div>
              <div className="template-info">
                <span className="template-category">{item.catName}</span>
                <h3 className="template-name">{item.name}</h3>
                <div className="template-actions">
                  <button
                    type="button"
                    className="btn-primary-outline w-full"
                    onClick={() => alert(`Xem thử giao diện mẫu: ${item.name}`)}
                  >
                    Xem Demo Thực Tế
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
