import { useState, useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import DashboardScreen from './screens/DashboardScreen';
import AllProjectsScreen from './screens/AllProjectsScreen';
import ProjectDetailsScreen from './screens/ProjectDetailsScreen';
import ProjectPhasesScreen from './screens/ProjectPhasesScreen';
import ApprovalsScreen from './screens/ApprovalsScreen';
import PhaseReviewScreen from './screens/PhaseReviewScreen';
import EntitiesScreen from './screens/EntitiesScreen';
import EntityDetailScreen from './screens/EntityDetailScreen';
import ActivityTimelineScreen from './screens/ActivityTimelineScreen';
import WhatsAppTemplatesScreen from './screens/WhatsAppTemplatesScreen';
import SendMessageScreen from './screens/SendMessageScreen';
import FinanceScreen from './screens/FinanceScreen';
import DocumentsScreen from './screens/DocumentsScreen';
import GovernanceScreen from './screens/GovernanceScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [screenParams, setScreenParams] = useState(null);
  const [language, setLanguage] = useState('English');

  // Update document direction and language when language changes
  useEffect(() => {
    const isRTL = language === 'Arabic';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = isRTL ? 'ar' : 'en';
  }, [language]);

  const handleLoginSuccess = (selectedLanguage) => {
    setIsLoggedIn(true);
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (!selectedRole) {
    return <RoleSelectionScreen onRoleSelect={handleRoleSelect} language={language} onLanguageChange={handleLanguageChange} />;
  }

  const handleNavigate = (screen, params = null) => {
    setCurrentScreen(screen);
    setScreenParams(params);
  };

  const handleBack = () => {
    setCurrentScreen('dashboard');
    setScreenParams(null);
  };

  // Screen routing
  if (currentScreen === 'projects') {
    return <AllProjectsScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'projectDetails') {
    return <ProjectDetailsScreen projectId={screenParams?.projectId} onBack={() => handleNavigate('projects')} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'projectPhases') {
    return <ProjectPhasesScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'approvals') {
    return <ApprovalsScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'phaseReview') {
    return <PhaseReviewScreen phaseData={screenParams?.phase} onBack={() => handleNavigate('approvals')} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'entities') {
    return <EntitiesScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'entityDetail') {
    return <EntityDetailScreen entityData={screenParams?.entity} onBack={() => handleNavigate('entities')} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'reports') {
    return <ActivityTimelineScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'whatsapp-templates') {
    return <WhatsAppTemplatesScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'send-message') {
    return <SendMessageScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'finance') {
    return <FinanceScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'documents') {
    return <DocumentsScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  if (currentScreen === 'governance') {
    return <GovernanceScreen onBack={handleBack} onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
  }

  return <DashboardScreen onNavigate={handleNavigate} language={language} onLanguageChange={handleLanguageChange} />;
}

export default App;
