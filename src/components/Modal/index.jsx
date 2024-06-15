import React, { useState, useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isEntering, setIsEntering] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsModalOpen(true);
      setTimeout(() => {
        setIsEntering(true);
      }, 50);
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      setIsEntering(false);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 300);
      document.body.style.overflow = ""; // Enable scrolling
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen, onClose]);

  const closeModal = () => {
    setIsEntering(false);
    setTimeout(() => {
      setIsModalOpen(false);
      onClose();
    }, 300);
    document.body.style.overflow = ""; // Enable scrolling
  };

  return (
    <>
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none transition-opacity duration-300 ${
            isEntering ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="fixed inset-0 bg-black opacity-25"></div>
          <div
            ref={modalRef}
            className="relative w-auto max-w-3xl mx-auto my-6"
          >
            <div className="relative flex flex-col w-full bg-transparent border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/* <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="text-3xl font-semibold">Modal Title</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-stone-700 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="fa fa-x"></span>
                </button>
              </div> */}
              <div className="relative flex-auto">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
