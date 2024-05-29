// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Hobbies from './pages/Hobbies';
import Blog from './pages/Blogs';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;