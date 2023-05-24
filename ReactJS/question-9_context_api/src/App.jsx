import { ThemeProvider } from './components/ThemeContext.jsx';
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;