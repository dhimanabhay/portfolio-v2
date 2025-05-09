import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ProjectList from "./components/section/ProjectList";

function App() {
  return (
    <Router>
      <div className="overflow-y-visible min-h-screen bg-gray-300 dark:bg-react-dark-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project_list" element={<ProjectList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
