import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users, FileCheck, Shield, AlertCircle } from 'lucide-react';

const sections = [
  { path: '', name: 'Employee Management', icon: Users },
  { path: 'ai-review', name: 'AI Decision Review', icon: FileCheck },
  { path: 'policy', name: 'Policy Control', icon: Shield },
  { path: 'compliance', name: 'Compliance Monitor', icon: AlertCircle },
];

export function HRAdmin() {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[2] || '';

  return (
    <div className="space-y-6">
      {/* Section Navigation */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <nav className="flex flex-wrap gap-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = section.path === currentPath;
            return (
              <Link
                key={section.path}
                to={section.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{section.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Content Area */}
      <Routes>
        <Route path="" element={<EmployeeManagement />} />
        <Route path="ai-review" element={<AIReview />} />
        <Route path="policy" element={<PolicyControl />} />
        <Route path="compliance" element={<ComplianceMonitor />} />
      </Routes>
    </div>
  );
}

function EmployeeManagement() {
  const employees = [
    { id: 1, name: 'Sarah Johnson', role: 'Software Engineer', department: 'Engineering' },
    { id: 2, name: 'Michael Chen', role: 'Product Manager', department: 'Product' },
    { id: 3, name: 'Emily Davis', role: 'UX Designer', department: 'Design' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Employee Management</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Add Employee
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Role</th>
              <th className="text-left py-3 px-4">Department</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b">
                <td className="py-3 px-4">{employee.name}</td>
                <td className="py-3 px-4">{employee.role}</td>
                <td className="py-3 px-4">{employee.department}</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-600">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AIReview() {
  const decisions = [
    { id: 1, type: 'Promotion', recommendation: 'Approve', confidence: 85 },
    { id: 2, type: 'Training', recommendation: 'Review', confidence: 65 },
    { id: 3, type: 'Assignment', recommendation: 'Approve', confidence: 92 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">AI Decision Review</h2>
      <div className="space-y-4">
        {decisions.map((decision) => (
          <div key={decision.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{decision.type} Decision</h3>
                <p className="text-sm text-gray-500">Recommendation: {decision.recommendation}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">{decision.confidence}%</div>
                <div className="text-sm text-gray-500">Confidence</div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                Approve
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PolicyControl() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Policy Control</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Active Policies</h3>
            <div className="space-y-3">
              {['Remote Work', 'Leave Management', 'Performance Review'].map((policy) => (
                <div key={policy} className="flex items-center justify-between">
                  <span>{policy}</span>
                  <button className="text-blue-500 hover:text-blue-600">Edit</button>
                </div>
              ))}
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Policy Updates</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input type="text" placeholder="Search policies..." className="flex-1 px-3 py-2 border rounded" />
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Add New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComplianceMonitor() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Compliance Monitor</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-700">Compliant</h3>
            <p className="text-3xl font-bold text-green-700">85%</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-700">Under Review</h3>
            <p className="text-3xl font-bold text-yellow-700">12%</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-700">Non-Compliant</h3>
            <p className="text-3xl font-bold text-red-700">3%</p>
          </div>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Recent Compliance Alerts</h3>
          <div className="space-y-3">
            {[
              { title: 'Training Certification Expiring', priority: 'high' },
              { title: 'Policy Update Required', priority: 'medium' },
              { title: 'Documentation Review Needed', priority: 'low' },
            ].map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>{alert.title}</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  alert.priority === 'high' ? 'bg-red-100 text-red-800' :
                  alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {alert.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}