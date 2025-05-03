import React, { useState } from 'react';

type Todo = {
  id: number,
  text: string,
};

const Example = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'text1' },
    { id: 2, text: 'text2' }
  ]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
  const addTodoItem = () => {
    setTodos(state => [...state, { id: state.length, text: inputText}]);
    setInputText('');
  }

    return (
        <>
            <input type="text" value={inputText} onChange={changeHandler} />
            <button onClick={addTodoItem}></button>
        </>
  );
}




export default Example;
