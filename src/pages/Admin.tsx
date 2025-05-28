import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Image, Type, LogOut } from 'lucide-react';
import ImageManager from '../components/ImageManager';
import TextManager from '../components/TextManager';

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'controlpass2024'
};

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'images' | 'text'>('images');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--dark-bg)] flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 bg-[var(--card-bg)] p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-[var(--primary-color)]" />
            <h2 className="mt-6 text-3xl font-bold text-white">Admin Login</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-md text-sm">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-[#1a1a1a] placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-700 bg-[#1a1a1a] placeholder-gray-500 text-white rounded-md focus:outline-none focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--primary-color)] hover:bg-[var(--accent-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        <div className="bg-[var(--card-bg)] rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-800">
            <nav className="flex" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('images')}
                className={`px-6 py-4 text-sm font-medium flex items-center gap-2 ${
                  activeTab === 'images'
                    ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Image size={16} />
                Image Management
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`px-6 py-4 text-sm font-medium flex items-center gap-2 ${
                  activeTab === 'text'
                    ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Type size={16} />
                Text Management
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'images' ? <ImageManager /> : <TextManager />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;