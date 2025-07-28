import React, { useState } from "react";
import clsx from "clsx";
import { MdDelete, MdCancel } from "react-icons/md";
import { FaEdit, FaSave } from "react-icons/fa";

const TodoItem = ({ todoItem, onDelete, onToggle, onUpdate }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTask, setEditTask] = useState(todoItem.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask.trim() == "") return;
    onUpdate(todoItem.id, editTask.trim());
    setIsEdit(false )
  };

  return (
    <li
      onClick={() => onToggle(todoItem.id, todoItem.completed)}
      className={clsx('bg-primary my-3 py-2 pl-6 rounded-xl cursor-pointer hover:scale-105 transition-all',{'line-through decoration-red-500' : todoItem.completed})}
    >
      {isEdit ? (
        <form onSubmit={handleSubmit} className="flex min-h-9">
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
            autoFocus
            className="flex-1 font-poppins font-bold"
          />
          <button type="submit">{<FaSave className="size-5 mx-3"/>}</button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsEdit(false);
            }}
          >
            {<MdCancel className="size-5 mr-4"/>}
          </button>
        </form>
      ) : (
        <div className="flex justify-between min-h-9 items-center">
          <span className=" flex-1 break- font-poppins font-bold">{todoItem.task}</span>
            <div className="basis-[20%] flex justify-around">
              <button onClick={() => onDelete(todoItem.id)}>{<MdDelete className="size-7 hover:scale-110"/>}</button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEdit(true);
              }}
            >
              {<FaEdit className="size-7 hover:scale-110"/>}
            </button>
            </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
