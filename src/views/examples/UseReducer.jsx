import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "multiplyBy7":
      return { ...state, number: state.number * 7 };
    case "divideBy25":
      return { ...state, number: state.number / 25 };
    case "parseNumber":
      return { ...state, number: parseInt(state.number) };
    case "numberAddN":
      return { ...state, number: state.number + parseInt(action.payload) };
    default:
      return state;
  }
}

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
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAdd2" })}
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
