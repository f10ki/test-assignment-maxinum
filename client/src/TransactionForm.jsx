import React, { useState } from "react";
import axios from "axios";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    sum: "",
    category: "",
    comment: "",
  });

  const categories = ["Payment", "Reward", "Commission"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/transactions",
        formData
      );
      console.log("Transaction saved:", response.data);
      // Optional: Reset form or show success message
    } catch (error) {
      console.error("Error saving transaction:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-6 text-center">Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Sum</label>
          <input
            type="number"
            name="sum"
            value={formData.sum}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            min="0"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Comment</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
