import React, { FunctionComponent } from 'react'
import '../App.css';


interface IFormProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
    inputText: string;
}

const TaskAddForm: FunctionComponent<IFormProps> = ({
    onChange,
    onAdd,
    inputText
}) => (
        <form onSubmit={onAdd}>
            <input onChange={onChange} value={inputText} placeholder='Type in task TODO...' />
            <button className='button' type="submit">Add a new task</button>
        </form>
    );


export default TaskAddForm