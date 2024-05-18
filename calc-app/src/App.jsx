import React, {useState} from 'react';
import words from 'lodash.words';

import Result from './components/Result';
import Numbers from './components/Numbers';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';

import './App.css';

const App = () => {

    const [stack, setStack] = useState('');
    const items = words(stack, /[^-^+^*^/]+/g);
    const value = items.length > 0 ? items[items.length - 1] : 0;

    return (
    <main className='react-calculator'>
        <Result resultado={value} />
        <Numbers onClickNumber={ number => setStack(`${stack}${number}`)} />
        <Functions
            onContentClear={() => {
                if (stack.length > 0) {
                    setStack(stack.substring(0, stack.length - 1));
                }
            }}
            onDelete={() => setStack('')}
        />
        <MathOperations 
            onClickOperation={operation => { setStack(`${stack}${operation}`) }}
            onClickEqual={equal => { setStack(eval(stack)) }}
        />
    </main>);
}

export default App;