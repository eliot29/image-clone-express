import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ContactCTAProps {
  title?: string;
  intro?: string;
  subIntro?: string;
  buttonLabel?: string;
  idPrefix?: string;
}

const ContactCTA = ({
  title = "Demander un diagnostic gratuit",
  intro = "Un premier échange permet souvent d'identifier rapidement les premières automatisations utiles dans votre activité.",
  subIntro,
  buttonLabel = "Demander un diagnostic",
  idPrefix = "cta",
}: ContactCTAProps) => {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom.trim() || !email.trim()) {
      toast({ title: "Champs requis", description: "Merci de renseigner au moins votre nom et votre email.", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent("Demande de diagnostic gratuit — " + nom.trim());
    const body = encodeURIComponent(`Nom : ${nom.trim()}\nEmail : ${email.trim()}\nTéléphone : ${telephone.trim()}\n\nMessage :\n${message.trim()}`);
    window.location.href = `mailto:contact@semaine54.com?subject=${subject}&body=${body}`;
    toast({ title: "Redirection vers votre messagerie", description: "Votre client mail va s'ouvrir avec les informations pré-remplies." });
    setOpen(false);
    setNom(""); setEmail(""); setTelephone(""); setMessage("");
  };

  return (
    <section id="contact" className="bg-navy py-10" style={{ scrollMarginTop: '120px' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-dm font-extrabold text-2xl sm:text-3xl text-blanc-casse mb-5">
            {title}
          </h2>
          <p className="font-dm text-blanc-casse/85 text-lg leading-relaxed mb-5 max-w-xl mx-auto">
            {intro}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-or-mat/30 bg-or-mat/5 mb-8">
            <span className="font-dm text-xs sm:text-sm text-or-mat">
              Sans engagement • Aucun discours commercial forcé
            </span>
          </div>

          {subIntro && <p className="font-dm text-blanc-casse/70 italic mb-4 max-w-xl mx-auto">{subIntro}</p>}

          <div className="space-y-3 mb-8 max-w-xl mx-auto">
            <p className="font-dm text-blanc-casse/80 leading-relaxed">
              Vous laissez vos coordonnées. Je vous rappelle personnellement pour un premier échange simple et concret.
            </p>
            <p className="font-dm text-blanc-casse/70 leading-relaxed">
              Cet appel permet déjà de répondre à vos premières questions et de voir rapidement si une solution pertinente existe pour votre activité.
            </p>
            <p className="font-dm text-blanc-casse/70 leading-relaxed">
              Si le besoin est confirmé, le diagnostic est ensuite réalisé en appel ou en visio, selon votre préférence.
            </p>
          </div>

          <p className="font-dm text-blanc-casse/80 mb-6">
            Je m'adapte à vos disponibilités, y compris en soirée et le week-end.
          </p>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="cta" size="lg" className="text-lg px-10 py-6">
                {buttonLabel}
                <ArrowRight size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-navy border-blanc-casse/10 sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-dm font-extrabold text-xl text-blanc-casse text-center">
                  Demander un diagnostic
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div className="space-y-2">
                  <Label htmlFor={`${idPrefix}-nom`} className="text-blanc-casse/80 font-dm text-sm">Nom *</Label>
                  <Input id={`${idPrefix}-nom`} value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre nom" maxLength={100} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${idPrefix}-email`} className="text-blanc-casse/80 font-dm text-sm">Email *</Label>
                  <Input id={`${idPrefix}-email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" maxLength={255} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${idPrefix}-tel`} className="text-blanc-casse/80 font-dm text-sm">Téléphone</Label>
                  <Input id={`${idPrefix}-tel`} type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="06 00 00 00 00" maxLength={20} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${idPrefix}-msg`} className="text-blanc-casse/80 font-dm text-sm">Message</Label>
                  <Textarea id={`${idPrefix}-msg`} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Décrivez brièvement votre activité ou votre besoin..." maxLength={1000} rows={3} className="bg-blanc-casse/5 border-blanc-casse/20 text-blanc-casse placeholder:text-blanc-casse/30 font-dm resize-none" />
                </div>
                <Button variant="cta" size="lg" type="submit" className="w-full text-base">
                  Envoyer <ArrowRight size={18} />
                </Button>
                <p className="text-blanc-casse/40 text-xs text-center font-dm">Votre client mail s'ouvrira avec les informations pré-remplies.</p>
              </form>
            </DialogContent>
          </Dialog>

          <div className="mt-6 max-w-lg mx-auto">
            <p className="font-dm text-blanc-casse/60 text-sm leading-relaxed">
              Vous pouvez également me contacter directement par téléphone, SMS ou email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;