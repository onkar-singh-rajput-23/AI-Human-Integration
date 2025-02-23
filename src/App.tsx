import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { EmployeePortal } from "./pages/EmployeePortal";
import { HRAdmin } from "./pages/HRAdmin";
import { Analytics } from "./pages/Analytics";
import AIControl from "./pages/AIControl";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee/*" element={<EmployeePortal />} />
          <Route path="/admin/*" element={<HRAdmin />} />
          <Route path="/analytics/*" element={<Analytics />} />
          <Route path="/ai/*" element={<AIControl />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
