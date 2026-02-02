import { useState } from 'react';
import logo from '../assets/logo new.png';

const EntitiesScreen = ({ onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeMenu, setActiveMenu] = useState('entities');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const isRTL = language === 'Arabic';

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
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
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      submenu: [
        { id: 'finance', label: 'Finance', labelAr: 'المالية' },
      ]
    },
  ];

  const entities = [
    {
      id: 1,
      name: 'White Hands Association',
      nameAr: 'جمعية الأيادي البيضاء',
      type: 'NGO',
      typeAr: 'منظمة غير حكومية',
      status: 'Approved',
      statusAr: 'موافق عليه',
      email: 'ayadibaydaal@gmail.com',
      country: 'Morocco',
      countryAr: 'المغرب',
      phone: '+212661537342',
      registrationDate: '2024-12-15',
    },
    {
      id: 2,
      name: 'Association pour le Secours Humanitaire',
      nameAr: 'جمعية الإغاثة الإنسانية',
      type: 'Partner',
      typeAr: 'شريك',
      status: 'Pending',
      statusAr: 'في الانتظار',
      email: 'ASH.HUMANITAIRE@gmail.com',
      country: 'Niger',
      countryAr: 'النيجر',
      phone: '227',
      registrationDate: '2025-01-10',
    },
    {
      id: 3,
      name: 'Nigerian Islamic Enlightenment Foundation',
      nameAr: 'مؤسسة التنوير الإسلامي النيجيرية',
      type: 'NGO',
      typeAr: 'منظمة غير حكومية',
      status: 'Approved',
      statusAr: 'موافق عليه',
      email: 'e.islamicfoundation@yahoo.com',
      country: 'Nigeria',
      countryAr: 'نيجريا',
      phone: '2347033125684',
      registrationDate: '2024-11-20',
    },
    {
      id: 4,
      name: 'Community Service Development Organization',
      nameAr: 'منظمة التنمية لخدمة المجتمع',
      type: 'NGO',
      typeAr: 'منظمة غير حكومية',
      status: 'Pending',
      statusAr: 'في الانتظار',
      email: 'adsc101@hotmail.com',
      country: 'Kuwait',
      countryAr: 'الكويت',
      phone: '22367857618',
      registrationDate: '2025-01-05',
    },
  ];

  const handleView = (entity) => {
    if (onNavigate) {
      onNavigate('entityDetail', { entity });
    }
  };

  const handleApprove = (entity) => {
    // Handle approve action
    console.log('Approve entity:', entity);
  };

  const handleReject = (entity) => {
    // Handle reject action
    console.log('Reject entity:', entity);
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
                onClick={() => {
                  if (item.submenu) {
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
                        // Already on entities screen
                      } else if (item.id === 'reports') {
                        onNavigate('reports');
                      } else if (item.id === 'thirdParty') {
                        // Third Party menu item - handle submenu
                      } else if (item.id === 'communication') {
                        // Communication menu item - handle submenu
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
                      {isRTL ? subItem.labelAr : subItem.label}
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
                {isRTL ? 'الكيانات' : 'Entities'}
              </h1>
              <p className="text-xs lg:text-sm text-gray-500 mt-1">
                {isRTL ? 'إدارة الكيانات المسجلة والمعلقة' : 'Manage registered and pending entities'}
              </p>
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

        {/* Mobile Search and Filter */}
        <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 shadow-sm sticky top-16 lg:top-20 z-20">
          {/* Mobile Search Bar */}
          <div className="lg:hidden mb-3">
            <div className="relative">
              <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRTL ? "البحث عن كيان..." : "Search entity..."}
                className={`w-full ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-sm`}
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
              />
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
              <span className="text-sm font-medium">{isRTL ? 'الفلاتر' : 'Filters'}</span>
              <svg className={`w-4 h-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-wrap items-center gap-3">
            <div className="min-w-[250px] flex-1 relative">
              <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRTL ? "البحث عن كيان..." : "Search entity..."}
                className={`w-full ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-sm`}
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
            >
              <option value="">{isRTL ? 'النوع' : 'Type'}</option>
              <option value="ngo">{isRTL ? 'منظمة غير حكومية' : 'NGO'}</option>
              <option value="partner">{isRTL ? 'شريك' : 'Partner'}</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
            >
              <option value="">{isRTL ? 'الحالة' : 'Status'}</option>
              <option value="approved">{isRTL ? 'موافق عليه' : 'Approved'}</option>
              <option value="pending">{isRTL ? 'في الانتظار' : 'Pending'}</option>
              <option value="rejected">{isRTL ? 'مرفوض' : 'Rejected'}</option>
            </select>
          </div>

          {/* Mobile Collapsible Filters */}
          {filtersOpen && (
            <div className="lg:hidden space-y-3 pt-3 border-t border-gray-200">
              <div className="grid grid-cols-1 gap-3">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                >
                  <option value="">{isRTL ? 'النوع' : 'Type'}</option>
                  <option value="ngo">{isRTL ? 'منظمة غير حكومية' : 'NGO'}</option>
                  <option value="partner">{isRTL ? 'شريك' : 'Partner'}</option>
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                >
                  <option value="">{isRTL ? 'الحالة' : 'Status'}</option>
                  <option value="approved">{isRTL ? 'موافق عليه' : 'Approved'}</option>
                  <option value="pending">{isRTL ? 'في الانتظار' : 'Pending'}</option>
                  <option value="rejected">{isRTL ? 'مرفوض' : 'Rejected'}</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {entities.map((entity) => (
                <div
                  key={entity.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                  style={{ 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                  onClick={() => handleView(entity)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg backdrop-blur-sm border border-white/20 flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(103, 175, 49, 0.9) 0%, rgba(124, 179, 66, 0.85) 50%, rgba(139, 195, 74, 0.9) 100%)',
                        boxShadow: '0 8px 32px 0 rgba(103, 175, 49, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {entity.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="text-gray-800 font-bold mb-1 line-clamp-2"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '16px',
                          fontWeight: 700,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {isRTL ? entity.nameAr : entity.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                          entity.type === 'NGO' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {isRTL ? entity.typeAr : entity.type}
                        </span>
                        <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                          entity.status === 'Approved' ? 'bg-green-100 text-green-700' :
                          entity.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {isRTL ? entity.statusAr : entity.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                      <span className="truncate" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 400 }}>
                        {entity.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 400 }}>
                        {isRTL ? entity.countryAr : entity.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 400 }}>
                        {entity.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleView(entity)}
                      className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-200 text-xs"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '13px', fontWeight: 600 }}
                    >
                      {isRTL ? 'عرض' : 'View'}
                    </button>
                    {entity.status === 'Pending' && (
                      <>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApprove(entity);
                          }}
                          className="flex-1 px-3 py-2 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-lg hover:shadow-md transition-all duration-200 text-xs"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '13px', fontWeight: 600 }}
                        >
                          {isRTL ? 'موافقة' : 'Approve'}
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReject(entity);
                          }}
                          className="flex-1 px-3 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-200 text-xs"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '13px', fontWeight: 600 }}
                        >
                          {isRTL ? 'رفض' : 'Reject'}
                        </button>
                      </>
                    )}
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

export default EntitiesScreen;

