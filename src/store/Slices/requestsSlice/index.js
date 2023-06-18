import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: '',
  requestsList: []
}

const requests = createSlice({
  name: 'requests slice',
  initialState,
  reducers: {
    addRequest: (state, action) => {
      state.requestsList.push(action.payload)
    },
    updateUsername: (state, action) => {
      state.username = action.payload
    }
  }
});

export const {
  addRequest,
  updateUsername,
} = requests.actions;
export default requests.reducer;