import { useState } from "react";

function TodoListItem({ todo, onRemoveTodo, onToggleComplete }) {
  const { title, id, completed } = todo;
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onToggleComplete(id, !isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span style={{ color: isChecked ? "grey" : "inherit" }}>{title}</span>
      <button
        type="button"
        onClick={() => {
          onRemoveTodo(id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default TodoListItem;
