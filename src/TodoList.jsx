import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoItem, handleDelete, handleToggle, handleUpdate}) => {
  return (
    <ol>
        {todoItem.map((item) => {
            return <TodoItem todoItem={item} onDelete={handleDelete} onToggle={handleToggle} onUpdate={handleUpdate} key={item.id}/>
        })}
    </ol>
  )
}

export default TodoList