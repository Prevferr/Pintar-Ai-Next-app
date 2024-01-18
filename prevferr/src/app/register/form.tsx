"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    password: "",
    education: "",
    scope: "",
    institution: "",
    profileImage: "",
    email: "",
    background: "",
    gender: "",
    role: "",
    location: "",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({
      firstname: "",
      lastname: "",
      password: "",
      education: "",
      scope: "",
      institution: "",
      profileImage: "",
      email: "",
      background: "",
      gender: "",
      role: "",
      location: "",
    });

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <div className="mb-6">
        <input
          required
          type="text"
          name="firstname"
          value={formValues.firstname}
          onChange={handleChange}
          placeholder="Firstname"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="lastname"
          value={formValues.lastname}
          onChange={handleChange}
          placeholder="Lastname"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Password"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="education"
          value={formValues.education}
          onChange={handleChange}
          placeholder="Education"
          className={`${input_style}`}
        />
      </div>{" "}
      <div className="mb-6">
        <input
          required
          type="text"
          name="scope"
          value={formValues.scope}
          onChange={handleChange}
          placeholder="Scope"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="institution"
          value={formValues.institution}
          onChange={handleChange}
          placeholder="Institution"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="profileImage"
          value={formValues.profileImage}
          onChange={handleChange}
          placeholder="Profile Image"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Email address"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="background"
          value={formValues.background}
          onChange={handleChange}
          placeholder="Background"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="gender"
          value={formValues.gender}
          onChange={handleChange}
          placeholder="Gender"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="role"
          value={formValues.role}
          onChange={handleChange}
          placeholder="Role"
          className={`${input_style}`}
        />
      </div>
      <div className="mb-6">
        <input
          required
          type="text"
          name="location"
          value={formValues.location}
          onChange={handleChange}
          placeholder="Location"
          className={`${input_style}`}
        />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
        className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        disabled={loading}
      >
        {loading ? "loading..." : "Sign Up"}
      </button>
    </form>
  );
};
