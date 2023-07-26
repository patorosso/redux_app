import { createAction, createReducer } from "@reduxjs/toolkit";

const bugAdded = createAction("bugAdded");
const bugRemoved = createAction("bugRemoved");
const bugResolved = createAction("bugResolved");

//Reducer

let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugRemoved.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.payload.id);
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});
