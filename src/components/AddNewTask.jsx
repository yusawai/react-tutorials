import React from "react";

export const AddNewTask = (props) => {
  const { newTask, onChange, onClick } = props;

  return (
    <div className="input-section">
      <h2>New task</h2>

      <input
        placeholder="Input your task here."
        value={newTask}
        onChange={onChange}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};
