import {
  IconStudioCheck
} from '../CustomIcons.tsx';
import { useData } from '../../context/DataContext';

interface Props {
  handleSelectPlan: (planTitle: string) => void;
}

/** SECTION 4: Bảng giá */
export default function Pricing({ handleSelectPlan }: Props) {
  const { pricingPlans } = useData();

  return (
    <>
      {/* =====================================================================
          SECTION 4: ESTIMATED PRICING (Scroll Reveal with Intersection Observer)
          ===================================================================== */}
      <section className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 md:py-20" id="pricing">
        <div className="scroll-reveal text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1 bg-[var(--teal-soft)] text-[var(--secondary-dark)] text-xs font-semibold px-3.5 py-1 rounded-full mb-3">
            Bảng Giá Minh Bạch
          </span>
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)] mb-2.5">
            Gói Dịch Vụ Thiết Kế Website Phù Hợp
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            Không phí ẩn, không phụ phí duy trì hàng tháng. Cam kết chỉ nhận thanh toán khi khách hàng ưng ý.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {pricingPlans.map((plan, idx) => (
            <div
              key={plan.id}
              className={`scroll-reveal is-visible stagger-${(idx % 3) + 1} bg-white ${
                plan.isPopular
                  ? 'border-2 border-[var(--primary)] relative shadow-xl'
                  : 'border border-[var(--border)] shadow-[var(--shadow)]'
              } rounded-3xl p-6 sm:p-8 flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 right-6 bg-[var(--accent)] text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badgeText || 'PHỔ BIẾN NHẤT'}
                </div>
              )}
              <h3 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold mb-1.5">{plan.title}</h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-4 sm:mb-5">{plan.description}</p>
              <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)] font-['Inter_Tight'] mb-5 sm:mb-6">
                {plan.price} <span className="text-xs sm:text-sm font-medium text-slate-500">{plan.unit}</span>
              </div>
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[var(--text)] mb-6 sm:mb-8 flex-1">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <IconStudioCheck className="w-4 h-4 text-[var(--primary)] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSelectPlan(`${plan.title} (${plan.price})`)}
                className="w-full h-11 sm:h-12 bg-[var(--primary)] text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-[var(--primary-dark)] transition-all duration-200 cursor-pointer"
              >
                {plan.ctaLabel || 'Đăng Ký Tư Vấn Gói Này'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
