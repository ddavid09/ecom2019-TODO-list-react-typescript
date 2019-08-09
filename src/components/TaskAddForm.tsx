import React, { FunctionComponent } from 'react'

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
            <input onChange={onChange} />
            <button type="submit">Add a new task</button>
        </form>
    );


export default TaskAddForm