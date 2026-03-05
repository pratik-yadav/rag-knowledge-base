import { useState } from 'react'

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isRegister ? 'register' : 'login', { username, password, confirmPassword });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {isRegister ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {isRegister && (
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            {isRegister ? 'Create account' : 'Sign in'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={toggleMode}
            className="text-sm text-blue-500 hover:underline"
          >
            {isRegister ? 'Already have an account? Login' : 'New here? Register'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login