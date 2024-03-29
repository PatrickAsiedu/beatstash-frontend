import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../network/api";
import { usercredentials } from "../../types/userTypes";
import { User } from "../../types/userTypes";


const persistuser : User = JSON.parse(localStorage.getItem('persistuser') || '{}')
const initialState = {
  user: null ,
  isLoading: false,
  success: false,
  error: "",
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user:usercredentials, thunkAPI) => {
    console.log(user)
    try {
      const response = await api.post("login", user);
      console.log(response.data)
      if(response.data){
        localStorage.setItem('persistuser', JSON.stringify(response.data))
      } else{
        return
      }
      return response.data;
   
    } catch (err) {
      if (err instanceof Error) return err.message;
      else {
        console.log("unexpected error", err);
      }
    }
  }
);


export const signUP = createAsyncThunk(
  "auth/signUp",
  async (user:usercredentials, thunkAPI) => {
    console.log(user)
    try {
      const response = await api.post("signup", user);
      console.log(response.data)
      if(response.data){
        localStorage.setItem('persistuser', JSON.stringify(response.data))
      } else{
        return
      }
      return response.data;
   
    } catch (err) {
      if (err instanceof Error) return err.message;
      else {
        console.log("unexpected error", err);
      }
    }
  }
);


export const logOut = createAsyncThunk("auth/logOut", async ()=>{
  try {

    const response = await api.post("logout")
  }catch (err) {
      if (err instanceof Error) return err.message;
      else {
        console.log("unexpected error", err);
      }
    }

})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //register
    builder.addCase(signUP.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.user = action.payload;
    });
    builder.addCase(signUP.rejected, (state, action) => {
      if (action.error.message !== undefined) {
        state.error = action.error.message;
      } else {
        console.log(state.error);
      }
    });



    //login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.error.message !== undefined) {
        state.error = action.error.message;
      } else {
        console.log(state.error);
      }
    });

    //logout
    builder.addCase(logOut.pending,(state)=>{
           state.isLoading = true;     
    })
    builder.addCase(logOut.fulfilled,(state)=>{
      state.isLoading = false;
      state.success = true;
      state.user = null;
 
    })
      builder.addCase(logOut.rejected, (state, action) => {
      if (action.error.message !== undefined) {
        state.error = action.error.message;
      } else {
        console.log(state.error);
      }
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
