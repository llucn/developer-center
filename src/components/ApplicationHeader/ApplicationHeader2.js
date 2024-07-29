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
  SideNav,
  SideNavItems,
  SideNavLink,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';

const ApplicationHeader2 = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="Developer Center">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName as={Link} to="/" prefix="">
            Developer Center
          </HeaderName>
          <HeaderNavigation aria-label="Developer Center">
            <HeaderMenuItem as={Link} to="/">
              Home
            </HeaderMenuItem>

            {/* <HeaderMenuItem as={Link} to="/formdesigner/workorder_list">
              Workorder List
            </HeaderMenuItem>
            <HeaderMenuItem as={Link} to="/formdesigner/workorder_detail">
              Workorder Detail
            </HeaderMenuItem> */}
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center">
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center">
              <UserAvatar size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end">
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <SideNav
          expanded={true}
          isChildOfHeader={false}
          aria-label="Side navigation">
          <SideNavItems>
            <SideNavLink href="/#/formdesigner/workorder_list" large>
              Workorder List
            </SideNavLink>
            <SideNavLink href="/#/formdesigner/workorder_detail" large>
              Workorder Detail
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </>
    )}
  />
);

export default ApplicationHeader2;
