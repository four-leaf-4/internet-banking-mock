import React, { FC, useReducer, useMemo } from "react";

type LoginInfoType = "loginid" | "password";

type LoginStateType = {
  [K in LoginInfoType]: string;
};

type ActionType = {
  type: string;
  targetKey: LoginInfoType;
  value: string;
};

type ReducerType = React.Reducer<LoginStateType, ActionType>;

type DispatchType = React.Dispatch<ActionType>;

interface StateStoreType
  extends Readonly<{
    isLoggedIn: boolean;
    isDisabled: boolean;
  }> {}

interface DispatchStoreType
  extends Readonly<{
    dispatch: DispatchType;
  }> {}

const initialState: LoginStateType = {
  loginid: "",
  password: "",
};

const reducer: ReducerType = (state: LoginStateType, action: ActionType) => {
  switch (action.type) {
    case "UPDATE_LOGIN_INFO": {
      return {
        ...state,
        [action.targetKey as LoginInfoType]: action.value,
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
};

export const GlobalStateContext = React.createContext<StateStoreType>({
  isLoggedIn: false,
  isDisabled: false,
});
export const GlobalDispatchContext = React.createContext<DispatchStoreType>({
  dispatch: (): void => {},
});

interface ProviderProps
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const GlobalContextProvider: FC<ProviderProps> = ({ children }) => {
  const [loginState, dispatch] = useReducer(reducer, initialState);

  const isLoggedIn: boolean = useMemo(() => {
    const { loginid, password } = loginState;

    return loginid.length > 0 && password.length > 0;
  }, [loginState]);

  const isDisabled: boolean = useMemo(() => {
    const { loginid, password } = loginState;
    return loginid.length === 0 || password.length === 0;
  }, [loginState]);

  return (
    <GlobalStateContext.Provider value={{ isLoggedIn, isDisabled }}>
      <GlobalDispatchContext.Provider value={{ dispatch }}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
