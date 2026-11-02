import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="section-container">
        <div className="not-found-box">
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Không Tìm Thấy Trang</h2>
          <p className="not-found-desc">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển sang đường dẫn khác.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              Quay lại Trang chủ
            </Link>
            <Link to="/dich-vu" className="btn-secondary">
              Xem Dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
