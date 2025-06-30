import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#131b1a] px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Contact Me
      </h2>
      <p className="text-[#b0b0b0] mb-8 text-center max-w-xl">
        Have a question, project idea, or just want to say hello? Fill out the
        form below and I'll get back to you soon!
      </p>
      <form
        className="w-full max-w-lg bg-[#1a2524] rounded-2xl shadow-lg p-8 flex flex-col gap-6"
        autoComplete="off"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-white font-semibold"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="rounded-lg px-4 py-2 bg-[#131b1a] border border-[#23312e] text-white focus:outline-none focus:border-blue-500 transition"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-white font-semibold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="rounded-lg px-4 py-2 bg-[#131b1a] border border-[#23312e] text-white focus:outline-none focus:border-blue-500 transition"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-white font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="rounded-lg px-4 py-2 bg-[#131b1a] border border-[#23312e] text-white focus:outline-none focus:border-blue-500 transition resize-none"
            placeholder="Type your message here..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-600 text-white cursor-pointer font-semibold py-3 rounded-xl mt-2 hover:brightness-125 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-10 text-[#b0b0b0] text-center text-sm">
        Or email me directly at{" "}
        <a
          href="mailto:perpetualuchechukwu808@gmail.com"
          className="text-blue-400 underline hover:text-gray-400 transition"
        >
          perpetualuchechukwu808@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
