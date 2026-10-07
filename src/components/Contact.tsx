"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.company) return;
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "", company: "" });
      } else {
        setStatus("error");
        setError(result.error ?? "Could not send the message.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Email me directly instead.");
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="If the work fits, write."
          description="Internships, freelance, and full-time systems work. I read every message."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-3xl border border-border bg-card/70 p-5 hover:border-primary/40"
            >
              <Mail className="text-primary" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{site.email}</p>
              </div>
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-3xl border border-border bg-card/70 p-5 hover:border-primary/40"
            >
              <Phone className="text-primary" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{site.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-3xl border border-border bg-card/70 p-5">
              <MapPin className="text-primary" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{site.location}</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-border bg-card/70 p-6 sm:p-8"
          >
            <div className="hidden" aria-hidden>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={formData.company}
                onChange={(event) =>
                  setFormData({ ...formData, company: event.target.value })
                }
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                Name
                <Input
                  name="name"
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                  }
                  className="mt-2 h-11 rounded-2xl bg-background"
                />
              </label>
              <label className="block text-sm">
                Email
                <Input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                  }
                  className="mt-2 h-11 rounded-2xl bg-background"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              Message
              <Textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
                className="mt-2 rounded-2xl bg-background"
                placeholder="What are you building, and how should I help?"
              />
            </label>
            <Button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 h-11 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>
            {status === "sent" ? (
              <p className="mt-3 text-sm text-primary">Sent. I’ll get back to you.</p>
            ) : null}
            {status === "error" ? (
              <p className="mt-3 text-sm text-destructive">{error}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
