import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  NavPuzzleIcon,
  NavSaleIcon,
  NavRobotIcon,
  NavTemplatesIcon,
  NavDiscountTagIcon,
  ServiceDropdownIcon
} from './Icons';
import { servicesData } from '../data/services';

export const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const leftColumnServices = servicesData.filter((s) => s.column === 'left');
  const rightColumnServices = servicesData.filter((s) => s.column === 'right');

  const isDichVuActive = location.pathname.startsWith('/dich-vu');

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="brand-logo" aria-label="Trang chủ TDWEB">
          <div className="logo-badge">TD</div>
          <span className="logo-text">
            TDWeb<span className="logo-tld">.vn</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {/* Menu item: Dịch vụ with Dropdown */}
          <div
            className="nav-item-dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className={`nav-button ${isDichVuActive || isServicesOpen ? 'active' : ''}`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              aria-expanded={isServicesOpen}
            >
              <NavPuzzleIcon className="nav-icon" />
              <span>Dịch vụ</span>
              <svg
                className={`chevron-icon ${isServicesOpen ? 'rotate-180' : ''}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown Menu (2 columns matching Image 2 & Image 3) */}
            <div className={`services-dropdown ${isServicesOpen ? 'visible' : ''}`}>
              <div className="dropdown-grid">
                {/* Column 1 */}
                <div className="dropdown-col">
                  {leftColumnServices.map((item) => (
                    <Link
                      key={item.id}
                      to={`/dich-vu/${item.slug}`}
                      className="dropdown-item"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="dropdown-item-icon">
                        <ServiceDropdownIcon type={item.iconType} />
                      </div>
                      <div className="dropdown-item-body">
                        <div className="dropdown-item-title-row">
                          {item.badge && <span className="hot-badge">{item.badge}</span>}
                          <span className="dropdown-item-title">{item.title}</span>
                        </div>
                        <p className="dropdown-item-desc">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Column Divider */}
                <div className="dropdown-divider" />

                {/* Column 2 */}
                <div className="dropdown-col">
                  {rightColumnServices.map((item) => (
                    <Link
                      key={item.id}
                      to={`/dich-vu/${item.slug}`}
                      className="dropdown-item"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="dropdown-item-icon">
                        <ServiceDropdownIcon type={item.iconType} />
                      </div>
                      <div className="dropdown-item-body">
                        <div className="dropdown-item-title-row">
                          {item.badge && <span className="hot-badge">{item.badge}</span>}
                          <span className="dropdown-item-title">{item.title}</span>
                        </div>
                        <p className="dropdown-item-desc">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom footer bar in dropdown */}
              <div className="dropdown-footer">
                <Link to="/dich-vu" className="view-all-services-link">
                  Xem tất cả giải pháp & bảng giá dịch vụ →
                </Link>
              </div>
            </div>
          </div>

          {/* Sale giá tốt */}
          <NavLink
            to="/sale-gia-tot"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <NavSaleIcon className="nav-icon" />
            <span>Sale giá tốt</span>
          </NavLink>

          {/* Trợ Lý Ảo */}
          <NavLink
            to="/tro-ly-ao"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <NavRobotIcon className="nav-icon" />
            <span>Trợ Lý Ảo</span>
          </NavLink>

          {/* Kho giao diện */}
          <NavLink
            to="/kho-giao-dien"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <NavTemplatesIcon className="nav-icon" />
            <span>Kho giao diện</span>
          </NavLink>

          {/* (LƯU Ý: Đã bỏ Tin tức theo yêu cầu!) */}

          {/* Ưu đãi */}
          <NavLink
            to="/uu-dai"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <NavDiscountTagIcon className="nav-icon" />
            <span>Ưu đãi</span>
          </NavLink>

          {/* Divider */}
          <div className="nav-vertical-divider" />

          {/* CTA Hotline / Contact button */}
          <a href="tel:0900000000" className="nav-cta-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Tư vấn ngay</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <div className="mobile-section-title">Dịch vụ nổi bật</div>
            <div className="mobile-services-grid">
              {servicesData.map((item) => (
                <Link
                  key={item.id}
                  to={`/dich-vu/${item.slug}`}
                  className="mobile-service-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ServiceDropdownIcon type={item.iconType} />
                  <div>
                    <div className="font-semibold text-sm">
                      {item.title} {item.badge && <span className="hot-badge-mini">{item.badge}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mobile-nav-links">
              <NavLink
                to="/sale-gia-tot"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <NavSaleIcon className="nav-icon" />
                <span>Sale giá tốt</span>
              </NavLink>
              <NavLink
                to="/tro-ly-ao"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <NavRobotIcon className="nav-icon" />
                <span>Trợ Lý Ảo</span>
              </NavLink>
              <NavLink
                to="/kho-giao-dien"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <NavTemplatesIcon className="nav-icon" />
                <span>Kho giao diện</span>
              </NavLink>
              <NavLink
                to="/uu-dai"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <NavDiscountTagIcon className="nav-icon" />
                <span>Ưu đãi</span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
