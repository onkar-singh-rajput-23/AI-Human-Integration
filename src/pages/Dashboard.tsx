import { Users, Brain, BarChart, Settings, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const metrics = [
  { label: 'Total Employees', value: '256' },
  { label: 'Training Completion', value: '78%' },
  { label: 'AI Decisions Pending', value: '12' },
  { label: 'Performance Score', value: '92%' },
];

const navigationItems = [
  { title: 'Employee Portal', icon: Users, path: '/employee' },
  { title: 'HR Admin Center', icon: Brain, path: '/admin' },
  { title: 'Analytics Hub', icon: BarChart, path: '/analytics' },
  { title: 'AI Control Center', icon: Settings, path: '/ai' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Welcome Back!</h2>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">{metric.label}</p>
            <p className="text-2xl font-semibold mt-2">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.path}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center justify-between">
                <Icon className="w-6 h-6 text-blue-500" />
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-lg font-medium mt-4">{item.title}</h3>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 py-2 border-b last:border-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">New employee onboarding completed</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}