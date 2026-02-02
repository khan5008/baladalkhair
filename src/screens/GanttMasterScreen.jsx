import { useState } from 'react';
import logo from '../assets/logo new.png';

const GanttMasterScreen = ({ onBack, onNavigate, onLogout, language, onLanguageChange }) => {
  const [activeMenu, setActiveMenu] = useState('gantt');
  const [expandedMenus, setExpandedMenus] = useState({
    communication: false,
    thirdParty: false,
  });
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [fields, setFields] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const isRTL = language === 'Arabic';

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

  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const handleAddField = () => {
    if (selectedSubcategory && selectedCountry && selectedOption) {
      setFields([...fields, {
        id: Date.now(),
        subcategory: selectedSubcategory,
        country: selectedCountry,
        option: selectedOption
      }]);
      setSelectedSubcategory('');
      setSelectedCountry('');
      setSelectedOption('');
    }
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

      {/* Sidebar - Mobile Responsive */}
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

        {/* Menu Items */}
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
                        onNavigate('projects');
                      } else if (item.id === 'gantt') {
                        // Already on gantt screen
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
                      onClick={() => {
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
                {isRTL ? 'مخطط جانت' : 'Gantt Master'}
              </h1>
              <p className="text-xs lg:text-sm text-gray-500 mt-1">
                {isRTL ? 'إنشاء حقول مخطط جانت حسب الفئة الفرعية' : 'Create Gantt fields by subcategory'}
              </p>
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
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
          <div className="max-w-5xl mx-auto">
            {/* Form Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 lg:p-8 mb-4 lg:mb-6">
              <div className="space-y-4 lg:space-y-6">
                {/* Select Subcategory */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isRTL ? 'اختر الفئة الفرعية' : 'Select subcategory'}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedSubcategory}
                      onChange={(e) => setSelectedSubcategory(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 appearance-none pr-10"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px' }}
                    >
                      <option value="">{isRTL ? 'اختر الفئة الفرعية' : 'Select subcategory'}</option>
                      <option value="wells">{isRTL ? 'الآبار' : 'Wells'}</option>
                      <option value="aqiqah">{isRTL ? 'عقيقة' : 'Aqiqah'}</option>
                      <option value="iftar">{isRTL ? 'إفطار' : 'Iftar'}</option>
                    </select>
                    <div className={`absolute inset-y-0 ${isRTL ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Select Country */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isRTL ? 'اختر البلد' : 'Select country'}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#67AF31] focus:border-[#67AF31] outline-none transition-all bg-white text-gray-700 appearance-none pr-10"
                      style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui', fontSize: '16px' }}
                    >
                      <option value="">{isRTL ? 'اختر البلد' : 'Select country'}</option>
                      <option value="kuwait">{isRTL ? 'الكويت' : 'Kuwait'}</option>
                      <option value="gaza">{isRTL ? 'غزة' : 'Gaza'}</option>
                      <option value="india">{isRTL ? 'الهند' : 'India'}</option>
                      <option value="niger">{isRTL ? 'النيجر' : 'Niger'}</option>
                    </select>
                    <div className={`absolute inset-y-0 ${isRTL ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Radio Buttons */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {isRTL ? 'خيارات الدفع' : 'Payment Options'}
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="option"
                        value="preimplementation"
                        checked={selectedOption === 'preimplementation'}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="w-4 h-4 text-[#67AF31] focus:ring-[#67AF31]"
                      />
                      <span className="text-gray-700 text-sm lg:text-base" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                        {isRTL ? 'قبل التنفيذ' : 'On Preimplementation'}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="option"
                        value="firstPayment"
                        checked={selectedOption === 'firstPayment'}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="w-4 h-4 text-[#67AF31] focus:ring-[#67AF31]"
                      />
                      <span className="text-gray-700 text-sm lg:text-base" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                        {isRTL ? 'عند الدفعة الأولى' : 'On First Payment'}
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="option"
                        value="thirdParty"
                        checked={selectedOption === 'thirdParty'}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className="w-4 h-4 text-[#67AF31] focus:ring-[#67AF31]"
                      />
                      <span className="text-gray-700 text-sm lg:text-base" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                        {isRTL ? 'اختيار الطرف الثالث' : 'Third Party choice'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="w-full flex flex-col sm:flex-row gap-3 lg:gap-4 mt-6">
                  <button
                    onClick={handleAddField}
                    className="px-4 lg:px-6 py-3 bg-gradient-to-r from-[#67AF31] to-[#8BC34A] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm lg:text-base"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'إضافة حقل' : 'Add Field'}
                  </button>
                  <button
                    className="px-4 lg:px-6 py-3 bg-gradient-to-r from-[#7CB342] to-[#8BC34A] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm lg:text-base"
                    style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}
                  >
                    {isRTL ? 'حفظ' : 'Save'}
                  </button>
                </div>
              </div>
            </div>

            {/* Fields List */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 lg:p-6">
              {fields.length === 0 ? (
                <p className="text-gray-500 text-center py-6 lg:py-8 text-sm lg:text-base" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                  {isRTL ? 'لم تتم إضافة أي حقول بعد.' : 'No fields added yet.'}
                </p>
              ) : (
                <div className="space-y-3">
                  {fields.map((field) => (
                    <div key={field.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200 gap-3 sm:gap-4">
                      <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
                        <span className="text-gray-700 font-medium text-sm lg:text-base truncate" style={{ fontFamily: 'Tajawal, ui-sans-serif, system-ui' }}>
                          {field.subcategory} - {field.country} - {field.option}
                        </span>
                      </div>
                      <button
                        onClick={() => setFields(fields.filter(f => f.id !== field.id))}
                        className="text-red-500 hover:text-red-700 transition-colors p-1 flex-shrink-0"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GanttMasterScreen;

