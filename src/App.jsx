import React, { useState } from "react";
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
      <div className="input-section">
        <h2>New task</h2>

        <input
          placeholder="Input your task here."
          value={newTask}
          onChange={onChangeNewTask}
        />
        <button onClick={onClickAddButton}>Add</button>
      </div>
      <div className="undone-section">
        <h2>Undone</h2>
        <ul>
          {undones.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-item-wrapper">
                  <div className="task-description-wrapper">
                    <span>{todo}</span>
                  </div>
                  <div className="action-button-wrapper">
                    <button onClick={() => onClickDoneButton(index)}>
                      Done
                    </button>
                    <button onClick={() => onClickRemoveButton(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="done-section">
        <h2>Done</h2>
        <ul>
          {dones.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-item-wrapper">
                  <div className="task-description-wrapper">
                    <span>{todo}</span>
                  </div>
                  <div className="action-button-wrapper">
                    <button onClick={() => onClickRestoreButton(index)}>
                      Restore
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
