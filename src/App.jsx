import React, { useState } from "react";
import InputComponent from "./Components/Input";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <InputComponent addTask={addTask} setTask={setTasks} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="removeButton" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
