import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppFloat() {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/qr/BMOQTOR2O2HTA1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#20ba5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <FaWhatsapp />
    </a>
  );
}
