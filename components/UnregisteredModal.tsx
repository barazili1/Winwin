import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ShieldAlert } from 'lucide-react';
import { audioManager } from '../utils/audioManager';

interface UnregisteredModalProps {
  isOpen: boolean;
  onRegisterRedirect?: () => void;
  registerUrl?: string;
}

const UnregisteredModal: React.FC<UnregisteredModalProps> = ({
  isOpen,
  onRegisterRedirect,
  registerUrl = "https://refpa98980.com/L?tag=d_5876143m_68383c_&site=5876143&ad=68383"
}) => {
  if (!isOpen) return null;

  const handleRegisterClick = () => {
    audioManager.playClick();
    window.open(registerUrl, '_blank', 'noopener,noreferrer');
    if (onRegisterRedirect) {
      onRegisterRedirect();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-sm rounded-3xl bg-zinc-950 border border-amber-500/40 p-6 text-center shadow-[0_0_50px_rgba(245,158,11,0.25)] overflow-hidden"
        >
          {/* Platform Logo */}
          <div className="flex items-center justify-center mb-6 mt-2">
            <div className="p-3 rounded-2xl bg-black/60 border border-zinc-800 shadow-inner flex items-center justify-center">
              <img
                src="https://v3.traincdn.com/genfiles/cms/304-1745/desktop/media_asset/c7c7279951bf9b0b5c105f3f40654cda.svg"
                alt="WINWIN Logo"
                className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Warning Icon Badge */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>

          {/* Arabic Warning Message requested by user */}
          <h3 className="text-lg font-black text-white font-display mb-2 leading-snug">
            المعرف الخاص بك غير مسجل بالمنصه
          </h3>
          <p className="text-xs text-zinc-400 mb-6 font-sans leading-relaxed">
            يرجى تسجيل حساب جديد عبر المنصة الرسمية لتفعيل الخدمة واستخدام التوقعات غير المحدودة.
          </p>

          {/* White Action Button requested by user */}
          <button
            type="button"
            onClick={handleRegisterClick}
            className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-zinc-100 text-black font-black text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.25)] active:scale-[0.98] font-display cursor-pointer"
          >
            <span>التسجيل فى المنصة</span>
            <ExternalLink className="w-4 h-4 text-black" />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default UnregisteredModal;
