// components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div>
          <NavLink to="/" className="mr-4 font-bold">
            Profile
          </NavLink>
          <NavLink to="/projects" className="mr-4 font-bold">
            Projects
          </NavLink>
          <NavLink to="/achievements" className="mr- font-bold">
            Achievements
          </NavLink>
          <NavLink to="/hobbies" className="mr-4 font-bold">
            Hobbies
          </NavLink>
          <NavLink to="/blog" className="font-bold">
            Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;