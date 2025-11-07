import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, TablesIcon, BillingIcon, NotificationsIcon, ProfileIcon } from './icons/Icons';

const Sidebar: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-gradient-to-tr from-blue-500 to-blue-400 text-white shadow-md'
        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <div className="hidden md:flex flex-col w-[250px] bg-dark-blue text-white">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wider">Dashboard</h1>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        <NavLink to="/dashboard" className={navLinkClasses}>
          <DashboardIcon className="h-5 w-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink to="/tables" className={navLinkClasses}>
          <TablesIcon className="h-5 w-5 mr-3" />
          Tables
        </NavLink>
        <NavLink to="/billing" className={navLinkClasses}>
          <BillingIcon className="h-5 w-5 mr-3" />
          Billing
        </NavLink>
        <NavLink to="/notifications" className={navLinkClasses}>
          <NotificationsIcon className="h-5 w-5 mr-3" />
          Notifications
        </NavLink>
        <p className="px-4 pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase">Account Pages</p>
        <NavLink to="/profile" className={navLinkClasses}>
          <ProfileIcon className="h-5 w-5 mr-3" />
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
