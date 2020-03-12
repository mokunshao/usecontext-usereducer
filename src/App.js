import React, { useReducer, createContext } from 'react';
import './App.css';
import Form from './components/Form';

export const ctx = createContext(null);

export const TYPES = {
  UPDATE_NAME: 'UPDATE_NAME',
  UPDATE_TEL: 'UPDATE_TEL',
};

const initialState = {
  name: '',
  tel: '',
};

const reducer = (state, action) => {
  const { type, payload } = action;
  if (Object.values(TYPES).includes(type)) {
    return { ...state, ...payload };
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ctx.Provider value={[state, dispatch]}>
      <div className="App">
        <Form />
      </div>
    </ctx.Provider>
  );
}

export default App;
