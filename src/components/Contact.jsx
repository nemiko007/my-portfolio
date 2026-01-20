import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
          Contact Me! 💖
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          お仕事の依頼や質問、なんでも気軽に連絡してね！
        </p>

        <form
          method="POST"
          action="/api/contact"
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl shadow-pink-100 border-2 border-pink-200"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-lg font-bold mb-2">
              お名前 (Name)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className="w-full px-4 py-3 bg-pink-50 rounded-lg border-2 border-pink-200 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-400 transition-all"
              placeholder="ギャル子"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-lg font-bold mb-2">
              メールアドレス (Email)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="w-full px-4 py-3 bg-pink-50 rounded-lg border-2 border-pink-200 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-400 transition-all"
              placeholder="gyaruko@example.com"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 text-lg font-bold mb-2">
              メッセージ (Message)
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 bg-pink-50 rounded-lg border-2 border-pink-200 focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-400 transition-all"
              placeholder="アゲな感じでメッセージ書いてね！"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold py-4 px-12 rounded-full text-xl hover:scale-110 hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 transform"
            >
              Send! 🚀
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
