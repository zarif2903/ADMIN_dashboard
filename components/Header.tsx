import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SettingsIcon, NotificationsIcon, ProfileIcon, SearchIcon } from './icons/Icons';

const Header: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const pageTitle = pathnames.length > 0 ? pathnames[pathnames.length - 1] : 'Dashboard';

  return (
    <header className="bg-transparent py-4 px-6">
      <div className="flex items-center justify-between">
        <div>
          <nav className="text-sm" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <li key={to} className="flex items-center">
                    <span className="mx-2 text-gray-500">/</span>
                    {isLast ? (
                      <span className="text-gray-800 font-semibold capitalize">{value}</span>
                    ) : (
                      <Link to={to} className="text-gray-500 hover:text-gray-700 capitalize">{value}</Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
          <h2 className="text-xl font-bold text-gray-800 capitalize">{pageTitle}</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Type here..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <ProfileIcon className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <SettingsIcon className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <NotificationsIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
