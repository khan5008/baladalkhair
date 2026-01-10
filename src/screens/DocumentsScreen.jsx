import { useState } from 'react';
import logo from '../assets/logo new.png';

const DocumentsScreen = ({ onBack, onNavigate, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('documents');
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
    { id: 'documents', label: 'Documents', labelAr: 'المستندات', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  ];

  const folders = [
    { id: 1, name: 'Donor Report', nameAr: 'تقرير المتبرعين', count: 0, icon: '📊' },
    { id: 2, name: 'Challun', nameAr: 'تشالون', count: 0, icon: '📁' },
    { id: 3, name: 'new', nameAr: 'جديد', count: 0, icon: '📁' },
    { id: 4, name: 'تقرير أول للمشروع', nameAr: 'تقرير أول للمشروع', count: 0, icon: '📄' },
    { id: 5, name: 'التقرير المبدئي', nameAr: 'التقرير المبدئي', count: 0, icon: '📄' },
    { id: 6, name: 'عقد المشروع', nameAr: 'عقد المشروع', count: 0, icon: '📄' },
    { id: 7, name: 'New Folder', nameAr: 'مجلد جديد', count: 0, icon: '📁' },
    { id: 8, name: 'ara', nameAr: 'عربي', count: 0, icon: '📁' },
    { id: 9, name: 'Testing', nameAr: 'اختبار', count: 0, icon: '📁' },
    { id: 10, name: 'Vendor Profile', nameAr: 'ملف البائع', count: 0, icon: '📁' },
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
      <div className="flex-1 flex overflow-hidden bg-gray-50">
        {/* Left Panel - File Management */}
        <div className="flex-1 flex flex-col">
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
                  {isRTL ? 'المستندات' : 'Documents'}
                </h1>
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

          {/* Action Buttons */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex gap-3">
              <button 
                className="px-4 py-2 bg-[#67AF31] text-white rounded-lg hover:bg-[#5a9629] transition-colors font-semibold"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'رفع الملفات' : 'Upload files'}
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'تحميل' : 'Download'}
              </button>
              <button 
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
                style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
              >
                {isRTL ? 'مشاركة' : 'Share'}
              </button>
            </div>
          </div>

          {/* Upload Area */}
          <div className="flex-1 p-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 h-full">
              <div className="border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center text-gray-500 hover:border-[#67AF31] hover:text-[#67AF31] transition-colors cursor-pointer">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p 
                  className="text-lg font-medium mb-2"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'اسحب الملفات هنا أو انقر للاختيار' : 'Drag files here or click to select'}
                </p>
                <p 
                  className="text-sm"
                  style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                >
                  {isRTL ? 'يدعم PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (الحد الأقصى 100MB)' : 'Supports PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (max 100MB)'}
                </p>
              </div>

              {/* File Table */}
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th 
                          className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? 'اسم الملف' : 'File name'}
                        </th>
                        <th 
                          className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? 'النوع' : 'Type'}
                        </th>
                        <th 
                          className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? 'الحجم' : 'Size'}
                        </th>
                        <th 
                          className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? 'تاريخ الرفع' : 'Upload date'}
                        </th>
                        <th 
                          className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? 'الحالة' : 'Status'}
                        </th>
                        <th 
                          className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? 'إجراءات المستندات' : 'documents.actions'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td 
                          className="px-4 py-8 text-center text-gray-500"
                          colSpan="6"
                          style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                        >
                          {isRTL ? 'documents.selectFolder.Prompt' : 'documents.selectFolder.Prompt'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Folder Tree */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <h3 
              className="text-lg font-semibold text-gray-800"
              style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
            >
              {isRTL ? 'شجرة المجلدات' : 'Folder tree'}
            </h3>
            <button className="p-2 text-[#67AF31] hover:bg-[#67AF31]/10 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {folders.map((folder) => (
                <div 
                  key={folder.id} 
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="text-lg">{folder.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p 
                        className="text-sm font-medium text-gray-800 truncate"
                        style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                      >
                        {isRTL ? folder.nameAr : folder.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {folder.count}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-[#67AF31] transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
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

export default DocumentsScreen;