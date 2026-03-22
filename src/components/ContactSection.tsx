import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [creneau, setCreneau] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

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

    const subject = encodeURIComponent("Demande de diagnostic gratuit — " + nom.trim());
    const body = encodeURIComponent(
      `Nom : ${nom.trim()}\nEmail : ${email.trim()}\nTéléphone : ${telephone.trim()}\nCréneau idéal : ${creneau.trim() || "Non précisé"}\n\nMessage :\n${message.trim()}`
    );

    window.location.href = `mailto:contact@semaine54.com?subject=${subject}&body=${body}`;

    toast({
      title: "Redirection vers votre messagerie",
      description: "Votre client mail va s'ouvrir avec les informations pré-remplies.",
    });

    setOpen(false);
    setNom("");
    setEmail("");
    setTelephone("");
    setMessage("");
  };

  return (
    <section id="audit" className="bg-navy py-6">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-8 text-center">
            Diagnostic gratuit — <span className="text-or-mat">20/30 min</span>
          </h2>

          <p className="font-dm text-blanc-casse/70 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            Un premier échange de 20 à 30 minutes pour comprendre votre activité, identifier vos tâches chronophages et voir si une solution pertinente existe. Sans engagement.
          </p>

          <div className="text-center mb-8">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="cta" size="lg" className="text-lg px-10 py-6">
                  Être rappelé
                  <ArrowRight size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-navy border-blanc-casse/10 sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-dm font-extrabold text-xl text-blanc-casse text-center">
                    Être rappelé
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-blanc-casse/80 font-dm text-sm">
                      Nom *
                    </Label>
                    <Input
                      id="nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder="Votre nom"
                      maxLength={100}
                      className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blanc-casse/80 font-dm text-sm">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      maxLength={255}
                      className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="text-blanc-casse/80 font-dm text-sm">
                      Téléphone
                    </Label>
                    <Input
                      id="telephone"
                      type="tel"
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      placeholder="06 00 00 00 00"
                      maxLength={20}
                      className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="creneau" className="text-blanc-casse/80 font-dm text-sm">
                      Créneau idéal pour l'appel
                    </Label>
                    <Input
                      id="creneau"
                      value={creneau}
                      onChange={(e) => setCreneau(e.target.value)}
                      placeholder="Ex : mardi matin, en soirée après 18h…"
                      maxLength={150}
                      className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-blanc-casse/80 font-dm text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Décrivez brièvement votre activité ou votre besoin..."
                      maxLength={1000}
                      rows={3}
                      className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm resize-none"
                    />
                  </div>
                  <Button variant="cta" size="lg" type="submit" className="w-full text-base">
                    Envoyer
                    <ArrowRight size={18} />
                  </Button>
                  <p className="text-blanc-casse/40 text-xs text-center font-dm">
                    Votre client mail s'ouvrira avec les informations pré-remplies.
                  </p>
                </form>
              </DialogContent>
            </Dialog>

            <div className="mt-6 max-w-lg mx-auto">
              <p className="font-dm text-blanc-casse/60 text-sm leading-relaxed">
                Je vous contacte en premier lieu pour répondre à vos éventuelles questions et planifier votre audit ensemble — l'audit se tient ensuite en appel ou en visio, selon votre préférence.
              </p>
              <p className="font-dm text-blanc-casse/60 text-sm mt-3 leading-relaxed">
                Vous pouvez aussi m'appeler, m'envoyer un SMS ou un email directement.
              </p>
              <p className="font-dm text-blanc-casse/50 text-xs mt-2 italic">
                Également disponible en soirée et le week-end.
              </p>
            </div>
          </div>

          <p className="font-dm text-blanc-casse/70 text-sm italic text-center">
            Un premier échange permet souvent d'identifier immédiatement plusieurs heures de tâches automatisables chaque semaine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
