import React, { useState } from "react";
import UserForm from "./UserForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {showForm ? "Hide Form" : "Show Form"}
      </button>
      {showForm && <UserForm />}
    </div>
  );
}

export default App;
