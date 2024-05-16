import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForm = ({addTask}) => {
  const [task, setTask] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="mytask"
          maxLength={10}
          required
          value={task}
          placeholder="Enter task "
          onInput={(e) => setTask(e.target.value)}
        />
       
        <label htmlFor="task" className="label"></label>
      </div>
      <button className="btn" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
