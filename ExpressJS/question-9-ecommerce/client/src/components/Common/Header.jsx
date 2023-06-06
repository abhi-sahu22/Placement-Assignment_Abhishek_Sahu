import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">My Ecommerce App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
