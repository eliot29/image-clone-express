import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CalendarCheck } "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } "@/components/ui/dialog";
import { useToast } "@/hooks/use-toast";

const ContactSection = () => {
  const [open;
  const [nom;
  const [email;
  const ;
  const ;
  const [message;
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <section id="audit" className="bg">
      ;
        <div className="max">;
          <Dialog open} >
            <DialogTrigger asChild>
              <Button variant="cta">OK</Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
