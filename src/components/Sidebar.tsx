import { NavLink } from 'react-router-dom';
import { Users, Brain, BarChart, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Employee Portal', icon: Users, path: '/employee' },
  { name: 'HR Admin Center', icon: Brain, path: '/admin' },
  { name: 'Analytics Hub', icon: BarChart, path: '/analytics' },
  { name: 'AI Control Center', icon: Settings, path: '/ai' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-white shadow-lg z-30 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                    isActive ? 'bg-blue-50 text-blue-600' : ''
                  }`
                }
                onClick={onClose}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </>
  );
}