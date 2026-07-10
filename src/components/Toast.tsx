import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast debe usarse dentro de <ToastProvider>');
  return ctx;
}

const styles: Record<ToastType, { icon: ReactNode; bar: string }> = {
  success: { icon: <CheckCircle2 size={20} className="text-green-500" />, bar: 'bg-green-500' },
  error: { icon: <AlertCircle size={20} className="text-rose-500" />, bar: 'bg-rose-500' },
  info: { icon: <Info size={20} className="text-club-blue" />, bar: 'bg-club-blue' }
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => remove(id), 4500);
  }, [remove]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        className="fixed z-[100] flex flex-col gap-3 pointer-events-none inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:top-6 sm:bottom-auto sm:w-96"
      >
        <AnimatePresence initial={false}>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="pointer-events-auto relative flex items-start gap-3 bg-white rounded-2xl shadow-soft border border-slate-100 pl-4 pr-3 py-3.5 overflow-hidden"
            >
              <span className={`absolute left-0 top-0 bottom-0 w-1 ${styles[toast.type].bar}`} />
              <span className="shrink-0 mt-0.5">{styles[toast.type].icon}</span>
              <p className="flex-grow text-sm font-medium text-slate-700 leading-snug">
                {toast.message}
              </p>
              <button
                type="button"
                onClick={() => remove(toast.id)}
                aria-label="Cerrar notificación"
                className="shrink-0 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
