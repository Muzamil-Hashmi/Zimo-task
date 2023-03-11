import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    fetch("/api/hello ", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e.message));
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder=" name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />{" "}
      <br />
      <input
        type="text"
        name="message"
        placeholder="comment"
        value={formData.message}
        onChange={handleChange}
      />{" "}
      <br />
      <input type="button" value=" submit  " onClick={handleSubmit} />
    </div>
  );
}
