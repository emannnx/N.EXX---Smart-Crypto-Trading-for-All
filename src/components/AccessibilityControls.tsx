import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Contrast, Type, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AccessibilityControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 bg-background/90 backdrop-blur-sm"
      >
        <Settings className="h-4 w-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="fixed top-4 right-4 z-50"
            >
              <Card className="p-6 w-80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Accessibility</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {/* Font Size Control */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Type className="h-4 w-4" />
                      <span className="text-sm font-medium">Text Size</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                        disabled={fontSize <= 12}
                      >
                        A-
                      </Button>
                      <span className="text-sm px-2">{fontSize}px</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                        disabled={fontSize >= 24}
                      >
                        A+
                      </Button>
                    </div>
                  </div>

                  {/* High Contrast Toggle */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Contrast className="h-4 w-4" />
                      <span className="text-sm font-medium">High Contrast</span>
                    </div>
                    <Button
                      variant={highContrast ? "default" : "outline"}
                      size="sm"
                      onClick={() => setHighContrast(!highContrast)}
                    >
                      {highContrast ? "Enabled" : "Disabled"}
                    </Button>
                  </div>

                  {/* Reset Button */}
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      setFontSize(16);
                      setHighContrast(false);
                    }}
                  >
                    Reset to Default
                  </Button>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityControls;