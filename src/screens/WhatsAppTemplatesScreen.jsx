import { useState } from 'react';
import logo from '../assets/logo new.png';

const WhatsAppTemplatesScreen = ({ onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('whatsapp-templates');
  const [expandedMenus, setExpandedMenus] = useState({ communication: true });
  const isRTL = language === 'Arabic';

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const toggleLanguage = () => {
    const newLang = language === 'English' ? 'Arabic' : 'English';
    onLanguageChange(newLang);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', labelAr: 'لوحة التحكم', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'projects', label: 'All Projects', labelAr: 'جميع المشاريع', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { id: 'projectPhases', label: 'Project Phases', labelAr: 'مراحل المشروع', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { id: 'approvals', label: 'Approvals', labelAr: 'الموافقات', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'entities', label: 'Entities', labelAr: 'الكيانات', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'reports', label: 'Reports/Activity Timeline', labelAr: 'التقارير/الجدول الزمني', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { 
      id: 'communication', 
      label: 'Communication', 
      labelAr: 'التواصل',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      submenu: [
        { id: 'whatsapp-templates', label: 'WhatsApp Templates', labelAr: 'قوالب واتساب' },
        { id: 'send-message', label: 'Send Message', labelAr: 'إرسال رسالة' },
      ]
    },
    { 
      id: 'thirdParty', 
      label: 'Third Party', 
      labelAr: 'طرف ثالث',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      submenu: [
        { id: 'finance', label: 'Finance', labelAr: 'المالية' },
      ]
    },
  ];

  const templates = [
    {
      id: 1,
      title: 'أهلاً وسهلاً',
      titleEn: 'Welcome Message',
      status: 'Active',
      statusAr: 'نشط',
      content: 'أهلاً وسهلاً {{name}} شكراً لك على التبرع {{amount}} للمشروع {{project_name}} رابط {{url}} {{field1}} {{field2}}',
      contentEn: 'Welcome {{name}} thank you for donating {{amount}} for the project {{project_name}} with link {{url}} {{field1}} {{field2}}'
    },
    {
      id: 2,
      title: 'شكر للمتبرع',
      titleEn: 'Donor Thanks',
      status: 'Active',
      statusAr: 'نشط',
      content: 'عزيزي {{name}} شكراً لك على التبرع {{amount}} للمشروع {{project_name}} رابط {{url}} المبلغ تم استلامه بنجاح',
      contentEn: 'Dear {{name}} thank you for donating {{amount}} for the project {{project_name}} with link {{url}} the amount was received successfully'
    },
    {
      id: 3,
      title: 'تأكيد التبرع',
      titleEn: 'Donation Confirmation',
      status: 'Active',
      statusAr: 'نشط',
      content: 'تم تأكيد تبرعكم بمبلغ {{amount}} للمشروع {{project_name}} رقم العملية {{transaction_id}} شكراً لكم',
      contentEn: 'Your donation of {{amount}} for project {{project_name}} has been confirmed. Transaction ID: {{transaction_id}}. Thank you.'
    },
    {
      id: 4,
      title: 'قالب جديد',
      titleEn: 'New Template',
      status: 'Active',
      statusAr: 'نشط',
      content: 'مرحباً {{name}} هذا قالب جديد للمشروع {{project_name}} المبلغ {{amount}}',
      contentEn: 'Hi {{name}} this is a new template for project {{project_name}} amount {{amount}}'
    },
    {
      id: 5,
      title: 'اختبار',
      titleEn: 'Test Template',
      status: 'Active',
      statusAr: 'نشط',
      content: 'مرحباً {{name}} كيف حالك {{project_name}}',
      contentEn: 'Hi {{name}} how are you {{project_name}}'
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`${isMobileMenuOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 ${isRTL ? 'right-0' : 'left-0'} z-50 w-64 text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:transition-none`}
        style={{ 
          background: 'linear-gradient(180deg, #67AF31 0%, #7CB342 50%, #8BC34A 100%)'
        }}
      >
        <div className="p-6 border-b border-white/20">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-24 w-auto object-contain mx-auto drop-shadow-lg"
          />
        </div>

        <nav className="flex-1 overflow-y-auto py-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`nav::-webkit-scrollbar { display: none; }`}</style>
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.submenu) {
                    toggleMenu(item.id);
                  } else {
                    setActiveMenu(item.id);
                    if (onNavigate) {
                      if (item.id === 'dashboard' && onBack) {
                        onBack();
                      } else if (item.id === 'projects') {
                        onNavigate('projects');
                      } else if (item.id === 'projectPhases') {
                        onNavigate('projectPhases');
                      } else if (item.id === 'approvals') {
                        onNavigate('approvals');
                      } else if (item.id === 'entities') {
                        onNavigate('entities');
                      } else if (item.id === 'reports') {
                        onNavigate('reports');
                      }
                    }
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-3.5 transition-all duration-200 mx-1 rounded-lg ${
                  activeMenu === item.id || (item.submenu && activeMenu === 'whatsapp-templates' && expandedMenus[item.id])
                    ? 'bg-white text-[#67AF31] shadow-lg' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 400 }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="font-medium truncate whitespace-nowrap">{isRTL ? item.labelAr : item.label}</span>
                </div>
                {item.submenu && (
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${expandedMenus[item.id] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {item.submenu && expandedMenus[item.id] && (
                <div className="bg-white/10 backdrop-blur-sm mx-2 rounded-lg mt-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(subItem.id);
                        if (onNavigate) {
                          if (subItem.id === 'send-message') {
                            onNavigate('send-message');
                          } else if (subItem.id === 'whatsapp-templates') {
                            // Already on this screen
                          } else if (subItem.id === 'finance') {
                            onNavigate('third-party-finance');
                          }
                        }
                      }}
                      className={`w-full flex items-center px-6 py-2.5 pr-14 transition-all duration-200 rounded-xl ${
                        activeMenu === subItem.id 
                          ? 'bg-white text-[#67AF31] font-semibold shadow-md' 
                          : 'text-white/80 hover:bg-white/5'
                      }`}
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 400 }}
                    >
                      {isRTL ? subItem.labelAr : subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-white/20">
          <p className="text-xs text-white/80 text-center font-medium">
            {isRTL ? `جمعية بلد الخير ${new Date().getFullYear()}©` : `Balad Alkhair Society ${new Date().getFullYear()}©`}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors lg:hidden"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="hidden sm:block">
              <h1 
                className="text-gray-800 font-bold text-lg lg:text-2xl"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 700 }}
              >
                {isRTL ? 'قوالب واتساب' : 'WhatsApp Templates'}
              </h1>
              <p className="text-sm text-gray-500 mt-1 hidden lg:block">
                {isRTL ? 'إدارة قوالب رسائل واتساب' : 'Manage WhatsApp message templates'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Mobile Profile Dropdown */}
            <div className="relative lg:hidden">
              <button 
                onClick={() => setShowMobileProfile(!showMobileProfile)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {showMobileProfile && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  <button 
                    onClick={() => {
                      toggleLanguage();
                      setShowMobileProfile(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{isRTL ? 'English' : 'العربية'}</span>
                  </button>
                  {onLogout && (
                    <button 
                      onClick={() => {
                        onLogout();
                        setShowMobileProfile(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      <span className="font-medium">{isRTL ? 'تسجيل الخروج' : 'Logout'}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-[#67AF31] text-white rounded-xl hover:bg-[#5a9629] transition-colors shadow-lg text-sm"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 600 }}
              >
                {isRTL ? 'قالب جديد' : 'New Template'}
              </button>
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{isRTL ? 'English' : 'العربية'}</span>
              </button>
              {onLogout && (
                <button 
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">{isRTL ? 'تسجيل الخروج' : 'Logout'}</span>
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
          {/* Mobile New Template Button */}
          <div className="lg:hidden mb-4">
            <button 
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#67AF31] text-white rounded-xl hover:bg-[#5a9629] transition-colors shadow-lg font-semibold"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {isRTL ? 'قالب جديد' : 'New Template'}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Desktop Table Header */}
            <div className="hidden lg:block px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-700">
                <div className="col-span-3" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                  {isRTL ? 'العنوان' : 'Title'}
                </div>
                <div className="col-span-2" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                  {isRTL ? 'الحالة' : 'Status'}
                </div>
                <div className="col-span-5" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                  {isRTL ? 'المحتوى' : 'Content'}
                </div>
                <div className="col-span-2" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                  {isRTL ? 'الإجراءات' : 'Actions'}
                </div>
              </div>
            </div>

            {/* Mobile Cards / Desktop Table Body */}
            <div className="divide-y divide-gray-200">
              {templates.map((template) => (
                <div key={template.id} className="p-4 lg:px-6 lg:py-4 hover:bg-gray-50 transition-colors">
                  {/* Mobile Card Layout */}
                  <div className="lg:hidden space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 
                        className="font-semibold text-gray-800 text-base"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? template.title : template.titleEn}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
                        {isRTL ? template.statusAr : template.status}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 text-sm leading-relaxed"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? template.content : template.contentEn}
                    </p>
                    <div className="flex justify-end pt-2">
                      <button 
                        className="text-[#67AF31] hover:text-[#5a9629] font-medium text-sm px-3 py-1 rounded-lg hover:bg-[#67AF31]/10 transition-colors"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'تعديل' : 'Edit'}
                      </button>
                    </div>
                  </div>

                  {/* Desktop Table Layout */}
                  <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3">
                      <p 
                        className="font-semibold text-gray-800"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                      >
                        {isRTL ? template.title : template.titleEn}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {isRTL ? template.statusAr : template.status}
                      </span>
                    </div>
                    <div className="col-span-5">
                      <p 
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? template.content : template.contentEn}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <button 
                        className="text-[#67AF31] hover:text-[#5a9629] font-medium text-sm transition-colors"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'تعديل' : 'Edit'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppTemplatesScreen;