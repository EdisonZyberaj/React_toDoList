import React, { useState } from "react";

function InputComponent({ addTask, setTask }) {
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default InputComponent;
