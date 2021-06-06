import React from "react";

export const DisplayDones = (props) => {
  const { tasks, onClickRestoreButton } = props;

  return (
    <div className="done-section">
      <h2>Done</h2>
      <ul>
        {tasks.map((todo, index) => {
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
  );
};
