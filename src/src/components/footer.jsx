import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#560270] text-[#DFE3DB] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Clima<span className="text-[#FCC302]">Scout</span>
            </h2>

            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              AI-powered football predictions and match analysis enhanced by
              weather intelligence to provide deeper insights before every game.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-3">Platform</h3>

            <div className="flex flex-col gap-2 text-sm">
              <a href="/predictions" className="hover:text-[#FCC302] transition">
                Predictions
              </a>
              <a href="/matches" className="hover:text-[#FCC302] transition">
                Matches
              </a>
              <a href="/analytics" className="hover:text-[#FCC302] transition">
                Analytics
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>

            <div className="flex flex-col gap-2 text-sm">
              <a href="/privacy" className="hover:text-[#FCC302] transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#FCC302] transition">
                Terms of Service
              </a>
              <a href="/contact" className="hover:text-[#FCC302] transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Match Insight. All rights reserved.
          </p>

          <p className="text-sm">
            Built with{" "}
            <span className="text-[#FCC302] font-semibold">
              AI + Weather Data
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;