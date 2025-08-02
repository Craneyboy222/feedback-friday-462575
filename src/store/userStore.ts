import { configureStore, createSlice } from '@reduxjs/toolkit';

interface UserState {
  users: Array<{ id: string; username: string }>;
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;