import { useState } from 'react';
import logo from '../assets/logo new.png';

const ActivityTimelineScreen = ({ onBack, onNavigate, language, onLanguageChange }) => {
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedActivityType, setSelectedActivityType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [activeMenu, setActiveMenu] = useState('reports');
  const [expandedMenus, setExpandedMenus] = useState({});
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

  const activities = [
    {
      id: 1,
      type: 'Project Created',
      typeAr: 'تم إنشاء المشروع',
      project: 'Hafsa Women\'s Center Project',
      projectAr: 'مشروع مركز حفصة النسائي',
      user: 'Ahmed Mohammed',
      userAr: 'أحمد محمد',
      date: '2025-01-15 10:30',
      icon: 'project',
      color: 'blue'
    },
    {
      id: 2,
      type: 'Phase Submitted',
      typeAr: 'تم إرسال المرحلة',
      project: 'Hafsa Women\'s Center Project',
      projectAr: 'مشروع مركز حفصة النسائي',
      phase: 'Planning Phase',
      phaseAr: 'مرحلة التخطيط',
      user: 'Sara Ahmed',
      userAr: 'سارة أحمد',
      date: '2025-01-20 14:45',
      icon: 'submit',
      color: 'yellow'
    },
    {
      id: 3,
      type: 'Phase Approved',
      typeAr: 'تمت الموافقة على المرحلة',
      project: 'Well Drilling Project',
      projectAr: 'مشروع حفر الآبار',
      phase: 'Initiation Phase',
      phaseAr: 'مرحلة البدء',
      user: 'PMU Admin',
      userAr: 'مدير PMU',
      date: '2025-01-18 09:15',
      icon: 'approve',
      color: 'green'
    },
    {
      id: 4,
      type: 'Entity Approved',
      typeAr: 'تمت الموافقة على الكيان',
      entity: 'White Hands Association',
      entityAr: 'جمعية الأيادي البيضاء',
      user: 'PMU Admin',
      userAr: 'مدير PMU',
      date: '2025-01-12 11:20',
      icon: 'entity',
      color: 'green'
    },
    {
      id: 5,
      type: 'Phase Requested Changes',
      typeAr: 'تم طلب تعديلات على المرحلة',
      project: 'Aqiqah Project',
      projectAr: 'مشروع العقيقة',
      phase: 'Execution Phase',
      phaseAr: 'مرحلة التنفيذ',
      user: 'Mohammed Ali',
      userAr: 'محمد علي',
      date: '2025-01-22 16:30',
      icon: 'changes',
      color: 'orange'
    },
    {
      id: 6,
      type: 'Entity Registered',
      typeAr: 'تم تسجيل الكيان',
      entity: 'Association pour le Secours Humanitaire',
      entityAr: 'جمعية الإغاثة الإنسانية',
      user: 'System',
      userAr: 'النظام',
      date: '2025-01-10 08:00',
      icon: 'register',
      color: 'blue'
    },
  ];

  const getActivityIcon = (icon) => {
    const icons = {
      project: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      submit: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      approve: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      entity: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      changes: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      register: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
    };
    return icons[icon] || icons.project;
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Sidebar */}
      <div 
        className="w-64 text-white flex flex-col shadow-2xl"
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
                        // Already on reports screen
                      } else if (item.id === 'thirdParty') {
                        // Third Party menu item - handle submenu
                      } else if (item.id === 'communication') {
                        // Communication menu item - handle submenu
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
                        if (onNavigate) {
                          if (subItem.id === 'finance') {
                            onNavigate('finance');
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

        <div className="p-6 border-t border-white/20">
          <p className="text-xs text-white/80 text-center font-medium">
            {isRTL ? `جمعية بلد الخير ${new Date().getFullYear()}©` : `Balad Alkhair Society ${new Date().getFullYear()}©`}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h1 
                className="text-gray-800 font-bold"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '24px', fontWeight: 700 }}
              >
                {isRTL ? 'التقارير/الجدول الزمني' : 'Reports/Activity Timeline'}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {isRTL ? 'سجل زمني لأنشطة المشاريع والكيانات' : 'Chronological timeline of project and entity activities'}
              </p>
            </div>
          </div>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{isRTL ? 'English' : 'العربية'}</span>
          </button>
        </header>

        {/* Filters */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <div className="min-w-[200px] flex-1 relative">
              <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                placeholder={isRTL ? "البحث عن مشروع..." : "Search project..."}
                className={`w-full ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-sm`}
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
              />
            </div>
            <select
              value={selectedActivityType}
              onChange={(e) => setSelectedActivityType(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
            >
              <option value="">{isRTL ? 'نوع النشاط' : 'Activity Type'}</option>
              <option value="created">{isRTL ? 'تم الإنشاء' : 'Created'}</option>
              <option value="submitted">{isRTL ? 'تم الإرسال' : 'Submitted'}</option>
              <option value="approved">{isRTL ? 'تمت الموافقة' : 'Approved'}</option>
              <option value="rejected">{isRTL ? 'تم الرفض' : 'Rejected'}</option>
            </select>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 text-sm"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Recent Activities Summary */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
              <h2 
                className="text-gray-800 font-bold mb-4"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '18px', fontWeight: 700 }}
              >
                {isRTL ? 'ملخص الأنشطة (آخر 7 أيام)' : 'Recent Activities Summary (Last 7 Days)'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p 
                    className="text-blue-700 font-bold text-2xl mb-1"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '24px', fontWeight: 700 }}
                  >
                    12
                  </p>
                  <p 
                    className="text-blue-600 text-sm"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'مشروع جديد' : 'New Projects'}
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <p 
                    className="text-yellow-700 font-bold text-2xl mb-1"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '24px', fontWeight: 700 }}
                  >
                    8
                  </p>
                  <p 
                    className="text-yellow-600 text-sm"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'مراحل مرفوعة' : 'Phases Submitted'}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p 
                    className="text-green-700 font-bold text-2xl mb-1"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '24px', fontWeight: 700 }}
                  >
                    15
                  </p>
                  <p 
                    className="text-green-600 text-sm"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'موافقات' : 'Approvals'}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <p 
                    className="text-purple-700 font-bold text-2xl mb-1"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '24px', fontWeight: 700 }}
                  >
                    5
                  </p>
                  <p 
                    className="text-purple-600 text-sm"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'كيانات جديدة' : 'New Entities'}
                  </p>
                </div>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h2 
                className="text-gray-800 font-bold mb-6"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '18px', fontWeight: 700 }}
              >
                {isRTL ? 'الجدول الزمني للأنشطة' : 'Activity Timeline'}
              </h2>
              <div className="space-y-5">
                {activities.map((activity, index) => (
                  <div key={activity.id} className="relative group">
                    {index < activities.length - 1 && (
                      <div className={`absolute ${isRTL ? 'right-6' : 'left-6'} top-14 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-100 transition-all duration-300`}></div>
                    )}
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 z-10 ${
                        activity.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                        activity.color === 'yellow' ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' :
                        activity.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                        activity.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                        'bg-gradient-to-br from-purple-500 to-purple-600'
                      }`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getActivityIcon(activity.icon)} />
                        </svg>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-[#67AF31]/30 transition-all duration-300 group-hover:scale-[1.01]">
                        <div className="space-y-2">
                          <p 
                            className={`font-bold ${
                              activity.color === 'blue' ? 'text-blue-700' :
                              activity.color === 'yellow' ? 'text-yellow-700' :
                              activity.color === 'green' ? 'text-green-700' :
                              activity.color === 'orange' ? 'text-orange-700' :
                              'text-purple-700'
                            }`}
                            style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 700 }}
                          >
                            {isRTL ? activity.typeAr : activity.type}
                          </p>
                          <p 
                            className="text-gray-800 font-semibold"
                            style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                          >
                            {activity.project ? (isRTL ? activity.projectAr : activity.project) : (isRTL ? activity.entityAr : activity.entity)}
                          </p>
                          {activity.phase && (
                            <p 
                              className="text-gray-600 text-sm px-3 py-1 bg-gray-100 rounded-lg inline-block"
                              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 500 }}
                            >
                              {isRTL ? activity.phaseAr : activity.phase}
                            </p>
                          )}
                          <div className="flex items-center gap-2 pt-2 mt-2 border-t border-gray-100">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <p 
                              className="text-gray-500 text-sm"
                              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 400 }}
                            >
                              {isRTL ? activity.userAr : activity.user}
                            </p>
                            <span className="text-gray-300">•</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p 
                              className="text-gray-500 text-sm"
                              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 400 }}
                            >
                              {activity.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTimelineScreen;

