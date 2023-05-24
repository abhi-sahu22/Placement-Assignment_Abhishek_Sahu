import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Dashboard.css'

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`dashboard ${theme}`}>
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Rest of the dashboard content */}
    </div>
  );
};

export default Dashboard;