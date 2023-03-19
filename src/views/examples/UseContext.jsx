import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../data/DataContext';
import { AppContext } from '../data/Store';

const UseContext = (props) => {
    const {state, setState} = useContext(DataContext);
    const { number, text, setNumber, setText } = useContext(AppContext);

    function addNumber(delta) {
        setState({ 
            ...state,
            number: state.number + delta 
        });
    } 

    useEffect(() => {
        if (number > 1250) {
            setText('Eita!!!');
        }
    }, [number]);


    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{ state.text }</span>
                <span className="text">{ state.number }</span>
            </div>
            <div>
                <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                <button className="btn" onClick={() => addNumber(1)}>+1</button>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{ text }</span>
                <span className="text">{ number }</span>
                <div>
                    <button onClick={() => setNumber(number - 1)}>-1</button>
                    <button onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    );
}

export default UseContext;
