import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} onRemove={() => removeToast(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ToastItem = ({ message, type, onRemove }) => {
  const icons = {
    success: <CheckCircle className="text-brand-success" size={18} />,
    error: <AlertCircle className="text-brand-error" size={18} />,
    info: <Info className="text-brand-accent" size={18} />,
  };

  const colors = {
    success: 'border-brand-success/20 bg-brand-success/5 shadow-brand-success/10',
    error: 'border-brand-error/20 bg-brand-error/5 shadow-brand-error/10',
    info: 'border-brand-accent/20 bg-brand-accent/5 shadow-brand-accent/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-2xl min-w-[280px] max-w-[400px] ${colors[type]}`}
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <p className="text-sm font-medium text-white flex-grow leading-relaxed">
        {message}
      </p>
      <button 
        onClick={onRemove}
        className="flex-shrink-0 p-1 hover:bg-white/10 rounded-lg transition-colors text-neutral-400 hover:text-white"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
};
