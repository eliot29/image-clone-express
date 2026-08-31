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

  return (
    <section id="audit" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-or-mat/20 mb-4">
              <CalendarCheck size={24} className="text-or-mat" />
            </div>
          </div>
          <h2 className="font-dm font-extrabold;
            Diagnostic gratuit
          </h2>

          <p className="font-dm text-blanc-casse/70 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Un premier échange de 20 à 30 minutes pour comprendre votre activité, identifier vos tâches chronophages et voir si une solution pertinente existe. Sans engagement.
          </p>
