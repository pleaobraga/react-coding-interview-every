import React, { createContext, useContext, useReducer } from 'react';
import { IContextData, IContextProviderProps } from './types.context';
import { Person } from '../../constants/types';

const EDIT_ACTION = 'edit';
const APPEND_ACTION = 'append';
const INITIALIZE_ACTION = 'initialize';

type ContextData = Person[];
interface PeopleState extends IContextData<ContextData> {
  hasMore: boolean;
  totalItems: number;
}

export interface IPeopleContext extends PeopleState {
  edit: (data: Person) => void;
  append: (data: Person[], totalItems: number) => void;
  initialize: (data: Person[], totalItems: number) => void;
}

type Action =
  | { type: 'edit'; data: Person }
  | { type: 'append'; data: Person[]; totalItems: number }
  | { type: 'initialize'; data: Person[]; totalItems: number };

type Reducer = (prevState: PeopleState, action: Action) => PeopleState;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_ACTION:
      return {
        ...state,
        data: action.data,
        initialized: true,
        totalItems: action.totalItems,
      };
    case EDIT_ACTION:
      // this could have a better performance by storing a Map structure
      // cotaining the person's email/id as key and value their position
      //  on the array. That way the findIndex method is not necessary
      const index = state.data.findIndex(
        (person) => person.email === action.data.email
      );
      // The state should never be modifiied directly
      // Variant: Object.assign([], state.data, {[index]: newItem});
      const copy = state.data.slice(0);
      copy[index] = action.data;
      return { ...state, data: copy };
    // items on the server (not available on the server)
    case APPEND_ACTION:
      return {
        ...state,
        data: [...state.data, ...action.data],
        totalItems: action.totalItems,
      };
    default:
      throw new Error();
  }
};

export const PeopleContext = createContext<IPeopleContext>({
  data: [],
  initialized: false,
  totalItems: 0,
  hasMore: false,
  append: () => {},
  edit: () => {},
  initialize: () => {},
});

export const usePeopleContext = () => useContext(PeopleContext);

const PeopleProvider = ({ children }: IContextProviderProps<ContextData>) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    initialized: false,
    hasMore: false,
    totalItems: 0,
  });

  return (
    <PeopleContext.Provider
      value={{
        ...state,
        initialize: (data: Person[], totalItems: number) =>
          dispatch({ data, type: INITIALIZE_ACTION, totalItems }),
        append: (data: Person[], totalItems: number) =>
          dispatch({ data, type: APPEND_ACTION, totalItems }),
        edit: (data: Person) => dispatch({ data, type: EDIT_ACTION }),
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
