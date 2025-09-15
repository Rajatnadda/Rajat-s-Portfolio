import React from "react";
import { FaTimes } from "react-icons/fa";

const MobileSidebar = ({ isOpen, setIsOpen, links }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar sliding from bottom */}
      <div
        className={`fixed bottom-0 left-0 w-full sm:w-96 bg-gradient-to-t from-gray-800 to-blue-900 text-white rounded-t-2xl shadow-lg transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6 flex flex-col gap-6 text-lg font-semibold h-full relative">
          {/* Close button inside sidebar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl hover:text-yellow-300"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>

          {/* Menu Links */}
          <div className="flex flex-col gap-4 mt-10">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-300 hover:underline transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto text-sm text-gray-300 text-center">
            © {new Date().getFullYear()} MyPortfy
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
