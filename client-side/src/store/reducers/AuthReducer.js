import {
  HIDE_MODAL_SIGNIN,
  HIDE_MODAL_SIGNUP,
  SHOW_MODAL_SIGNIN,
  SHOW_MODAL_SIGNUP,
} from "../types/AuthType";

const initialState = {
  modalSignIn: false,
  modalSignUp: false,
  currentUser: {},
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL_SIGNIN: {
      return { ...state, modalSignIn: true };
    }
    case HIDE_MODAL_SIGNIN: {
      return { ...state, modalSignIn: false };
    }
    case SHOW_MODAL_SIGNUP: {
      return { ...state, modalSignIn: true };
    }
    case HIDE_MODAL_SIGNUP: {
      return { ...state, modalSignIn: false };
    }
    default:
      return { ...state };
  }
};

export default AuthReducer;
