import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919815742277?text=Hi%2C%20I%20need%20insurance%20consultation"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring", stiffness: 200 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7" />
    <span className="absolute -top-1 -right-1 w-4 h-4 bg-warm rounded-full animate-ping" />
    <span className="absolute -top-1 -right-1 w-4 h-4 bg-warm rounded-full" />
  </motion.a>
);

export default WhatsAppButton;
