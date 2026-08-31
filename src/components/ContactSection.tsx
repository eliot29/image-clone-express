import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [creneau, setCreneau] = useState("");
  const [message, setMessage] = useState("");
  const { toast };

handleSubmit() {
  echo block2
}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nom.trim() || !email.trim()) {
      toast({
        title: "Champs requis",
        description: "Merci de renseigner au moins votre nom et votre email.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent("Demande de diagnostic gratuit");
    const body = encodeURIComponent(
      `Nom : ${nom.trim()}\nEmail : ${email.trim()}\nTéléphone : ${telephone.trim()}\nCréneau : ${creneau.trim()}\n\nMessage :\n${message.trim()}`
    );

    window.location.href = `mailto:contact@semaine54.com?subject=${subject}&body=${body}`;

    setOpen(false);
    setNom("");
    setEmail("");
    setMessage("");
  };
