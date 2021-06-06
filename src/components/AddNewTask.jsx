import React from "react";

export const AddNewTask = (props) => {
  const { newTask, onChange, onClick, disabled } = props;

  return (
    <div className="input-section">
      <h2>New task</h2>

      <input
        placeholder="Input your task here."
        disabled={disabled}
        value={newTask}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        Add
      </button>
    </div>
  );
};
