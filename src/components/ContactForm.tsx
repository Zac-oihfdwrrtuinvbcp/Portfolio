import { useState, type FormEvent } from "react";
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        'service_j4e1yrk',
        'template_pdmmdh8',
        {
          name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'IGtDradi-uw9hJnQF'
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-row justify-between mb-2 gap-4">
      <div className="flex gap-2 flex-col w-full">
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all"
          placeholder="Your name"
        />
      </div>

      <div className="flex gap-2 flex-col w-full">
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="flex gap-2 flex-col w-full">
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all"
          placeholder="What's this about?"
        />
      </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-2xl text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all resize-none"
          placeholder="Your message..."
        />
      </div>

      {status === "success" && (
        <div className="p-4 bg-green-900/30 border border-green-700 rounded-2xl text-green-300">
          ✓ Message sent successfully!
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-900/30 border border-red-700 rounded-2xl text-red-300">
          ✗ Failed to send message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-3xl transition-colors shadow-l font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <i className="fa-solid fa-paper-plane"></i>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}