import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ad gereklidir";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Soyad gereklidir";
    }
    if (!formData.email.trim()) {
      newErrors.email = "E-posta gereklidir";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Mesaj gereklidir";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Hata",
        description: "Lütfen tüm alanları doğru şekilde doldurun.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const formEl = e.currentTarget as HTMLFormElement;
      const fd = new FormData(formEl);
      const payload: Record<string, string> = {};
      fd.forEach((value, key) => {
        payload[key] = value as string;
      });

      const webhookUrl = "https://murattokak.app.n8n.cloud/webhook/9974dec9-9b14-46e2-8580-4224001f726f";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Başarılı",
          description: "Mesajınız gönderildi.",
        });

        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        onOpenChange(false);
      } else {
        toast({
          title: "Hata",
          description: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Hata",
        description: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            İletişim Formu
          </DialogTitle>
          <DialogDescription>
            Benimle iletişime geçmek için formu doldurun. En kısa sürede sizinle iletişime geçeceğim.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Ad</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Adınız"
                value={formData.firstName}
                onChange={handleChange}
                disabled={loading}
                className={errors.firstName ? "border-destructive" : ""}
              />
              {errors.firstName && (
                <p className="text-xs text-destructive">{errors.firstName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Soyad</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Soyadınız"
                value={formData.lastName}
                onChange={handleChange}
                disabled={loading}
                className={errors.lastName ? "border-destructive" : ""}
              />
              {errors.lastName && (
                <p className="text-xs text-destructive">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ornek@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mesaj</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Mesajınızı buraya yazın..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              İptal
            </Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {loading ? "Gönderiliyor..." : "Gönder"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
