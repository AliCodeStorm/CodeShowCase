"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { NoSSR } from "@/components/NoSSR";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name) {
      toast({ title: "Validation Error", description: "Please enter your name.", variant: "destructive" });
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({ title: "Validation Error", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    if (!message) {
      toast({ title: "Validation Error", description: "Please enter your message.", variant: "destructive" });
      return;
    }

    emailjs
      .sendForm("service_i6nb13t", "template_pl64xsa", form, "_zhERR0YCgl3pZUuE")
      .then(() => {
        toast({ title: "Success", description: "Message sent successfully! ✅" });
        form.reset();
      })
      .catch((error) => {
        toast({ title: "Error", description: "Failed to send message. ❌", variant: "destructive" });
        console.error(error.text);
      });
  };

  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions, feedback, or just want to say hello? We're here to listen. Reach out to us through any of the channels below.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <NoSSR>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" type="text" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" type="text" placeholder="Regarding..." required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message here..." className="min-h-[120px]" required />
                </div>
                <Button type="submit" className="w-full" size="lg">Send Message</Button>
              </form>
            </NoSSR>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-xl">Email Us</CardTitle>
                <CardDescription>For direct inquiries.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <a href="mailto:support@codeshowcase.example.com" className="text-primary hover:underline break-all">
                support@codeshowcase.example.com
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-xl">Community Forum</CardTitle>
                <CardDescription>Join the discussion.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Link href="#" className="text-primary hover:underline">
                Visit our Community Forum (Coming Soon)
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-xl">FAQ & Support</CardTitle>
                <CardDescription>Find answers to common questions.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Link href="#" className="text-primary hover:underline">
                Check our FAQ Page (Coming Soon)
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
