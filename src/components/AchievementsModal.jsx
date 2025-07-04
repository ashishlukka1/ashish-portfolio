import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AchievementsModal({ achievements, show, setShow }) {
  const triggerLabel = "Achievements";
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show]);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="modal fade show d-block"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              zIndex: 9999,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-dialog modal-dialog-centered"
              style={{ zIndex: 10000 }}
              initial={{ opacity: 0, scale: 0.8, rotateX: 40 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div
                className="modal-content"
                ref={modalRef}
                style={{
                  backgroundColor: "#000",
                  border: "1px solid #333",
                  color: "#fff",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    backgroundColor: "#000",
                    borderBottom: "1px solid #333",
                  }}
                >
                  <h5 className="modal-title text-white">Achievements</h5>
                </div>
                <div
                  className="modal-body"
                  style={{
                    backgroundColor: "#000",
                    padding: "20px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    scrollbarColor: "#888 #000",
                    scrollbarWidth: "thin",
                  }}
                >
                  <style>
                    {`
      .modal-body::-webkit-scrollbar {
        width: 8px;
      }

      .modal-body::-webkit-scrollbar-track {
        background: #000;
      }

      .modal-body::-webkit-scrollbar-thumb {
        background-color: #444;
        border-radius: 8px;
      }

      .modal-body::-webkit-scrollbar-thumb:hover {
        background-color: #666;
      }
    `}
                  </style>
                  {achievements.map((ach, idx) => (
                    <motion.div
                      key={idx}
                      className="mb-3 p-1 rounded"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <img
                        src={ach.image}
                        alt={ach.title}
                        className="rounded mb-3"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          border: "2px solid #444",
                        }}
                      />
                      <div className="pt-0 pb-2 text-start px-2">
                        <div
                          className="fw-bold text-white mb-2"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {ach.title}
                        </div>
                        <div className="small">{ach.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
