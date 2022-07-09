import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost/fswd-backend/public/index.php/api/user";

const defaultData = {
  data: {},
  loading: false,
  isLogged: false,
};

export const addNewUser = createAsyncThunk(
  "login/addNewUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(baseURL + "/new", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to register a new user");
    }
  }
);

export const signIn = createAsyncThunk(
  "login/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(baseURL + "/login_check", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch, trying to sign in");
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: { login: defaultData, status: "idle", error: null },
  reducers: {
    logOut: (state) => {
      state.login = defaultData;
    },
  },
  extraReducers: {
    [addNewUser.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.login.data = action.payload;
      state.login.loading = false;
      state.status = "succeeded";
    },
    [addNewUser.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
    [signIn.pending]: (state) => {
      state.login.loading = true;
      state.status = "loading";
    },
    [signIn.fulfilled]: (state, action) => {
      state.login.data = action.payload;
      state.login.loading = false;
      state.login.isLogged = true;
      state.status = "succeeded";
    },
    [signIn.rejected]: (state, action) => {
      state.login.loading = false;
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
