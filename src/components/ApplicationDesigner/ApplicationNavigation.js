import React from 'react';
import {
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  HeaderSideNavItems,
} from '@carbon/react';

const ApplicationNavigation = () => {
  return (
    <SideNav
      aria-label="Side navigation"
      expanded={true}
      isPersistent={true}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative fixed',
        top: 48,
        left: 32,
      }}>
      <SideNavItems>
        <SkipToContent />
        <HeaderSideNavItems>
          <HeaderMenuItem href="/#/">Home</HeaderMenuItem>
        </HeaderSideNavItems>

        <SideNavLink
          href="/#/application/components"
          isActive={true}
          aria-current="page">
          Components
        </SideNavLink>

        <SideNavMenu title="Modules" defaultExpanded={true}>
          <SideNavMenuItem href="/#/application/pagedesigner">
            Workorder
          </SideNavMenuItem>
          <SideNavMenuItem href="/#/application/pagedesigner">
            Location
          </SideNavMenuItem>
          <SideNavMenuItem href="/#/application/pagedesigner">
            Asset
          </SideNavMenuItem>
          <SideNavMenuItem href="/#/application/pagedesigner">
            Commons
          </SideNavMenuItem>
        </SideNavMenu>

        <SideNavLink href="/#/application/routes">Routes</SideNavLink>
        <SideNavLink href="/#/application/resources">Resources</SideNavLink>
        <SideNavLink href="/#/application/datasources">Datasources</SideNavLink>
        <SideNavLink href="/#/application/settings">Settings</SideNavLink>
      </SideNavItems>
    </SideNav>
  );
};

export default ApplicationNavigation;
