/**
 * App Component
 * 
 * Main application component with Carbon Design System integration.
 * Refactored with proper component separation, theme context, and accessibility.
 */

import React, { useState, useCallback, Suspense, lazy } from 'react';
import { Theme, InlineNotification, Loading } from '@carbon/react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import {
  AppHeader,
  AppSidebar,
  AIAdvisorPanel,
  EditorPanel,
  PreviewPanel,
  ENGINE_OPTIONS,
  TEMPLATE_OPTIONS,
} from './components';
import { SkipLink, Announcer } from './components/a11y';
import { useAnnounce, useIsMobile } from './hooks';
import './styles/index.scss';

// Lazy load settings modal for better initial load
const SettingsModal = lazy(() => import('./components/layout/SettingsModal'));

// Sample markdown content
const SAMPLE_MARKDOWN = `---
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

// Inner app component that uses theme context
function AppContent() {
  const { theme } = useTheme();
  const announce = useAnnounce();
  const isMobile = useIsMobile();

  // State
  const [markdown, setMarkdown] = useState(SAMPLE_MARKDOWN);
  const [selectedEngine, setSelectedEngine] = useState(ENGINE_OPTIONS[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATE_OPTIONS[0]);
  const [isConverting, setIsConverting] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showAdvisor, setShowAdvisor] = useState(!isMobile);
  const [notification, setNotification] = useState(null);
  const [autoSave, setAutoSave] = useState(true);
  const [livePreview, setLivePreview] = useState(true);

  // Handle file upload
  const handleFileUpload = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setMarkdown(e.target.result);
      setNotification({
        kind: 'success',
        title: 'Dosya Yüklendi',
        subtitle: `${file.name} başarıyla yüklendi.`,
      });
      announce(`${file.name} dosyası yüklendi`);
    };
    reader.readAsText(file);
  }, [announce]);

  // Handle conversion
  const handleConvert = useCallback(async () => {
    setIsConverting(true);
    setNotification(null);
    announce('PDF dönüştürme başladı');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setNotification({
        kind: 'success',
        title: 'Dönüştürme Başarılı',
        subtitle: `PDF ${selectedEngine.text} motoru kullanılarak oluşturuldu.`,
      });
      announce('PDF başarıyla oluşturuldu');
    } catch (error) {
      setNotification({
        kind: 'error',
        title: 'Dönüştürme Hatası',
        subtitle: error.message,
      });
      announce('PDF dönüştürme hatası');
    } finally {
      setIsConverting(false);
    }
  }, [selectedEngine, announce]);

  // Handle download
  const handleDownload = useCallback(() => {
    // TODO: Implement actual download
    announce('PDF indirme başladı');
  }, [announce]);

  return (
    <Theme theme={theme}>
      <div className="app-container">
        {/* Accessibility: Skip Link */}
        <SkipLink targetId="main-content" />
        
        {/* Accessibility: Screen Reader Announcements */}
        <Announcer />

        {/* Header */}
        <AppHeader
          onToggleAdvisor={() => setShowAdvisor(!showAdvisor)}
          onToggleSettings={() => setShowSettings(true)}
          isAdvisorActive={showAdvisor}
        />

        {/* Main Content */}
        <main id="main-content" className="main-content" tabIndex={-1}>
          {/* Settings Sidebar */}
          <AppSidebar
            selectedEngine={selectedEngine}
            onEngineChange={setSelectedEngine}
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
            onFileUpload={handleFileUpload}
            onConvert={handleConvert}
            onDownload={handleDownload}
            isConverting={isConverting}
          />

          {/* Editor Panel */}
          <EditorPanel
            value={markdown}
            onChange={setMarkdown}
          />

          {/* Preview Panel */}
          <PreviewPanel
            markdown={markdown}
            isLoading={isConverting}
          />

          {/* AI Advisor Panel */}
          <AIAdvisorPanel isOpen={showAdvisor} />
        </main>

        {/* Notifications */}
        {notification && (
          <div className="notification-container" role="status" aria-live="polite">
            <InlineNotification
              kind={notification.kind}
              title={notification.title}
              subtitle={notification.subtitle}
              onCloseButtonClick={() => setNotification(null)}
              lowContrast
            />
          </div>
        )}

        {/* Settings Modal - Lazy Loaded */}
        <Suspense fallback={<Loading withOverlay />}>
          {showSettings && (
            <SettingsModal
              isOpen={showSettings}
              onClose={() => setShowSettings(false)}
              selectedEngine={selectedEngine}
              onEngineChange={setSelectedEngine}
              showAdvisor={showAdvisor}
              onToggleAdvisor={setShowAdvisor}
              autoSave={autoSave}
              onAutoSaveChange={setAutoSave}
              livePreview={livePreview}
              onLivePreviewChange={setLivePreview}
            />
          )}
        </Suspense>
      </div>
    </Theme>
  );
}

// Root App component with providers
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
