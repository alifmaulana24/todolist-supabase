import { useState } from "react";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() == "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="wrapper flex justify-center my-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="py-[6px] px-4 text-[#7b79ff] border border-primary flex-1/3"
          placeholder="What is task today ?"
          />
        <button type="submit" className="bg-primary py-1 px-2 cursor-pointer font-chewy hover:bg-[#855afcda]">Add Task</button>
        </div>
    </form>
  );
};

export default Form;
