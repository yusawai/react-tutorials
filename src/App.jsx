import React, { useState } from "react";
import { AddNewTask } from "./components/AddNewTask";
import { DisplayUndones } from "./components/DisplayUndones";
import { DisplayDones } from "./components/DisplayDones";

import "./styles.css";

export const App = () => {
  const [newTask, setNewTask] = useState("");
  const [undones, setUndones] = useState([]);
  const [dones, setDones] = useState([]);
  const onChangeNewTask = (event) => setNewTask(event.target.value);
  const onClickAddButton = () => {
    if (newTask === "") return;
    const newTasks = [...undones, newTask];
    setUndones(newTasks);
    setNewTask("");
  };
  const onClickRemoveButton = (index) => {
    const newUndones = [...undones];
    newUndones.splice(index, 1);
    setUndones(newUndones);
  };
  const onClickDoneButton = (index) => {
    const newUndones = [...undones];
    newUndones.splice(index, 1);
    const newDones = [...dones, undones[index]];
    setUndones(newUndones);
    setDones(newDones);
  };
  const onClickRestoreButton = (index) => {
    const newDones = [...dones];
    newDones.splice(index, 1);
    const newUndones = [...undones, dones[index]];
    setDones(newDones);
    setUndones(newUndones);
  };

  return (
    <>
      <AddNewTask
        newTask={newTask}
        onChange={onChangeNewTask}
        onClick={onClickAddButton}
      />
      <DisplayUndones
        tasks={undones}
        onClickDoneButton={onClickDoneButton}
        onClickRemoveButton={onClickRemoveButton}
      />
      <DisplayDones tasks={dones} onClickRestoreButton={onClickRestoreButton} />
    </>
  );
};
