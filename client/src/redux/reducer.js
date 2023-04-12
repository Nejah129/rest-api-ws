import { ADD, DELETE, EDIT_USER, GET } from "./actionTypes";

const init = {
  users: null,
  loading: true,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case DELETE:
      return {
        ...state,
        users: state.users.filter((el) => el._id !== payload),
      };

    case ADD:
      return {
        ...state,
        users: [...state.users, payload],
      };

    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((el) => el._id === payload._id ? {...el,...payload} : el),
      };

    default:
      return state;
  }
};
