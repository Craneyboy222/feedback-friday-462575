import { useState, useEffect } from 'react';
import axios from 'axios';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      setAuthState({ isAuthenticated: true, user: response.data.user });
    } catch (error) {
      console.error('Login failed', error);
      setAuthState({ isAuthenticated: false, user: null });
    }
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, user: null });
    // Handle logout process
  };

  return { ...authState, login, logout };
}