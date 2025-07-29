import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import FloatingWhatsApp from "./FloatingWhatsApp";
import AccessibilityControls from "./AccessibilityControls";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <AccessibilityControls />
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;