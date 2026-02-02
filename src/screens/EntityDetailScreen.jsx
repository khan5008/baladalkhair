import { useState } from 'react';
import logo from '../assets/logo new.png';

const EntityDetailScreen = ({ entityData, onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('entityDetail');
  const [expandedMenus, setExpandedMenus] = useState({
    communication: false,
    thirdParty: false,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const isRTL = language === 'Arabic';

  const toggleLanguage = () => {
    const newLang = language === 'English' ? 'Arabic' : 'English';
    onLanguageChange(newLang);
  };

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
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
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      submenu: [
        { id: 'finance', label: 'Finance', labelAr: 'المالية' },
      ]
    },
  ];

  const entity = entityData || {
    name: 'White Hands Association',
    nameAr: 'جمعية الأيادي البيضاء',
    type: 'NGO',
    typeAr: 'منظمة غير حكومية',
    status: 'Pending',
    statusAr: 'في الانتظار',
    email: 'ayadibaydaal@gmail.com',
    country: 'Morocco',
    countryAr: 'المغرب',
    phone: '+212661537342',
    registrationDate: '2024-12-15',
    address: '123 Main Street, Casablanca, Morocco',
    addressAr: '123 شارع الرئيسي، الدار البيضاء، المغرب',
    documents: ['Registration Certificate.pdf', 'Tax ID.pdf', 'Bank Statement.pdf'],
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Mobile Responsive */}
      <div 
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:transition-none`}
        style={{ 
          background: 'linear-gradient(180deg, #67AF31 0%, #7CB342 50%, #8BC34A 100%)'
        }}
      >
        <div className="p-4 lg:p-6 border-b border-white/20">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-16 lg:h-24 w-auto object-contain mx-auto drop-shadow-lg"
          />
        </div>

        <nav className="flex-1 overflow-y-auto py-2 lg:py-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`nav::-webkit-scrollbar { display: none; }`}</style>
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={(e) => {
                  if (item.submenu) {
                    e.stopPropagation();
                    toggleMenu(item.id);
                  } else {
                    setActiveMenu(item.id);
                    setSidebarOpen(false); // Close sidebar on mobile after selection
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
                className={`w-full flex items-center justify-between px-4 lg:px-6 py-3 lg:py-3.5 transition-all duration-200 mx-1 lg:mx-2 rounded-lg lg:rounded-xl ${
                  activeMenu === item.id || (item.submenu && (activeMenu === 'finance' || activeMenu === 'whatsapp-templates' || activeMenu === 'send-message') && expandedMenus[item.id])
                    ? 'bg-white text-[#67AF31] shadow-lg' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 400 }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="font-medium truncate text-sm lg:text-base">{isRTL ? item.labelAr : item.label}</span>
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
                <div className="bg-white/10 backdrop-blur-sm mx-1 lg:mx-2 rounded-lg mt-1">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(subItem.id);
                        setSidebarOpen(false); // Close sidebar on mobile after selection
                        if (onNavigate) {
                          if (subItem.id === 'finance') {
                            onNavigate('third-party-finance');
                          } else if (subItem.id === 'whatsapp-templates') {
                            onNavigate('whatsapp-templates');
                          } else if (subItem.id === 'send-message') {
                            onNavigate('send-message');
                          }
                        }
                      }}
                      className={`w-full flex items-center px-4 lg:px-6 py-2 lg:py-2.5 pr-10 lg:pr-14 transition-all duration-200 rounded-lg lg:rounded-xl ${
                        activeMenu === subItem.id 
                          ? 'bg-white text-[#67AF31] font-semibold shadow-md' 
                          : 'text-white/80 hover:bg-white/5'
                      }`}
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 400 }}
                    >
                      <span>{isRTL ? subItem.labelAr : subItem.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 lg:p-6 border-t border-white/20">
          <p className="text-xs text-white/80 text-center font-medium">
            {isRTL ? `جمعية بلد الخير ${new Date().getFullYear()}©` : `Balad Alkhair Society ${new Date().getFullYear()}©`}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 lg:ml-0">
        {/* Mobile Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 lg:py-4 flex items-center justify-between shadow-sm sticky top-0 z-30">
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Mobile Hamburger Menu */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors lg:hidden"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Desktop Back Button */}
            <button onClick={onBack} className="hidden lg:block p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 
                className="text-gray-800 font-bold text-lg lg:text-2xl"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'تفاصيل الكيان' : 'Entity Details'}
              </h1>
            </div>
          </div>
          
          {/* Mobile Profile Menu */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Desktop Language & Logout (hidden on mobile) */}
            <button 
              onClick={toggleLanguage}
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{isRTL ? 'English' : 'العربية'}</span>
            </button>
            {onLogout && (
              <button 
                onClick={onLogout}
                className="hidden lg:flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="font-medium">{isRTL ? 'تسجيل الخروج' : 'Logout'}</span>
              </button>
            )}
            
            {/* Mobile Profile Button */}
            <div className="relative">
              <button 
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center gap-2 lg:gap-3 px-2 lg:px-4 py-2 text-gray-600"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#67AF31] to-[#8BC34A] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm lg:text-base">
                  A
                </div>
                <svg className="w-4 h-4 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Profile Dropdown */}
              {profileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 lg:hidden">
                  <button 
                    onClick={() => {
                      toggleLanguage();
                      setProfileMenuOpen(false);
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
                        setProfileMenuOpen(false);
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
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
          <div className="max-w-5xl mx-auto space-y-4 lg:space-y-6">
            {/* Organization Profile Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 lg:p-6">
              <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 mb-4 lg:mb-6">
                <div 
                  className="w-16 h-16 lg:w-24 lg:h-24 rounded-xl flex items-center justify-center text-white font-bold text-xl lg:text-3xl shadow-lg backdrop-blur-sm border border-white/20 flex-shrink-0 mx-auto lg:mx-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(103, 175, 49, 0.9) 0%, rgba(124, 179, 66, 0.85) 50%, rgba(139, 195, 74, 0.9) 100%)',
                    boxShadow: '0 8px 32px 0 rgba(103, 175, 49, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {entity.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h2 
                    className="text-gray-800 font-bold mb-2 lg:mb-3 text-xl lg:text-2xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? entity.nameAr : entity.name}
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-3 mb-2 lg:mb-3">
                    <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                      entity.type === 'NGO' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {isRTL ? entity.typeAr : entity.type}
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                      entity.status === 'Approved' ? 'bg-green-100 text-green-700' :
                      entity.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {isRTL ? entity.statusAr : entity.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'البريد الإلكتروني:' : 'Email:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold break-all"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {entity.email}
                  </p>
                </div>
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'الهاتف:' : 'Phone:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {entity.phone}
                  </p>
                </div>
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'البلد:' : 'Country:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {isRTL ? entity.countryAr : entity.country}
                  </p>
                </div>
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'تاريخ التسجيل:' : 'Registration Date:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {entity.registrationDate}
                  </p>
                </div>
                {entity.address && (
                  <div className="lg:col-span-2">
                    <span 
                      className="text-gray-500 text-sm block mb-2"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                    >
                      {isRTL ? 'العنوان:' : 'Address:'}
                    </span>
                    <p 
                      className="text-gray-800 font-semibold"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                    >
                      {isRTL ? entity.addressAr : entity.address}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Submitted Documents */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 lg:p-6">
              <h2 
                className="text-gray-800 font-bold mb-4 text-lg lg:text-xl"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'المستندات المقدمة' : 'Submitted Documents'}
              </h2>
              <div className="space-y-3">
                {entity.documents.map((doc, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors gap-3 sm:gap-4">
                    <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#67AF31]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 lg:w-7 lg:h-7 text-[#67AF31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p 
                          className="text-gray-800 font-semibold truncate"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                        >
                          {doc}
                        </p>
                        <p 
                          className="text-gray-500 text-sm mt-1"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                        >
                          PDF Document • 1.2 MB
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="p-2 text-[#67AF31] hover:bg-[#67AF31]/10 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-2 text-[#67AF31] hover:bg-[#67AF31]/10 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Approval Actions */}
            {entity.status === 'Pending' && (
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-end pt-4 border-t border-gray-200">
                <button
                  className="px-4 lg:px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-200 text-sm lg:text-base"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 600 }}
                >
                  {isRTL ? 'رفض' : 'Reject'}
                </button>
                <button
                  className="px-4 lg:px-6 py-3 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 shadow-md text-sm lg:text-base"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 600 }}
                >
                  {isRTL ? 'موافقة' : 'Approve'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityDetailScreen;

