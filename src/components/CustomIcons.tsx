/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Bộ Icon Vector Độc Quyền May Đo - Webcraft Studio
 * Thiết kế thủ công theo phong cách Studio Hand-drawn Vector
 * Đồng bộ với nét vẽ doodle, font Caveat và hệ màu Mint & Forest Green.
 */

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  secondaryColor?: string;
}

// 1. Logo Thương Hiệu Webcraft: Mầm Cây Sáng Tạo & Khung Thiết Kế Số
export const WebcraftLogoIcon: React.FC<IconProps> = ({
  className = "w-7 h-7",
  color = "#08482D",
  secondaryColor = "#DAE7C7"
}) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Nền mầm lá cong hữu cơ */}
    <path
      d="M18 3.5C18 3.5 30 7.8 30 20C30 27.2 24.2 32.5 18 32.5C11.8 32.5 6 27.2 6 20C6 7.8 18 3.5 18 3.5Z"
      fill={secondaryColor}
    />
    {/* Lớp khung lá lõi sâu */}
    <path
      d="M18 7C18 7 26.5 10.5 26.5 19.8C26.5 24.8 22.8 28.8 18 28.8C13.2 28.8 9.5 24.8 9.5 19.8C9.5 10.5 18 7 18 7Z"
      fill={color}
    />
    {/* Gân lá vẽ tay studio uốn cong như ngòi bút vẽ */}
    <path
      d="M18 28V14M18 14C18 14 21 16.5 23.5 16M18 18.5C18 18.5 15 20.8 12.5 21.2"
      stroke="#F5F8EF"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Giọt sương sáng tạo */}
    <circle cx="23.5" cy="11.5" r="1.6" fill="#F5F8EF" />
  </svg>
);

// 2. Ưu Điểm: Tốc Độ Tải Dưới 1.2s (Đồng hồ cơ học & Làn gió động học vút bay)
export const IconSpeedSprint: React.FC<IconProps> = ({
  className = "w-6 h-6",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Vòng tròn đồng hồ vẽ tay mở */}
    <path
      d="M16 6C10.5 6 6 10.5 6 16C6 21.5 10.5 26 16 26C21.5 26 26 21.5 26 16C26 12.5 24.2 9.5 21.5 7.8"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Đỉnh nút bấm studio */}
    <path d="M14 3.5H18" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M16 3.5V6" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    {/* Kim tốc độ vút sang phải */}
    <path d="M16 16L22.5 10" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    <circle cx="16" cy="16" r="2.5" fill={color} />
    {/* Làn gió tốc độ siêu thanh */}
    <path d="M3.5 12H8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="1 3" />
    <path d="M2.5 16H6.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M4 20H8.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="1 3" />
    {/* Vệt sáng tốc độ */}
    <path d="M23 7L25 5" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 3. Ưu Điểm: Chuẩn SEO On-page Google (Kính lúp & Biểu đồ cột vươn đỉnh)
export const IconSeoGrowth: React.FC<IconProps> = ({
  className = "w-6 h-6",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Vành kính lúp hữu cơ */}
    <circle cx="14" cy="14" r="9" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    {/* Cán kính lúp nghệ thuật */}
    <path d="M20.5 20.5L28 28" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    {/* Biểu đồ cột tăng trưởng bên trong kính */}
    <path d="M10 17V15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M13.5 17V12.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M17 17V9.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Đường mũi tên tăng trưởng bứt phá */}
    <path
      d="M9.5 14L13.5 11L18 8M18 8H15M18 8V11"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 4. Ưu Điểm: Mobile First Tối Ưu Chốt Đơn (Điện thoại uốn cong & Sóng chạm cảm ứng)
export const IconMobileTouch: React.FC<IconProps> = ({
  className = "w-6 h-6",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Thân điện thoại bo tròn viền tay */}
    <rect
      x="8"
      y="4"
      width="16"
      height="24"
      rx="4.5"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Loa thoại mini & Nút home */}
    <path d="M14 7.5H18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="24" r="1.2" fill={color} />
    {/* Màn hình hiển thị nội dung mẫu */}
    <line x1="11" y1="11" x2="21" y2="11" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="11" y1="14.5" x2="18" y2="14.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    {/* Điểm chạm tương tác ngón tay với 2 vòng sóng lan tỏa */}
    <circle cx="16" cy="18.5" r="1.5" fill={color} />
    <path
      d="M13 18.5C13 16.8 14.3 15.5 16 15.5C17.7 15.5 19 16.8 19 18.5"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Tia lấp lánh phản hồi */}
    <path d="M26 10L28 8.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M27 13H29" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 5. Ưu Điểm: Bảo Hành Kỹ Thuật Trọn Đời (Khiên bảo vệ hữu cơ & Ổ khóa an tâm)
export const IconShieldWarranty: React.FC<IconProps> = ({
  className = "w-6 h-6",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tấm khiên vẽ tay studio vững chãi */}
    <path
      d="M16 4C16 4 25 5.5 25 12C25 20 18.5 26.5 16 28C13.5 26.5 7 20 7 12C7 5.5 16 4 16 4Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Ổ khóa an toàn trung tâm */}
    <rect x="12.5" y="14" width="7" height="6.5" rx="1.5" stroke={color} strokeWidth="2" />
    <path
      d="M14 14V11.5C14 10.4 14.9 9.5 16 9.5C17.1 9.5 18 10.4 18 11.5V14"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Lỗ khóa */}
    <circle cx="16" cy="17" r="0.9" fill={color} />
  </svg>
);

// 6. Quy Trình 01: Khảo Sát & Tư Vấn (Cuốn sổ phác thảo ý tưởng & Kính ngắm)
export const IconStepSurvey: React.FC<IconProps> = ({
  className = "w-8 h-8",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cuốn sổ tay mở trang */}
    <rect x="6" y="6" width="20" height="24" rx="3.5" stroke={color} strokeWidth="2.2" />
    <path d="M11 6V30" stroke={color} strokeWidth="1.8" strokeDasharray="2 3" />
    {/* Các dòng ghi chú phác thảo ý tưởng */}
    <line x1="14" y1="12" x2="22" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="16.5" x2="21" y2="16.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="21" x2="18" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Kính lúp nghiên cứu đối thủ đè góc */}
    <circle cx="24" cy="22" r="5" fill="#F5F8EF" stroke={color} strokeWidth="2.2" />
    <path d="M28 26L32 30" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

// 7. Quy Trình 02: Thiết Kế Bản Vẽ & Duyệt Mẫu (Bảng màu họa sĩ & Cây cọ tạo hình)
export const IconStepPrototype: React.FC<IconProps> = ({
  className = "w-8 h-8",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bảng pha màu nghệ thuật của nhà thiết kế */}
    <path
      d="M18 5C10 5 4 11 4 19C4 26 9 30 15 30C17 30 18.5 28.5 18.5 26.5C18.5 25.5 18 24.8 17.5 24C16.8 23 16 21.8 16 20C16 17.5 18 15.5 20.5 15.5H22C27 15.5 31 11.5 31 6.5C27 5.5 22.5 5 18 5Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Các điểm màu nhận diện thương hiệu */}
    <circle cx="10" cy="14" r="1.8" fill={color} />
    <circle cx="14" cy="9.5" r="1.8" fill={color} />
    <circle cx="21" cy="9.5" r="1.8" fill={color} />
    <circle cx="10.5" cy="21" r="1.8" fill={color} />
    {/* Cọ vẽ sáng tạo */}
    <path d="M22 20L31 29M29 27L32 30" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

// 8. Quy Trình 03: Lập Trình & Tối Ưu Tốc Độ (Ngoặc mã nguồn ôm lấy chồi non)
export const IconStepCoding: React.FC<IconProps> = ({
  className = "w-8 h-8",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cặp ngoặc nhọn code { } vẽ tay */}
    <path
      d="M11 9C9 9 7.5 11 7.5 13V15.5C7.5 17 6 18 4.5 18C6 18 7.5 19 7.5 20.5V23C7.5 25 9 27 11 27"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 9C27 9 28.5 11 28.5 13V15.5C28.5 17 30 18 31.5 18C30 18 28.5 19 28.5 20.5V23C28.5 25 27 27 25 27"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Dấu gạch chéo thẻ đóng / */}
    <line x1="21" y1="10" x2="15" y2="26" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    {/* Mầm lá công nghệ sinh trưởng ở đỉnh */}
    <path
      d="M18 10C18 7 21 5 21 5C21 5 21 8 18 10Z"
      fill={color}
      stroke={color}
      strokeWidth="1.2"
    />
  </svg>
);

// 9. Quy Trình 04: Bàn Giao & Hướng Dẫn 1-1 (Hộp quà thành phẩm tỏa sáng & Tên lửa cất cánh)
export const IconStepLaunch: React.FC<IconProps> = ({
  className = "w-8 h-8",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chiếc hộp bàn giao thành phẩm */}
    <rect x="6" y="14" width="24" height="16" rx="3" stroke={color} strokeWidth="2.2" />
    {/* Nắp hộp mở hé */}
    <path d="M4 14H32" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    <path d="M18 14V30" stroke={color} strokeWidth="2" strokeDasharray="3 3" />
    {/* Tên lửa vút lên từ hộp */}
    <path
      d="M18 4C18 4 22 7 22 12H14C14 7 18 4 18 4Z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Cánh tên lửa */}
    <path d="M14 10L11 12V14H14" stroke={color} strokeWidth="1.8" />
    <path d="M22 10L25 12V14H22" stroke={color} strokeWidth="1.8" />
    {/* Ngôi sao hoàn tất */}
    <path d="M8 8L9.5 5L11 8L13.5 9.5L11 11L9.5 14L8 11L5.5 9.5L8 8Z" fill={color} />
  </svg>
);

// 10. Cam Kết Form 1: Không Ràng Buộc Chi Phí (Thẻ giá mở & Nụ cười thân thiện)
export const IconFreePledge: React.FC<IconProps> = ({
  className = "w-7 h-7",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Thẻ giá vẽ tay */}
    <path
      d="M7 6H15L25 16L17 24L7 14V6Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="11" cy="10" r="1.5" fill={color} />
    {/* Dấu gạch chéo 0đ */}
    <line x1="12" y1="20" x2="20" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="0.9" fill={color} />
    <circle cx="18" cy="18" r="0.9" fill={color} />
  </svg>
);

// 11. Cam Kết Form 2: Bảo Mật Ý Tưởng 100% (Con dấu sáp niêm phong tài liệu độc quyền)
export const IconNdaLock: React.FC<IconProps> = ({
  className = "w-7 h-7",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cuộn tài liệu bí mật */}
    <rect x="6" y="5" width="20" height="22" rx="3" stroke={color} strokeWidth="2.2" />
    <line x1="10" y1="10" x2="22" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="14" x2="18" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Con dấu sáp hoàng gia có ruy băng */}
    <circle cx="21" cy="22" r="5" fill="#F5F8EF" stroke={color} strokeWidth="2.2" />
    <path d="M19 25L17.5 29L20 28L22 30L21.5 25" fill={color} />
    {/* Chữ V tượng trưng cho Verified */}
    <path d="M19.5 21.5L21 23L23 20" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 12. Cam Kết Form 3: Tư Vấn Trực Tiếp Zalo / Hotline (Hội thoại thân thiện & Sóng kết nối)
export const IconDirectChat: React.FC<IconProps> = ({
  className = "w-7 h-7",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bong bóng thoại lớn */}
    <path
      d="M5 14C5 8.5 9.5 4 15 4C20.5 4 25 8.5 25 14C25 19.5 20.5 24 15 24C13.2 24 11.5 23.5 10 22.6L5 24L6.4 19.2C5.5 17.7 5 15.9 5 14Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* 3 chấm thoại tư vấn */}
    <circle cx="10.5" cy="14" r="1.4" fill={color} />
    <circle cx="15" cy="14" r="1.4" fill={color} />
    <circle cx="19.5" cy="14" r="1.4" fill={color} />
    {/* Tia phát sóng trực tiếp */}
    <path d="M26 8C27.8 9.8 28.5 12 28.5 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 13. Nút Gửi: Máy Bay Giấy / Bức Thư Cất Cánh
export const IconSendPaperPlane: React.FC<IconProps> = ({
  className = "w-5 h-5",
  color = "currentColor"
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.5 2.5L2 10.5L9.5 14.5L14 21.5L21.5 2.5Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.5 14.5L21.5 2.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 14. Kính Xem Trước Mẫu Website (Inspect Lens)
export const IconInspectEye: React.FC<IconProps> = ({
  className = "w-4 h-4",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3.2" stroke={color} strokeWidth="2.2" />
    <circle cx="13" cy="11" r="1" fill={color} />
  </svg>
);

// 15. Dấu Tích Xác Nhận Chuẩn Studio (Studio Hand-drawn Checkmark)
export const IconStudioCheck: React.FC<IconProps> = ({
  className = "w-4 h-4",
  color = "#08482D"
}) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 10.5L8 14L15.5 5.5"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 16. Dấu Tích Hoạt Họa Nút Submit (Animated Success Check-Mark)
export const IconAnimatedCheck: React.FC<IconProps> = ({
  className = "w-6 h-6",
  color = "currentColor"
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="12"
      cy="12"
      r="9.5"
      stroke={color}
      strokeWidth="2"
      className="btn-circle-draw"
    />
    <path
      d="M7.5 12.2L10.5 15.2L16.5 8.8"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="btn-check-draw"
    />
  </svg>
);

