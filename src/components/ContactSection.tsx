import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } "@/components/ui/label";
import { ArrowRight, CalendarCheck } "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } "@/components/dialog";
import { useToast } "@/hooks/use-toast";

const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, ;
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    setOpen(false);
  };

  return (
    <section id="diagnostic" className="py-20 bg-navy/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diagnostic gratuit
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Échangeons sur vos besoins
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg">
                Demander un diagnostic gratuit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Diagnostic gratuit</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input placeholder="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button type="submit" className="w-full">Envoyer</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
