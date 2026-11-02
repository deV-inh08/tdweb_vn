import React, { useState } from 'react';

export const VirtualAssistantPage: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ role: 'ai' | 'user'; text: string }>>([
    {
      role: 'ai',
      text: 'Xin chào! Em là Trợ lý ảo AI của TDWeb. Em có thể tư vấn gói website, báo giá, hoặc gợi ý mẫu giao diện phù hợp với ngành hàng của bạn. Bạn đang muốn làm web trong lĩnh vực nào ạ?'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInputText('');

    setTimeout(() => {
      let reply = 'Cảm ơn bạn đã chia sẻ! Với nhu cầu này, TDWeb đề xuất bạn tham khảo gói Thiết Kế Website Chuẩn SEO hoặc Website Bán Hàng Pro với kho 400+ mẫu giao diện độc quyền. Bạn có muốn xem demo trực tiếp không ạ?';
      if (userMsg.toLowerCase().includes('giá') || userMsg.toLowerCase().includes('chi phí')) {
        reply = 'Hiện TDWeb đang có chương trình Sale Giảm Giá 50%, gói trọn gói chỉ từ 1.990.000đ - 5.990.000đ đã bao gồm Tên miền + Hosting SSD + SSL miễn phí trọn đời!';
      }
      setMessages((prev) => [...prev, { role: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <div className="virtual-assistant-page">
      <div className="section-container">
        <div className="page-header">
          <div className="hero-pill">
            <span>🤖 AI Automation & Smart Chatbot</span>
          </div>
          <h1 className="page-title">Trợ Lý Ảo AI - Tự Động Hóa Chăm Sóc Khách Hàng 24/7</h1>
          <p className="page-subtitle">
            Tích hợp công nghệ trí tuệ nhân tạo thế hệ mới trực tiếp vào website của bạn, giúp phản hồi khách hàng trong 1 giây, tăng gấp 3 lần tỷ lệ chốt đơn.
          </p>
        </div>

        <div className="ai-demo-container">
          <div className="ai-features-side">
            <h3 className="features-side-title">Tính Năng Vượt Trội Của Trợ Lý Ảo:</h3>
            <div className="ai-feature-card">
              <div className="ai-feat-icon">⚡</div>
              <div>
                <strong>Phản hồi siêu tốc 24/7/365</strong>
                <p>Không bỏ lỡ khách hàng tiềm năng kể cả nửa đêm hay ngày lễ tết.</p>
              </div>
            </div>
            <div className="ai-feature-card">
              <div className="ai-feat-icon">🧠</div>
              <div>
                <strong>Học sâu kiến thức doanh nghiệp</strong>
                <p>Huấn luyện AI với toàn bộ dữ liệu sản phẩm, catalog và chính sách bán hàng của bạn.</p>
              </div>
            </div>
            <div className="ai-feature-card">
              <div className="ai-feat-icon">📲</div>
              <div>
                <strong>Đồng bộ đa kênh tự động</strong>
                <p>Kết nối thông suốt Website, Zalo OA, Fanpage Facebook và Telegram.</p>
              </div>
            </div>
          </div>

          <div className="ai-chat-box">
            <div className="chat-box-header">
              <div className="chat-avatar">🤖</div>
              <div>
                <div className="chat-bot-name">TDWeb AI Assistant</div>
                <div className="chat-bot-status"><span className="online-dot" /> Đang trực tuyến</div>
              </div>
            </div>

            <div className="chat-messages-area">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-bubble-wrap ${msg.role === 'user' ? 'user-side' : 'ai-side'}`}>
                  <div className={`chat-bubble ${msg.role === 'user' ? 'bubble-user' : 'bubble-ai'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form className="chat-input-bar" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Nhập câu hỏi thử nghiệm (vd: Báo giá website bán hàng)..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="chat-text-input"
              />
              <button type="submit" className="chat-send-btn">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
