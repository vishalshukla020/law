import { createContext, useReducer } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const initialState = {
  user: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}

const AuthProvider = (props) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (data) => {
    const user = jwt.decode(data);
    if (user.exp * 1000 > Date.now()) {
      dispatch({ type: "LOGIN", payload: user });
    } else {
      router.push("/login");
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
