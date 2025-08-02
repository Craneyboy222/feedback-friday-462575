import { configureStore, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; username: string };
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export default authSlice.reducer;