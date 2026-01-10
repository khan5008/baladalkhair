import { useState } from 'react';
import logo from '../assets/logo new.png';

const GovernanceScreen = ({ onBack, onNavigate, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('governance');
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
    { id: 'governance', label: 'Governance', labelAr: 'الحوكمة', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  ];

  const riskCategories = [
    {
      id: 'impact',
      title: 'Impact',
      titleAr: 'التأثير',
      risks: [
        { level: 'Critical', levelAr: 'حرج', count: 0, color: 'bg-red-500' },
        { level: 'High', levelAr: 'عالي', count: 0, color: 'bg-orange-500' },
        { level: 'Medium', levelAr: 'متوسط', count: 0, color: 'bg-yellow-500' },
        { level: 'Low', levelAr: 'منخفض', count: 0, color: 'bg-blue-500' },
        { level: 'Minimal', levelAr: 'أدنى', count: 0, color: 'bg-green-500' }
      ]
    },
    {
      id: 'financial',
      title: 'Financial',
      titleAr: 'المالي',
      risks: [
        { level: 'Critical', levelAr: 'حرج', count: 0, color: 'bg-red-500' },
        { level: 'High', levelAr: 'عالي', count: 0, color: 'bg-orange-500' },
        { level: 'Medium', levelAr: 'متوسط', count: 0, color: 'bg-yellow-500' },
        { level: 'Low', levelAr: 'منخفض', count: 0, color: 'bg-blue-500' },
        { level: 'Minimal', levelAr: 'أدنى', count: 0, color: 'bg-green-500' }
      ]
    },
    {
      id: 'operational',
      title: 'Operational',
      titleAr: 'التشغيلي',
      risks: [
        { level: 'Critical', levelAr: 'حرج', count: 0, color: 'bg-red-500' },
        { level: 'High', levelAr: 'عالي', count: 0, color: 'bg-orange-500' },
        { level: 'Medium', levelAr: 'متوسط', count: 0, color: 'bg-yellow-500' },
        { level: 'Low', levelAr: 'منخفض', count: 0, color: 'bg-blue-500' },
        { level: 'Minimal', levelAr: 'أدنى', count: 0, color: 'bg-green-500' }
      ]
    },
    {
      id: 'legal',
      title: 'Legal & Regulatory',
      titleAr: 'القانوني والتنظيمي',
      risks: [
        { level: 'Critical', levelAr: 'حرج', count: 0, color: 'bg-red-500' },
        { level: 'High', levelAr: 'عالي', count: 0, color: 'bg-orange-500' },
        { level: 'Medium', levelAr: 'متوسط', count: 0, color: 'bg-yellow-500' },
        { level: 'Low', levelAr: 'منخفض', count: 0, color: 'bg-blue-500' },
        { level: 'Minimal', levelAr: 'أدنى', count: 0, color: 'bg-green-500' }
      ]
    },
    {
      id: 'reputation',
      title: 'Reputation & Donor Trust',
      titleAr: 'السمعة وثقة المتبرعين',
      risks: [
        { level: 'Critical', levelAr: 'حرج', count: 0, color: 'bg-red-500' },
        { level: 'High', levelAr: 'عالي', count: 0, color: 'bg-orange-500' },
        { level: 'Medium', levelAr: 'متوسط', count: 0, color: 'bg-yellow-500' },
        { level: 'Low', levelAr: 'منخفض', count: 0, color: 'bg-blue-500' },
        { level: 'Minimal', levelAr: 'أدنى', count: 0, color: 'bg-green-500' }
      ]
    },
    {
      id: 'humanitarian',
      title: 'Humanitarian / Beneficiaries',
      titleAr: 'الإنساني / المستفيدين',
      risks: [
        { level: 'Critical', levelAr: 'حرج', count: 0, color: 'bg-red-500' },
        { level: 'High', levelAr: 'عالي', count: 0, color: 'bg-orange-500' },
        { level: 'Medium', levelAr: 'متوسط', count: 0, color: 'bg-yellow-500' },
        { level: 'Low', levelAr: 'منخفض', count: 0, color: 'bg-blue-500' },
        { level: 'Minimal', levelAr: 'أدنى', count: 0, color: 'bg-green-500' }
      ]
    }
  ];

  const summaryStats = [
    { id: 'open-risks', label: 'Open Risks', labelAr: 'المخاطر المفتوحة', value: 0, color: 'bg-yellow-500' },
    { id: 'high-risks', label: 'High Risks', labelAr: 'المخاطر العالية', value: 0, color: 'bg-red-500' },
    { id: 'open-issues', label: 'Open Issues', labelAr: 'القضايا المفتوحة', value: 0, color: 'bg-blue-500' },
    { id: 'expired-documents', label: 'Expired Documents', labelAr: 'المستندات المنتهية الصلاحية', value: 3, color: 'bg-orange-500' },
    { id: 'compliance-rate', label: 'Compliance Rate', labelAr: 'معدل الامتثال', value: '0%', color: 'bg-red-500' },
    { id: 'open-findings', label: 'Open Findings', labelAr: 'النتائج المفتوحة', value: 14, color: 'bg-purple-500' }
  ];

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
                      } else if (item.id === 'documents') {
                        onNavigate('documents');
                      }
                    }
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-3.5 transition-all duration-200 mx-2 rounded-xl ${
                  activeMenu === item.id
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
                {isRTL ? 'الحوكمة' : 'Governance'}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {isRTL ? 'إدارة المخاطر والامتثال والحوكمة' : 'Risk management, compliance and governance'}
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

        {/* Summary Stats */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {summaryStats.map((stat) => (
              <div key={stat.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-gray-600 text-sm font-medium"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? stat.labelAr : stat.label}
                    </p>
                    <p 
                      className="text-gray-700 font-bold text-xl"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Matrix */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 
                className="text-xl font-bold text-gray-800"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'مصفوفة المخاطر' : 'Risk Matrix'}
              </h2>
              <p 
                className="text-sm text-gray-500"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'توزيع المخاطر عبر الفئات ومستويات التأثير' : 'Risk distribution across categories and impact levels'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {riskCategories.map((category) => (
                <div key={category.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 
                    className="text-lg font-semibold text-gray-800 mb-4"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? category.titleAr : category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.risks.map((risk, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 ${risk.color} rounded-full`}></div>
                          <span 
                            className="text-sm font-medium text-gray-700"
                            style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                          >
                            {isRTL ? risk.levelAr : risk.level}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span 
                            className="text-sm text-gray-500"
                            style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                          >
                            {isRTL ? 'لا توجد مخاطر' : 'No risks'}
                          </span>
                          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                            {risk.count}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 
                className="text-sm font-semibold text-gray-700 mb-3"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'إضافة فئات المخاطر' : 'auditing.riskCategories'}
              </h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span 
                    className="text-xs text-gray-600"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'حرج (15+)' : 'Critical (15+)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span 
                    className="text-xs text-gray-600"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'عالي (10-14)' : 'High (10-14)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span 
                    className="text-xs text-gray-600"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'متوسط (6-9)' : 'Medium (6-9)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span 
                    className="text-xs text-gray-600"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'منخفض (3-5)' : 'Low (3-5)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span 
                    className="text-xs text-gray-600"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'أدنى (1-2)' : 'Minimal (1-2)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Items */}
            <div className="mt-8">
              <h4 
                className="text-lg font-semibold text-gray-800 mb-4"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'العناصر الحديثة' : 'Recent Items'}
              </h4>
              <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p 
                  className="text-gray-500 text-lg"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'لا توجد قضايا حديثة' : 'No recent issues'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceScreen;