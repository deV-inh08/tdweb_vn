import {
  IconStudioCheck
} from '../CustomIcons.tsx';

/** ThĂ´ng bĂ¡o gá»­i form thĂ nh cĂ´ng */
export default function Toast({ showToast }: { showToast: boolean }) {
  return (
    <>
      {/* =====================================================================
          SUCCESS TOAST
          ===================================================================== */}
      <div className={`toast-notification ${showToast ? 'is-visible' : ''}`} role="status">
        <div className="w-8 h-8 rounded-full bg-[var(--teal-soft)] flex items-center justify-center shrink-0">
          <IconStudioCheck className="w-5 h-5 text-[var(--primary)]" />
        </div>
        <div>
          <div className="font-bold text-sm">Đã tiếp nhận yêu cầu thành công!</div>
          <div className="text-xs opacity-90">Chuyên viên CNS Dung Trọng sẽ liên hệ lại qua Zalo/Điện thoại trong vòng 30 phút.</div>
        </div>
      </div>
    </>
  );
}
