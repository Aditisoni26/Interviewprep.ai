// 1️⃣ Import React
import React from "react";

// You might also use an icon library like 'react-icons' for a cleaner look.
// For simplicity, I'll keep the social links as text.

// 2️⃣ Create a footer function
function Footer() {
  // Define a cleaner list of links
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Features", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "Twitter", href: "#" },
  ];

  return (
    // Removed the outer 'div' and applied padding to the footer itself for cleaner structure.
    <footer className="footer bg-[#021526] text-gray-400 pt-8 px-4 mt-24 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-6  lg:px-8 ">
        
        {/* Main Content Grid: Increased columns and gap */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 ">
          
          {/* --- Section 1: Brand & Mission (Takes 2 columns on medium screens) --- */}
          <div className="col-span-2">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              InterviewPrep.AI
            </h2>
            <p className="mt-4 text-sm max-w-xs leading-relaxed">
              Elevate your career with your personal AI-powered interview coach and resume builder.
            </p>
          </div>

          {/* --- Section 2: Quick Links --- */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Section 3: Company --- */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Support</a></li>
            </ul>
          </div>
          
          {/* --- Section 4: Legal & Connect --- */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
            </ul>

            {/* Social Links below Legal */}
            <h3 className="text-lg font-bold text-white mt-8 mb-4">Connect</h3>
            <div className="flex space-x-5 text-lg">
                {/* Replaced text links with a space-separated icon-style look */}
                {socialLinks.map((link) => (
                    <a key={link.name} href={link.href} className="hover:text-blue-400 transition-colors duration-200" aria-label={link.name}>
                        {/* In a real project, you would use an icon here, e.g., <FaTwitter /> */}
                        {link.name.substring(0, 1)}
                    </a>
                ))}
            </div>
          </div>

        </div>
   
        <br />
<div className="my-20 h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent"></div>
<br />
                 
        {/* --- Bottom line (Copyright) --- */}
        
        <div className="text-center text-s text-gray-600 mt-16  border-gray-800 pt-8">
          © {new Date().getFullYear()} InterviewPrep.AI. All rights reserved. | Built with 💙 and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

export default Footer;