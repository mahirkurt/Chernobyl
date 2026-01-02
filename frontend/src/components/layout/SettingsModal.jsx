/**
 * SettingsModal Component
 * 
 * Application settings modal with tabs for General, Appearance, and Conversion.
 */

import React, { memo } from 'react';
import {
  Modal,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Toggle,
  Dropdown,
} from '@carbon/react';
import { useTheme, THEMES, THEME_LABELS } from '../../contexts/ThemeContext';
import { ENGINE_OPTIONS } from './AppSidebar';

const THEME_OPTIONS = Object.values(THEMES).map((theme) => ({
  id: theme,
  text: THEME_LABELS[theme],
}));

function SettingsModal({
  isOpen,
  onClose,
  selectedEngine,
  onEngineChange,
  showAdvisor,
  onToggleAdvisor,
  autoSave = true,
  onAutoSaveChange,
  livePreview = true,
  onLivePreviewChange,
}) {
  const { theme, setTheme, useSystemPreference, toggleSystemPreference } = useTheme();

  return (
    <Modal
      open={isOpen}
      modalHeading="Ayarlar"
      primaryButtonText="Kaydet"
      secondaryButtonText="İptal"
      onRequestClose={onClose}
      onRequestSubmit={onClose}
      size="md"
      aria-label="Uygulama ayarları"
    >
      <Tabs>
        <TabList aria-label="Ayar kategorileri">
          <Tab>Genel</Tab>
          <Tab>Görünüm</Tab>
          <Tab>Dönüştürme</Tab>
        </TabList>
        
        <TabPanels>
          {/* General Settings */}
          <TabPanel>
            <div className="settings-modal__section">
              <Toggle
                id="auto-save"
                labelText="Otomatik Kaydetme"
                labelA="Kapalı"
                labelB="Açık"
                toggled={autoSave}
                onToggle={(checked) => onAutoSaveChange?.(checked)}
              />
              
              <Toggle
                id="live-preview"
                labelText="Canlı Önizleme"
                labelA="Kapalı"
                labelB="Açık"
                toggled={livePreview}
                onToggle={(checked) => onLivePreviewChange?.(checked)}
              />
            </div>
          </TabPanel>
          
          {/* Appearance Settings */}
          <TabPanel>
            <div className="settings-modal__section">
              <Toggle
                id="system-preference"
                labelText="Sistem Temasını Kullan"
                labelA="Kapalı"
                labelB="Açık"
                toggled={useSystemPreference}
                onToggle={toggleSystemPreference}
              />
              
              {!useSystemPreference && (
                <Dropdown
                  id="theme-select"
                  items={THEME_OPTIONS}
                  selectedItem={THEME_OPTIONS.find((t) => t.id === theme)}
                  onChange={({ selectedItem }) => setTheme(selectedItem.id)}
                  label="Tema Seçin"
                  titleText="Uygulama Teması"
                />
              )}
              
              <Toggle
                id="show-advisor"
                labelText="AI Danışmanı Göster"
                labelA="Gizle"
                labelB="Göster"
                toggled={showAdvisor}
                onToggle={(checked) => onToggleAdvisor?.(checked)}
              />
            </div>
          </TabPanel>
          
          {/* Conversion Settings */}
          <TabPanel>
            <div className="settings-modal__section">
              <Dropdown
                id="default-engine"
                items={ENGINE_OPTIONS}
                selectedItem={selectedEngine}
                onChange={({ selectedItem }) => onEngineChange?.(selectedItem)}
                label="Varsayılan Motor"
                titleText="Varsayılan Dönüştürme Motoru"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Modal>
  );
}

export default memo(SettingsModal);
