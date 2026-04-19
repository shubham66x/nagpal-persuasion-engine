import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, RotateCcw, Sparkles } from "lucide-react";

type Option = { label: string; next: string; emoji?: string };
type Step = {
  message: string;
  options?: Option[];
  input?: "email";
};

type State = Record<string, string>;

const buildSteps = (state: State): Record<string, Step> => ({
  hook: {
    message: "Namaste 👋 Main 60 seconds mein aapke liye best insurance plan dhundh dunga.",
    options: [
      { label: "Shuru Karein", next: "intent", emoji: "✨" },
      { label: "Sirf Dekh Raha Hoon", next: "browsing" },
    ],
  },
  browsing: {
    message: "Koi baat nahi! Aaram se dekho. Jab ready ho, batana 🙂",
    options: [{ label: "Theek hai, shuru karein", next: "intent" }],
  },
  intent: {
    message: "Aap kya dhundh rahe hain?",
    options: [
      { label: "Life Insurance", next: "life", emoji: "❤️" },
      { label: "Health Insurance", next: "health", emoji: "🏥" },
      { label: "Car Insurance", next: "car", emoji: "🚗" },
      { label: "Investment + Insurance", next: "age", emoji: "💰" },
      { label: "Pata Nahi", next: "notSure", emoji: "🤔" },
    ],
  },
  life: {
    message: "Yeh kiske liye chahiye?",
    options: [
      { label: "Mere Liye", next: "age" },
      { label: "Family Ke Liye", next: "age" },
    ],
  },
  health: {
    message: "Kitne logon ka cover chahiye?",
    options: [
      { label: "1 Person", next: "age" },
      { label: "2-3 Log", next: "age" },
      { label: "4+ Family", next: "age" },
    ],
  },
  car: {
    message: "Aapki car ka status?",
    options: [
      { label: "Nayi Car", next: "budget" },
      { label: "Renewal", next: "budget" },
    ],
  },
  notSure: {
    message: "Koi tension nahi 👍 Main step-by-step guide karunga.",
    options: [{ label: "Aage Badhein", next: "age" }],
  },
  age: {
    message: "Aapka age group?",
    options: [
      { label: "18–25", next: "budget" },
      { label: "26–35", next: "budget" },
      { label: "36–50", next: "budget" },
      { label: "50+", next: "budget" },
    ],
  },
  budget: {
    message: "Aapka monthly budget?",
    options: [
      { label: "₹500–₹1000", next: "trust" },
      { label: "₹1000–₹3000", next: "trust" },
      { label: "₹3000+", next: "trust" },
    ],
  },
  trust: {
    message: "Samajh gaya 👍 Aapki needs ke hisaab se plans suggest karunga:\n\n✔ High coverage\n✔ Low premium\n✔ Fast claim support",
    options: [{ label: "Mere Plans Dekhein", next: "recommend", emoji: "🎯" }],
  },
  recommend: {
    message:
      "Aapke liye recommended:\n\n✔ ₹10–25 lakh coverage\n✔ Affordable premium\n✔ Extra health/critical benefits\n\nYeh strong protection deta hai bina kisi tension ke.",
    options: [
      { label: "Prices Dikhao", next: "lead" },
      { label: "Advisor Se Baat", next: "advisor" },
      { label: "Chhota Start Karein", next: "objStart" },
      { label: "Compare Karein", next: "objCompare" },
    ],
  },
  objStart: {
    message: "Chhote plan se shuru karein, kabhi bhi upgrade kar sakte hain 👍",
    options: [{ label: "Aage Badhein", next: "lead" }],
  },
  objCompare: {
    message: "Main aapko best options side-by-side dikhata hoon.",
    options: [{ label: "Aage Badhein", next: "lead" }],
  },
  advisor: {
    message: "Bahut badhiya! Hamare advisor personally guide karenge.",
    options: [{ label: "WhatsApp Par Continue", next: "whatsapp" }],
  },
  lead: {
    message: "Main aapko best plans exact pricing ke saath bhej dunga.",
    options: [
      { label: "WhatsApp Par Bhejo", next: "whatsapp", emoji: "💬" },
      { label: "Email Par Bhejo", next: "email", emoji: "📧" },
    ],
  },
  whatsapp: {
    message: "Neeche tap karein WhatsApp par continue karne ke liye 👇",
    options: [{ label: "WhatsApp Par Continue", next: "__whatsapp__", emoji: "💬" }],
  },
  email: {
    message: "Apna email enter karein, plans bhejte hain:",
    input: "email",
  },
  done: {
    message: "Ho gaya 👍 Aapke personalized plans bheje ja rahe hain.",
    options: [
      { label: "Restart", next: "__restart__", emoji: "🔄" },
      { label: "Expert Se Baat", next: "__call__", emoji: "📞" },
    ],
  },
});

const AIAdvisorChat = () => {
  const [open, setOpen] = useState(false);
  const [stepKey, setStepKey] = useState("hook");
  const [history, setHistory] = useState<{ from: "bot" | "user"; text: string }[]>([]);
  const [state, setState] = useState<State>({});
  const [emailInput, setEmailInput] = useState("");
  const [reminderShown, setReminderShown] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inactivityRef = useRef<NodeJS.Timeout>();

  const steps = buildSteps(state);
  const currentStep = steps[stepKey];

  useEffect(() => {
    if (open && history.length === 0) {
      setHistory([{ from: "bot", text: steps.hook.message }]);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  // Inactivity reminder
  useEffect(() => {
    if (!open || reminderShown) return;
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    inactivityRef.current = setTimeout(() => {
      if (stepKey !== "done" && stepKey !== "whatsapp") {
        setHistory((h) => [...h, { from: "bot", text: "Aap wahaan ho? Main 30 second mein finish kar dunga 🙂" }]);
        setReminderShown(true);
      }
    }, 25000);
    return () => {
      if (inactivityRef.current) clearTimeout(inactivityRef.current);
    };
  }, [stepKey, open, reminderShown]);

  const handleOption = (opt: Option) => {
    setHistory((h) => [...h, { from: "user", text: opt.label }]);
    setState((s) => ({ ...s, [stepKey]: opt.label }));

    if (opt.next === "__whatsapp__") {
      const summary = encodeURIComponent(
        `Namaste, mujhe ${state.intent || opt.label} insurance chahiye. Please plans share karein.`
      );
      window.open(`https://wa.me/919815742277?text=${summary}`, "_blank");
      setTimeout(() => {
        setHistory((h) => [...h, { from: "bot", text: steps.done.message }]);
        setStepKey("done");
      }, 400);
      return;
    }
    if (opt.next === "__restart__") {
      setHistory([{ from: "bot", text: steps.hook.message }]);
      setStepKey("hook");
      setState({});
      setReminderShown(false);
      return;
    }
    if (opt.next === "__call__") {
      window.location.href = "tel:+919815742277";
      return;
    }

    const nextStep = steps[opt.next];
    if (nextStep) {
      setTimeout(() => {
        setHistory((h) => [...h, { from: "bot", text: nextStep.message }]);
        setStepKey(opt.next);
      }, 350);
    }
  };

  const handleEmailSubmit = () => {
    if (!emailInput.includes("@")) return;
    setHistory((h) => [...h, { from: "user", text: emailInput }]);
    setEmailInput("");
    setTimeout(() => {
      setHistory((h) => [...h, { from: "bot", text: steps.done.message }]);
      setStepKey("done");
    }, 400);
  };

  const handleRestart = () => {
    setHistory([{ from: "bot", text: steps.hook.message }]);
    setStepKey("hook");
    setState({});
    setReminderShown(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-warm text-secondary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Open AI Insurance Advisor"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-trust rounded-full border-2 border-background" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[560px] max-h-[80vh] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-4 flex items-center gap-3 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ background: "var(--gradient-gold-shine)", backgroundSize: "200% auto" }} />
              <div className="relative w-10 h-10 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center border border-secondary/30">
                <Sparkles className="h-5 w-5 text-secondary" />
              </div>
              <div className="relative flex-1">
                <div className="font-heading text-primary-foreground font-bold text-lg leading-tight">WeSure AI Advisor</div>
                <div className="flex items-center gap-1.5 text-[11px] text-primary-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-trust animate-pulse" />
                  Online · Turant reply
                </div>
              </div>
              <button
                onClick={handleRestart}
                className="relative text-primary-foreground/70 hover:text-primary-foreground transition"
                aria-label="Restart"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
              {history.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-secondary text-secondary-foreground rounded-br-sm"
                        : "bg-card text-foreground rounded-bl-sm border border-border shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Options / Input */}
            <div className="p-3 border-t border-border bg-card">
              {currentStep?.input === "email" ? (
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
                    placeholder="your@email.com"
                    className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                    autoFocus
                  />
                  <button
                    onClick={handleEmailSubmit}
                    className="px-3 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition"
                    aria-label="Send email"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {currentStep?.options?.map((opt, i) => (
                    <motion.button
                      key={`${stepKey}-${i}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleOption(opt)}
                      className="px-3.5 py-2 rounded-full bg-background hover:bg-secondary hover:text-secondary-foreground border border-secondary/40 text-sm font-medium text-foreground transition-all hover:scale-105 hover:shadow-md"
                    >
                      {opt.emoji && <span className="mr-1">{opt.emoji}</span>}
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
              )}
              <div className="text-[10px] text-muted-foreground text-center mt-2">
                🔒 Secure · Powered by WeSure
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAdvisorChat;
