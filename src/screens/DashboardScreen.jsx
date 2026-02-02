import { useState } from 'react';
import logo from '../assets/logo new.png';

const DashboardScreen = ({ onNavigate, onLogout, language, onLanguageChange }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState({
    communication: false,
    thirdParty: false,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const isRTL = language === 'Arabic';

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

  const tabs = [
    { id: 'activities', label: 'Activities Timeline', labelAr: 'الجدول الزمني للأنشطة', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'finance', label: 'Finance', labelAr: 'المالية', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'documents', label: 'Documents', labelAr: 'المستندات', icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { id: 'governance', label: 'Governance', labelAr: 'الحوكمة', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  ];

  const toggleLanguage = () => {
    const newLang = language === 'English' ? 'Arabic' : 'English';
    onLanguageChange(newLang);
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
                      if (item.id === 'projects') {
                        onNavigate('projects');
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
                className={`w-full flex items-center justify-between px-4 lg:px-6 py-3 lg:py-3.5 transition-all duration-200 mx-1 rounded-lg ${
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
                <div className="bg-white/10 backdrop-blur-sm mx-1 rounded-lg mt-1">
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
                      className={`w-full flex items-center px-4 lg:px-6 py-2 lg:py-2.5 pr-10 lg:pr-14 transition-all duration-200 rounded-lg ${
                        activeMenu === subItem.id 
                          ? 'bg-white text-[#67AF31] font-semibold' 
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
            {/* Desktop Menu Button (hidden on mobile) */}
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors hidden lg:block">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 
              className="text-gray-800 text-base lg:text-lg font-semibold"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              {isRTL ? 'لوحة التحكم' : 'Dashboard'}
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

        {/* Mobile Scrollable Tab Bar */}
        <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3 shadow-sm sticky top-16 lg:top-20 z-20">
          <div className="flex gap-2 lg:gap-3 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // Update activeMenu to sync with sidebar
                  if (tab.id === 'activities') {
                    setActiveMenu('reports');
                  } else if (tab.id === 'finance') {
                    setActiveMenu('finance');
                  } else if (tab.id === 'documents') {
                    setActiveMenu('documents');
                  } else if (tab.id === 'governance') {
                    setActiveMenu('governance');
                  }
                  
                  if (onNavigate) {
                    if (tab.id === 'activities') {
                      onNavigate('reports');
                    } else if (tab.id === 'finance') {
                      onNavigate('finance');
                    } else if (tab.id === 'documents') {
                      onNavigate('documents');
                    } else if (tab.id === 'governance') {
                      onNavigate('governance');
                    }
                  }
                }}
                className={`flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl transition-all duration-200 font-medium whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white shadow-lg shadow-[#67AF31]/30'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                </svg>
                <span className="text-sm lg:text-base">{isRTL ? tab.labelAr : tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Area - Mobile Optimized */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
            {/* KPI Cards - Mobile Single Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-4">
              {[
                { label: 'Approved Budget', labelAr: 'الميزانية المعتمدة', value: '5000', unit: 'KWD', unitAr: 'دينار كويتي', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'blue' },
                { label: 'Actual Expense', labelAr: 'المصروف الفعلي', value: '93,500', subtitle: '62% of Budget', subtitleAr: '62% من الميزانية', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'red' },
                { label: 'Collected Donations', labelAr: 'التبرعات المجمعة', value: '4', subtitle: '0% of Target', subtitleAr: '0% من الهدف', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', color: 'green' },
                { label: 'Completion Rate', labelAr: 'معدل الإنجاز', value: '75%', subtitle: 'Ahead of Schedule', subtitleAr: 'متقدم على الجدول', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'purple' },
                { label: 'Beneficiaries', labelAr: 'المستفيدون', value: '450', subtitle: 'of 500 Target', subtitleAr: 'من أصل 500 مستهدف', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'blue' },
                { label: 'Risk Index', labelAr: 'مؤشر المخاطر', value: 'Medium', valueAr: 'متوسط', subtitle: '3 Open Risk Cases', subtitleAr: '3 حالات مخاطر مفتوحة', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', color: 'yellow' },
              ].map((kpi, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-xl shadow-md p-4 lg:p-5 border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-2 lg:mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{isRTL ? kpi.labelAr : kpi.label}</span>
                    <div className={`p-1.5 lg:p-2 rounded-lg ${
                      kpi.color === 'blue' ? 'bg-blue-100' :
                      kpi.color === 'red' ? 'bg-red-100' :
                      kpi.color === 'green' ? 'bg-green-100' :
                      kpi.color === 'purple' ? 'bg-purple-100' :
                      'bg-yellow-100'
                    }`}>
                      <svg className={`w-4 h-4 lg:w-5 lg:h-5 ${
                        kpi.color === 'blue' ? 'text-blue-600' :
                        kpi.color === 'red' ? 'text-red-600' :
                        kpi.color === 'green' ? 'text-green-600' :
                        kpi.color === 'purple' ? 'text-purple-600' :
                        'text-yellow-600'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={kpi.icon} />
                      </svg>
                    </div>
                  </div>
                  <div className={`text-xl lg:text-2xl font-bold mb-1 ${
                    kpi.color === 'red' ? 'text-red-600' :
                    kpi.color === 'green' ? 'text-green-600' :
                    kpi.color === 'purple' ? 'text-purple-600' :
                    'text-gray-800'
                  }`}>
                    {isRTL && kpi.valueAr ? kpi.valueAr : kpi.value} {kpi.unit && <span className="text-sm font-normal text-gray-500">{isRTL && kpi.unitAr ? kpi.unitAr : kpi.unit}</span>}
                  </div>
                  {kpi.subtitle && (
                    <p className="text-xs text-gray-500 mt-1 lg:mt-2">{isRTL && kpi.subtitleAr ? kpi.subtitleAr : kpi.subtitle}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Charts - Mobile Stacked Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Monthly Expenses - Mobile Scrollable */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <h3 
                  className="mb-4 lg:mb-6 text-gray-800 text-base lg:text-lg font-semibold"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'المصروفات الشهرية' : 'Monthly Expenses'}
                </h3>
                <div className="h-64 lg:h-72 relative overflow-x-auto">
                  <div className="min-w-[600px] lg:min-w-0 h-full flex items-end justify-between gap-2 px-4 pb-8">
                    {Array.from({ length: 12 }).map((_, i) => {
                      // Data values for each month (in thousands)
                      const monthlyData = [
                        { value1: 45, value2: 25 }, { value1: 52, value2: 30 }, { value1: 48, value2: 28 },
                        { value1: 60, value2: 35 }, { value1: 55, value2: 32 }, { value1: 58, value2: 34 },
                        { value1: 50, value2: 29 }, { value1: 54, value2: 31 }, { value1: 49, value2: 27 },
                        { value1: 62, value2: 36 }, { value1: 57, value2: 33 }, { value1: 59, value2: 35 }
                      ];
                      const { value1, value2 } = monthlyData[i] || { value1: 50, value2: 30 };
                      const totalValue = value1 + value2;
                      const maxValue = 100; // Maximum value for scaling
                      
                      // Calculate heights as percentage of max value, ensuring minimum visibility
                      const barHeight1 = Math.max((value1 / maxValue) * 100, 20);
                      const barHeight2 = Math.max((value2 / maxValue) * 100, 15);
                      
                      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                      const monthsAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative h-full">
                          <div className="w-full h-full flex flex-col justify-end gap-0.5 relative overflow-visible cursor-pointer transition-all duration-300 group-hover:scale-105">
                            <div 
                              className="w-full bg-gradient-to-t from-[#67AF31] via-[#7CB342] to-[#8BC34A] rounded-t-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:from-[#4d8a24] group-hover:via-[#67AF31] group-hover:to-[#7CB342]"
                              style={{ height: `${barHeight1}%`, minHeight: '40px' }}
                            />
                            <div 
                              className="w-full bg-gradient-to-t from-[#8BC34A] via-[#9CCC65] to-[#AED581] rounded-b-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:from-[#7CB342] group-hover:via-[#8BC34A] group-hover:to-[#9CCC65]"
                              style={{ height: `${barHeight2}%`, minHeight: '25px' }}
                            />
                            {/* Tooltip on hover */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10 shadow-xl">
                              {isRTL ? monthsAr[i] : months[i]}: ${totalValue}K
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                          <span className="text-xs font-semibold text-gray-600 group-hover:text-[#67AF31] transition-colors mt-1 whitespace-nowrap">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Spending Distribution - Mobile Centered */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <h3 
                  className="mb-4 lg:mb-6 text-gray-800 text-base lg:text-lg font-semibold"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'توزيع الإنفاق' : 'Spending Distribution'}
                </h3>
                <div className="flex items-center justify-center h-48 lg:h-72">
                  <div className="relative w-40 h-40 lg:w-56 lg:h-56">
                    <svg className="transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#67AF31" strokeWidth="12" strokeDasharray={`${60 * 3.14159} ${100 * 3.14159}`} strokeDashoffset="0" />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="12" strokeDasharray={`${30 * 3.14159} ${100 * 3.14159}`} strokeDashoffset={`-${60 * 3.14159}`} />
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="12" strokeDasharray={`${10 * 3.14159} ${100 * 3.14159}`} strokeDashoffset={`-${90 * 3.14159}`} />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2 lg:space-y-3 mt-4 lg:mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#67AF31] rounded"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-700">{isRTL ? 'العمليات' : 'Operations'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-orange-500 rounded"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-700">{isRTL ? 'اللوجستيات' : 'Logistics'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 bg-red-500 rounded"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-700">{isRTL ? 'النفقات العامة' : 'General Expenses'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cumulative Donations Chart - Mobile Full Width */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
              <h3 
                className="mb-3 lg:mb-4 text-gray-800 text-base lg:text-lg font-semibold"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'التبرعات التراكمية' : 'Cumulative Donations'}
              </h3>
              <div className="h-48 lg:h-64 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="donationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#67AF31" stopOpacity="0.5" />
                      <stop offset="30%" stopColor="#67AF31" stopOpacity="0.3" />
                      <stop offset="60%" stopColor="#67AF31" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#67AF31" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path
                    d="M 0,200 Q 100,150 200,120 T 400,80 L 400,200 L 0,200 Z"
                    fill="url(#donationGradient)"
                    className="transition-all duration-500"
                  />
                  <path
                    d="M 0,200 Q 100,150 200,120 T 400,80"
                    fill="none"
                    stroke="#67AF31"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glow)"
                    className="transition-all duration-500"
                  />
                  <circle cx="400" cy="80" r="10" fill="#67AF31" className="drop-shadow-lg" />
                  <circle cx="400" cy="80" r="6" fill="white" />
                </svg>
              </div>
              <p className="text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4">{isRTL ? 'بناءً على التبرعات المكتملة فقط.' : 'Based on completed donations only.'}</p>
            </div>

            {/* Information Cards - Mobile Single Column */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Latest Transactions */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4 lg:mb-5">
                  <h3 
                    className="text-gray-800 text-base lg:text-lg font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'أحدث المعاملات' : 'Latest Transactions'}
                  </h3>
                  <button 
                    onClick={() => onNavigate('finance')}
                    className="text-sm font-semibold text-[#67AF31] hover:text-[#8BC34A] transition-colors"
                  >
                    {isRTL ? 'عرض الكل' : 'View All'}
                  </button>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  {[
                    { name: 'nil', date: '09/01/2026', amount: '2 KWD' },
                    { name: 'nil', date: '08/01/2026', amount: '1 KWD' },
                    { name: 'nil', date: '08/01/2026', amount: '1 KWD' },
                  ].map((transaction, i) => (
                    <div key={i} className="flex items-center justify-between py-2 lg:py-3 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{transaction.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{transaction.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-800">{transaction.amount}</p>
                        <span className="inline-block px-2 lg:px-3 py-1 bg-[#67AF31] text-white text-xs font-semibold rounded-full mt-1">{isRTL ? 'مدفوع' : 'Paid'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest Documents */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4 lg:mb-5">
                  <h3 
                    className="text-gray-800 text-base lg:text-lg font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'أحدث المستندات' : 'Latest Documents'}
                  </h3>
                  <button 
                    onClick={() => onNavigate('documents')}
                    className="text-sm font-semibold text-[#67AF31] hover:text-[#8BC34A] transition-colors"
                  >
                    {isRTL ? 'عرض الكل' : 'View All'}
                  </button>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  {[
                    { name: 'Monthly Progress Report', nameAr: 'تقرير التقدم الشهري', date: '24 2025 يونيو', dateEn: 'June 24, 2025', color: 'red' },
                    { name: 'Site Photos', nameAr: 'صور الموقع', date: '23 2025 يونيو', dateEn: 'June 23, 2025', color: 'blue' },
                    { name: 'Completion Certificate', nameAr: 'شهادة الإنجاز', date: '22 2025', dateEn: 'June 22, 2025', color: 'green' },
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between py-2 lg:py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg border-2 flex items-center justify-center ${
                          doc.color === 'red' ? 'border-red-500' :
                          doc.color === 'blue' ? 'border-blue-500' :
                          'border-green-500'
                        }`}>
                          <span className={`text-xs lg:text-sm font-bold ${
                            doc.color === 'red' ? 'text-red-500' :
                            doc.color === 'blue' ? 'text-blue-500' :
                            'text-green-500'
                          }`}>D</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{isRTL ? doc.nameAr : doc.name}</p>
                          <p className="text-xs text-gray-500 mt-1">{isRTL ? doc.date : doc.dateEn}</p>
                        </div>
                      </div>
                      <button className="text-[#67AF31] hover:text-[#8BC34A] transition-colors">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Due Tasks */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4 lg:mb-5">
                  <h3 
                    className="text-gray-800 text-base lg:text-lg font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'المهام المستحقة' : 'Due Tasks'}
                  </h3>
                  <a href="#" className="text-sm font-semibold text-[#67AF31] hover:text-[#8BC34A] transition-colors">{isRTL ? 'عرض الكل' : 'View All'}</a>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  {[
                    { name: 'Monthly Progress Report', nameAr: 'تقرير التقدم الشهري', assignee: 'Ahmed Mohammed', assigneeAr: 'أحمد محمد', date: '26 2025 يونيو', dateEn: 'June 26, 2025', status: 'Overdue', statusAr: 'متأخر', color: 'red' },
                    { name: 'Add New Field Visit', nameAr: 'إضافة زيارة ميدانية جديدة', assignee: 'Sara Ahmed', assigneeAr: 'سارة أحمد', date: '28 يونيو 2025', dateEn: 'June 28, 2025', status: 'Upcoming', statusAr: 'قريباً', color: 'yellow' },
                    { name: 'Add Task', nameAr: 'إضافة مهمة', assignee: 'Mohammed Ali', assigneeAr: 'محمد علي', date: '30 يونيو 2025', dateEn: 'June 30, 2025', status: 'Scheduled', statusAr: 'مجدول', color: 'blue' },
                  ].map((task, i) => (
                    <div key={i} className="flex items-center justify-between py-2 lg:py-3 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{isRTL ? task.nameAr : task.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{isRTL ? task.assigneeAr : task.assignee} • {isRTL ? task.date : task.dateEn}</p>
                      </div>
                      <span className={`inline-block px-2 lg:px-3 py-1 text-white text-xs font-semibold rounded-full ${
                        task.color === 'red' ? 'bg-red-500' :
                        task.color === 'yellow' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}>{isRTL ? task.statusAr : task.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reports Section - Mobile Single Column */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Implementing Agency Reports */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4 lg:mb-5">
                  <h3 
                    className="text-gray-800 text-base lg:text-lg font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    تقارير الوكالة المنفذة
                  </h3>
                  <a href="#" className="text-sm font-semibold text-[#67AF31] hover:text-[#8BC34A] transition-colors">عرض الكل</a>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  {[
                    { name: 'تقرير التقدم الشهري', date: 'أغسطس 2025', sentDate: 'تم الإرسال 14 أغسطس', icon: 'document', iconColor: 'red' },
                    { name: 'تقرير التقدم الشهري', subtitle: 'المرحلة الثالثة', date: 'أغسطس 2025', sentDate: 'تم الإرسال 10 أغسطس', icon: 'chart', iconColor: 'blue' },
                  ].map((report, i) => (
                    <div key={i} className="flex items-center justify-between py-3 lg:py-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center ${
                          report.iconColor === 'red' ? 'bg-red-100' : 'bg-blue-100'
                        }`}>
                          {report.icon === 'document' ? (
                            <svg className={`w-5 h-5 lg:w-6 lg:h-6 ${report.iconColor === 'red' ? 'text-red-600' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          ) : (
                            <svg className={`w-5 h-5 lg:w-6 lg:h-6 ${report.iconColor === 'red' ? 'text-red-600' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{report.name}</p>
                          {report.subtitle && <p className="text-xs text-gray-600 mt-1">{report.subtitle}</p>}
                          <p className="text-xs text-gray-500 mt-1">{report.date}</p>
                        </div>
                      </div>
                      <span className="px-2 lg:px-3 py-1 bg-[#67AF31] text-white text-xs font-semibold rounded-full whitespace-nowrap">{report.sentDate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reports Sent to Donors */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4 lg:mb-5">
                  <h3 
                    className="text-gray-800 text-base lg:text-lg font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    التقارير المرسلة للمانحين
                  </h3>
                  <a href="#" className="text-sm font-semibold text-[#67AF31] hover:text-[#8BC34A] transition-colors">عرض الكل</a>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  {[
                    { name: 'النشرة الشهرية', description: 'تحديثات المشروع - أغسطس', sentDate: 'تم الإرسال 15 أغسطس', icon: 'envelope', iconColor: 'purple' },
                    { name: 'تقرير الأثر الاجتماعي', description: 'قصص المستفيدين', sentDate: 'تم الإرسال 12 أغسطس', icon: 'folder', iconColor: 'orange' },
                  ].map((report, i) => (
                    <div key={i} className="flex items-center justify-between py-3 lg:py-4 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center ${
                          report.iconColor === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                        }`}>
                          {report.icon === 'envelope' ? (
                            <svg className={`w-5 h-5 lg:w-6 lg:h-6 ${report.iconColor === 'purple' ? 'text-purple-600' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          ) : (
                            <svg className={`w-5 h-5 lg:w-6 lg:h-6 ${report.iconColor === 'purple' ? 'text-purple-600' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{report.name}</p>
                          <p className="text-xs text-gray-500 mt-1">{report.description}</p>
                        </div>
                      </div>
                      <span className="px-2 lg:px-3 py-1 bg-[#67AF31] text-white text-xs font-semibold rounded-full whitespace-nowrap">{report.sentDate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons - Mobile Responsive */}
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <button 
                onClick={() => onNavigate && onNavigate('reports')}
                className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm lg:text-base"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'الجدول الزمني للأنشطة' : 'Activities Timeline'}
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('finance')}
                className="px-4 lg:px-6 py-2 lg:py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 text-sm lg:text-base"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'المالية' : 'Finance'}
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('documents')}
                className="px-4 lg:px-6 py-2 lg:py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 text-sm lg:text-base"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'المستندات' : 'Documents'}
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('governance')}
                className="px-4 lg:px-6 py-2 lg:py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 text-sm lg:text-base"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'الحوكمة' : 'Governance'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
