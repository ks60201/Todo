import React from "react";

export const TodoCard = (props) => {
  const { children, handleedit, id, handledelete } = props;
  return (
    <li className="todoItem">
      {children}
      <button
        onClick={() => {
          handleedit(id);
        }}
        className="edit"
      >
        Edit
      </button>
      <button
        onClick={() => {
          handledelete(id);
        }}
        className="delete"
      >
        Delete
      </button>
    </li>
  );
};
