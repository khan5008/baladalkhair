import { useState } from 'react';
import logo from '../assets/logo new.png';

const ProjectPhasesScreen = ({ onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('projectPhases');
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedProject, setSelectedProject] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [selectedBacklog, setSelectedBacklog] = useState('Backlog');
  const [selectedDate, setSelectedDate] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
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
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      submenu: [
        { id: 'finance', label: 'Finance', labelAr: 'المالية' },
      ]
    },
  ];

  const kanbanColumns = [
    { id: 'backlog', title: 'Backlog', titleAr: 'المهام المعلقة', count: 0, color: 'bg-gray-100' },
    { id: 'inprogress', title: 'In Progress', titleAr: 'قيد التنفيذ', count: 0, color: 'bg-blue-100' },
    { id: 'underreview', title: 'Under Review', titleAr: 'قيد المراجعة', count: 0, color: 'bg-yellow-100' },
    { id: 'blocked', title: 'Blocked', titleAr: 'محظور', count: 0, color: 'bg-red-100' },
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
                  activeMenu === item.id
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
        {/* Mobile Header with Stats */}
        <div className="bg-white border-b border-gray-200 p-4 lg:p-6">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
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
                  {isRTL ? 'مراحل المشروع' : 'Project Phases'}
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
          </div>

          {/* Stats Cards - Mobile Single Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-6">
            <div className="bg-blue-50 rounded-lg p-3 lg:p-4 border border-blue-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-blue-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'المهام المفتوحة' : 'Open Tasks'}
                  </p>
                  <p 
                    className="text-blue-700 font-bold text-xl lg:text-2xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    12
                  </p>
                  <p 
                    className="text-blue-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'متأخر' : 'Overdue'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-3 lg:p-4 border border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-yellow-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'التالي المستحق' : 'Next Due'}
                  </p>
                  <p 
                    className="text-yellow-700 font-bold text-xl lg:text-2xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    5
                  </p>
                  <p 
                    className="text-yellow-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'أيام' : 'days'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-3 lg:p-4 border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'التقدم' : 'Progress'}
                  </p>
                  <p 
                    className="text-green-700 font-bold text-xl lg:text-2xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    75%
                  </p>
                  <p 
                    className="text-green-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'متقدم عن الجدولة' : 'Ahead of Schedule'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Scrollable Tabs Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex gap-1 px-4 lg:px-6 overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('calendar')}
              className={`px-3 lg:px-4 py-3 flex items-center gap-2 font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'calendar'
                  ? 'text-gray-800 border-b-2 border-gray-800'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {isRTL ? 'التقويم' : 'Calendar'}
            </button>
            <button 
              onClick={() => setActiveTab('gantt')}
              className={`px-3 lg:px-4 py-3 flex items-center gap-2 font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'gantt'
                  ? 'text-gray-800 border-b-2 border-gray-800'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {isRTL ? 'جانت' : 'Gantt'}
            </button>
            <button 
              onClick={() => setActiveTab('forms')}
              className={`px-3 lg:px-4 py-3 flex items-center gap-2 font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'forms'
                  ? 'text-gray-800 border-b-2 border-gray-800'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {isRTL ? 'النماذج' : 'Forms'}
            </button>
            <button 
              onClick={() => setActiveTab('projectStory')}
              className={`px-3 lg:px-4 py-3 flex items-center gap-2 font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                activeTab === 'projectStory'
                  ? 'text-gray-800 border-b-2 border-gray-800'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {isRTL ? 'قصة المشروع' : 'Project Story'}
            </button>
          </div>
        </div>

        {/* Tab Content - Mobile Responsive */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {activeTab === 'calendar' && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <h3 
                  className="text-gray-800 font-bold mb-4 lg:mb-6 text-lg lg:text-xl"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'تقويم المشروع' : 'Project Calendar'}
                </h3>
                {/* Mobile Calendar View */}
                <div className="grid grid-cols-7 gap-1 lg:gap-2 mb-4">
                  {/* Calendar Header */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                    <div key={idx} className="text-center text-xs lg:text-sm font-semibold text-gray-600 py-1 lg:py-2">
                      {isRTL ? ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'][idx] : day}
                    </div>
                  ))}
                  {/* Calendar Days */}
                  {Array.from({ length: 35 }).map((_, idx) => {
                    const day = idx - 5; // Start from day 1
                    const isCurrentMonth = day > 0 && day <= 31;
                    const isToday = day === new Date().getDate();
                    return (
                      <div
                        key={idx}
                        className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center p-1 lg:p-2 ${
                          isCurrentMonth
                            ? isToday
                              ? 'bg-[#67AF31] text-white border-[#67AF31]'
                              : 'bg-white border-gray-200 hover:border-[#67AF31] hover:bg-gray-50'
                            : 'bg-gray-50 border-gray-100 text-gray-400'
                        }`}
                      >
                        {isCurrentMonth && (
                          <span className="text-xs lg:text-sm font-medium">{day}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Calendar Events - Mobile Optimized */}
                <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-3">
                  <h4 
                    className="text-gray-700 font-semibold mb-2 lg:mb-3 text-sm lg:text-base"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'الأحداث القادمة' : 'Upcoming Events'}
                  </h4>
                  {[
                    { date: '15', title: 'Phase Review Meeting', titleAr: 'اجتماع مراجعة المرحلة', time: '10:00 AM' },
                    { date: '18', title: 'Project Milestone', titleAr: 'معلم المشروع', time: '2:00 PM' },
                    { date: '22', title: 'Stakeholder Presentation', titleAr: 'عرض لأصحاب المصلحة', time: '11:00 AM' },
                  ].map((event, idx) => (
                    <div key={idx} className="flex items-center gap-3 lg:gap-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-base">
                        {event.date}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium text-sm lg:text-base">{isRTL ? event.titleAr : event.title}</p>
                        <p className="text-gray-500 text-xs lg:text-sm">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gantt' && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <h3 
                  className="text-gray-800 font-bold mb-4 lg:mb-6 text-lg lg:text-xl"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'مخطط جانت' : 'Gantt Chart'}
                </h3>
                {/* Mobile Gantt Chart */}
                <div className="space-y-3 lg:space-y-4">
                  {[
                    { name: 'Phase 1: Initiation', nameAr: 'المرحلة 1: البدء', progress: 100, start: 'Week 1', end: 'Week 4', color: 'bg-green-500' },
                    { name: 'Phase 2: Planning', nameAr: 'المرحلة 2: التخطيط', progress: 75, start: 'Week 3', end: 'Week 8', color: 'bg-blue-500' },
                    { name: 'Phase 3: Execution', nameAr: 'المرحلة 3: التنفيذ', progress: 45, start: 'Week 7', end: 'Week 16', color: 'bg-yellow-500' },
                    { name: 'Phase 4: Monitoring', nameAr: 'المرحلة 4: المراقبة', progress: 20, start: 'Week 15', end: 'Week 20', color: 'bg-orange-500' },
                    { name: 'Phase 5: Closure', nameAr: 'المرحلة 5: الإغلاق', progress: 0, start: 'Week 19', end: 'Week 24', color: 'bg-gray-400' },
                  ].map((phase, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium text-sm lg:text-base">{isRTL ? phase.nameAr : phase.name}</span>
                        <span className="text-gray-500 text-xs lg:text-sm">{phase.start} - {phase.end}</span>
                      </div>
                      <div className="relative h-6 lg:h-8 bg-gray-200 rounded-lg overflow-hidden">
                        <div
                          className={`h-full ${phase.color} rounded-lg transition-all duration-300 flex items-center justify-end pr-2`}
                          style={{ width: `${phase.progress}%` }}
                        >
                          {phase.progress > 10 && (
                            <span className="text-white text-xs font-semibold">{phase.progress}%</span>
                          )}
                        </div>
                        {phase.progress <= 10 && (
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-xs font-semibold">{phase.progress}%</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Timeline Legend - Mobile Responsive */}
                <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 lg:flex lg:items-center gap-3 lg:gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded"></div>
                      <span className="text-xs lg:text-sm text-gray-600">{isRTL ? 'مكتمل' : 'Completed'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-500 rounded"></div>
                      <span className="text-xs lg:text-sm text-gray-600">{isRTL ? 'قيد التنفيذ' : 'In Progress'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-yellow-500 rounded"></div>
                      <span className="text-xs lg:text-sm text-gray-600">{isRTL ? 'مخطط' : 'Planned'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-400 rounded"></div>
                      <span className="text-xs lg:text-sm text-gray-600">{isRTL ? 'لم يبدأ' : 'Not Started'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'forms' && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6 mb-4 lg:mb-6">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h3 
                    className="text-gray-800 font-bold text-lg lg:text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'النماذج' : 'Forms'}
                  </h3>
                  <button className="px-3 lg:px-4 py-2 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-xl hover:shadow-lg transition-all text-sm lg:text-base">
                    {isRTL ? '+ إضافة نموذج' : '+ Add Form'}
                  </button>
                </div>
                {/* Forms Grid - Mobile Single Column */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
                  {[
                    { name: 'Progress Report Form', nameAr: 'نموذج تقرير التقدم', icon: '📄', submissions: 12, lastUpdated: '2 days ago', lastUpdatedAr: 'منذ يومين' },
                    { name: 'Site Visit Form', nameAr: 'نموذج زيارة الموقع', icon: '🏗️', submissions: 8, lastUpdated: '1 week ago', lastUpdatedAr: 'منذ أسبوع' },
                    { name: 'Expense Report Form', nameAr: 'نموذج تقرير المصروفات', icon: '💰', submissions: 24, lastUpdated: '3 days ago', lastUpdatedAr: 'منذ 3 أيام' },
                    { name: 'Quality Check Form', nameAr: 'نموذج فحص الجودة', icon: '✅', submissions: 15, lastUpdated: '5 days ago', lastUpdatedAr: 'منذ 5 أيام' },
                    { name: 'Safety Inspection Form', nameAr: 'نموذج فحص السلامة', icon: '🛡️', submissions: 6, lastUpdated: '1 week ago', lastUpdatedAr: 'منذ أسبوع' },
                    { name: 'Completion Certificate', nameAr: 'شهادة الإنجاز', icon: '🎓', submissions: 3, lastUpdated: '2 weeks ago', lastUpdatedAr: 'منذ أسبوعين' },
                  ].map((form, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-start gap-3 lg:gap-4">
                        <div className="text-2xl lg:text-4xl">{form.icon}</div>
                        <div className="flex-1">
                          <h4 
                            className="text-gray-800 font-semibold mb-2 text-sm lg:text-base"
                            style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                          >
                            {isRTL ? form.nameAr : form.name}
                          </h4>
                          <div className="flex items-center justify-between text-xs lg:text-sm text-gray-600">
                            <span>{isRTL ? `${form.submissions} تقديم` : `${form.submissions} submissions`}</span>
                            <span>{isRTL ? form.lastUpdatedAr : form.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projectStory' && (
            <div className="p-4 lg:p-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h3 
                    className="text-gray-800 font-bold text-lg lg:text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'قصة المشروع' : 'Project Story'}
                  </h3>
                  <button className="px-3 lg:px-4 py-2 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-xl hover:shadow-lg transition-all text-sm lg:text-base">
                    {isRTL ? '+ إضافة قصة' : '+ Add Story'}
                  </button>
                </div>
                {/* Project Story Timeline - Mobile Optimized */}
                <div className="space-y-4 lg:space-y-6">
                  {[
                    {
                      date: 'January 15, 2025',
                      dateAr: '15 يناير 2025',
                      title: 'Project Initiation',
                      titleAr: 'بدء المشروع',
                      description: 'The project was officially initiated with stakeholder approval and budget allocation.',
                      descriptionAr: 'تم بدء المشروع رسمياً بموافقة أصحاب المصلحة وتخصيص الميزانية.',
                      author: 'Ahmed Mohammed',
                      authorAr: 'أحمد محمد',
                      type: 'milestone'
                    },
                    {
                      date: 'February 1, 2025',
                      dateAr: '1 فبراير 2025',
                      title: 'First Phase Completion',
                      titleAr: 'إكمال المرحلة الأولى',
                      description: 'Successfully completed the initiation phase ahead of schedule. All deliverables met quality standards.',
                      descriptionAr: 'تم إكمال مرحلة البدء بنجاح قبل الموعد المحدد. جميع المخرجات تلبي معايير الجودة.',
                      author: 'Sara Ahmed',
                      authorAr: 'سارة أحمد',
                      type: 'achievement'
                    },
                    {
                      date: 'February 20, 2025',
                      dateAr: '20 فبراير 2025',
                      title: 'Site Visit Completed',
                      titleAr: 'اكتملت زيارة الموقع',
                      description: 'Conducted comprehensive site visit to assess progress and identify any challenges.',
                      descriptionAr: 'تم إجراء زيارة شاملة للموقع لتقييم التقدم وتحديد أي تحديات.',
                      author: 'Mohammed Ali',
                      authorAr: 'محمد علي',
                      type: 'update'
                    },
                  ].map((story, idx) => (
                    <div key={idx} className="flex gap-3 lg:gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm lg:text-base">
                          {idx + 1}
                        </div>
                        {idx < 2 && (
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4 lg:pb-6">
                        <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-200">
                          <div className="flex items-center justify-between mb-2 lg:mb-3">
                            <span className="text-xs lg:text-sm text-gray-500">{isRTL ? story.dateAr : story.date}</span>
                            <span className={`px-2 lg:px-3 py-1 rounded-full text-xs font-semibold ${
                              story.type === 'milestone' ? 'bg-blue-100 text-blue-700' :
                              story.type === 'achievement' ? 'bg-green-100 text-green-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {story.type === 'milestone' ? (isRTL ? 'معلم' : 'Milestone') :
                               story.type === 'achievement' ? (isRTL ? 'إنجاز' : 'Achievement') :
                               (isRTL ? 'تحديث' : 'Update')}
                            </span>
                          </div>
                          <h4 
                            className="text-gray-800 font-bold mb-2 text-base lg:text-lg"
                            style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                          >
                            {isRTL ? story.titleAr : story.title}
                          </h4>
                          <p 
                            className="text-gray-600 mb-2 lg:mb-3 text-sm lg:text-base"
                            style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                          >
                            {isRTL ? story.descriptionAr : story.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs lg:text-sm text-gray-500">
                            <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>{isRTL ? story.authorAr : story.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPhasesScreen;