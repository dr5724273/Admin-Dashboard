import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TableView from './views/TableView';
import ChartsView from './views/ChartsView';
import CalendarView from './views/CalendarView';
import KanbanView from './views/KanbanView';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove 'dark' class on <html> based on darkMode state
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Pass darkMode & toggle function to Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <div className="flex-1 p-4 overflow-auto">
          <Routes>
            <Route path="/" element={<TableView />} />
            <Route path="/charts" element={<ChartsView />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/kanban" element={<KanbanView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
