
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ShieldCheck, RefreshCcw, Clock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const PreOrderSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Pre-order submitted!",
        description: "Thank you for your interest in Noizify. We'll contact you soon.",
      });
      
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="pre-order" className="py-20 px-4 bg-gradient-to-br from-noizify-blue to-noizify-blue/80 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Noise into Clean Energy?
          </h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Join our early adopters program and be among the first to experience the revolutionary power 
            of sound energy harvesting with Noizify.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">
            Pre-Order Now
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-white text-noizify-blue hover:bg-white/90 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Reserve Your Noizify Device"
              )}
            </Button>
          </form>
          
          <p className="text-center text-sm mt-4 opacity-80">
            Limited pre-order spots available. Expected shipping Q2 2025.
          </p>
          
          <div className="flex justify-center gap-6 mt-8 text-xs">
            <div className="flex items-center">
              <ShieldCheck size={16} className="mr-1" />
              Secure Checkout
            </div>
            <div className="flex items-center">
              <RefreshCcw size={16} className="mr-1" />
              30-Day Returns
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              1-Year Warranty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;
