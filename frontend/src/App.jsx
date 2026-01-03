/**
 * Carbonac App - Main Application Component
 * 
 * Markdown to PDF converter with IBM Carbon Design System.
 * © 2026 Cureonics LLC, Wyoming, USA
 */

import React, { useState, useCallback, Suspense, lazy } from 'react';
import {
  Theme,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
  Content,
  Grid,
  Column,
  Button,
  Dropdown,
  TextArea,
  Tag,
  InlineNotification,
  Loading,
  Tile,
  Link,
} from '@carbon/react';

import {
  Document,
  DocumentPdf,
  Settings,
  Light,
  Asleep,
  Upload,
  Play,
  Help,
  Download,
  Code,
  Template,
  ChartBar,
  ColorPalette,
  TextFont,
  Grid as GridIcon,
  UserAvatar,
  Login,
  Logout,
  User,
  PricingTraditional,
} from '@carbon/icons-react';

import './styles/index.scss';

// Contexts
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { PricingProvider, usePricing } from './contexts/PricingContext';

// Components
import { SkipLink, Announcer } from './components/a11y';
import { AppFooter } from './components/layout';

// Lazy loaded components
const SettingsModal = lazy(() => import('./components/layout/SettingsModal'));
const AuthModal = lazy(() => import('./components/auth/AuthModal'));
const PricingModal = lazy(() => import('./components/pricing/PricingModal'));

// Sample markdown content
const sampleMarkdown = `---
title: Sample Document
subtitle: Carbon Design System Demo
author: Your Name
date: 2025-01-15
---

# Introduction

This is a **sample document** demonstrating the Carbon Design System integration with Markdown to PDF conversion.

## Features

- Modern Typography with IBM Plex fonts
- Professional color palette
- Responsive layouts
- Data visualization components

## Code Example

\`\`\`javascript
const hello = () => {
  console.log('Hello, Carbon!');
};
\`\`\`

> "Design is not just what it looks like and feels like. Design is how it works."
> — Steve Jobs

## Conclusion

Start creating beautiful documents today!
`;

// Engine options
const engineOptions = [
  { id: 'typst', text: 'Typst (Hızlı)' },
  { id: 'quarto', text: 'Quarto (LaTeX)' },
  { id: 'both', text: 'Her İkisi' },
];

// Template options
const templateOptions = [
  { id: 'carbon-advanced', text: 'Carbon Advanced' },
  { id: 'carbon-template', text: 'Carbon Basic' },
  { id: 'carbon-theme-g100', text: 'Carbon G100 (Dark)' },
];

/**
 * Main Application Content
 */
function AppContent() {
  const { theme, isDark, toggleDarkMode } = useTheme();
  const { user, isAuthenticated, logout, isLoading: authLoading } = useAuth();
  const { usage, getCurrentTier, canConvert, useCredits } = usePricing();

  // UI State
  const [markdown, setMarkdown] = useState(sampleMarkdown);
  const [selectedEngine, setSelectedEngine] = useState(engineOptions[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(templateOptions[0]);
  const [isConverting, setIsConverting] = useState(false);
  const [notification, setNotification] = useState(null);

  // Modal States
  const [showSettings, setShowSettings] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const currentTier = getCurrentTier();

  // Handle file upload
  const handleFileUpload = useCallback((event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdown(e.target.result);
        setNotification({
          kind: 'success',
          title: 'Dosya Yüklendi',
          subtitle: `${file.name} başarıyla yüklendi.`
        });
      };
      reader.readAsText(file);
    }
  }, []);

  // Handle conversion
  const handleConvert = async () => {
    // Check credits
    if (!canConvert(1)) {
      setNotification({
        kind: 'warning',
        title: 'Yetersiz Kredi',
        subtitle: 'PDF oluşturmak için yeterli krediniz yok. Lütfen kredi satın alın.'
      });
      setShowPricing(true);
      return;
    }

    setIsConverting(true);
    setNotification(null);

    try {
      // Use credit
      if (isAuthenticated) {
        await useCredits(1);
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setNotification({
        kind: 'success',
        title: 'Dönüştürme Başarılı',
        subtitle: `PDF ${selectedEngine.text} motoru kullanılarak oluşturuldu.`
      });
    } catch (error) {
      setNotification({
        kind: 'error',
        title: 'Dönüştürme Hatası',
        subtitle: error.message
      });
    } finally {
      setIsConverting(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await logout();
    setIsUserPanelOpen(false);
  };

  return (
    <Theme theme={theme}>
      <div className="app-container">
        <SkipLink href="#main-content">Ana içeriğe atla</SkipLink>
        <Announcer />

        {/* Header */}
        <Header aria-label="Carbonac" className="app-header">
          <a href="/" className="app-header__logo-link">
            <img 
              src={isDark ? '/logos/Carbonac-Light-Wide.png' : '/logos/Carbonac-Dark-Wide.png'} 
              alt="Carbonac" 
              className="app-header__logo"
            />
          </a>

          <HeaderNavigation aria-label="Ana navigasyon" className="app-header__nav">
            <HeaderMenuItem href="/">Editör</HeaderMenuItem>
            <HeaderMenuItem href="/templates">Şablonlar</HeaderMenuItem>
            <HeaderMenuItem href="/docs">Dokümantasyon</HeaderMenuItem>
            <HeaderMenuItem 
              href="/pricing" 
              onClick={(e) => { e.preventDefault(); setShowPricing(true); }}
            >
              Fiyatlandırma
            </HeaderMenuItem>
          </HeaderNavigation>

          <HeaderGlobalBar>
            {/* Credits Display */}
            {isAuthenticated && (
              <div className="app-header__credits">
                <Tag type="blue" size="sm">
                  {usage.pagesRemaining} sayfa
                </Tag>
              </div>
            )}

            {/* Theme Toggle */}
            <HeaderGlobalAction
              aria-label={isDark ? 'Açık tema' : 'Koyu tema'}
              onClick={toggleDarkMode}
              tooltipAlignment="end"
            >
              {isDark ? <Light size={20} /> : <Asleep size={20} />}
            </HeaderGlobalAction>

            {/* Help */}
            <HeaderGlobalAction
              aria-label="Yardım"
              tooltipAlignment="end"
            >
              <Help size={20} />
            </HeaderGlobalAction>

            {/* User Menu or Login */}
            {isAuthenticated ? (
              <>
                <HeaderGlobalAction
                  aria-label="Kullanıcı menüsü"
                  onClick={() => setIsUserPanelOpen(!isUserPanelOpen)}
                  isActive={isUserPanelOpen}
                  tooltipAlignment="end"
                >
                  <UserAvatar size={20} />
                </HeaderGlobalAction>

                <HeaderPanel
                  aria-label="Kullanıcı menüsü"
                  expanded={isUserPanelOpen}
                  className="app-header__user-panel"
                >
                  <div className="app-header__user-info">
                    <div className="app-header__user-avatar">
                      <UserAvatar size={32} />
                    </div>
                    <div className="app-header__user-details">
                      <span className="app-header__user-name">{user?.name}</span>
                      <span className="app-header__user-email">{user?.email}</span>
                      <Tag type="purple" size="sm">{currentTier.name}</Tag>
                    </div>
                  </div>

                  <Switcher aria-label="Kullanıcı menüsü öğeleri">
                    <SwitcherItem aria-label="Hesabım" href="/account">
                      <User size={16} style={{ marginRight: '0.5rem' }} />
                      Hesabım
                    </SwitcherItem>
                    <SwitcherItem aria-label="Dokümanlarım" href="/documents">
                      <Document size={16} style={{ marginRight: '0.5rem' }} />
                      Dokümanlarım
                    </SwitcherItem>
                    <SwitcherItem 
                      aria-label="Fatura" 
                      onClick={() => { setShowPricing(true); setIsUserPanelOpen(false); }}
                    >
                      <PricingTraditional size={16} style={{ marginRight: '0.5rem' }} />
                      Fatura & Abonelik
                    </SwitcherItem>
                    <SwitcherDivider />
                    <SwitcherItem 
                      aria-label="Ayarlar" 
                      onClick={() => { setShowSettings(true); setIsUserPanelOpen(false); }}
                    >
                      <Settings size={16} style={{ marginRight: '0.5rem' }} />
                      Ayarlar
                    </SwitcherItem>
                    <SwitcherItem aria-label="Çıkış" onClick={handleLogout}>
                      <Logout size={16} style={{ marginRight: '0.5rem' }} />
                      Çıkış Yap
                    </SwitcherItem>
                  </Switcher>
                </HeaderPanel>
              </>
            ) : (
              <HeaderGlobalAction
                aria-label="Giriş Yap"
                onClick={() => setShowAuth(true)}
                tooltipAlignment="end"
              >
                <Login size={20} />
              </HeaderGlobalAction>
            )}
          </HeaderGlobalBar>
        </Header>

        {/* Main Content */}
        <main id="main-content" className="app-main">
          <div className="app-workspace">
            {/* Settings Sidebar */}
            <aside className="settings-sidebar">
              <div className="settings-section">
                <div className="settings-section__title">Dönüştürme Motoru</div>
                <Dropdown
                  id="engine-select"
                  items={engineOptions}
                  selectedItem={selectedEngine}
                  onChange={({ selectedItem }) => setSelectedEngine(selectedItem)}
                  label="Motor Seçin"
                  titleText=""
                />
              </div>

              <div className="settings-section">
                <div className="settings-section__title">Şablon</div>
                <Dropdown
                  id="template-select"
                  items={templateOptions}
                  selectedItem={selectedTemplate}
                  onChange={({ selectedItem }) => setSelectedTemplate(selectedItem)}
                  label="Şablon Seçin"
                  titleText=""
                />
              </div>

              <div className="settings-section">
                <div className="settings-section__title">Dosya Yükle</div>
                <div className="file-upload-area">
                  <Upload size={32} className="file-upload-area__icon" />
                  <p className="file-upload-area__text">
                    Dosya sürükleyin veya{' '}
                    <label className="file-upload-area__link">
                      gözatın
                      <input
                        type="file"
                        accept=".md,.markdown,.txt"
                        onChange={handleFileUpload}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </p>
                </div>
              </div>

              <div className="settings-section">
                <div className="settings-section__title">İşlemler</div>
                <Button
                  kind="primary"
                  size="lg"
                  renderIcon={Play}
                  onClick={handleConvert}
                  disabled={isConverting}
                  style={{ width: '100%', marginBottom: '0.5rem' }}
                >
                  {isConverting ? 'Dönüştürülüyor...' : 'PDF Oluştur'}
                </Button>
                <Button
                  kind="secondary"
                  size="lg"
                  renderIcon={Download}
                  style={{ width: '100%' }}
                >
                  PDF İndir
                </Button>
              </div>

              <div className="settings-section">
                <div className="settings-section__title">Hızlı Erişim</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <Tag type="blue" renderIcon={ColorPalette}>Renkler</Tag>
                  <Tag type="purple" renderIcon={TextFont}>Tipografi</Tag>
                  <Tag type="cyan" renderIcon={ChartBar}>Grafikler</Tag>
                  <Tag type="teal" renderIcon={GridIcon}>Grid</Tag>
                  <Tag type="green" renderIcon={Template}>Bileşenler</Tag>
                </div>
              </div>

              {/* Credit Info */}
              <div className="settings-section settings-section--credits">
                <div className="settings-section__title">Kullanım</div>
                <Tile className="credit-tile">
                  <div className="credit-tile__row">
                    <span>Kalan Sayfa:</span>
                    <strong>{usage.pagesRemaining}</strong>
                  </div>
                  <div className="credit-tile__row">
                    <span>Plan:</span>
                    <Tag type="purple" size="sm">{currentTier.name}</Tag>
                  </div>
                  {!isAuthenticated && (
                    <Button
                      kind="ghost"
                      size="sm"
                      onClick={() => setShowAuth(true)}
                      style={{ marginTop: '0.5rem', width: '100%' }}
                    >
                      Giriş yaparak daha fazla sayfa
                    </Button>
                  )}
                </Tile>
              </div>
            </aside>

            {/* Editor Panel */}
            <div className="editor-panel panel">
              <div className="panel__header">
                <h3>
                  <Code size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  Markdown Editör
                </h3>
                <p>Dokümanınızı düzenleyin</p>
              </div>
              <div className="panel__content markdown-editor">
                <TextArea
                  id="markdown-editor"
                  labelText="Markdown İçeriği"
                  hideLabel
                  value={markdown}
                  onChange={(e) => setMarkdown(e.target.value)}
                  placeholder="Markdown içeriğinizi buraya yazın..."
                  rows={30}
                  style={{ 
                    height: '100%', 
                    fontFamily: 'IBM Plex Mono',
                    resize: 'none'
                  }}
                />
              </div>
            </div>

            {/* Preview Panel */}
            <div className="preview-panel panel">
              <div className="panel__header">
                <h3>
                  <DocumentPdf size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  PDF Önizleme
                </h3>
                <p>Çıktı önizlemesi</p>
              </div>
              <div className="pdf-preview">
                <div className="pdf-preview__container">
                  <div className="pdf-preview__document">
                    {isConverting ? (
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        height: '300px'
                      }}>
                        <Loading withOverlay={false} description="PDF oluşturuluyor..." />
                      </div>
                    ) : (
                      <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'IBM Plex Sans' }}>
                        <div dangerouslySetInnerHTML={{ 
                          __html: markdown
                            .replace(/^---[\s\S]*?---/m, '')
                            .replace(/^# (.+)$/gm, '<h1 style="font-size: 2.5rem; font-weight: 300; margin-bottom: 1rem;">$1</h1>')
                            .replace(/^## (.+)$/gm, '<h2 style="font-size: 1.5rem; font-weight: 600; margin: 1.5rem 0 1rem;">$1</h2>')
                            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                            .replace(/`([^`]+)`/g, '<code style="background: #f4f4f4; padding: 0.125rem 0.25rem; font-family: IBM Plex Mono;">$1</code>')
                            .replace(/^> (.+)$/gm, '<blockquote style="border-left: 3px solid #0f62fe; padding-left: 1rem; color: #525252; margin: 1rem 0;">$1</blockquote>')
                            .replace(/^- (.+)$/gm, '<li style="margin-left: 1.5rem;">$1</li>')
                            .replace(/\n/g, '<br/>')
                        }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <AppFooter />

        {/* Notifications */}
        {notification && (
          <div className="app-notification">
            <InlineNotification
              kind={notification.kind}
              title={notification.title}
              subtitle={notification.subtitle}
              onCloseButtonClick={() => setNotification(null)}
            />
          </div>
        )}

        {/* Modals */}
        <Suspense fallback={<Loading withOverlay />}>
          {showSettings && (
            <SettingsModal
              isOpen={showSettings}
              onClose={() => setShowSettings(false)}
            />
          )}

          {showAuth && (
            <AuthModal
              isOpen={showAuth}
              onClose={() => setShowAuth(false)}
            />
          )}

          {showPricing && (
            <PricingModal
              isOpen={showPricing}
              onClose={() => setShowPricing(false)}
              onLoginRequired={() => setShowAuth(true)}
            />
          )}
        </Suspense>
      </div>
    </Theme>
  );
}

/**
 * App with Providers
 */
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <PricingProvider>
          <AppContent />
        </PricingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
