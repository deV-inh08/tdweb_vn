import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { Lock, User, ArrowLeft, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { WebcraftLogoIcon } from '../../components/CustomIcons';
import { useAppStore } from '../../store/useAppStore';

export default function AdminLoginPage() {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  const login = useAppStore((s) => s.login);
  const settings = useAppStore((s) => s.settings);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const result = login(username, password);
    if (result.ok) {
      navigate('/admin', { replace: true });
    } else {
      setError(result.error || 'Tài khoản hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0c1a13] flex flex-col justify-center items-center px-4 py-10 relative overflow-hidden font-sans">
      {/* Background decorative glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#08482D]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#DAE7C7]/15 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <Link
          to="/"
          style={{ color: '#DAE7C7' }}
          className="inline-flex items-center gap-2 text-xs font-semibold hover:opacity-100 opacity-85 mb-6 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay về trang chủ {settings.shortName}</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-7 sm:p-9">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#DAE7C7] flex items-center justify-center shrink-0 shadow-sm">
              <WebcraftLogoIcon className="w-7 h-7 text-[#08482D]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-[#08482D] bg-[#DAE7C7]/60 px-2.5 py-0.5 rounded-full mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin CMS Portal</span>
              </div>
              <h1 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Đăng Nhập Quản Trị
              </h1>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
            Hệ thống quản lý kho giao diện mẫu, bảng giá dịch vụ và danh sách khách hàng đăng ký tư vấn.
          </p>

          {error && (
            <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Tài khoản quản trị
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nhập tên tài khoản..."
                  className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#08482D] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Mật khẩu bảo mật
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPass ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu..."
                  className="w-full h-11 pl-10 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-[#08482D] outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                  aria-label="Hiện hoặc ẩn mật khẩu"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              style={{ backgroundColor: '#08482D', color: '#FFFFFF' }}
              className="w-full h-12 bg-[#08482D] hover:bg-[#063621] text-white font-semibold text-sm rounded-xl shadow-md transition-all cursor-pointer mt-2"
            >
              Đăng Nhập Hệ Thống
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
