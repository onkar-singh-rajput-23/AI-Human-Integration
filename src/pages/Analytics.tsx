import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BarChart2, TrendingUp, FileText, PieChart } from 'lucide-react';

const sections = [
  { path: '', name: 'Performance Metrics', icon: BarChart2 },
  { path: 'predictive', name: 'Predictive Analytics', icon: TrendingUp },
  { path: 'reports', name: 'Report Generator', icon: FileText },
  { path: 'visualization', name: 'Data Visualization', icon: PieChart },
];

export function Analytics() {
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
        <Route path="" element={<PerformanceMetrics />} />
        <Route path="predictive" element={<PredictiveAnalytics />} />
        <Route path="reports" element={<ReportGenerator />} />
        <Route path="visualization" element={<DataVisualization />} />
      </Routes>
    </div>
  );
}

function PerformanceMetrics() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Average Performance', value: '87%', trend: '+2.5%' },
            { label: 'Training Completion', value: '92%', trend: '+5.0%' },
            { label: 'Employee Satisfaction', value: '4.2/5', trend: '+0.3' },
            { label: 'Retention Rate', value: '95%', trend: '-1.0%' },
          ].map((metric, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500">{metric.label}</h3>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className={`text-sm ${
                  metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Department Performance</h3>
          <div className="space-y-4">
            {[
              { dept: 'Engineering', score: 92 },
              { dept: 'Marketing', score: 88 },
              { dept: 'Sales', score: 85 },
              { dept: 'Support', score: 90 },
            ].map((dept, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span>{dept.dept}</span>
                  <span>{dept.score}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${dept.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PredictiveAnalytics() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Predictive Analytics</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Turnover Prediction</h3>
            <div className="space-y-4">
              {[
                { risk: 'High Risk', count: 12, color: 'bg-red-500' },
                { risk: 'Medium Risk', count: 28, color: 'bg-yellow-500' },
                { risk: 'Low Risk', count: 215, color: 'bg-green-500' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>{item.risk}</span>
                      <span>{item.count} employees</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Performance Forecast</h3>
            <div className="h-48 flex items-end justify-between gap-2">
              {[65, 70, 85, 82, 88, 90].map((value, index) => (
                <div key={index} className="flex-1">
                  <div
                    className="bg-blue-500 rounded-t"
                    style={{ height: `${value}%` }}
                  ></div>
                  <div className="text-xs text-center mt-2">Q{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportGenerator() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Report Generator</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'Performance Reports',
            'Training Analysis',
            'Compliance Reports',
            'Department Metrics',
            'Cost Analysis',
            'Custom Reports',
          ].map((report, index) => (
            <div key={index} className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
              <FileText className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className="font-medium">{report}</h3>
              <p className="text-sm text-gray-500 mt-1">Generate detailed reports and analytics</p>
            </div>
          ))}
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Recent Reports</h3>
          <div className="space-y-2">
            {[
              { name: 'Q4 Performance Summary', date: '2024-03-15' },
              { name: 'Annual Training Report', date: '2024-03-10' },
              { name: 'Department Efficiency Analysis', date: '2024-03-05' },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50">
                <span>{report.name}</span>
                <span className="text-sm text-gray-500">{report.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataVisualization() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Data Visualization</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Employee Distribution</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[
                { label: 'Eng', value: 85 },
                { label: 'Sales', value: 65 },
                { label: 'HR', value: 45 },
                { label: 'Support', value: 55 },
                { label: 'Product', value: 75 },
              ].map((item, index) => (
                <div key={index} className="flex-1 text-center">
                  <div
                    className="bg-blue-500 rounded-t mx-2"
                    style={{ height: `${item.value}%` }}
                  ></div>
                  <div className="text-xs mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
            <div className="space-y-4">
              {[
                { label: 'Productivity', value: 85 },
                { label: 'Quality', value: 92 },
                { label: 'Efficiency', value: 78 },
                { label: 'Innovation', value: 88 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}