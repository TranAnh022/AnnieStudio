"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState("");

  // ✔ Type for input change event
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✔ Type for form submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!form.name || !form.email || !form.subject ) {
        setResult("❌ Please fill in all fields.");
        return;
      }

      // Email validation
      if (!emailRegex.test(form.email)) {
        setResult("❌ Invalid email address.");
        return;
      }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setResult("✅ Your message has been sent!");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setResult("❌ Failed to send email.");
      });
  };

  return (
    <section id="booking" className="py-24 px-8 text-center">
      <div className="p-10 sm:p-16 rounded-lg shadow-lg border-20 border-amber-50 max-w-6xl mx-auto">
        <h2 className="text-sm font-bold italic sm:text-3xl mb-6">
          Still have questions? Reach out!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-left bg-"
        >
          <label className="block mb-2 text-white">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jennie"
            className="w-full p-3 rounded mb-4 text-black bg-amber-50"
            required
          />

          <label className="block mb-2 text-white">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jennie@gmail.com"
            className="w-full p-3 rounded mb-4 text-black bg-amber-50"
            required
          />

          <label className="block mb-2 text-white">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Booking question"
            className="w-full p-3 rounded mb-4 text-black bg-amber-50"
            required
          />

          <label className="block mb-2 text-white">Message (optional)</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="I have a quuestion about booking..."
            className="w-full p-3 rounded mb-6 text-black bg-amber-50"
            required
          />

          <button
            type="submit"
            className="inline-block border border-white py-3 px-8 rounded-full  transition w-full text-center"
          >
            Submit
          </button>
        </form>

        {result && <p className="mt-4 text-white">{result}</p>}
      </div>
    </section>
  );
}
