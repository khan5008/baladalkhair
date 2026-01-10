import { useState } from 'react';
import logo from '../assets/logo new.png';
import iftarGaza from '../assets/افطار_غزة.png';

const ProjectDetailsScreen = ({ projectId, onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [activePhase, setActivePhase] = useState('initiation');
  const [expandedMenus, setExpandedMenus] = useState({
    communication: false,
    thirdParty: false,
  });
  const [activeMenu, setActiveMenu] = useState('projects');
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

  // Mock project data
  const project = {
    id: projectId || 1,
    name: 'Hafsa Women\'s Center for Quranic Circles and Da\'wah Activities Project',
    nameAr: 'مركز حفصة النسائي لدوائر القرآنية وأنشطة الدعوة',
    code: '860051',
    country: 'Kuwait',
    countryAr: 'الكويت',
    status: 'In Progress',
    statusAr: 'قيد التنفيذ',
    image: iftarGaza,
    collected: '69 KWD',
    budget: '150 KWD',
  };

  const phases = [
    { 
      id: 'initiation', 
      label: 'Initiation', 
      labelAr: 'البدء',
      status: 'Approved',
      statusAr: 'موافق عليه',
      statusColor: 'green'
    },
    { 
      id: 'planning', 
      label: 'Planning', 
      labelAr: 'التخطيط',
      status: 'In Progress',
      statusAr: 'قيد التنفيذ',
      statusColor: 'yellow'
    },
    { 
      id: 'execution', 
      label: 'Execution', 
      labelAr: 'التنفيذ',
      status: 'Draft',
      statusAr: 'مسودة',
      statusColor: 'gray'
    },
    { 
      id: 'monitoring', 
      label: 'Monitoring', 
      labelAr: 'المراقبة',
      status: 'Not Started',
      statusAr: 'لم يبدأ',
      statusColor: 'gray'
    },
    { 
      id: 'closure', 
      label: 'Closure', 
      labelAr: 'الإغلاق',
      status: 'Not Started',
      statusAr: 'لم يبدأ',
      statusColor: 'gray'
    },
  ];

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

  const currentPhaseData = {
    initiation: {
      documents: ['Project Proposal.pdf', 'Initial Assessment.docx', 'Budget Plan.xlsx'],
      supervisor: 'Ahmed Mohammed',
      supervisorAr: 'أحمد محمد',
      startDate: '2025-01-15',
      endDate: '2025-02-15',
      submittedDate: null,
    },
    planning: {
      documents: ['Detailed Plan.pdf', 'Resource Allocation.docx'],
      supervisor: 'Sara Ahmed',
      supervisorAr: 'سارة أحمد',
      startDate: '2025-02-15',
      endDate: '2025-03-15',
      submittedDate: null,
    },
    execution: {
      documents: [],
      supervisor: 'Mohammed Ali',
      supervisorAr: 'محمد علي',
      startDate: '2025-03-15',
      endDate: '2025-06-15',
      submittedDate: null,
    },
    monitoring: {
      documents: [],
      supervisor: 'Fatima Hassan',
      supervisorAr: 'فاطمة حسن',
      startDate: '2025-06-15',
      endDate: '2025-07-15',
      submittedDate: null,
    },
    closure: {
      documents: [],
      supervisor: 'Omar Khaled',
      supervisorAr: 'عمر خالد',
      startDate: '2025-07-15',
      endDate: '2025-08-15',
      submittedDate: null,
    },
  };

  const currentPhase = currentPhaseData[activePhase] || currentPhaseData.initiation;
  const currentPhaseInfo = phases.find(p => p.id === activePhase) || phases[0];

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
                        onNavigate('reports');
                      } else if (item.id === 'thirdParty') {
                        // Third Party menu item - handle submenu
                      } else if (item.id === 'communication') {
                        // Communication menu item - handle submenu
                      }
                    }
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-3.5 transition-all duration-200 mx-2 rounded-xl ${
                  activeMenu === item.id || (item.submenu && (activeMenu === 'finance' || activeMenu === 'whatsapp-templates' || activeMenu === 'send-message') && expandedMenus[item.id])
                    ? 'bg-white text-[#67AF31] shadow-lg' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 400 }}
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="font-medium whitespace-nowrap">{isRTL ? item.labelAr : item.label}</span>
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
                            onNavigate('third-party-finance');
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
        {/* Header */}
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
                {isRTL ? 'تفاصيل المشروع' : 'Project Details'}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
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
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Project Summary Card - Modern Design */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-800 rounded-lg text-xs font-bold shadow-md">
                      {isRTL ? `كود: ${project.code}` : `Code: ${project.code}`}
                    </span>
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-md ${
                      project.status === 'In Progress' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 'bg-gradient-to-r from-green-500 to-green-600'
                    }`}>
                      {isRTL ? project.statusAr : project.status}
                    </span>
                  </div>
                </div>
                <div className="lg:w-3/5 p-6 lg:p-8">
                  <h2 
                    className="text-gray-800 font-bold mb-4 leading-tight"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '22px', fontWeight: 700 }}
                  >
                    {isRTL ? project.nameAr : project.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <span 
                        className="text-gray-500 text-sm block mb-2 font-medium"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '13px', fontWeight: 500 }}
                      >
                        {isRTL ? 'البلد' : 'Country'}
                      </span>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#67AF31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2 2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span 
                          className="text-gray-800 font-semibold"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                        >
                          {isRTL ? project.countryAr : project.country}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <span 
                        className="text-gray-500 text-sm block mb-2 font-medium"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '13px', fontWeight: 500 }}
                      >
                        {isRTL ? 'المجموع' : 'Collected'}
                      </span>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span 
                          className="text-gray-800 font-semibold text-lg"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '18px', fontWeight: 700 }}
                        >
                          {project.collected}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                      <span 
                        className="text-gray-500 text-sm block mb-2 font-medium"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '13px', fontWeight: 500 }}
                      >
                        {isRTL ? 'الميزانية' : 'Budget'}
                      </span>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#67AF31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span 
                          className="text-gray-800 font-semibold text-lg"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '18px', fontWeight: 700 }}
                        >
                          {project.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase Stepper - Modern Design */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 p-6 lg:p-8">
              <h3 
                className="text-gray-800 font-bold mb-6"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '20px', fontWeight: 700 }}
              >
                {isRTL ? 'مراحل المشروع' : 'Project Phases'}
              </h3>
              
              {/* Phase Tabs - Modern Horizontal Stepper */}
              <div className="mb-8">
                <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 scrollbar-hide">
                  {phases.map((phase, index) => (
                    <div key={phase.id} className="flex items-center flex-1 min-w-0">
                      <button
                        onClick={() => setActivePhase(phase.id)}
                        className={`relative flex-1 flex flex-col items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 min-w-[140px] ${
                          activePhase === phase.id
                            ? 'bg-gradient-to-br from-[#67AF31] to-[#8BC34A] text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                        }`}
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 500 }}
                      >
                        <div className="flex items-center gap-2 w-full justify-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            activePhase === phase.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                            {index + 1}
                          </div>
                          <span className="font-semibold truncate">{isRTL ? phase.labelAr : phase.label}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                          activePhase === phase.id 
                            ? 'bg-white/20 text-white' 
                            : phase.statusColor === 'green' 
                            ? 'bg-green-100 text-green-700' 
                            : phase.statusColor === 'yellow' 
                            ? 'bg-yellow-100 text-yellow-700' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {isRTL ? phase.statusAr : phase.status}
                        </span>
                      </button>
                      {index < phases.length - 1 && (
                        <div className={`w-8 h-0.5 mx-2 ${activePhase === phase.id || activePhase === phases[index + 1].id ? 'bg-[#67AF31]' : 'bg-gray-300'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Phase Content - Modern Cards */}
              <div className="space-y-6">
                {/* Phase Status Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        currentPhaseInfo.statusColor === 'green' ? 'bg-green-100' :
                        currentPhaseInfo.statusColor === 'yellow' ? 'bg-yellow-100' :
                        'bg-gray-100'
                      }`}>
                        <svg className={`w-5 h-5 ${
                          currentPhaseInfo.statusColor === 'green' ? 'text-green-600' :
                          currentPhaseInfo.statusColor === 'yellow' ? 'text-yellow-600' :
                          'text-gray-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span 
                          className="text-gray-500 text-xs block mb-1"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '12px', fontWeight: 500 }}
                        >
                          {isRTL ? 'حالة المرحلة' : 'Phase Status'}
                        </span>
                        <span 
                          className={`px-3 py-1.5 rounded-lg text-sm font-bold text-white inline-block ${
                            currentPhaseInfo.statusColor === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                            currentPhaseInfo.statusColor === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                            'bg-gradient-to-r from-gray-500 to-gray-600'
                          }`}
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '13px' }}
                        >
                          {isRTL ? currentPhaseInfo.statusAr : currentPhaseInfo.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <span 
                          className="text-gray-500 text-xs block mb-1"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '12px', fontWeight: 500 }}
                        >
                          {isRTL ? 'المشرف' : 'Supervisor'}
                        </span>
                        <span 
                          className="text-gray-800 font-semibold"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '15px', fontWeight: 600 }}
                        >
                          {isRTL ? currentPhase.supervisorAr : currentPhase.supervisor}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span 
                          className="text-gray-500 text-xs block mb-1"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '12px', fontWeight: 500 }}
                        >
                          {isRTL ? 'التواريخ' : 'Timeline'}
                        </span>
                        <span 
                          className="text-gray-800 font-semibold text-sm"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 600 }}
                        >
                          {currentPhase.startDate} - {currentPhase.endDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Section - Modern Design */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h4 
                      className="text-gray-800 font-semibold"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '18px', fontWeight: 600 }}
                    >
                      {isRTL ? 'المستندات المرفقة' : 'Uploaded Documents'}
                    </h4>
                    <button className="px-4 py-2 text-sm text-[#67AF31] hover:bg-[#67AF31]/10 rounded-lg transition-colors font-medium">
                      {isRTL ? '+ إضافة مستند' : '+ Add Document'}
                    </button>
                  </div>
                  {currentPhase.documents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentPhase.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#67AF31]/30 transition-all duration-300 group">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#67AF31]/20 to-[#8BC34A]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <svg className="w-6 h-6 text-[#67AF31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <span 
                                className="text-gray-800 font-semibold block truncate"
                                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px', fontWeight: 600 }}
                              >
                                {doc}
                              </span>
                              <span className="text-gray-500 text-xs block mt-1">
                                {isRTL ? 'PDF • 2.4 MB' : 'PDF • 2.4 MB'}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-3">
                            <button className="p-2 text-gray-400 hover:text-[#67AF31] hover:bg-[#67AF31]/10 rounded-lg transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button className="p-2 text-gray-400 hover:text-[#67AF31] hover:bg-[#67AF31]/10 rounded-lg transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <p 
                        className="text-gray-500 mb-2"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '15px', fontWeight: 500 }}
                      >
                        {isRTL ? 'لا توجد مستندات مرفقة' : 'No documents uploaded'}
                      </p>
                      <button className="mt-3 px-4 py-2 text-sm text-[#67AF31] hover:bg-[#67AF31]/10 rounded-lg transition-colors font-medium">
                        {isRTL ? 'إضافة مستند' : 'Add Document'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Button - Modern Design */}
                <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                  <button className="px-5 py-2.5 text-gray-700 hover:bg-gray-100 font-medium rounded-xl border border-gray-300 transition-all duration-200">
                    {isRTL ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    className="px-8 py-3 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 700 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {isRTL ? 'إرسال للموافقة' : 'Submit for Approval'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsScreen;

