import { useState } from 'react';
import logo from '../assets/logo new.png';

const RoleSelectionScreen = ({ onRoleSelect, language, onLanguageChange }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const isRTL = language === 'Arabic';

  const roles = [
    {
      id: 'Admin',
      title: 'Admin',
      titleAr: 'مدير',
      description: 'Full system access and management capabilities',
      descriptionAr: 'وصول كامل إلى النظام وقدرات الإدارة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 'Organization',
      title: 'Organization',
      titleAr: 'منظمة',
      description: 'Manage your organization\'s projects and reports',
      descriptionAr: 'إدارة مشاريع وتقارير منظمتك',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 'Reviewer',
      title: 'Supervisor / Reviewer',
      titleAr: 'مشرف / مراجع',
      description: 'Review and approve project submissions',
      descriptionAr: 'مراجعة والموافقة على تقديمات المشاريع',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const toggleLanguage = () => {
    const newLang = language === 'English' ? 'Arabic' : 'English';
    onLanguageChange(newLang);
  };

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    setTimeout(() => {
      onRoleSelect(roleId);
    }, 300);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="w-full max-w-4xl">
        {/* Role Selection Card with Green Gradient Background */}
        <div 
          className="rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20"
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
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {language === 'Arabic' ? 'اختر دورك' : 'Select Your Role'}
            </h2>
            <p className="text-base text-white/90">
              {language === 'Arabic' ? 'اختر الدور المناسب للوصول إلى النظام' : 'Choose the appropriate role to access the system'}
            </p>
          </div>

          {/* Modern Language Toggle Switch */}
          <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mb-8`}>
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

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                  selectedRole === role.id
                    ? 'border-white bg-white/25 shadow-xl backdrop-blur-sm'
                    : 'border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/15 hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-5">
                  <div
                    className={`p-5 rounded-2xl shadow-lg transition-all duration-300 ${
                      selectedRole === role.id
                        ? 'bg-white text-[#67AF31] scale-110'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {role.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      selectedRole === role.id ? 'text-white' : 'text-white'
                    }`}>
                      {language === 'Arabic' ? role.titleAr : role.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      selectedRole === role.id ? 'text-white/95' : 'text-white/85'
                    }`}>
                      {language === 'Arabic' ? role.descriptionAr : role.description}
                    </p>
                  </div>
                  {selectedRole === role.id && (
                    <div className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-4`}>
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-[#67AF31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button - White with Black Text */}
          {selectedRole && (
            <div className="flex justify-center">
              <button
                onClick={() => handleRoleSelect(selectedRole)}
                className="w-full md:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {language === 'Arabic' ? 'متابعة' : 'Continue'}
              </button>
            </div>
          )}
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 mt-6 font-medium">
          © {new Date().getFullYear()} {language === 'Arabic' ? 'جمعية بلد الخير. جميع الحقوق محفوظة.' : 'Balad Alkhair Society. All rights reserved.'}
        </p>
      </div>
    </div>
  );
};

export default RoleSelectionScreen;

