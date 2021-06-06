import React from "react";

export const DisplayUndones = (props) => {
  const { tasks, onClickDoneButton, onClickRemoveButton } = props;

  return (
    <div className="undone-section">
      <h2>Undone</h2>
      <ul>
        {tasks.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-item-wrapper">
                <div className="task-description-wrapper">
                  <span>{todo}</span>
                </div>
                <div className="action-button-wrapper">
                  <button onClick={() => onClickDoneButton(index)}>Done</button>
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
  );
};
