import { useState } from 'react';
import logo from '../assets/logo new.png';

const FinanceScreen = ({ onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('finance');
  const [expandedMenus, setExpandedMenus] = useState({ thirdParty: true });
  const [activeTab, setActiveTab] = useState('revenues');
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

  const transactions = [
    {
      id: 41850,
      orderId: '#41850',
      userId: 'ID:3960',
      donorName: 'فاعل الخير',
      donorNameEn: 'Benefactor',
      phoneNumber: '1234',
      paymentMethod: 'KNET',
      paymentReference: 'chg_LV0H2D0Z6T7H8s5RRG0T394',
      amount: '1 KWD',
      date: '2026-01-08',
      time: '19:48',
      status: 'completed'
    },
    {
      id: 41869,
      orderId: '#41869',
      userId: 'ID:3960',
      donorName: 'فاعل الخير',
      donorNameEn: 'Benefactor',
      phoneNumber: '1234',
      paymentMethod: 'APPLE_PAY',
      paymentReference: 'chg_LV3H6D0Z6T30T5T0R0T570',
      amount: '1 KWD',
      date: '2026-01-08',
      time: '23:04',
      status: 'completed'
    },
    {
      id: 41915,
      orderId: '#41915',
      userId: 'ID:3960',
      donorName: 'فاعل الخير',
      donorNameEn: 'Benefactor',
      phoneNumber: '1234',
      paymentMethod: 'APPLE_PAY',
      paymentReference: 'chg_LV0H3220Z6T5T1T0R0T191',
      amount: '2 KWD',
      date: '2026-01-09',
      time: '15:21',
      status: 'completed'
    },
    {
      id: 41963,
      orderId: '#41963',
      userId: 'ID:3960',
      donorName: 'فاعل الخير',
      donorNameEn: 'Benefactor',
      phoneNumber: '1234',
      paymentMethod: 'N/A',
      paymentReference: '-',
      amount: '4 KWD',
      date: '2026-01-09',
      time: '15:55',
      status: 'pending'
    },
    {
      id: 41968,
      orderId: '#41968',
      userId: 'ID:3960',
      donorName: 'فاعل الخير',
      donorNameEn: 'Benefactor',
      phoneNumber: '1234',
      paymentMethod: 'KNET',
      paymentReference: 'chg_LV0AH342D6T32Xe55060T33',
      amount: '10 KWD',
      date: '2026-01-09',
      time: '15:57',
      status: 'completed'
    },
    {
      id: 41969,
      orderId: '#41969',
      userId: 'ID:3960',
      donorName: 'فاعل الخير',
      donorNameEn: 'Benefactor',
      phoneNumber: '1234',
      paymentMethod: 'APPLE_PAY',
      paymentReference: 'chg_LV0H4220Z6T32Th0M060T683',
      amount: '2 KWD',
      date: '2026-01-09',
      time: '15:57',
      status: 'completed'
    },
    {
      id: 41970,
      orderId: '#41970',
      userId: 'ID:3960',
      donorName: 'فاعل الخير',
      donorNameEn: 'Benefactor',
      phoneNumber: '1234',
      paymentMethod: 'KNET',
      paymentReference: 'chg_LV0H2420Z6T32Bse0T1090T313',
      amount: '20 KWD',
      date: '2026-01-09',
      time: '15:58',
      status: 'completed'
    },
    {
      id: 41971,
      orderId: '#41971',
      userId: 'ID:3960',
      donorName: 'فاعل الخير',
      donorNameEn: 'Benefactor',
      phoneNumber: '1234',
      paymentMethod: 'N/A',
      paymentReference: '-',
      amount: '20 KWD',
      date: '2026-01-09',
      time: '15:58',
      status: 'pending'
    }
  ];

  const getPaymentMethodColor = (method) => {
    switch (method) {
      case 'KNET': return 'bg-blue-100 text-blue-800';
      case 'APPLE_PAY': return 'bg-gray-100 text-gray-800';
      case 'N/A': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'pending': return 'text-yellow-600';
      case 'failed': return 'text-red-600';
      default: return 'text-gray-600';
    }
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
                        onNavigate('reports');
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
                          if (subItem.id === 'whatsapp-templates') {
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
                {isRTL ? 'المالية' : 'Finance'}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {isRTL ? 'إدارة المعاملات المالية والتبرعات' : 'Manage financial transactions and donations'}
              </p>
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

        {/* Stats Cards */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-gray-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'الهدف' : 'TARGET'}
                  </p>
                  <p 
                    className="text-gray-700 font-bold text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    5,000
                  </p>
                  <p 
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    KWD
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-green-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'المحصل' : 'COLLECTED'}
                  </p>
                  <p 
                    className="text-green-700 font-bold text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    96
                  </p>
                  <p 
                    className="text-green-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    KWD
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-red-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'الإنفاق الفعلي' : 'ACTUAL SPENDING'}
                  </p>
                  <p 
                    className="text-red-700 font-bold text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    0
                  </p>
                  <p 
                    className="text-red-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    KWD
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-yellow-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'المتبقي' : 'REMAINING'}
                  </p>
                  <p 
                    className="text-yellow-700 font-bold text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    4,904
                  </p>
                  <p 
                    className="text-yellow-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    KWD
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-blue-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'الموضع النقدي' : 'CASH POSITION'}
                  </p>
                  <p 
                    className="text-blue-700 font-bold text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    96
                  </p>
                  <p 
                    className="text-blue-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    KWD
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-purple-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'معدل الإنفاق' : 'SPENDING RATE'}
                  </p>
                  <p 
                    className="text-purple-700 font-bold text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    0%
                  </p>
                  <p 
                    className="text-purple-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'شهرياً' : 'Monthly'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-teal-600 text-sm font-medium"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'معدل القبول' : 'ACCEPTANCE RATE'}
                  </p>
                  <p 
                    className="text-teal-700 font-bold text-xl"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    80%
                  </p>
                  <p 
                    className="text-teal-500 text-xs"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'للإيرادات' : 'For Revenues'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200 px-6">
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveTab('objectives')}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === 'objectives' 
                  ? 'text-gray-600 border-b-2 border-gray-300' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {isRTL ? 'الأهداف والضوابط' : 'Objectives and Controls'}
            </button>
            <button 
              onClick={() => setActiveTab('transactions')}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === 'transactions' 
                  ? 'text-gray-600 border-b-2 border-gray-300' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              {isRTL ? 'المعاملات' : 'Transactions'}
            </button>
            <button 
              onClick={() => setActiveTab('revenues')}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === 'revenues' 
                  ? 'text-[#67AF31] border-b-2 border-[#67AF31]' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              {isRTL ? 'الإيرادات' : 'Revenues'}
            </button>
            <button 
              onClick={() => setActiveTab('payments')}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === 'payments' 
                  ? 'text-gray-600 border-b-2 border-gray-300' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              {isRTL ? 'المدفوعات' : 'Payments'}
            </button>
            <button 
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === 'reports' 
                  ? 'text-gray-600 border-b-2 border-gray-300' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {isRTL ? 'التقارير والتحليلات' : 'Reports and Analytics'}
            </button>
          </div>
        </div>

        {/* Revenue Tab Content */}
        {activeTab === 'revenues' && (
          <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 
                    className="text-lg font-semibold text-gray-800"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'الإيرادات' : 'Revenues'}
                  </h3>
                  <div className="flex gap-3">
                    <button 
                      className="px-4 py-2 bg-[#67AF31] text-white rounded-lg hover:bg-[#5a9629] transition-colors"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      + {isRTL ? 'إضافة إيراد' : 'Add Revenue'}
                    </button>
                    <button 
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'استيراد / ويب هوك' : 'Import / Webhook'}
                    </button>
                    <button 
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'تصدير' : 'Export'}
                    </button>
                  </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 
                      className="text-green-600 font-semibold mb-2"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'مقبول' : 'Accepted'}
                    </h4>
                    <p 
                      className="text-green-700 font-bold text-xl"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      96 KWD
                    </p>
                    <p 
                      className="text-green-500 text-sm"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      16 {isRTL ? 'عملية' : 'Operations'}
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <h4 
                      className="text-yellow-600 font-semibold mb-2"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'معلق' : 'Pending'}
                    </h4>
                    <p 
                      className="text-yellow-700 font-bold text-xl"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      139 KWD
                    </p>
                    <p 
                      className="text-yellow-500 text-sm"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      4 {isRTL ? 'عملية' : 'Operations'}
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h4 
                      className="text-red-600 font-semibold mb-2"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'مرفوض' : 'Rejected'}
                    </h4>
                    <p 
                      className="text-red-700 font-bold text-xl"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      0 KWD
                    </p>
                    <p 
                      className="text-red-500 text-sm"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      0 {isRTL ? 'عملية' : 'Operations'}
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 
                      className="text-blue-600 font-semibold mb-2"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      {isRTL ? 'الإجمالي' : 'Total'}
                    </h4>
                    <p 
                      className="text-blue-700 font-bold text-xl"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      235 KWD
                    </p>
                    <p 
                      className="text-blue-500 text-sm"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                    >
                      20 {isRTL ? 'عملية' : 'Operations'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left">
                        <input type="checkbox" className="w-4 h-4 text-[#67AF31] border-gray-300 rounded focus:ring-[#67AF31]" />
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'الرقم التسلسلي' : 'SERIAL NUMBER'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'رقم الطلب' : 'ORDER ID'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'رقم المستخدم' : 'USER ID'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'اسم المتبرع' : 'DONOR NAME'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'رقم الهاتف' : 'PHONE NUMBER'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'طريقة الدفع' : 'PAYMENT METHOD'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'مرجع الدفع' : 'PAYMENT REFERENCE'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'المبلغ' : 'AMOUNT'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'التاريخ' : 'DATE'}
                      </th>
                      <th 
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? 'الوقت' : 'TIME'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <input type="checkbox" className="w-4 h-4 text-[#67AF31] border-gray-300 rounded focus:ring-[#67AF31]" />
                        </td>
                        <td 
                          className="px-4 py-3 text-sm text-gray-900"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {transaction.id}
                        </td>
                        <td 
                          className="px-4 py-3 text-sm text-[#67AF31] font-medium"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {transaction.orderId}
                        </td>
                        <td 
                          className="px-4 py-3 text-sm text-gray-900"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {transaction.userId}
                        </td>
                        <td 
                          className="px-4 py-3 text-sm text-gray-900"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? transaction.donorName : transaction.donorNameEn}
                        </td>
                        <td 
                          className="px-4 py-3 text-sm text-gray-900"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {transaction.phoneNumber}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPaymentMethodColor(transaction.paymentMethod)}`}>
                            {transaction.paymentMethod}
                          </span>
                        </td>
                        <td 
                          className="px-4 py-3 text-sm text-gray-900 max-w-xs truncate"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {transaction.paymentReference}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                            {transaction.amount}
                          </span>
                        </td>
                        <td 
                          className="px-4 py-3 text-sm text-gray-900"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {transaction.date}
                        </td>
                        <td 
                          className="px-4 py-3 text-sm text-gray-900"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {transaction.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs content would go here */}
        {activeTab !== 'revenues' && (
          <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
              <p 
                className="text-gray-600 text-lg"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? `محتوى تبويب ${activeTab}` : `${activeTab} tab content`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinanceScreen;