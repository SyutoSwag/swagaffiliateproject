import { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string;
  items?: MenuItem[];
  notification?: number;
}

interface MenuSection {
  title: string;
  path?: string;
  items?: MenuItem[];
  isOpen?: boolean;
}

const Sidebar = () => {
  const [menuSections, setMenuSections] = useState<MenuSection[]>([
    {
      title: 'Overview',
      items: [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Statistics', path: '/statistics' },
        { name: 'News', path: '/news', notification: 1 }
      ],
      isOpen: true
    },
    {
      title: 'Promote Tool',
      items: [
        { 
          name: 'Link Builder', 
          path: '/link-builder',
          items: [
            { name: 'Banner', path: '/banner' }
          ]
        },
        { name: 'Pre-roll Ads', path: '/pre-roll-ads' }
      ],
      isOpen: false
    },
    {
      title: 'Payout',
      items: [
        { name: 'Payout History', path: '/payout-history' },
        { name: 'Payout Setup', path: '/payout-setup' }
      ],
      isOpen: false
    },
    {
      title: 'Setting',
      items: [
        { name: 'Account', path: '/account' },
        { 
          name: 'Postback Setup', 
          path: '/postback-setup',
          items: [
            { name: 'Postbacks Log', path: '/postbacks-log' }
          ]
        }
      ],
      isOpen: false
    }
  ]);

  const toggleSection = (index: number) => {
    setMenuSections((prev: MenuSection[]) =>
      prev.map((section: MenuSection, i: number) => ({
        ...section,
        isOpen: i === index ? !section.isOpen : section.isOpen,
      }))
    );
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => (
    <div key={item.path}>
      <Link
        key={item.name}
        to={item.path}
        className="flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer"
      >
        <div className="flex-1">{item.name}</div>
        {item.notification && (
          <div className="bg-[#2FE6D4] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {item.notification}
          </div>
        )}
      </Link>
      {item.items && item.items.map(subItem => renderMenuItem(subItem, depth + 1))}
    </div>
  );

  return (
    <aside className="w-64 h-screen bg-[#1B1B1B] text-white fixed left-0 overflow-y-auto">
      <div className="h-14 flex items-center px-4 bg-[#2FE6D4] text-black">
        <img src="/logo.svg" alt="SWAG" className="h-6" />
      </div>
      <nav className="py-2">
        {menuSections.map((section, index) => (
          <div key={section.title}>
            <Link
              to={section.path || '#'}
              className="flex items-center px-4 py-3 hover:bg-white/5 cursor-pointer"
              onClick={(e) => {
                if (!section.path) {
                  e.preventDefault();
                  toggleSection(index);
                }
              }}
            >
              <div className="flex-1">{section.title}</div>
              {section.items && (
                <svg
                  className={`w-5 h-5 transition-transform ${section.isOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
            {section.isOpen && section.items && section.items.length > 0 && (
              <div>
                {section.items.map(item => renderMenuItem(item))}
              </div>
            )}
          </div>
        ))}
        <div className="border-t border-gray-800 mt-2 pt-2">
          <button
            className="flex items-center w-full px-4 py-2.5 text-left hover:bg-gray-800 transition-colors text-sm text-gray-400"
          >
            <span className="mr-2">◀</span>
            <span>Collapse sidebar</span>
          </button>
          <Link
            to="/contact"
            className="flex items-center w-full px-4 py-2.5 text-left hover:bg-gray-800 transition-colors text-sm text-gray-400"
          >
            <span>Contact us</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
