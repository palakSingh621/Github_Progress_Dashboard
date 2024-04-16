import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userData : [],
    repoData : []
}

export const githubSlice = createSlice({
    name: "github",
    initialState,
    reducers: {
      setUserData: (state, action) => {
        state.userData = action.payload;
      },
    },

    setRepoData: (state, action) => {
      state.repoData = action.payload;
    },
      
  });
  export const {setUserData , setRepoData} = githubSlice.actions;
  
  export default githubSlice.reducer;
