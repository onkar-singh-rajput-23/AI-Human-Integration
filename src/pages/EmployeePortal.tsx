import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { UserCircle, BookOpen, MessageSquare, Target } from 'lucide-react';

const sections = [
  { path: '', name: 'Profile & Progress', icon: UserCircle },
  { path: 'training', name: 'Training Modules', icon: BookOpen },
  { path: 'feedback', name: 'Feedback System', icon: MessageSquare },
  { path: 'career', name: 'Career Planning', icon: Target },
];

export function EmployeePortal() {
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
        <Route path="" element={<Profile />} />
        <Route path="training" element={<Training />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="career" element={<Career />} />
      </Routes>
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Profile & Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <UserCircle className="w-12 h-12 text-blue-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Senior Developer</p>
            </div>
          </div>
          <div className="space-y-2">
            <p><strong>Email:</strong> john.doe@company.com</p>
            <p><strong>Department:</strong> Engineering</p>
            <p><strong>Join Date:</strong> January 15, 2023</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Skills Progress</h3>
          {['Leadership', 'Technical', 'Communication'].map((skill) => (
            <div key={skill} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill}</span>
                <span>75%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Training() {
  const modules = [
    { title: 'Introduction to Leadership', progress: 100, status: 'completed' },
    { title: 'Advanced Communication', progress: 60, status: 'in-progress' },
    { title: 'Project Management', progress: 0, status: 'not-started' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Training Modules</h2>
      <div className="space-y-4">
        {modules.map((module) => (
          <div key={module.title} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{module.title}</h3>
              <span className={`px-2 py-1 rounded-full text-sm ${
                module.status === 'completed' ? 'bg-green-100 text-green-800' :
                module.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {module.status}
              </span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Feedback() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Feedback System</h2>
      <div className="space-y-6">
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold mb-4">Recent Feedback</h3>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Project Review</span>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-600">
                  Excellent work on the latest project. Your attention to detail and problem-solving skills were outstanding.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Submit Feedback</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Project Feedback</option>
                <option>Peer Review</option>
                <option>General Feedback</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea 
                rows={4}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter your feedback..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Career() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Career Planning</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Career Path</h3>
            <div className="relative pl-8 space-y-6 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
              {[
                { role: 'Senior Developer', status: 'current' },
                { role: 'Lead Developer', status: 'next' },
                { role: 'Engineering Manager', status: 'future' },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className={`absolute left-[-1.875rem] w-6 h-6 rounded-full ${
                    step.status === 'current' ? 'bg-blue-500' :
                    step.status === 'next' ? 'bg-blue-200' : 'bg-gray-200'
                  }`}></div>
                  <h4 className="font-medium">{step.role}</h4>
                  <p className="text-sm text-gray-500">
                    {step.status === 'current' ? 'Current Position' :
                     step.status === 'next' ? 'Next Step' : 'Future Goal'}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Required Skills</h3>
            <div className="space-y-4">
              {[
                { skill: 'Team Leadership', level: 'Intermediate' },
                { skill: 'Project Management', level: 'Advanced' },
                { skill: 'Technical Architecture', level: 'Expert' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium">{item.skill}</h4>
                  <p className="text-sm text-gray-500">{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}