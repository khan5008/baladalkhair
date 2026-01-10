import { useState } from 'react';
import logo from '../assets/logo new.png';

const PhaseReviewScreen = ({ phaseData, onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [comment, setComment] = useState('');
  const [activeMenu, setActiveMenu] = useState('phaseReview');
  const [expandedMenus, setExpandedMenus] = useState({
    communication: false,
    thirdParty: false,
  });
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

  const phase = phaseData || {
    projectName: 'Hafsa Women\'s Center Project',
    projectNameAr: 'مشروع مركز حفصة النسائي',
    phaseName: 'Planning',
    phaseNameAr: 'التخطيط',
    submittedBy: 'Sara Ahmed',
    submittedByAr: 'سارة أحمد',
    submissionDate: '2025-01-20',
    documents: ['Detailed Plan.pdf', 'Resource Allocation.docx', 'Budget Breakdown.xlsx'],
    supervisor: 'Sara Ahmed',
    supervisorAr: 'سارة أحمد',
    startDate: '2025-02-15',
    endDate: '2025-03-15',
  };

  const handleApprove = () => {
    // Navigate back to approvals
    if (onNavigate) {
      onNavigate('approvals');
    }
  };

  const handleRequestChanges = () => {
    // Navigate back to approvals
    if (onNavigate) {
      onNavigate('approvals');
    }
  };

  const handleReject = () => {
    // Navigate back to approvals
    if (onNavigate) {
      onNavigate('approvals');
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
                onClick={(e) => {
                  if (item.submenu) {
                    e.stopPropagation();
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
                className={`w-full flex items-center justify-between gap-3 px-6 py-3.5 transition-all duration-200 rounded-xl ${
                  activeMenu === item.id || (item.submenu && (activeMenu === 'finance' || activeMenu === 'whatsapp-templates' || activeMenu === 'send-message') && expandedMenus[item.id])
                    ? 'bg-white text-[#67AF31] shadow-lg' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 400 }}
              >
                <div className="flex items-center gap-3 flex-1">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="font-medium">{isRTL ? item.labelAr : item.label}</span>
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
                      className={`w-full flex items-center gap-3 px-6 py-2.5 transition-all duration-200 rounded-lg ${
                        activeMenu === subItem.id 
                          ? 'bg-white text-[#67AF31] font-semibold shadow-md' 
                          : 'text-white/80 hover:bg-white/5'
                      }`}
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 400 }}
                    >
                      <span>{isRTL ? subItem.labelAr : subItem.label}</span>
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
                {isRTL ? 'مراجعة المرحلة' : 'Phase Review'}
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
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Phase Details Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h2 
                className="text-gray-800 font-bold mb-6"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '20px', fontWeight: 700 }}
              >
                {isRTL ? 'تفاصيل المرحلة' : 'Phase Details'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'اسم المشروع:' : 'Project Name:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {isRTL ? phase.projectNameAr : phase.projectName}
                  </p>
                </div>
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'اسم المرحلة:' : 'Phase Name:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {isRTL ? phase.phaseNameAr : phase.phaseName}
                  </p>
                </div>
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'تم الإرسال بواسطة:' : 'Submitted By:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {isRTL ? phase.submittedByAr : phase.submittedBy}
                  </p>
                </div>
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'تاريخ الإرسال:' : 'Submission Date:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {phase.submissionDate}
                  </p>
                </div>
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'المشرف:' : 'Supervisor:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {isRTL ? phase.supervisorAr : phase.supervisor}
                  </p>
                </div>
                <div>
                  <span 
                    className="text-gray-500 text-sm block mb-2"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                  >
                    {isRTL ? 'التواريخ:' : 'Timeline:'}
                  </span>
                  <p 
                    className="text-gray-800 font-semibold"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                  >
                    {phase.startDate} - {phase.endDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Documents Preview */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h2 
                className="text-gray-800 font-bold mb-4"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '20px', fontWeight: 700 }}
              >
                {isRTL ? 'المستندات المرفقة' : 'Attached Documents'}
              </h2>
              <div className="space-y-3">
                {phase.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#67AF31]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#67AF31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p 
                          className="text-gray-800 font-semibold"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
                        >
                          {doc}
                        </p>
                        <p 
                          className="text-gray-500 text-sm mt-1"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '14px' }}
                        >
                          PDF Document • 2.4 MB
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
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

            {/* Comment Box */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h2 
                className="text-gray-800 font-bold mb-4"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '20px', fontWeight: 700 }}
              >
                {isRTL ? 'تعليقات المراجعة' : 'Review Comments'}
              </h2>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={isRTL ? 'أدخل تعليقاتك هنا...' : 'Enter your comments here...'}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 resize-none"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px' }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-end pt-4 border-t border-gray-200">
              <button
                onClick={handleReject}
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-200"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
              >
                {isRTL ? 'رفض' : 'Reject'}
              </button>
              <button
                onClick={handleRequestChanges}
                className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 shadow-md hover:shadow-lg transition-all duration-200"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
              >
                {isRTL ? 'طلب تعديلات' : 'Request Changes'}
              </button>
              <button
                onClick={handleApprove}
                className="px-6 py-3 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 shadow-md"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px', fontWeight: 600 }}
              >
                {isRTL ? 'موافقة' : 'Approve'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseReviewScreen;

