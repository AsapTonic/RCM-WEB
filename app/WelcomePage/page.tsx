"use client";

import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setEmail("");
    }, 1000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Reset submitted state if user starts typing again
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Coming Soon Header */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight">
              Coming Soon
            </h1>

            {/* Service Name */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-indigo-600">
                Simple Billboards Sites
              </h2>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
                Making outdoor advertising easy and accessible for everyone
              </p>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full"></div>
          </div>

          {/* Email Subscription Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mx-auto max-w-md border border-slate-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-6">
              Get Notified When We Launch!
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors text-slate-700 placeholder-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing Up...
                    </>
                  ) : (
                    "Notify Me"
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-slate-600">
                    We'll notify you as soon as we launch. Get ready to
                    revolutionize your outdoor advertising!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="text-center max-w-lg mx-auto">
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We're working hard to bring you the simplest way to manage your
              billboard advertising campaigns. Stay tuned for something amazing!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-slate-200 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Simple Billboards Sites. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
