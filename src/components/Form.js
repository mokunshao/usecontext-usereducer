import React, { useContext } from 'react';
import { ctx, TYPES } from '../App';

export const Form = () => {
  const [state, dispatch] = useContext(ctx);

  const { name, tel } = state;

  const changeName = name =>
    dispatch({
      type: TYPES.UPDATE_NAME,
      payload: { name },
    });

  const changeTel = tel =>
    dispatch({
      type: TYPES.UPDATE_TEL,
      payload: { tel },
    });

  return (
    <div>
      <div>
        <span>name: </span>
        <input value={name} onChange={e => changeName(e.target.value)} />
      </div>
      <div>
        <span>tel: </span>
        <input value={tel} onChange={e => changeTel(e.target.value)} />
      </div>
    </div>
  );
};

export default Form;
