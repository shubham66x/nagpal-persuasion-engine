import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Naam kam se kam 2 letters ka hona chahiye" })
    .max(80, { message: "Naam 80 letters se kam hona chahiye" }),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Sahi 10-digit Indian mobile number daalein" }),
  preferredTime: z.enum(["Morning", "Afternoon", "Evening"], {
    message: "Preferred time choose karein",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", preferredTime: undefined },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate submission. (Wire to backend once Supabase/Cloud is connected.)
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    toast({
      title: "Request mil gayi 👍",
      description: "Hum 24 ghante mein aapko call karenge.",
    });
    reset();
  };

  return (
    <section id="cta" className="section-padding bg-background scroll-mt-24">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Get Started</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5">
              Free Consultation Book Karein
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Form bharein, hum 24 ghante mein call karenge. Koi charge nahi, koi commitment nahi — bas honest expert advice.
            </p>

            <div className="space-y-4">
              {[
                { icon: ShieldCheck, title: "100% Confidential", desc: "Aapki info safe hai, kabhi share nahi hoti." },
                { icon: Clock, title: "24 Ghante Mein Callback", desc: "Sahi time par hum aapko call karenge." },
                { icon: MessageCircle, title: "Honest Advice", desc: "Bina pressure, bina sales pitch — sirf guidance." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-base">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Shukriya! 🙏</h3>
                <p className="text-base text-muted-foreground mb-6">
                  Hum 24 ghante mein aapko call karenge.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-secondary hover:underline font-medium"
                >
                  Ek aur request bhejein
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Free Consultation Lo</h3>
                <p className="text-sm text-muted-foreground mb-6">Sirf 3 fields. Hum 24 ghante mein call karenge.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Aapka Naam
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Eg. Rohan Sharma"
                      autoComplete="name"
                      maxLength={80}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1.5">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      placeholder="10-digit mobile number"
                      autoComplete="tel"
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1.5">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-1.5">
                      Call Karne Ka Best Time
                    </label>
                    <select
                      id="preferredTime"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-shadow"
                      {...register("preferredTime")}
                    >
                      <option value="" disabled>Time choose karein</option>
                      <option value="Morning">Morning (9 AM – 12 PM)</option>
                      <option value="Afternoon">Afternoon (12 PM – 4 PM)</option>
                      <option value="Evening">Evening (4 PM – 7 PM)</option>
                    </select>
                    {errors.preferredTime && (
                      <p className="text-sm text-destructive mt-1.5">{errors.preferredTime.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-cta w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Bhej rahe hain..." : "Free Consultation Lo"}
                  </button>

                  <p className="text-xs text-muted-foreground text-center pt-1">
                    🔒 Koi charge nahi. Koi commitment nahi. Aapka data 100% safe.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
