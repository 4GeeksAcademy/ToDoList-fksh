import React, { useState } from "react";
import { Header } from "./Header";
import { TaskInput } from "./TaskInput";
import { TaskItem } from "./TaskItem";

//create your first component
const Home = () => {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList((prevState) => [...prevState, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList((prevState) =>
      prevState.filter((task) => task.taskName !== deleteTaskName)
    );
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName
          ? {
              ...task,
              checked: !task.checked,
            }
          : task
      )
    );
  }

  return (
    <div className="wrapperContainer">
      <Header />
      <TaskInput addTask={addTask} />
      <div className="listItems">
        {toDoList.map((task, key) => (
          <TaskItem
            task={task}
            key={key}
            deleteTask={deleteTask}
            toggleCheck={toggleCheck}
          />
        ))}
      </div>

      {toDoList.length === 0 ? (
        <p className="notify">All done for today!</p>
      ) : null}
    </div>
  );
};

export default Home;
