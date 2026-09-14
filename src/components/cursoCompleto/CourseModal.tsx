import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useEffect } from "react";

export interface CourseInfo {
  title: string;
  description: string;
  topics: string[];
}

interface Props {
  open: boolean;
  onClose: () => void;
  course: CourseInfo | null;
}

export default function CourseModal({ open, onClose, course }: Props) {
  /* Fechar com a tecla ESC */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && course && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* MODAL */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
              className="pointer-events-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
            >
              {/* HEADER */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E10600]/10">
                    <Sparkles className="h-4 w-4 text-[#E10600]" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {course.title}
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  className="shrink-0 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* DESCRIÇÃO */}
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {course.description}
              </p>

              {/* TÓPICOS */}
              <div className="mt-5 rounded-2xl border border-[#E10600]/20 bg-[#E10600]/5 p-4">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#E10600]">
                  O que vais dominar
                </p>
                <ul className="space-y-2.5">
                  {course.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-sm text-gray-800"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E10600]" />
                      <span className="leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FECHAR */}
              <button
                onClick={onClose}
                className="mt-6 w-full rounded-xl bg-[#E10600] py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Fechar
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}