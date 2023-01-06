import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  isUsersLoading: true,
  currentUser: {},
  isCurrentUserLoading: false
};

const url = "https://reqres.in/api/users?page=2";

function singleUserUrl(id) {
  return `https://reqres.in/api/users/${id}`;
}

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data.data;
});

export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async (id) => {
    const response = await fetch(singleUserUrl(id));
    const data = await response.json();
    return data.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.isUsersLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isUsersLoading = false;
        state.allUsers = action.payload;
      }).addCase(getSingleUser.pending, (state, action) => {
        state.isCurrentUserLoading = true
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.isCurrentUserLoading = false
        state.currentUser = action.payload;
      });
  },
});

export default userSlice.reducer;
