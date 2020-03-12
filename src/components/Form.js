import React, { useContext } from 'react';
import { ctx, TYPES } from '../App';

export const Form = () => {
  const [state, dispatch] = useContext(ctx);
  const { name, tel } = state;
  return (
    <div>
      <div>
        <span>name: </span>
        <input
          value={name}
          onChange={e =>
            dispatch({
              type: TYPES.UPDATE_NAME,
              payload: { name: e.target.value },
            })
          }
        />
      </div>
      <div>
        <span>tel: </span>
        <input
          value={tel}
          onChange={e =>
            dispatch({
              type: TYPES.UPDATE_TEL,
              payload: { tel: e.target.value },
            })
          }
        />
      </div>
    </div>
  );
};

export default Form;
