import React from 'react';

// Main Nav Icons
export const NavPuzzleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 11h-2V7a2 2 0 0 0-2-2h-4V3a2 2 0 0 0-4 0v2H3a2 2 0 0 0-2 2v4h2a2 2 0 1 1 0 4H1v4a2 2 0 0 0 2 2h4v2a2 2 0 0 0 4 0v-2h4a2 2 0 0 0 2-2v-4h2a2 2 0 1 0 0-4z"
      fill="#1d68ed"
    />
    <path
      d="M17 11h2a2 2 0 1 1 0 4h-2v4a2 2 0 0 1-2 2h-4v-2a2 2 0 0 0-4 0v2"
      stroke="#ff6b00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="18" r="2.5" fill="#ff6b00" />
  </svg>
);

export const NavSaleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="16" height="15" rx="3" fill="#1d68ed" />
    <circle cx="6.5" cy="7.5" r="1.5" fill="#fff" />
    <circle cx="13.5" cy="13.5" r="1.5" fill="#fff" />
    <line x1="14" y1="7" x2="6" y2="14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M13 14l3.5-3.5a1.5 1.5 0 0 1 2.12 0l3.38 3.38a1.5 1.5 0 0 1 0 2.12L18.5 19.5a1.5 1.5 0 0 1-2.12 0L13 16v-2z"
      fill="#ff6b00"
    />
  </svg>
);

export const NavRobotIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="3" r="2" fill="#1d68ed" />
    <rect x="11" y="4" width="2" height="3" fill="#90caf9" />
    <rect x="5" y="7" width="14" height="10" rx="4" fill="#e3f2fd" stroke="#1d68ed" strokeWidth="1.5" />
    <circle cx="9" cy="11.5" r="1.5" fill="#1d68ed" />
    <circle cx="15" cy="11.5" r="1.5" fill="#1d68ed" />
    <path d="M10 14.5c.5.5 1.5.8 2 .8s1.5-.3 2-.8" stroke="#1d68ed" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="2" y="10" width="3" height="4" rx="1" fill="#90caf9" />
    <rect x="19" y="10" width="3" height="4" rx="1" fill="#90caf9" />
    <path d="M8 17v4m8-4v4" stroke="#1d68ed" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const NavTemplatesIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="11" r="7" fill="#ff6b00" />
    <circle cx="15" cy="13" r="6" fill="#1d68ed" />
  </svg>
);

export const NavDiscountTagIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 10V4a1 1 0 0 1 1-1h6l10 10-7 7L3 10z"
      fill="#1d68ed"
    />
    <circle cx="7" cy="7" r="1.5" fill="#fff" />
    <path
      d="M12 9l6 6m-5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      stroke="#fff"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M17 5l4 4-7 7"
      stroke="#ff6b00"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Dropdown item icons matching the user's screenshots
export const ServiceDropdownIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-10 h-10" }) => {
  const containerClass = `dropdown-icon-wrapper ${className}`;
  switch (type) {
    case 'web4s':
      return (
        <div className={`${containerClass} bg-blue-600`}>
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1.8 14.5l-2.6-7.5h1.5l1.8 5.6 1.7-5.6h1.5l1.7 5.6 1.8-5.6h1.5l-2.6 7.5h-1.6l-1.8-5.5-1.8 5.5z" />
          </svg>
        </div>
      );
    case 'landing-page':
      return (
        <div className={`${containerClass} bg-blue-50 text-blue-600`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1d68ed" />
            <line x1="8" y1="21" x2="16" y2="21" stroke="#ff6b00" />
            <line x1="12" y1="17" x2="12" y2="21" stroke="#ff6b00" />
            <circle cx="12" cy="9" r="2.5" stroke="#ff6b00" fill="#fff" />
            <path d="M9 13a3 3 0 0 1 6 0" stroke="#1d68ed" />
          </svg>
        </div>
      );
    case 'brand-identity':
      return (
        <div className={`${containerClass} bg-orange-50 text-orange-600`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="7" r="3" stroke="#ff6b00" />
            <path d="M6 19l4-8 4 8" stroke="#1d68ed" />
            <line x1="7.5" y1="16" x2="12.5" y2="16" stroke="#ff6b00" />
            <line x1="12" y1="11" x2="12" y2="21" stroke="#1d68ed" strokeDasharray="2 2" />
          </svg>
        </div>
      );
    case 'maintenance':
      return (
        <div className={`${containerClass} bg-blue-50 text-blue-600`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="14" height="11" rx="2" fill="#1d68ed" />
            <polygon points="12,15 15,19 17,15" fill="#1d68ed" />
            <circle cx="18" cy="18" r="4.5" fill="#ff6b00" stroke="#fff" strokeWidth="1.5" />
            <path d="M16.5 18h3m-1.5-1.5v3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'seo-website':
      return (
        <div className={`${containerClass} bg-blue-50`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="7" width="16" height="14" rx="2" fill="#1d68ed" />
            <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="#ff6b00" strokeWidth="2.5" />
            <circle cx="12" cy="14" r="3" stroke="#fff" strokeWidth="2" />
            <line x1="14" y1="16" x2="16.5" y2="18.5" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'ecommerce-website':
      return (
        <div className={`${containerClass} bg-orange-50`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="8" width="16" height="13" rx="2" fill="#ff6b00" />
            <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="#1d68ed" strokeWidth="2.5" />
            <circle cx="12" cy="13.5" r="1.5" fill="#fff" />
            <path d="M9.5 15.5c.6.9 1.5 1.5 2.5 1.5s1.9-.6 2.5-1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );
    case 'all-in-one':
      return (
        <div className={`${containerClass} bg-orange-50`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 3 2 8 12 13 22 8 12 3" fill="#ff6b00" />
            <path d="M5 10v6c0 3.87 3.13 7 7 7s7-3.13 7-7v-6" fill="#1d68ed" />
            <line x1="22" y1="8" x2="22" y2="15" stroke="#ff6b00" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'real-estate':
      return (
        <div className={`${containerClass} bg-blue-50`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="7" width="18" height="14" rx="2" fill="#1d68ed" />
            <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="#1d68ed" />
            <rect x="10" y="11" width="4" height="6" rx="0.5" fill="#ff6b00" />
            <rect x="9" y="13" width="6" height="2" rx="0.5" fill="#ff6b00" />
          </svg>
        </div>
      );
    default:
      return (
        <div className={`${containerClass} bg-blue-100 text-blue-600`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      );
  }
};
