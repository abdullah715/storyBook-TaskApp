import { createSlice } from "@reduxjs/toolkit";

// Our new error field is configured here
const AppStateSlice = createSlice({
      name: "appState",
      initialState: "",
      reducers: {
        updateAppState: (state, action) => {
          return {
            ...state,
            isError: action.payload,
          };
        },
      },
    });


export default AppStateSlice
// The actions contained in the new slice are exported to be used in our components
export const { updateAppState } = AppStateSlice.actions;
