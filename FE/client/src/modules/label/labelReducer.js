import { ADD_LABEL, DELETE_LABEL } from "./labelAction";
import { act } from "react-dom/test-utils";

const initialState = {
  labels: [
    { id: 1, textColor: "#fff", backgroundColor: "#1E90FF", description: "testing label", labelName: "duplicate" },
    { id: 2, textColor: "#fff", backgroundColor: "#80E12A", description: "testing label", labelName: "FE" },
    { id: 3, textColor: "#fff", backgroundColor: "#52E4DC", description: "testing label", labelName: "good first issue" },
    { id: 4, textColor: "#fff", backgroundColor: "#FFACB7", description: "testing label", labelName: "help wanted" },
    { id: 5, textColor: "#fff", backgroundColor: "#FFB400", description: "testing label", labelName: "question" },
  ],
};

const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL:
      return { ...state };
    case DELETE_LABEL:
      return { ...state, labels: state.labels.filter((label) => action.payload !== label.id) };
    default:
      return state;
  }
};

export default labelReducer;
