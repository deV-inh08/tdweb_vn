import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Layers,
  CreditCard,
  LogOut,
  ExternalLink,
  Plus,
  Search,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle2,
  Download,
  Phone,
  Mail,
  RotateCcw,
  X,
  Menu,
  Sparkles,
} from 'lucide-react';
import { WebcraftLogoIcon } from '../../components/CustomIcons';
import { CATEGORY_LABELS, useAppStore } from '../../store/useAppStore';
import type {
  LeadItem,
  LeadStatus,
  PricingPlan,
  TemplateCategory,
  TemplateItem,
} from '../../types';

type AdminTab = 'overview' | 'leads' | 'templates' | 'pricing';

const STATUS_META: Record<
  LeadStatus,
  { label: string; badgeClass: string; dotClass: string }
> = {
  new: {
    label: 'Mới gửi',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    dotClass: 'bg-blue-500',
  },
  contacted: {
    label: 'Đang tư vấn',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    dotClass: 'bg-amber-500',
  },
  quoted: {
    label: 'Đã báo giá',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    dotClass: 'bg-purple-500',
  },
  won: {
    label: 'Đã chốt HĐ',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotClass: 'bg-emerald-500',
  },
  lost: {
    label: 'Đã hủy',
    badgeClass: 'bg-slate-100 text-slate-600 border-slate-200',
    dotClass: 'bg-slate-400',
  },
};

export default function AdminDashboardPage() {
  const {
    templates,
    pricingPlans,
    leads,
    settings,
    isAuthenticated,
    logout,
    addTemplate,
    updateTemplate,
    deleteTemplate,
    toggleTemplateVisibility,
    resetTemplates,
    addPricingPlan,
    updatePricingPlan,
    deletePricingPlan,
    resetPricingPlans,
    addLead,
    updateLeadStatus,
    updateLeadNotes,
    deleteLead,
  } = useAppStore();

  const visibleTemplates = templates.filter((t) => t.isVisible !== false);

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [bannerNotice, setBannerNotice] = useState<string | null>(null);
  const [modalError, setModalError] = useState<string | null>(null);

  // Leads state
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    industry: 'Bán lẻ / Thời trang / Mỹ phẩm',
    template: '',
    budget: '5 - 10 triệu (Doanh nghiệp chuẩn SEO)',
    notes: '',
    status: 'new' as LeadStatus,
    adminNotes: '',
  });

  // Templates state
  const [tplSearch, setTplSearch] = useState('');
  const [tplCatFilter, setTplCatFilter] = useState<string>('all');
  const [editingTemplate, setEditingTemplate] = useState<TemplateItem | null>(null);
  const [isTplModalOpen, setIsTplModalOpen] = useState(false);
  const [tplForm, setTplForm] = useState({
    title: '',
    category: 'ecommerce' as TemplateCategory,
    url: 'https://demo.webcraft.vn',
    desc: '',
    pageSpeed: '99/100',
    deliveryTime: '3 ngày',
    primaryColor: '#08482D',
    bannerBg: 'linear-gradient(135deg, #182a20 0%, #2f4e3c 100%)',
    thumbnailImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
    isVisible: true,
  });

  // Pricing state
  const [editingPlan, setEditingPlan] = useState<PricingPlan | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [planForm, setPlanForm] = useState({
    title: '',
    description: '',
    price: '',
    unit: '/ trọn gói',
    featuresText: '',
    isPopular: false,
    badgeText: 'PHỔ BIẾN NHẤT',
    ctaLabel: 'Đăng Ký Tư Vấn Gói Này',
  });

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const notify = (msg: string) => {
    setBannerNotice(msg);
    setTimeout(() => {
      setBannerNotice((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  // KPI metrics
  const newLeadsCount = leads.filter((l) => (l.status || 'new') === 'new').length;
  const wonLeadsCount = leads.filter((l) => l.status === 'won').length;

  // Filtered Leads
  const filteredLeads = leads.filter((l) => {
    const statusMatch =
      leadStatusFilter === 'all' || (l.status || 'new') === leadStatusFilter;
    const q = leadSearch.trim().toLowerCase();
    const searchMatch =
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.phone.toLowerCase().includes(q) ||
      l.id.toLowerCase().includes(q) ||
      l.template.toLowerCase().includes(q) ||
      l.industry.toLowerCase().includes(q);
    return statusMatch && searchMatch;
  });

  // Filtered Templates
  const filteredTemplates = templates.filter((t) => {
    const catMatch = tplCatFilter === 'all' || t.category === tplCatFilter;
    const q = tplSearch.trim().toLowerCase();
    const searchMatch =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.desc.toLowerCase().includes(q) ||
      t.categoryName.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  // Handlers: Template Modal
  const openCreateTemplate = () => {
    setModalError(null);
    setEditingTemplate(null);
    setTplForm({
      title: '',
      category: 'ecommerce',
      url: 'https://demo.webcraft.vn',
      desc: '',
      pageSpeed: '99/100',
      deliveryTime: '3 ngày',
      primaryColor: '#08482D',
      bannerBg: 'linear-gradient(135deg, #182a20 0%, #2f4e3c 100%)',
      thumbnailImage:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      isVisible: true,
    });
    setIsTplModalOpen(true);
  };

  const openEditTemplate = (item: TemplateItem) => {
    setModalError(null);
    setEditingTemplate(item);
    setTplForm({
      title: item.title,
      category: item.category,
      url: item.url,
      desc: item.desc,
      pageSpeed: item.pageSpeed,
      deliveryTime: item.deliveryTime,
      primaryColor: item.primaryColor,
      bannerBg: item.bannerBg,
      thumbnailImage: item.thumbnailImage,
      isVisible: item.isVisible !== false,
    });
    setIsTplModalOpen(true);
  };

  const handleSaveTemplate = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError(null);
    const categoryName = CATEGORY_LABELS[tplForm.category];

    if (editingTemplate) {
      const res = await updateTemplate(editingTemplate.id, {
        ...tplForm,
        categoryName,
      });
      if (!res.ok) {
        setModalError(res.error || 'Dữ liệu không hợp lệ');
        return;
      }
      notify(`Đã cập nhật mẫu "${tplForm.title}"!`);
    } else {
      const res = await addTemplate({
        ...tplForm,
        categoryName,
      });
      if (!res.ok) {
        setModalError(res.error || 'Dữ liệu không hợp lệ');
        return;
      }
      notify(`Đã thêm mẫu website mới "${tplForm.title}"!`);
    }
    setIsTplModalOpen(false);
  };

  // Handlers: Pricing Modal
  const openCreatePlan = () => {
    setModalError(null);
    setEditingPlan(null);
    setPlanForm({
      title: '',
      description: '',
      price: '4.900.000₫',
      unit: '/ trọn gói',
      featuresText:
        'Thiết kế chuẩn UX/UI độc quyền\nTặng Tên miền .com + Hosting SSD 1 năm\nBảo hành kỹ thuật trọn đời',
      isPopular: false,
      badgeText: 'PHỔ BIẾN NHẤT',
      ctaLabel: 'Đăng Ký Tư Vấn Gói Này',
    });
    setIsPlanModalOpen(true);
  };

  const openEditPlan = (plan: PricingPlan) => {
    setModalError(null);
    setEditingPlan(plan);
    setPlanForm({
      title: plan.title,
      description: plan.description,
      price: plan.price,
      unit: plan.unit,
      featuresText: plan.features.join('\n'),
      isPopular: Boolean(plan.isPopular),
      badgeText: plan.badgeText || 'PHỔ BIẾN NHẤT',
      ctaLabel: plan.ctaLabel || 'Đăng Ký Tư Vấn Gói Này',
    });
    setIsPlanModalOpen(true);
  };

  const handleSavePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError(null);
    const features = planForm.featuresText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingPlan) {
      const res = await updatePricingPlan(editingPlan.id, {
        title: planForm.title,
        description: planForm.description,
        price: planForm.price,
        unit: planForm.unit,
        features,
        isPopular: planForm.isPopular,
        badgeText: planForm.badgeText,
        ctaLabel: planForm.ctaLabel,
      });
      if (!res.ok) {
        setModalError(res.error || 'Dữ liệu không hợp lệ');
        return;
      }
      notify(`Đã cập nhật gói "${planForm.title}"!`);
    } else {
      const res = await addPricingPlan({
        title: planForm.title,
        description: planForm.description,
        price: planForm.price,
        unit: planForm.unit,
        features,
        isPopular: planForm.isPopular,
        badgeText: planForm.badgeText,
        ctaLabel: planForm.ctaLabel,
      });
      if (!res.ok) {
        setModalError(res.error || 'Dữ liệu không hợp lệ');
        return;
      }
      notify(`Đã thêm gói dịch vụ "${planForm.title}"!`);
    }
    setIsPlanModalOpen(false);
  };

  // Handlers: Export CSV Leads
  const handleExportLeadsCsv = () => {
    const headers = [
      'Mã YC',
      'Họ tên',
      'Số điện thoại',
      'Email',
      'Lĩnh vực',
      'Mẫu quan tâm',
      'Ngân sách',
      'Trạng thái',
      'Ghi chú khách',
      'Ghi chú Admin',
      'Thời gian',
    ];
    const rows = leads.map((l) => [
      l.id,
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${l.phone || ''}"`,
      `"${l.email || ''}"`,
      `"${l.industry || ''}"`,
      `"${l.template || ''}"`,
      `"${l.budget || ''}"`,
      STATUS_META[l.status || 'new'].label,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
      `"${(l.adminNotes || '').replace(/"/g, '""')}"`,
      new Date(l.timestamp).toLocaleString('vi-VN'),
    ]);
    const csvContent =
      '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `danh-sach-khach-hang-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    notify('Đã xuất danh sách khách hàng ra file Excel (CSV)!');
  };

  const handleCreateManualLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalError(null);
    const res = await addLead(newLeadForm);
    if (!res.ok) {
      setModalError(res.error || 'Thông tin khách hàng không hợp lệ');
      return;
    }
    setIsAddLeadOpen(false);
    setNewLeadForm({
      name: '',
      phone: '',
      email: '',
      industry: 'Bán lẻ / Thời trang / Mỹ phẩm',
      template: '',
      budget: '5 - 10 triệu (Doanh nghiệp chuẩn SEO)',
      notes: '',
      status: 'new',
      adminNotes: '',
    });
    notify('Đã thêm khách hàng mới vào danh sách!');
  };

  const navItems: { id: AdminTab; label: string; icon: React.ReactNode; badge?: number }[] = [
    {
      id: 'overview',
      label: 'Tổng Quan',
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      id: 'leads',
      label: 'Khách Tư Vấn (CRM)',
      icon: <Users className="w-4 h-4" />,
      badge: newLeadsCount > 0 ? newLeadsCount : undefined,
    },
    {
      id: 'templates',
      label: 'Kho Giao Diện Mẫu',
      icon: <Layers className="w-4 h-4" />,
      badge: templates.length,
    },
    {
      id: 'pricing',
      label: 'Bảng Giá Dịch Vụ',
      icon: <CreditCard className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans">
      {/* SIDEBAR DESKTOP & MOBILE */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0c1a13] text-white flex flex-col transition-transform duration-200 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#DAE7C7] flex items-center justify-center shrink-0">
              <WebcraftLogoIcon className="w-5 h-5 text-[#08482D]" />
            </div>
            <div>
              <div className="font-['Inter_Tight'] font-bold text-sm tracking-tight text-white">
                {settings.shortName}
              </div>
              <div className="text-[11px] text-[#DAE7C7]/80 font-medium">
                Admin CMS Portal
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3.5 space-y-1 flex-1">
          {navItems.map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileSidebarOpen(false);
                }}
                style={
                  active
                    ? { backgroundColor: '#08482D', color: '#FFFFFF' }
                    : undefined
                }
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? 'bg-[#08482D] text-white shadow-sm'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </span>
                {item.badge !== undefined && (
                  <span
                    className={`px-2 py-0.5 text-[10px] rounded-full font-bold ${
                      active
                        ? 'bg-[#DAE7C7] text-[#08482D]'
                        : 'bg-white/10 text-slate-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            to="/"
            style={{ color: '#DAE7C7' }}
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Xem Trang Chủ Khách</span>
          </Link>
          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-red-300 hover:bg-red-500/10 transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Đăng Xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-slate-900">
                {navItems.find((n) => n.id === activeTab)?.label}
              </h1>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Hệ thống quản trị nội dung và khách hàng {settings.shortName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#08482D] text-white text-xs font-semibold hover:bg-[#063621] transition-all shadow-xs"
            >
              <span>Mở Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* NOTIFICATION BANNER */}
        {bannerNotice && (
          <div
            style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
            className="bg-[#08482D] text-white px-6 py-2.5 text-xs font-semibold flex items-center justify-between shadow-sm"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#DAE7C7]" />
              <span>{bannerNotice}</span>
            </span>
            <button
              type="button"
              onClick={() => setBannerNotice(null)}
              className="text-white/80 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* PAGE BODY */}
        <main className="p-4 sm:p-8 flex-1 max-w-7xl w-full mx-auto">
          {/* ===============================================================
              TAB 1: OVERVIEW
              =============================================================== */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500">
                      Tổng Yêu Cầu Tư Vấn
                    </span>
                    <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="font-['Inter_Tight'] text-2xl font-extrabold text-slate-900">
                    {leads.length}
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mt-1">
                    {newLeadsCount} yêu cầu mới chờ xử lý
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500">
                      Kho Mẫu Website
                    </span>
                    <span className="w-9 h-9 rounded-xl bg-emerald-50 text-[#08482D] flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="font-['Inter_Tight'] text-2xl font-extrabold text-slate-900">
                    {visibleTemplates.length}{' '}
                    <span className="text-xs font-normal text-slate-400">
                      / {templates.length} mẫu
                    </span>
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">
                    Đang hiển thị ngoài trang chủ
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500">
                      Hợp Đồng Đã Chốt
                    </span>
                    <span className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="font-['Inter_Tight'] text-2xl font-extrabold text-slate-900">
                    {wonLeadsCount}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Tỷ lệ chuyển đổi:{' '}
                    {leads.length > 0
                      ? Math.round((wonLeadsCount / leads.length) * 100)
                      : 0}
                    %
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500">
                      Gói Bảng Giá Dịch Vụ
                    </span>
                    <span className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <CreditCard className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="font-['Inter_Tight'] text-2xl font-extrabold text-slate-900">
                    {pricingPlans.length} gói
                  </div>
                  <div className="text-xs text-purple-600 font-semibold mt-1">
                    Đang áp dụng tại mục Báo Giá
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('templates');
                    openCreateTemplate();
                  }}
                  className="bg-white hover:border-[#08482D] p-4 rounded-2xl border border-slate-200 flex items-center gap-3.5 text-left transition-all cursor-pointer shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#DAE7C7] text-[#08482D] flex items-center justify-center shrink-0">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Thêm Mẫu Website Mới
                    </div>
                    <div className="text-xs text-slate-500">
                      Đăng giao diện mới lên thư viện
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('leads')}
                  className="bg-white hover:border-[#08482D] p-4 rounded-2xl border border-slate-200 flex items-center gap-3.5 text-left transition-all cursor-pointer shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Xử Lý Yêu Cầu Tư Vấn ({newLeadsCount} mới)
                    </div>
                    <div className="text-xs text-slate-500">
                      Xem SĐT, nhu cầu và cập nhật trạng thái
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('pricing');
                    openCreatePlan();
                  }}
                  className="bg-white hover:border-[#08482D] p-4 rounded-2xl border border-slate-200 flex items-center gap-3.5 text-left transition-all cursor-pointer shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      Quản Lý Gói Báo Giá
                    </div>
                    <div className="text-xs text-slate-500">
                      Chỉnh sửa giá và quyền lợi các gói
                    </div>
                  </div>
                </button>
              </div>

              {/* Recent Leads Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h2 className="font-['Inter_Tight'] text-base font-bold text-slate-900">
                      Khách Hàng Đăng Ký Tư Vấn Gần Đây
                    </h2>
                    <p className="text-xs text-slate-500">
                      Danh sách yêu cầu tư vấn gửi từ biểu mẫu trang chủ
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('leads')}
                    className="text-xs font-semibold text-[#08482D] hover:underline cursor-pointer"
                  >
                    Xem tất cả ({leads.length}) →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[11px] font-bold uppercase text-slate-500 border-b border-slate-200">
                        <th className="py-3 px-4">Mã YC</th>
                        <th className="py-3 px-4">Khách hàng</th>
                        <th className="py-3 px-4">Mẫu quan tâm & Ngân sách</th>
                        <th className="py-3 px-4">Trạng thái</th>
                        <th className="py-3 px-4 text-right">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {leads.slice(0, 5).map((lead) => {
                        const st = STATUS_META[lead.status || 'new'];
                        return (
                          <tr key={lead.id} className="hover:bg-slate-50/80">
                            <td className="py-3.5 px-4 font-mono font-bold text-slate-700">
                              {lead.id}
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-slate-900">{lead.name}</div>
                              <div className="text-slate-500">{lead.phone}</div>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-[#08482D]">
                                {lead.template}
                              </div>
                              <div className="text-slate-500 text-[11px]">{lead.budget}</div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${st.badgeClass}`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${st.dotClass}`} />
                                {st.label}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedLead(lead);
                                  setActiveTab('leads');
                                }}
                                className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-[#08482D] hover:text-white font-semibold transition-all cursor-pointer"
                              >
                                Chi tiết
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ===============================================================
              TAB 2: LEADS CRM
              =============================================================== */}
          {activeTab === 'leads' && (
            <div className="space-y-5">
              {/* Filter & Actions Bar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                <div className="flex flex-1 flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={leadSearch}
                      onChange={(e) => setLeadSearch(e.target.value)}
                      placeholder="Tìm theo tên khách, SĐT, mã đơn, mẫu web..."
                      className="w-full h-10 pl-9 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-[#08482D] outline-none"
                    />
                  </div>
                  <select
                    value={leadStatusFilter}
                    onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="h-10 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none cursor-pointer"
                  >
                    <option value="all">Tất cả trạng thái ({leads.length})</option>
                    <option value="new">Mới gửi ({leads.filter((l) => (l.status || 'new') === 'new').length})</option>
                    <option value="contacted">Đang tư vấn</option>
                    <option value="quoted">Đã báo giá</option>
                    <option value="won">Đã chốt HĐ</option>
                    <option value="lost">Đã hủy</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleExportLeadsCsv}
                    className="h-10 px-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Xuất CSV</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setModalError(null);
                      setIsAddLeadOpen(true);
                    }}
                    style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
                    className="h-10 px-4 rounded-xl bg-[#08482D] hover:bg-[#063621] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Thêm Khách Hàng</span>
                  </button>
                </div>
              </div>

              {/* Leads Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[11px] font-bold uppercase text-slate-500 border-b border-slate-200">
                        <th className="py-3.5 px-4">Mã / Thời gian</th>
                        <th className="py-3.5 px-4">Thông tin khách hàng</th>
                        <th className="py-3.5 px-4">Nhu cầu & Ngân sách</th>
                        <th className="py-3.5 px-4">Ghi chú</th>
                        <th className="py-3.5 px-4">Trạng thái</th>
                        <th className="py-3.5 px-4 text-right">Hành động</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-10 text-center text-slate-400">
                            Không tìm thấy yêu cầu tư vấn nào phù hợp.
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-slate-50/70 align-top">
                            <td className="py-4 px-4 whitespace-nowrap">
                              <div className="font-mono font-bold text-slate-800">
                                {lead.id}
                              </div>
                              <div className="text-[11px] text-slate-400 mt-0.5">
                                {new Date(lead.timestamp).toLocaleString('vi-VN')}
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="font-bold text-slate-900 text-sm">
                                {lead.name}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="inline-flex items-center gap-1 text-[#08482D] font-semibold hover:underline"
                                >
                                  <Phone className="w-3 h-3" />
                                  {lead.phone}
                                </a>
                                {lead.email && (
                                  <span className="text-slate-400 inline-flex items-center gap-1">
                                    <Mail className="w-3 h-3" />
                                    {lead.email}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                Ngành: {lead.industry}
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="font-semibold text-[#08482D]">
                                Mẫu: {lead.template}
                              </div>
                              <div className="text-slate-600 mt-0.5">{lead.budget}</div>
                            </td>
                            <td className="py-4 px-4 max-w-xs">
                              {lead.notes ? (
                                <p className="text-slate-700 line-clamp-2">{lead.notes}</p>
                              ) : (
                                <span className="text-slate-400 italic">Không có ghi chú</span>
                              )}
                              {lead.adminNotes && (
                                <div className="mt-1.5 p-2 rounded-lg bg-amber-50 border border-amber-200/70 text-[11px] text-amber-900">
                                  <strong>Sale Note:</strong> {lead.adminNotes}
                                </div>
                              )}
                            </td>
                            <td className="py-4 px-4">
                              <select
                                value={lead.status || 'new'}
                                onChange={(e) => {
                                  void updateLeadStatus(lead.id, e.target.value as LeadStatus);
                                  notify(`Đã cập nhật trạng thái ${lead.id}!`);
                                }}
                                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border outline-none cursor-pointer ${
                                  STATUS_META[lead.status || 'new'].badgeClass
                                }`}
                              >
                                <option value="new">Mới gửi</option>
                                <option value="contacted">Đang tư vấn</option>
                                <option value="quoted">Đã báo giá</option>
                                <option value="won">Đã chốt HĐ</option>
                                <option value="lost">Đã hủy</option>
                              </select>
                            </td>
                            <td className="py-4 px-4 text-right whitespace-nowrap">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => setSelectedLead(lead)}
                                  className="p-2 rounded-lg bg-slate-100 hover:bg-[#08482D] hover:text-white text-slate-700 transition-colors cursor-pointer"
                                  title="Ghi chú & Chi tiết"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        `Bạn có chắc muốn xóa yêu cầu của "${lead.name}"?`
                                      )
                                    ) {
                                      void deleteLead(lead.id);
                                      notify(`Đã xóa yêu cầu ${lead.id}`);
                                    }
                                  }}
                                  className="p-2 rounded-lg bg-red-50 hover:bg-red-600 hover:text-white text-red-600 transition-colors cursor-pointer"
                                  title="Xóa yêu cầu"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ===============================================================
              TAB 3: TEMPLATES CRUD
              =============================================================== */}
          {activeTab === 'templates' && (
            <div className="space-y-5">
              {/* Top Filter & Actions */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                <div className="flex flex-1 flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={tplSearch}
                      onChange={(e) => setTplSearch(e.target.value)}
                      placeholder="Tìm tên mẫu website, mô tả..."
                      className="w-full h-10 pl-9 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-[#08482D] outline-none"
                    />
                  </div>
                  <select
                    value={tplCatFilter}
                    onChange={(e) => setTplCatFilter(e.target.value)}
                    className="h-10 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 outline-none cursor-pointer"
                  >
                    <option value="all">Tất cả danh mục ({templates.length})</option>
                    {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        window.confirm(
                          'Khôi phục lại trọn bộ 10 mẫu giao diện mặc định ban đầu?'
                        )
                      ) {
                        void resetTemplates();
                        notify('Đã khôi phục 10 mẫu giao diện gốc!');
                      }
                    }}
                    className="h-10 px-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Khôi phục 10 mẫu gốc</span>
                  </button>
                  <button
                    type="button"
                    onClick={openCreateTemplate}
                    style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
                    className="h-10 px-4 rounded-xl bg-[#08482D] hover:bg-[#063621] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Thêm Mẫu Website</span>
                  </button>
                </div>
              </div>

              {/* Templates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredTemplates.map((item) => {
                  const visible = item.isVisible !== false;
                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-2xl border overflow-hidden flex flex-col transition-all ${
                        visible
                          ? 'border-slate-200 shadow-xs'
                          : 'border-slate-200 opacity-60 bg-slate-50'
                      }`}
                    >
                      <div className="relative h-44 bg-slate-900 overflow-hidden">
                        <img
                          src={item.thumbnailImage}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-[#DAE7C7] text-[#08482D]">
                            {item.categoryName}
                          </span>
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              visible
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-700 text-slate-200'
                            }`}
                          >
                            {visible ? 'Đang hiển thị' : 'Đang ẩn'}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="font-['Inter_Tight'] font-bold text-base">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-300 font-mono truncate">
                            {item.url}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 mb-2">
                          <span className="px-2 py-0.5 rounded bg-slate-100">
                            ⚡ PageSpeed: {item.pageSpeed}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-100">
                            ⏱ Bàn giao: {item.deliveryTime}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 mb-4 flex-1">
                          {item.desc}
                        </p>

                        <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => openEditTemplate(item)}
                            className="flex-1 h-9 rounded-xl bg-slate-100 hover:bg-[#08482D] hover:text-white text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Sửa</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              void toggleTemplateVisibility(item.id);
                              notify(
                                visible
                                  ? `Đã ẩn mẫu "${item.title}" khỏi trang chủ`
                                  : `Đã hiển thị lại mẫu "${item.title}"`
                              );
                            }}
                            className="h-9 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                            title={visible ? 'Ẩn khỏi trang chủ' : 'Hiện lên trang chủ'}
                          >
                            {visible ? (
                              <EyeOff className="w-3.5 h-3.5" />
                            ) : (
                              <Eye className="w-3.5 h-3.5" />
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (
                                window.confirm(
                                  `Bạn có chắc muốn xóa mẫu "${item.title}"?`
                                )
                              ) {
                                void deleteTemplate(item.id);
                                notify(`Đã xóa mẫu "${item.title}"`);
                              }
                            }}
                            className="h-9 px-3 rounded-xl bg-red-50 hover:bg-red-600 hover:text-white text-red-600 text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                            title="Xóa mẫu"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ===============================================================
              TAB 4: PRICING PLANS CRUD
              =============================================================== */}
          {activeTab === 'pricing' && (
            <div className="space-y-5">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-wrap gap-3 items-center justify-between">
                <div>
                  <h2 className="font-['Inter_Tight'] text-sm font-bold text-slate-900">
                    Quản Lý Các Gói Báo Giá Dịch Vụ ({pricingPlans.length} gói)
                  </h2>
                  <p className="text-xs text-slate-500">
                    Hiển thị trực tiếp tại mục "Gói Dịch Vụ Thiết Kế Website Phù Hợp" ngoài trang chủ
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Khôi phục lại 3 gói bảng giá mặc định?')) {
                        void resetPricingPlans();
                        notify('Đã khôi phục 3 gói bảng giá gốc!');
                      }
                    }}
                    className="h-10 px-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Khôi phục gốc</span>
                  </button>
                  <button
                    type="button"
                    onClick={openCreatePlan}
                    style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
                    className="h-10 px-4 rounded-xl bg-[#08482D] hover:bg-[#063621] text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Thêm Gói Dịch Vụ</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`bg-white rounded-2xl p-6 flex flex-col border ${
                      plan.isPopular
                        ? 'border-2 border-[#08482D] shadow-md relative'
                        : 'border-slate-200 shadow-xs'
                    }`}
                  >
                    {plan.isPopular && (
                      <span className="self-start mb-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#08482D] text-white">
                        {plan.badgeText || 'PHỔ BIẾN NHẤT'}
                      </span>
                    )}
                    <h3 className="font-['Inter_Tight'] text-lg font-bold text-slate-900">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 mb-4">{plan.description}</p>
                    <div className="text-2xl font-extrabold text-[#08482D] font-['Inter_Tight'] mb-4">
                      {plan.price}{' '}
                      <span className="text-xs font-normal text-slate-500">{plan.unit}</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700 mb-6 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#08482D] font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => openEditPlan(plan)}
                        className="flex-1 h-9 rounded-xl bg-slate-100 hover:bg-[#08482D] hover:text-white text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Chỉnh sửa gói</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (
                            window.confirm(`Bạn có chắc muốn xóa gói "${plan.title}"?`)
                          ) {
                            void deletePricingPlan(plan.id);
                            notify(`Đã xóa gói "${plan.title}"`);
                          }
                        }}
                        className="h-9 px-3 rounded-xl bg-red-50 hover:bg-red-600 hover:text-white text-red-600 text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* =====================================================================
          MODAL 1: ADD / EDIT TEMPLATE
          ===================================================================== */}
      {isTplModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-slate-900">
                {editingTemplate
                  ? `Chỉnh Sửa Mẫu: ${editingTemplate.title}`
                  : 'Thêm Mẫu Website Mới'}
              </h3>
              <button
                type="button"
                onClick={() => setIsTplModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600">
                {modalError}
              </div>
            )}

            <form onSubmit={handleSaveTemplate} className="space-y-4 text-xs" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Tên mẫu website *
                  </label>
                  <input
                    type="text"
                    value={tplForm.title}
                    onChange={(e) => setTplForm({ ...tplForm, title: e.target.value })}
                    placeholder="VD: Royal Spa & Clinic"
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Danh mục ngành nghề *
                  </label>
                  <select
                    value={tplForm.category}
                    onChange={(e) =>
                      setTplForm({
                        ...tplForm,
                        category: e.target.value as TemplateCategory,
                      })
                    }
                    className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold"
                  >
                    {Object.entries(CATEGORY_LABELS).map(([k, v]) => (
                      <option key={k} value={k}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Điểm PageSpeed
                  </label>
                  <input
                    type="text"
                    value={tplForm.pageSpeed}
                    onChange={(e) =>
                      setTplForm({ ...tplForm, pageSpeed: e.target.value })
                    }
                    placeholder="99/100"
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Thời gian bàn giao
                  </label>
                  <input
                    type="text"
                    value={tplForm.deliveryTime}
                    onChange={(e) =>
                      setTplForm({ ...tplForm, deliveryTime: e.target.value })
                    }
                    placeholder="3 ngày"
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block font-semibold text-slate-700 mb-1">
                    Màu chủ đạo
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={tplForm.primaryColor}
                      onChange={(e) =>
                        setTplForm({ ...tplForm, primaryColor: e.target.value })
                      }
                      className="h-10 w-12 rounded-lg border border-slate-200 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={tplForm.primaryColor}
                      onChange={(e) =>
                        setTplForm({ ...tplForm, primaryColor: e.target.value })
                      }
                      className="w-full h-10 px-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Đường dẫn xem thử (Demo URL) *
                </label>
                <input
                  type="text"
                  value={tplForm.url}
                  onChange={(e) => setTplForm({ ...tplForm, url: e.target.value })}
                  placeholder="https://tenmau.webcraft.vn"
                  className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Link hình ảnh đại diện (Thumbnail URL) *
                </label>
                <input
                  type="url"
                  value={tplForm.thumbnailImage}
                  onChange={(e) =>
                    setTplForm({ ...tplForm, thumbnailImage: e.target.value })
                  }
                  placeholder="https://images.unsplash.com/..."
                  className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mô tả ngắn nổi bật *
                </label>
                <textarea
                  rows={3}
                  value={tplForm.desc}
                  onChange={(e) => setTplForm({ ...tplForm, desc: e.target.value })}
                  placeholder="Mô tả các tính năng nổi bật của mẫu giao diện này..."
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={tplForm.isVisible}
                  onChange={(e) =>
                    setTplForm({ ...tplForm, isVisible: e.target.checked })
                  }
                  className="w-4 h-4 accent-[#08482D]"
                />
                <span className="font-semibold text-slate-700">
                  Hiển thị mẫu này ngay trên trang chủ
                </span>
              </label>

              <div className="flex justify-end gap-2.5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsTplModalOpen(false)}
                  className="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
                  className="h-10 px-5 rounded-xl bg-[#08482D] hover:bg-[#063621] text-white font-semibold cursor-pointer"
                >
                  {editingTemplate ? 'Lưu Thay Đổi' : 'Thêm Vào Kho Mẫu'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: ADD / EDIT PRICING PLAN
          ===================================================================== */}
      {isPlanModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-slate-900">
                {editingPlan
                  ? `Chỉnh Sửa Gói: ${editingPlan.title}`
                  : 'Thêm Gói Báo Giá Mới'}
              </h3>
              <button
                type="button"
                onClick={() => setIsPlanModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600">
                {modalError}
              </div>
            )}

            <form onSubmit={handleSavePlan} className="space-y-4 text-xs" noValidate>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tên gói dịch vụ *
                </label>
                <input
                  type="text"
                  value={planForm.title}
                  onChange={(e) => setPlanForm({ ...planForm, title: e.target.value })}
                  placeholder="VD: Doanh Nghiệp Chuẩn SEO"
                  className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Giá hiển thị *
                  </label>
                  <input
                    type="text"
                    value={planForm.price}
                    onChange={(e) => setPlanForm({ ...planForm, price: e.target.value })}
                    placeholder="6.800.000₫"
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-[#08482D]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Đơn vị tính
                  </label>
                  <input
                    type="text"
                    value={planForm.unit}
                    onChange={(e) => setPlanForm({ ...planForm, unit: e.target.value })}
                    placeholder="/ trọn gói"
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mô tả ngắn
                </label>
                <input
                  type="text"
                  value={planForm.description}
                  onChange={(e) =>
                    setPlanForm({ ...planForm, description: e.target.value })
                  }
                  className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Danh sách quyền lợi (Mỗi dòng 1 tính năng) *
                </label>
                <textarea
                  rows={5}
                  value={planForm.featuresText}
                  onChange={(e) =>
                    setPlanForm({ ...planForm, featuresText: e.target.value })
                  }
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={planForm.isPopular}
                  onChange={(e) =>
                    setPlanForm({ ...planForm, isPopular: e.target.checked })
                  }
                  className="w-4 h-4 accent-[#08482D]"
                />
                <span className="font-semibold text-slate-700">
                  Đánh dấu nổi bật (Gói Phổ Biến Nhất)
                </span>
              </label>

              <div className="flex justify-end gap-2.5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsPlanModalOpen(false)}
                  className="h-10 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
                  className="h-10 px-5 rounded-xl bg-[#08482D] hover:bg-[#063621] text-white font-semibold cursor-pointer"
                >
                  Lưu Gói Báo Giá
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 3: LEAD DETAIL & SALE NOTES
          ===================================================================== */}
      {selectedLead && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#08482D] bg-[#DAE7C7]/60 px-2.5 py-0.5 rounded-full">
                  Mã yêu cầu: {selectedLead.id}
                </span>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-slate-900 mt-1">
                  Khách hàng: {selectedLead.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-4">
              <div className="flex justify-between">
                <span className="text-slate-500">Số điện thoại / Zalo:</span>
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="font-bold text-[#08482D] hover:underline"
                >
                  {selectedLead.phone}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email:</span>
                <span className="font-semibold text-slate-800">
                  {selectedLead.email || 'Chưa cung cấp'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Lĩnh vực:</span>
                <span className="font-semibold text-slate-800">
                  {selectedLead.industry}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mẫu quan tâm:</span>
                <span className="font-bold text-[#08482D]">{selectedLead.template}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Ngân sách dự kiến:</span>
                <span className="font-semibold text-slate-800">{selectedLead.budget}</span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <div className="text-slate-500 mb-1">Ghi chú từ khách hàng:</div>
                <div className="text-slate-800 font-medium">
                  {selectedLead.notes || 'Không có ghi chú thêm.'}
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Cập nhật trạng thái xử lý
                </label>
                <select
                  value={selectedLead.status || 'new'}
                  onChange={(e) => {
                    const nextStatus = e.target.value as LeadStatus;
                    setSelectedLead({ ...selectedLead, status: nextStatus });
                    void updateLeadStatus(selectedLead.id, nextStatus);
                  }}
                  className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold"
                >
                  <option value="new">Mới gửi</option>
                  <option value="contacted">Đang tư vấn</option>
                  <option value="quoted">Đã gửi báo giá</option>
                  <option value="won">Đã chốt hợp đồng</option>
                  <option value="lost">Đã hủy</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Ghi chú nội bộ cho Sale / Kỹ thuật
                </label>
                <textarea
                  rows={3}
                  value={selectedLead.adminNotes || ''}
                  onChange={(e) =>
                    setSelectedLead({ ...selectedLead, adminNotes: e.target.value })
                  }
                  placeholder="Ghi lại kết quả cuộc gọi, yêu cầu riêng của khách..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setSelectedLead(null)}
                  className="h-10 px-4 rounded-xl bg-slate-100 text-slate-800 font-semibold cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
                  onClick={() => {
                    void updateLeadNotes(
                      selectedLead.id,
                      selectedLead.adminNotes || ''
                    );
                    notify(`Đã lưu ghi chú cho khách hàng ${selectedLead.name}!`);
                    setSelectedLead(null);
                  }}
                  className="h-10 px-5 rounded-xl bg-[#08482D] text-white font-semibold cursor-pointer"
                >
                  Lưu Ghi Chú
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 4: ADD MANUAL LEAD
          ===================================================================== */}
      {isAddLeadOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-slate-900">
                Thêm Khách Hàng Tư Vấn (Nhập Thủ Công)
              </h3>
              <button
                type="button"
                onClick={() => setIsAddLeadOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600">
                {modalError}
              </div>
            )}

            <form onSubmit={handleCreateManualLead} className="space-y-3.5 text-xs" noValidate>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Họ tên khách hàng *
                  </label>
                  <input
                    type="text"
                    value={newLeadForm.name}
                    onChange={(e) =>
                      setNewLeadForm({ ...newLeadForm, name: e.target.value })
                    }
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Số điện thoại / Zalo *
                  </label>
                  <input
                    type="tel"
                    value={newLeadForm.phone}
                    onChange={(e) =>
                      setNewLeadForm({ ...newLeadForm, phone: e.target.value })
                    }
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Mẫu website quan tâm
                  </label>
                  <input
                    type="text"
                    value={newLeadForm.template}
                    onChange={(e) =>
                      setNewLeadForm({ ...newLeadForm, template: e.target.value })
                    }
                    placeholder="VD: Aura Luxe Fashion"
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Ngân sách dự kiến
                  </label>
                  <input
                    type="text"
                    value={newLeadForm.budget}
                    onChange={(e) =>
                      setNewLeadForm({ ...newLeadForm, budget: e.target.value })
                    }
                    className="w-full h-10 px-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Ghi chú yêu cầu của khách
                </label>
                <textarea
                  rows={3}
                  value={newLeadForm.notes}
                  onChange={(e) =>
                    setNewLeadForm({ ...newLeadForm, notes: e.target.value })
                  }
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddLeadOpen(false)}
                  className="h-10 px-4 rounded-xl bg-slate-100 text-slate-800 font-semibold cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
                  className="h-10 px-5 rounded-xl bg-[#08482D] text-white font-semibold cursor-pointer"
                >
                  Thêm Khách Hàng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
