import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

const ApplicationHeader = () => {
  return (
    <Header aria-label="Developer Center">
      <SkipToContent />
      <HeaderMenuButton aria-label="Open menu" />
      <HeaderName href="/">Developer Center</HeaderName>
      <HeaderNavigation aria-label="Developer Center">
        <HeaderMenuItem href="/">Home</HeaderMenuItem>
      </HeaderNavigation>

      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="Notifications"
          tooltipAlignment="center">
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
          <UserAvatar size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
          <Switcher size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default ApplicationHeader;
