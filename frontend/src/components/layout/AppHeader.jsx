/**
 * AppHeader Component
 * 
 * Main application header with navigation, user menu, and theme toggle.
 * Cureonics LLC branding.
 */

import React, { useState } from 'react';
import {
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
  OverflowMenu,
  OverflowMenuItem,
  Button,
  Tag,
} from '@carbon/react';

import {
  Light,
  Asleep,
  Settings,
  User,
  UserAvatar,
  Login,
  Logout,
  Document,
  Template,
  PricingTraditional,
  Help,
  Information,
} from '@carbon/icons-react';

import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { usePricing } from '../../contexts/PricingContext';

import './AppHeader.scss';

export function AppHeader({ 
  onSettingsClick,
  onLoginClick,
  onPricingClick,
}) {
  const { theme, isDark, toggleDarkMode } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const { usage, getCurrentTier } = usePricing();
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);

  const currentTier = getCurrentTier();

  const handleLogout = async () => {
    await logout();
    setIsUserPanelOpen(false);
  };

  return (
    <Header aria-label="Carbonac" className="app-header">
      {/* Logo */}
      <a href="/" className="app-header__logo-link">
        <img 
          src={isDark ? '/logos/Carbonac-Light-Wide.png' : '/logos/Carbonac-Dark-Wide.png'} 
          alt="Carbonac" 
          className="app-header__logo"
        />
      </a>

      {/* Main Navigation */}
      <HeaderNavigation aria-label="Main navigation" className="app-header__nav">
        <HeaderMenuItem href="/">Editör</HeaderMenuItem>
        <HeaderMenuItem href="/templates">Şablonlar</HeaderMenuItem>
        <HeaderMenuItem href="/documents">Dokümanlar</HeaderMenuItem>
        <HeaderMenuItem href="/pricing" onClick={(e) => { e.preventDefault(); onPricingClick?.(); }}>
          Fiyatlandırma
        </HeaderMenuItem>
      </HeaderNavigation>

      {/* Global Actions */}
      <HeaderGlobalBar>
        {/* Credits Display (for authenticated users) */}
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
              aria-label="User menu"
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

              <Switcher aria-label="User menu items">
                <SwitcherItem aria-label="Hesabım" href="/account">
                  <User size={16} style={{ marginRight: '0.5rem' }} />
                  Hesabım
                </SwitcherItem>
                <SwitcherItem aria-label="Dokümanlarım" href="/documents">
                  <Document size={16} style={{ marginRight: '0.5rem' }} />
                  Dokümanlarım
                </SwitcherItem>
                <SwitcherItem aria-label="Fatura" href="/billing">
                  <PricingTraditional size={16} style={{ marginRight: '0.5rem' }} />
                  Fatura & Abonelik
                </SwitcherItem>
                <SwitcherDivider />
                <SwitcherItem aria-label="Ayarlar" onClick={() => { onSettingsClick?.(); setIsUserPanelOpen(false); }}>
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
            onClick={onLoginClick}
            tooltipAlignment="end"
          >
            <Login size={20} />
          </HeaderGlobalAction>
        )}
      </HeaderGlobalBar>
    </Header>
  );
}

export default AppHeader;
