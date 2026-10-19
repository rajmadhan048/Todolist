import { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // page reload aaguradha stop panum[span_37](start_span)[span_37](end_span)
    if (text.trim() === "") return; // empty input ah ignore panum[span_38](start_span)[span_38](end_span)
    onAdd(text); // App ku todo add pana sollum[span_39](start_span)[span_39](end_span)
    setText(""); // input box ah clear panum[span_40](start_span)[span_40](end_span)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;