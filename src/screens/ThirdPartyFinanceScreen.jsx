import { useState } from 'react';
import logo from '../assets/logo new.png';

const ThirdPartyFinanceScreen = ({ onBack, onNavigate, onLogout, language, onLanguageChange, selectedOrg: propSelectedOrg, currentStep: propCurrentStep, onStateChange }) => {
  // Initialize step: if propCurrentStep provided use it, else if selectedOrg exists use step 2, else step 1
  const initialStep = propCurrentStep || (propSelectedOrg ? 2 : 1);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [selectedOrg, setSelectedOrg] = useState(propSelectedOrg || null);
  const [selectedProjects, setSelectedProjects] = useState([]);

  // Update parent state when local state changes
  const updateState = (updates) => {
    const newState = {
      selectedOrg: updates.selectedOrg !== undefined ? updates.selectedOrg : selectedOrg,
      currentStep: updates.currentStep !== undefined ? updates.currentStep : currentStep,
      selectedProjects: updates.selectedProjects !== undefined ? updates.selectedProjects : selectedProjects
    };
    if (onStateChange) {
      onStateChange(newState);
    }
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenu, setActiveMenu] = useState('finance');
  const [expandedMenus, setExpandedMenus] = useState({
    communication: false,
    thirdParty: true,
  });
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
    { id: 'gantt', label: 'Gantt Master', labelAr: 'مخطط جانت', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
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

  const organizations = [
    { id: 1, name: 'جمعية الأيادي البيضاء', nameEn: 'White Hands Association', email: 'ayadibaydaal@gmail.com', country: 'المغرب', countryEn: 'Morocco', phone: '+212661537342', icon: 'ج' },
    { id: 2, name: 'Association pour le Secours Humanitaire', nameEn: 'Association pour le Secours Humanitaire', email: 'ASH.HUMANITAIRE@gmail.com', country: 'النيجر', countryEn: 'Niger', phone: '227', icon: '' },
    { id: 3, name: 'مؤسسة التنوير الإسلامي النيجيرية', nameEn: 'Nigerian Islamic Enlightenment Foundation', email: 'e.islamicfoundation@yahoo.com', country: 'نيجريا', countryEn: 'Nigeria', phone: '2347033125684', icon: 'م' },
    { id: 4, name: 'منظمة التنمية لخدمة المجتمع', nameEn: 'Community Service Development Organization', email: 'adsc101@hotmail.com', country: '', countryEn: '', phone: '22367857618', icon: 'م' },
    { id: 5, name: 'الجمعية الوطنية للإغاثة ومحو الأمية', nameEn: 'National Association for Relief and Literacy', email: 'ansaayorou@otmail.com', country: 'النيجر', countryEn: 'Niger', phone: '22796906348', icon: 'ا' },
    { id: 6, name: 'N/A', nameEn: 'N/A', email: 'N/A', country: '', countryEn: '', phone: 'N/A', icon: '0' },
    { id: 7, name: 'منظمة التنمية الاجتماعية', nameEn: 'Social Development Organization', email: 'TANMIYAHQ@GMAIL.COM', country: 'الصومال', countryEn: 'Somalia', phone: '252615128692', icon: 'م' },
    { id: 8, name: 'منظمة الإشراق للتنمية والإعمار', nameEn: 'Al-Ishraq Organization for Development and Reconstruction', email: 'aleshraq.org@gmail.com', country: 'السودان', countryEn: 'Sudan', phone: '249912343291', icon: 'م' },
    { id: 9, name: 'جتماعية التضامن الاجتماعي دولة بنين', nameEn: 'Social Solidarity Society, State of Benin', email: 'tadamunben@gmail.com', country: 'بنين', countryEn: 'Benin', phone: '2290197470230', icon: 'ج' },
    { id: 10, name: 'المجلس الرحماني التعليمي والخيري', nameEn: 'Al-Rahmani Educational and Charitable Council', email: 'councilrehmanieducational@gmail.com', country: 'الهند', countryEn: 'India', phone: '916307190573', icon: 'ا' },
  ];

  const steps = [
    { id: 1, label: 'Organization', labelAr: 'المنظمة' },
    { id: 2, label: 'Projects', labelAr: 'المشاريع' },
    { id: 3, label: 'Review', labelAr: 'المراجعة' },
  ];

  // Sample projects data
  const projects = [
    {
      id: 1,
      name: 'مشروع توزيع السلة الرمضانية في مسجد مطلق سند المطيري وزوجته طمشه المطيري ( رحمهم الله ) 8097',
      nameEn: 'Ramadan Basket Distribution Project at Mutlaq Sanad Al-Mutairi Mosque and his wife Tamasha Al-Mutairi (may God have mercy on them) 8097',
      code: '',
      amount: 700,
      currency: 'KWD'
    },
    {
      id: 2,
      name: 'مشروع حفر بئر باسم / نوره فالح عبيد العجمي',
      nameEn: 'Well Digging Project in the name of / Noura Faleh Obaid Al-Ajmi',
      code: '200216',
      amount: 525,
      currency: 'KWD'
    }
  ];

  const handleOrgSelect = (org) => {
    setSelectedOrg(org);
    const newStep = 2;
    setCurrentStep(newStep);
    updateState({ selectedOrg: org, currentStep: newStep });
  };

  const handleBackClick = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      if (currentStep === 2) {
        setSelectedOrg(null);
        setSelectedProjects([]);
        updateState({ selectedOrg: null, currentStep: newStep, selectedProjects: [] });
      } else {
        updateState({ currentStep: newStep });
      }
    } else {
      onBack();
    }
  };

  const toggleProject = (projectId) => {
    setSelectedProjects(prev => {
      const newProjects = prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId];
      updateState({ selectedProjects: newProjects });
      return newProjects;
    });
  };

  const totalPages = Math.ceil(organizations.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedOrgs = organizations.slice(startIndex, endIndex);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar with Green Gradient */}
      <div 
        className={`${isMobileMenuOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 ${isRTL ? 'right-0' : 'left-0'} z-50 w-64 text-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:transition-none`}
        style={{ 
          background: 'linear-gradient(180deg, #67AF31 0%, #7CB342 50%, #8BC34A 100%)'
        }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/20">
          <img 
            src={logo} 
            alt="Balad Alkhair Society Logo" 
            className="h-24 w-auto object-contain mx-auto drop-shadow-lg"
          />
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                    setIsMobileMenuOpen(false);
                    if (onNavigate) {
                      if (item.id === 'dashboard' && onBack) {
                        onBack();
                      } else if (item.id === 'projects') {
                        onNavigate('projects');
                      } else if (item.id === 'gantt') {
                        onNavigate('gantt');
                      }
                    }
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-3.5 transition-all duration-200 mx-2 rounded-xl ${
                  activeMenu === item.id || (item.submenu && activeMenu === 'finance' && expandedMenus[item.id])
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
                          if (subItem.id === 'finance') {
                            // Already on third-party-finance screen
                          } else if (subItem.id === 'whatsapp-templates') {
                            onNavigate('whatsapp-templates');
                          } else if (subItem.id === 'send-message') {
                            onNavigate('send-message');
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

        {/* Footer */}
        <div className="p-6 border-t border-white/20">
          <p className="text-xs text-white/80 text-center font-medium">
            {isRTL ? `جمعية بلد الخير ${new Date().getFullYear()}©` : `Balad Alkhair Society ${new Date().getFullYear()}©`}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        {/* Top Header */}
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
            <button onClick={handleBackClick} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="hidden sm:block">
              <h1 
                className="text-gray-800 font-bold text-lg lg:text-2xl"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 700 }}
              >
                {isRTL ? 'المالية الطرف الثالث' : 'Third Party Finance'}
              </h1>
              <p className="text-sm text-gray-500 mt-1 hidden lg:block">
                {isRTL ? 'إدارة سندات الدفع لمنظمات الطرف الثالث' : 'Manage payment challans for third party organizations'}
              </p>
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
              <button className="px-4 lg:px-6 py-2.5 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm lg:text-base">
                {isRTL ? 'إنشاء سند' : 'Create Challan'}
              </button>
              <button className="px-4 lg:px-6 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm lg:text-base">
                {isRTL ? 'كل المالية' : 'All Finance'}
              </button>
            </div>
          </div>
        </header>

        {/* Progress Indicator */}
        <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 lg:py-6">
          <div className="flex items-center justify-center gap-2 lg:gap-4 max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white shadow-lg'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.id}
                  </div>
                  <span className={`text-xs lg:text-sm font-semibold mt-2 transition-colors text-center ${
                    currentStep >= step.id ? 'text-[#67AF31]' : 'text-gray-500'
                  }`} style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                    {isRTL ? step.labelAr : step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 lg:mx-4 transition-colors ${
                    currentStep > step.id ? 'bg-[#67AF31]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {currentStep === 1 ? (
              <>
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-4 lg:mb-6">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 
                    className="text-gray-800 font-bold text-lg lg:text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 700 }}
                  >
                    {isRTL ? 'اختر المنظمة' : 'Select Organization'}
                  </h2>
                </div>

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-4">
                  <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      <span className="font-medium">{isRTL ? 'الفلاتر' : 'Filters'}</span>
                    </div>
                    <svg className={`w-5 h-5 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Search and Filter Bar */}
                <div className={`bg-white rounded-xl shadow-md border border-gray-200 p-4 mb-4 lg:mb-6 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 lg:hidden">
                    {isRTL ? 'بحث' : 'Search'}
                  </label>
                  <div className="relative">
                    <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={isRTL ? "البحث عن منظمة..." : "Search organization..."}
                      className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700`}
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Country Dropdown */}
                  <div className="flex-1 sm:min-w-[200px]">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 lg:hidden">
                      {isRTL ? 'البلد' : 'Country'}
                    </label>
                    <div className="relative">
                      <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 appearance-none pr-10"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px' }}
                      >
                        <option value="">{isRTL ? 'البحث عن بلد...' : 'Search country...'}</option>
                        <option value="morocco">{isRTL ? 'المغرب' : 'Morocco'}</option>
                        <option value="niger">{isRTL ? 'النيجر' : 'Niger'}</option>
                        <option value="nigeria">{isRTL ? 'نيجريا' : 'Nigeria'}</option>
                        <option value="somalia">{isRTL ? 'الصومال' : 'Somalia'}</option>
                        <option value="sudan">{isRTL ? 'السودان' : 'Sudan'}</option>
                        <option value="benin">{isRTL ? 'بنين' : 'Benin'}</option>
                        <option value="india">{isRTL ? 'الهند' : 'India'}</option>
                      </select>
                      <div className={`absolute inset-y-0 ${isRTL ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Per Page Dropdown */}
                  <div className="flex-1 sm:min-w-[150px]">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 lg:hidden">
                      {isRTL ? 'لكل صفحة' : 'Per Page'}
                    </label>
                    <div className="relative">
                      <select
                        value={perPage}
                        onChange={(e) => setPerPage(Number(e.target.value))}
                        className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 appearance-none pr-10"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px' }}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      <div className={`absolute inset-y-0 ${isRTL ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                {/* Organization Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-6">
              {displayedOrgs.map((org) => (
                <div
                  key={org.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                  onClick={() => handleOrgSelect(org)}
                >
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div 
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-white font-bold text-lg lg:text-2xl shadow-lg flex-shrink-0 backdrop-blur-sm border border-white/20"
                      style={{
                        background: 'linear-gradient(135deg, rgba(103, 175, 49, 0.9) 0%, rgba(124, 179, 66, 0.85) 50%, rgba(139, 195, 74, 0.9) 100%)',
                        boxShadow: '0 8px 32px 0 rgba(103, 175, 49, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {org.icon || org.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="text-gray-800 font-semibold mb-2 line-clamp-2 text-sm lg:text-base"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 600 }}
                      >
                        {isRTL ? org.name : org.nameEn}
                      </h3>
                      <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                          <span className="truncate">{org.email}</span>
                        </div>
                        {org.country && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <svg className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{isRTL ? org.country : org.countryEn}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="truncate">{org.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`w-full sm:w-auto px-4 py-2 rounded-xl transition-all duration-200 ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#67AF31] hover:text-[#67AF31]'
                    }`}
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 500 }}
                  >
                    {isRTL ? 'السابق' : 'Prev'}
                  </button>
                  <span 
                    className="text-gray-700 font-medium text-sm lg:text-base"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? `صفحة ${currentPage} من ${totalPages}` : `Page ${currentPage} of ${totalPages}`}
                  </span>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`w-full sm:w-auto px-4 py-2 rounded-xl transition-all duration-200 ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#67AF31] hover:text-[#67AF31]'
                    }`}
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 500 }}
                  >
                    {isRTL ? 'التالي' : 'Next'}
                  </button>
                </div>
              </>
            ) : currentStep === 2 && selectedOrg ? (
              <>
                {/* Selected Organization Card */}
                <div className="bg-gradient-to-r from-[#67AF31] to-[#8BC34A] rounded-xl shadow-lg p-4 lg:p-6 mb-4 lg:mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center text-[#67AF31] font-bold text-lg lg:text-2xl shadow-md">
                        {selectedOrg.icon || (selectedOrg.name ? selectedOrg.name.charAt(0).toUpperCase() : 'T')}
                      </div>
                      <div>
                        <h3 
                          className="text-white font-bold text-base lg:text-xl mb-1"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? selectedOrg.name : selectedOrg.nameEn}
                        </h3>
                        <p className="text-white/90 text-sm">{selectedOrg.email}</p>
                      </div>
                    </div>
                    <div className="text-center sm:text-right">
                      <p className="text-white/80 text-sm mb-1">{isRTL ? 'المشاريع المحددة' : 'Selected Projects'}</p>
                      <p className="text-white font-bold text-2xl lg:text-3xl">{selectedProjects.length}</p>
                    </div>
                  </div>
                </div>

                {/* Project Selection Section */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h2 
                      className="text-gray-800 font-bold text-lg lg:text-xl"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontWeight: 700 }}
                    >
                      {isRTL ? 'اختيار المشروع' : 'Project Selection'}
                    </h2>
                  </div>

                  {/* Projects List */}
                  <div className="space-y-0 divide-y divide-gray-200">
                    {projects.map((project, index) => (
                      <div
                        key={project.id}
                        className="flex items-start gap-3 lg:gap-4 p-4 lg:p-5 hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedProjects.includes(project.id)}
                          onChange={() => toggleProject(project.id)}
                          className="w-4 h-4 lg:w-5 lg:h-5 mt-1 text-[#67AF31] border-gray-300 rounded focus:ring-[#67AF31] cursor-pointer flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p 
                            className="text-gray-800 font-medium mb-2 leading-relaxed text-sm lg:text-base"
                            style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                          >
                            {isRTL ? project.name : project.nameEn}
                          </p>
                          {project.code ? (
                            <p className="text-gray-600 text-xs lg:text-sm">
                              {isRTL ? 'الرمز:' : 'Code:'} <span className="font-medium">{project.code}</span>
                            </p>
                          ) : (
                            <p className="text-gray-400 text-xs lg:text-sm italic">{isRTL ? 'الرمز: غير متوفر' : 'Code: Not available'}</p>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-[#67AF31] font-bold text-base lg:text-lg">
                            {project.amount} {project.currency}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyFinanceScreen;

