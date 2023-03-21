import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducer } from "../store";
import { numberAdd2, login } from "../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function randomNumber() {
    let random = parseInt(Math.random() * (99) + 1);
    console.log(random);
    return random;
  }

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => login(dispatch, 'João')}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => numberAdd2(dispatch)}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "multiplyBy7" })}
          >
            x7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "divideBy25" })}>/ 25</button>
          <button className="btn" onClick={() => dispatch({ type: "parseNumber" })}>Parse</button>
          <button className="btn" onClick={() => dispatch({ type: "numberAddN", payload: randomNumber() })}>Add number</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
