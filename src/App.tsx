import { type } from 'os';
import React, { Fragment, useState } from 'react';
import './App.css';

type FormElement = React.FormEvent<HTMLFormElement> ;
interface ITask {
  name:string,
  done: boolean
}

function App(): JSX.Element {

const [newTask, setNewTask] = useState<string>("");
const [tasks, setTasks] = useState<ITask[]>([]);


const handleSubmit = (e: FormElement) => {
  e.preventDefault();
  console.log(newTask)
  addTask(newTask)
  console.log(tasks)
};

const addTask = (name:string) => {
  const newTasks = [...tasks, {name, done: false}]
  setTasks(newTasks)
}

  return (
     <Fragment>
       <form onSubmit={handleSubmit}>
          <input type="text" onChange={e => setNewTask(e.target.value)} />
          <button>Save</button>
       </form>
     </Fragment>
  );
}

export default App;
