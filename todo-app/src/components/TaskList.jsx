import React from "react";
import TaskItem from "./TaskItem";
//import css module
//.sort(a,b =>b.id -a.id)

const TaskList = ({ task }) => {
  return (
    <ul className="styles.css">
      {task.map((task) => {
        <TaskItem key={task.id} task={task} />;
      })}
    </ul>
  );
};

export default TaskList;
