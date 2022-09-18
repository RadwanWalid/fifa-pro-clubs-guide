import React from 'react';
import { Outlet } from 'react-router';
import BuildNavigation from '../Components/BuildNavigation';

const WithBuildNav = () => {
  return (
    <div>
      <BuildNavigation />
      <Outlet />
    </div>
  );
};

export default WithBuildNav;