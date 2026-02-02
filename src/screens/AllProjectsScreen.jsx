import { useState } from 'react';
import logo from '../assets/logo new.png';
import iftarOutsideKuwait from '../assets/افطار_خارج_الكويت.png';
import iftarGaza from '../assets/افطار_غزة.png';
import tentsGaza from '../assets/خيام_غزة.png';

const AllProjectsScreen = ({ onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('projects');
  const [expandedMenus, setExpandedMenus] = useState({
    communication: false,
    thirdParty: false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
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

  const projects = [
    {
      id: 1,
      code: '860051',
      status: 'Draft / Initiated',
      statusAr: 'مسودة / مبدئي',
      statusColor: 'gray',
      category: 'الآبار',
      categoryEn: 'Wells',
      image: iftarOutsideKuwait,
      title: 'مركز حفصة النسائي لدوائر القرآنية وأنشطة الدعوة',
      titleEn: "Hafsa Women's Center for Quranic Circles and Da'wah Activities Project",
      collected: '69 Kwd',
      projectLink: 'https://baladalkhairorg.org/2026',
      syncStatus: 'Synced',
      country: 'الكويت',
    },
    {
      id: 2,
      code: '200217',
      status: 'Commissioning - Assigned',
      statusAr: 'التكليف - معين',
      statusColor: 'purple',
      category: 'الآبار',
      categoryEn: 'Wells',
      image: tentsGaza,
      title: 'مشروع حفر بئر ارتوازي باسم / محمد عادل... جزاء الراشدي (رحمه الله)',
      titleEn: 'Artesian Well Drilling Project',
      collected: '1501 Kwd',
      projectLink: 'https://www.baladalkhairorg.org/privateprojectar/5',
      syncStatus: 'Synced',
      country: 'بنين',
    },
    {
      id: 3,
      code: '220438',
      status: 'Draft / Initiated',
      statusAr: 'مسودة / مبدئي',
      statusColor: 'gray',
      category: 'الآبار',
      categoryEn: 'Wells',
      image: iftarGaza,
      title: 'مشروع حفر بئر باسم / إبراهيم خيري',
      titleEn: 'Well Drilling Project in the name of / Ibrahim Khairi',
      collected: '0 Kwd',
      projectLink: 'https://www.baladalkhairorg.org/privateprojectar/5',
      syncStatus: 'Synced',
      country: 'الهند',
    },
    {
      id: 4,
      code: '220437',
      status: 'Commissioning - Assigned',
      statusAr: 'التكليف - معين',
      statusColor: 'purple',
      category: 'الآبار',
      categoryEn: 'Wells',
      image: iftarGaza,
      title: 'سعود عادل سالم البلول (رحمه الله)',
      titleEn: 'Saud Adel Salem Al-Baloul (may Allah have mercy on him)',
      collected: '564 Kwd',
      projectLink: 'https://www.baladalkhairorg.org/privateprojectar/5',
      syncStatus: 'Synced',
      country: 'النيجر',
    },
    {
      id: 5,
      code: '220436',
      status: 'Draft / Initiated',
      statusAr: 'مسودة / مبدئي',
      statusColor: 'gray',
      category: 'الآبار',
      categoryEn: 'Wells',
      image: iftarGaza,
      title: 'مشروع حفر بئر',
      titleEn: 'Well Drilling Project',
      collected: '250 Kwd',
      projectLink: 'https://www.baladalkhairorg.org/privateprojectar/5',
      syncStatus: 'Synced',
      country: 'اليمن',
    },
    {
      id: 6,
      code: '220435',
      status: 'Commissioning - Assigned',
      statusAr: 'التكليف - معين',
      statusColor: 'purple',
      category: 'الآبار',
      categoryEn: 'Wells',
      image: iftarGaza,
      title: 'مشروع حفر بئر',
      titleEn: 'Well Drilling Project',
      collected: '800 Kwd',
      projectLink: 'https://www.baladalkhairorg.org/privateprojectar/5',
      syncStatus: 'Synced',
      country: 'الصومال',
    },
    {
      id: 7,
      code: '-',
      status: 'Commissioning - Assigned',
      statusAr: 'التكليف - معين',
      statusColor: 'purple',
      category: 'عقيقة',
      categoryEn: 'Aqiqah',
      image: tentsGaza,
      title: 'مشروع عقيقة',
      titleEn: 'Aqiqah Project',
      collected: '120 Kwd',
      projectLink: 'https://www.baladalkhairorg.org/privateprojectar/5',
      syncStatus: 'Synced',
      country: 'بنغلاديش',
    },
    {
      id: 8,
      code: '-',
      status: 'Draft / Initiated',
      statusColor: 'gray',
      category: 'عقيقة',
      image: tentsGaza,
      title: 'مشروع عقيقة',
      titleEn: 'Aqiqah Project',
      collected: '0 Kwd',
      projectLink: 'https://www.baladalkhairorg.org/privateprojectar/5',
      syncStatus: 'Synced',
      country: 'السودان',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar with Green Gradient - Mobile Responsive */}
      <div 
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:transition-none`}
        style={{ 
          background: 'linear-gradient(180deg, #67AF31 0%, #7CB342 50%, #8BC34A 100%)'
        }}
      >
        {/* Logo */}
        <div className="p-4 lg:p-6 border-b border-white/20">
          <img 
            src={logo} 
            alt="Balad Alkhair Society Logo" 
            className="h-16 lg:h-24 w-auto object-contain mx-auto drop-shadow-lg"
          />
        </div>

        {/* Menu Items - Mobile Optimized */}
        <nav className="flex-1 overflow-y-auto py-2 lg:py-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            nav::-webkit-scrollbar {
              display: none;
            }
          `}</style>
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
                        // Already on projects screen
                      } else if (item.id === 'projectPhases') {
                        onNavigate('projectPhases');
                      } else if (item.id === 'approvals') {
                        onNavigate('approvals');
                      } else if (item.id === 'entities') {
                        onNavigate('entities');
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

        {/* Footer */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 
              className="text-gray-800 text-base lg:text-lg font-semibold"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              {isRTL ? 'جميع المشاريع' : 'All Projects'}
            </h1>
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
                <div className="hidden lg:flex flex-col">
                  <span className="text-xs text-gray-500">{isRTL ? 'مدير' : 'Administrator'}</span>
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

        {/* Search and Filter Section - Mobile Responsive */}
        <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 shadow-sm sticky top-16 lg:top-20 z-20">
          {/* Mobile Search Bar */}
          <div className="lg:hidden mb-3">
            <div className={`relative`}>
              <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRTL ? "البحث عن اسم المشروع..." : "Search project name..."}
                className={`w-full ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-sm`}
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
              />
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-3">
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
            <div className="flex gap-2">
              <button className="px-3 py-2 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm">
                {isRTL ? 'فلتر' : 'Filter'}
              </button>
              <button className="px-3 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 text-sm">
                {isRTL ? 'إعادة تعيين' : 'Reset'}
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-wrap items-center gap-3">
            {/* Left Side - Search and Dropdowns */}
            <div className="flex flex-wrap items-center gap-3 flex-1">
              {/* Search Bar */}
              <div className="min-w-[200px] flex-1 relative">
                <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRTL ? "البحث عن اسم المشروع..." : "Search project name..."}
                  className={`w-full ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-sm`}
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                />
              </div>

              {/* Filter Dropdowns */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
              >
                <option value="">{isRTL ? 'اختر الفئة' : 'Select Category'}</option>
                <option value="wells">{isRTL ? 'الآبار' : 'Wells'}</option>
                <option value="aqiqah">{isRTL ? 'عقيقة' : 'Aqiqah'}</option>
                <option value="iftar">{isRTL ? 'إفطار' : 'Iftar'}</option>
              </select>

              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
              >
                <option value="">{isRTL ? 'اختر الفئة الفرعية' : 'Select Subcategory'}</option>
              </select>

              <select
                value={selectedProjectType}
                onChange={(e) => setSelectedProjectType(e.target.value)}
                className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
              >
                <option value="">{isRTL ? 'نوع المشروع' : 'Project Type'}</option>
                <option value="public">{isRTL ? 'عام' : 'Public'}</option>
                <option value="private">{isRTL ? 'خاص' : 'Private'}</option>
              </select>

              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
              >
                <option value="">{isRTL ? 'البلد' : 'Country'}</option>
                <option value="kuwait">{isRTL ? 'الكويت' : 'Kuwait'}</option>
                <option value="gaza">{isRTL ? 'غزة' : 'Gaza'}</option>
                <option value="india">{isRTL ? 'الهند' : 'India'}</option>
                <option value="niger">{isRTL ? 'النيجر' : 'Niger'}</option>
              </select>
            </div>

            {/* Right Side - Filter and Reset Buttons */}
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm">
                {isRTL ? 'فلتر' : 'Filter'}
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 text-sm">
                {isRTL ? 'إعادة تعيين' : 'Reset'}
              </button>
            </div>
          </div>

          {/* Mobile Collapsible Filters */}
          {filtersOpen && (
            <div className="lg:hidden space-y-3 pt-3 border-t border-gray-200">
              <div className="grid grid-cols-1 gap-3">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                >
                  <option value="">{isRTL ? 'اختر الفئة' : 'Select Category'}</option>
                  <option value="wells">{isRTL ? 'الآبار' : 'Wells'}</option>
                  <option value="aqiqah">{isRTL ? 'عقيقة' : 'Aqiqah'}</option>
                  <option value="iftar">{isRTL ? 'إفطار' : 'Iftar'}</option>
                </select>

                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                >
                  <option value="">{isRTL ? 'اختر الفئة الفرعية' : 'Select Subcategory'}</option>
                </select>

                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={selectedProjectType}
                    onChange={(e) => setSelectedProjectType(e.target.value)}
                    className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    <option value="">{isRTL ? 'نوع المشروع' : 'Project Type'}</option>
                    <option value="public">{isRTL ? 'عام' : 'Public'}</option>
                    <option value="private">{isRTL ? 'خاص' : 'Private'}</option>
                  </select>

                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    <option value="">{isRTL ? 'البلد' : 'Country'}</option>
                    <option value="kuwait">{isRTL ? 'الكويت' : 'Kuwait'}</option>
                    <option value="gaza">{isRTL ? 'غزة' : 'Gaza'}</option>
                    <option value="india">{isRTL ? 'الهند' : 'India'}</option>
                    <option value="niger">{isRTL ? 'النيجر' : 'Niger'}</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Projects Grid - Mobile Responsive */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6" style={{ background: 'linear-gradient(to bottom, #f9fafb 0%, #f3f4f6 100%)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                style={{ 
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-36 lg:h-44 overflow-hidden bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Status and Code Badges - Top Row */}
                  <div className="absolute top-2 left-2 right-2 flex items-start justify-between gap-2 z-10">
                    {/* Status Badge */}
                    <span 
                      className={`px-2 py-1 rounded-md text-[9px] lg:text-[10px] font-bold text-white shadow-lg backdrop-blur-sm ${
                        project.statusColor === 'gray' 
                          ? 'bg-gray-600/90' 
                          : 'bg-purple-600/90'
                      }`}
                      style={{ 
                        fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                        lineHeight: '1.2',
                        maxWidth: '60%'
                      }}
                    >
                      {isRTL && project.statusAr ? project.statusAr : project.status}
                    </span>
                    
                    {/* Code Badge */}
                    <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md border border-white/50 shadow-lg">
                      <span 
                        className="text-[9px] lg:text-[10px] font-bold text-gray-800"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          lineHeight: '1.2'
                        }}
                      >
                        {isRTL ? `كود: ${project.code}` : `Code: ${project.code}`}
                      </span>
                    </div>
                  </div>
                  
                  {/* Category Badge - Bottom */}
                  <div className="absolute bottom-2 right-2 z-10">
                    <span 
                      className="px-2 py-1 bg-white/95 backdrop-blur-sm rounded-md text-[9px] lg:text-[10px] font-bold text-gray-800 shadow-lg border border-white/50"
                      style={{ 
                        fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                        lineHeight: '1.2'
                      }}
                    >
                      {isRTL ? project.category : (project.categoryEn || project.category)}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-3 lg:p-4 bg-white">
                  {/* Title */}
                  <h3 
                    className="text-gray-800 leading-snug mb-2 lg:mb-3 line-clamp-2 min-h-[2.5rem] lg:min-h-[3rem]" 
                    style={{ 
                      fontFamily: 'Tajawal, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {isRTL ? project.title : (project.titleEn || project.title)}
                  </h3>

                  {/* Details Grid */}
                  <div className="space-y-2 lg:space-y-2.5 mb-3 lg:mb-4">
                    <div className="flex items-center justify-between gap-2">
                      <span 
                        className="text-gray-500 text-xs whitespace-nowrap"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '12px',
                          fontWeight: 400
                        }}
                      >
                        {isRTL ? 'المجموع:' : 'Collected:'}
                      </span>
                      <span 
                        className="text-gray-800 font-semibold text-xs truncate ml-2"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '12px',
                          fontWeight: 600
                        }}
                      >
                        {project.collected}
                      </span>
                    </div>
                    
                    <div className="flex items-start justify-between gap-2">
                      <span 
                        className="text-gray-500 text-xs whitespace-nowrap flex-shrink-0"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '12px',
                          fontWeight: 400
                        }}
                      >
                        {isRTL ? 'الرابط:' : 'Link:'}
                      </span>
                      <a 
                        href={project.projectLink} 
                        className="text-[#67AF31] hover:text-[#4d8a24] truncate text-xs max-w-[70%] flex-1 text-right" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '11px',
                          fontWeight: 400,
                          wordBreak: 'break-all'
                        }}
                      >
                        {project.projectLink.replace('https://', '').replace('http://', '')}
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-between gap-2">
                      <span 
                        className="text-gray-500 text-xs whitespace-nowrap"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '12px',
                          fontWeight: 400
                        }}
                      >
                        {isRTL ? 'المزامنة:' : 'Sync:'}
                      </span>
                      <span 
                        className="px-2 py-0.5 bg-green-50 text-green-700 rounded-md text-xs font-medium border border-green-200"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '11px',
                          fontWeight: 500
                        }}
                      >
                        {project.syncStatus}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between gap-2">
                      <span 
                        className="text-gray-500 text-xs whitespace-nowrap"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '12px',
                          fontWeight: 400
                        }}
                      >
                        {isRTL ? 'البلد:' : 'Country:'}
                      </span>
                      <span 
                        className="text-gray-800 text-xs font-medium truncate ml-2"
                        style={{ 
                          fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                          fontSize: '12px',
                          fontWeight: 500
                        }}
                      >
                        {project.country}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2 border-t border-gray-100">
                    <button 
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('projectDetails', { projectId: project.id });
                        }
                      }}
                      className="flex-1 px-2 lg:px-3 py-1.5 lg:py-2 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-lg hover:from-[#4d8a24] hover:to-[#67AF31] transition-all duration-200 text-xs shadow-md hover:shadow-lg"
                      style={{ 
                        fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                    >
                      {isRTL ? 'فتح' : 'Open'}
                    </button>
                    <button 
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('projectDetails', { projectId: project.id });
                        }
                      }}
                      className="flex-1 px-2 lg:px-3 py-1.5 lg:py-2 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-[#67AF31] hover:text-[#67AF31] transition-all duration-200 text-xs"
                      style={{ 
                        fontFamily: 'Tajawal, ui-sans-serif, system-ui',
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                    >
                      {isRTL ? 'التفاصيل' : 'Details'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsScreen;

