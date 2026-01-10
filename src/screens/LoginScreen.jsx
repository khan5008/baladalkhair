import { useState } from 'react';
import logo from '../assets/logo new.png';

const LoginScreen = ({ onLoginSuccess, language, onLanguageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const isRTL = language === 'Arabic';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate credentials (you can add actual validation here)
    if (email && password) {
      onLoginSuccess(language);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'English' ? 'Arabic' : 'English';
    onLanguageChange(newLang);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="w-full max-w-md">
        {/* Login Card with Green Gradient Background */}
        <div 
          className="rounded-3xl shadow-2xl p-8 border border-white/20"
          style={{ 
            background: 'linear-gradient(135deg, #67AF31 0%, #7CB342 50%, #8BC34A 100%)'
          }}
        >
          {/* Logo inside card */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Balad Alkhair Society Logo" 
              className="h-32 w-auto object-contain"
            />
          </div>

          {/* Helper Text below logo */}
          <div className="text-center mb-8">
            <p className="text-base text-white font-medium">
              {language === 'Arabic' ? 'قم بتسجيل الدخول لإدارة ومتابعة المشاريع' : 'Sign in to manage and track projects'}
            </p>
          </div>

          {/* Modern Language Toggle Switch */}
          <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mb-6`}>
            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium transition-colors ${language === 'English' ? 'text-white' : 'text-white/70'}`}>
                EN
              </span>
              <button
                onClick={toggleLanguage}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 ${
                  language === 'Arabic' ? 'bg-white' : 'bg-white/30'
                }`}
                role="switch"
                aria-checked={language === 'Arabic'}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full transition-transform ${
                    language === 'Arabic' ? 'translate-x-8 bg-[#67AF31]' : 'translate-x-1 bg-[#67AF31]'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${language === 'Arabic' ? 'text-white' : 'text-white/70'}`}>
                AR
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-semibold text-white mb-2.5"
              >
                {language === 'Arabic' ? 'عنوان البريد الإلكتروني' : 'Email address'}
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-4' : 'left-0 pl-4'} flex items-center pointer-events-none`}>
                  <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3.5 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white focus:border-white outline-none transition-all text-gray-800 placeholder-gray-400 bg-white shadow-sm`}
                  style={{ backgroundColor: '#FFFFFF' }}
                  placeholder={language === 'Arabic' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-semibold text-white mb-2.5"
              >
                {language === 'Arabic' ? 'كلمة المرور' : 'Password'}
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-4' : 'left-0 pl-4'} flex items-center pointer-events-none`}>
                  <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`w-full ${isRTL ? 'pr-12 pl-12' : 'pl-12 pr-12'} py-3.5 border-2 border-white/30 rounded-xl focus:ring-2 focus:ring-white focus:border-white outline-none transition-all text-gray-800 placeholder-gray-400 bg-white shadow-sm`}
                  style={{ backgroundColor: '#FFFFFF' }}
                  placeholder={language === 'Arabic' ? 'أدخل كلمة المرور' : 'Enter your password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors`}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
              <a
                href="#"
                className="text-sm text-white hover:text-white/80 font-semibold transition-colors underline underline-offset-2"
              >
                {language === 'Arabic' ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
              </a>
            </div>

            {/* Login Button - White with Black Text */}
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {language === 'Arabic' ? 'تسجيل الدخول' : 'Sign In'}
            </button>
          </form>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 mt-6 font-medium">
          © {new Date().getFullYear()} {language === 'Arabic' ? 'جمعية بلد الخير. جميع الحقوق محفوظة.' : 'Balad Alkhair Society. All rights reserved.'}
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
