import React, { useState, useEffect } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [formStatus, setFormStatus] = useState("");
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        // --- Form Status (Success/Error) ---
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get("contact");
        if (status === "success") {
            setFormStatus("success");
        } else if (status === "error") {
            setFormStatus("error");
        }

        // --- Rate Limiting ---
        const lastSubmission = localStorage.getItem("lastSubmission");
        if (lastSubmission) {
            const timeSinceLastSubmission =
                Date.now() - parseInt(lastSubmission, 10);
            if (timeSinceLastSubmission < 30000) {
                // 30 seconds
                setIsRateLimited(true);
                let remaining = Math.ceil(
                    (30000 - timeSinceLastSubmission) / 1000,
                );
                setTimeRemaining(remaining);

                const interval = setInterval(() => {
                    setTimeRemaining((prev) => prev - 1);
                }, 1000);

                const timeout = setTimeout(() => {
                    setIsRateLimited(false);
                    clearInterval(interval);
                    setTimeRemaining(0);
                }, 30000 - timeSinceLastSubmission);

                return () => {
                    clearInterval(interval);
                    clearTimeout(timeout);
                };
            }
        }
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsEmailValid(validateEmail(newEmail));
    };

    const handleFormSubmit = () => {
        localStorage.setItem("lastSubmission", Date.now().toString());
        // The page will reload, and the useEffect will handle the rest
    };
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
                    Contact Me! 💖
                </h2>
                <p className="text-center text-gray-600 mb-12 text-lg">
                    お仕事の依頼や質問、なんでも気軽に連絡してね！
                </p>

                {formStatus === "success" && (
                    <div className="mb-4 text-center text-lg bg-green-100 text-green-700 p-4 rounded-lg">
                        メッセージありがと！💖 無事に届いたよ！
                    </div>
                )}
                {formStatus === "error" && !isRateLimited && (
                    <div className="mb-4 text-center text-lg bg-red-100 text-red-700 p-4 rounded-lg">
                        ごめんね💦 送信に失敗しちゃったみたい…
                    </div>
                )}
                {isRateLimited && formStatus !== "success" && (
                    <div className="mb-4 text-center text-lg bg-yellow-100 text-yellow-700 p-4 rounded-lg">
                        ちょっと待ってね！連続での送信は{timeRemaining}
                        秒待ってからお願い！🙏
                    </div>
                )}

                <form
                    method="POST"
                    action="/api/contact"
                    onSubmit={handleFormSubmit}
                    className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl shadow-pink-100 border-2 border-pink-200"
                >
                    <fieldset disabled={isRateLimited}>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 text-lg font-bold mb-2"
                            >
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
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-lg font-bold mb-2"
                            >
                                メールアドレス (Email)
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleEmailChange}
                                className={`w-full px-4 py-3 bg-pink-50 rounded-lg border-2 ${
                                    isEmailValid
                                        ? "border-pink-200"
                                        : "border-red-500"
                                } focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-400 transition-all`}
                                placeholder="gyaruko@example.com"
                                required
                            />
                            {!isEmailValid && (
                                <p className="text-red-500 text-sm mt-2">
                                    メアドの形が正しくないかも？💦
                                </p>
                            )}
                        </div>
                        <div className="mb-8">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 text-lg font-bold mb-2"
                            >
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
                                disabled={!isEmailValid || isRateLimited}
                                className={`bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold py-4 px-12 rounded-full text-xl hover:scale-110 hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 transform ${
                                    !isEmailValid || isRateLimited
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                            >
                                Send! 🚀
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default Contact;
