import { useState } from 'react';
import logo from '../assets/logo new.png';

const SendMessageScreen = ({ onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('send-message');
  const [expandedMenus, setExpandedMenus] = useState({ communication: true });
  const [selectedSource, setSelectedSource] = useState('template');
  const [selectedRecipients, setSelectedRecipients] = useState('users');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [messageType, setMessageType] = useState('text');
  const [searchDonors, setSearchDonors] = useState('');
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
    { id: 'entities', label: 'Entities', labelAr: 'الكيانات', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
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
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 919.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      submenu: [
        { id: 'finance', label: 'Finance', labelAr: 'المالية' },
      ]
    },
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
                    setIsMobileMenuOpen(false);
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
                className={`w-full flex items-center justify-between px-6 py-3.5 transition-all duration-200 mx-2 rounded-xl ${
                  activeMenu === item.id || (item.submenu && (activeMenu === 'send-message' || activeMenu === 'whatsapp-templates') && expandedMenus[item.id]) || (item.submenu && activeMenu === 'finance' && expandedMenus[item.id])
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
                        setIsMobileMenuOpen(false);
                        if (onNavigate) {
                          if (subItem.id === 'whatsapp-templates') {
                            onNavigate('whatsapp-templates');
                          } else if (subItem.id === 'send-message') {
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
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-gray-50">
        {/* Left Panel - Form */}
        <div className="flex-1 flex flex-col">
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
              <div>
                <h1 
                  className="text-gray-800 font-bold text-lg lg:text-2xl"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 700 }}
                >
                  {isRTL ? 'إرسال رسائل واتساب' : 'Send WhatsApp Messages'}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
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
              <div className="hidden lg:flex items-center gap-4">
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

          <div className="flex-1 overflow-y-auto p-4 lg:p-6">
            <div className="max-w-2xl mx-auto space-y-4 lg:space-y-6">
              {/* Source Selection */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 lg:p-6">
                <h3 
                  className="text-base lg:text-lg font-semibold text-gray-800 mb-4"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'المصدر' : 'Source'}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="source"
                      value="template"
                      checked={selectedSource === 'template'}
                      onChange={(e) => setSelectedSource(e.target.value)}
                      className="w-4 h-4 text-[#67AF31] border-gray-300 focus:ring-[#67AF31]"
                    />
                    <span 
                      className="ml-3 text-gray-700 font-medium"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'قالب' : 'Template'}
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="source"
                      value="custom"
                      checked={selectedSource === 'custom'}
                      onChange={(e) => setSelectedSource(e.target.value)}
                      className="w-4 h-4 text-[#67AF31] border-gray-300 focus:ring-[#67AF31]"
                    />
                    <span 
                      className="ml-3 text-gray-700 font-medium"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'مخصص' : 'Custom'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Recipients Selection */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 lg:p-6">
                <h3 
                  className="text-base lg:text-lg font-semibold text-gray-800 mb-4"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'المستقبلون' : 'Recipients'}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="recipients"
                      value="users"
                      checked={selectedRecipients === 'users'}
                      onChange={(e) => setSelectedRecipients(e.target.value)}
                      className="w-4 h-4 text-[#67AF31] border-gray-300 focus:ring-[#67AF31]"
                    />
                    <span 
                      className="ml-3 text-gray-700 font-medium"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'المستخدمون' : 'Users'}
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="recipients"
                      value="excel"
                      checked={selectedRecipients === 'excel'}
                      onChange={(e) => setSelectedRecipients(e.target.value)}
                      className="w-4 h-4 text-[#67AF31] border-gray-300 focus:ring-[#67AF31]"
                    />
                    <span 
                      className="ml-3 text-gray-700 font-medium"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'إكسل' : 'Excel'}
                    </span>
                  </label>
                </div>

                {/* Select Recipients */}
                <div className="space-y-4">
                  <div>
                    <label 
                      className="block text-sm font-medium text-gray-700 mb-2"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'اختيار المستقبلين' : 'Select Recipients'}
                    </label>
                    <input
                      type="text"
                      value={searchDonors}
                      onChange={(e) => setSearchDonors(e.target.value)}
                      placeholder={isRTL ? "البحث عن المتبرعين..." : "Search donors..."}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <button 
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'اختيار' : 'Select'}
                    </button>
                    <p 
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'اختيار الكل (0)' : 'Select All (0)'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Template Selection */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 lg:p-6">
                <h3 
                  className="text-base lg:text-lg font-semibold text-gray-800 mb-4"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'اختيار القالب' : 'Select Template'}
                </h3>
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  <option value="">{isRTL ? 'اختيار' : 'Select'}</option>
                  <option value="welcome">{isRTL ? 'أهلاً وسهلاً' : 'Welcome Message'}</option>
                  <option value="thanks">{isRTL ? 'شكر للمتبرع' : 'Donor Thanks'}</option>
                  <option value="confirmation">{isRTL ? 'تأكيد التبرع' : 'Donation Confirmation'}</option>
                </select>
              </div>

              {/* Message Type */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 lg:p-6">
                <h3 
                  className="text-base lg:text-lg font-semibold text-gray-800 mb-4"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'نوع الرسالة' : 'Message Type'}
                </h3>
                <select
                  value={messageType}
                  onChange={(e) => setMessageType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  <option value="text">{isRTL ? 'نص' : 'Text'}</option>
                  <option value="image">{isRTL ? 'صورة' : 'Image'}</option>
                  <option value="document">{isRTL ? 'مستند' : 'Document'}</option>
                </select>
              </div>

              {/* Send Button */}
              <button 
                className="w-full py-3 bg-[#67AF31] text-white rounded-xl hover:bg-[#5a9629] transition-colors font-semibold shadow-lg"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px' }}
              >
                {isRTL ? 'إرسال' : 'Send'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - WhatsApp Preview */}
        <div className="hidden lg:flex w-80 bg-white border-l border-gray-200 flex-col">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 
              className="text-lg font-semibold text-gray-800"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              {isRTL ? 'معاينة واتساب' : 'WhatsApp Preview'}
            </h3>
          </div>
          
          <div className="flex-1 bg-[#e5ddd5] p-4 flex flex-col">
            {/* WhatsApp Header */}
            <div className="bg-[#075e54] text-white p-3 rounded-t-lg flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm">WhatsApp</p>
                <p className="text-xs opacity-75">{isRTL ? 'معاينة الرسالة' : 'Message preview'}</p>
              </div>
            </div>

            {/* Message Preview */}
            <div className="flex-1 p-4 bg-white rounded-b-lg">
              <div className="bg-[#dcf8c6] p-3 rounded-lg max-w-xs ml-auto">
                <p 
                  className="text-sm text-gray-800"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'معاينة الرسالة' : 'Message preview'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {isRTL ? 'الوقت: 10:35 ص' : 'Arrived: 10:35 AM'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessageScreen;