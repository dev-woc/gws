"use client";

import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface FormState {
	name: string;
	email: string;
	phone: string;
	service: string;
	message: string;
}

interface FormErrors {
	name?: string[];
	email?: string[];
	phone?: string[];
	service?: string[];
	message?: string[];
}

const initialState: FormState = {
	name: "",
	email: "",
	phone: "",
	service: "",
	message: "",
};

export function ContactForm() {
	const [form, setForm] = useState<FormState>(initialState);
	const [errors, setErrors] = useState<FormErrors>({});
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setErrors({});

		const formData = new FormData();
		formData.set("name", form.name);
		formData.set("email", form.email);
		if (form.phone) formData.set("phone", form.phone);
		formData.set("service", form.service);
		formData.set("message", form.message);

		const result = await submitContactForm(formData);

		if (result.success) {
			toast.success("Message sent! We'll be in touch within 24 hours.");
			setForm(initialState);
		} else if (result.message) {
			toast.error(result.message);
		} else if (result.errors) {
			setErrors(result.errors);
			toast.error("Please fix the errors below and try again.");
		}

		setLoading(false);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				<div className="space-y-2">
					<Label htmlFor="name">Full Name *</Label>
					<Input
						id="name"
						placeholder="John Smith"
						value={form.name}
						onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
						aria-invalid={!!errors.name}
					/>
					{errors.name && <p className="text-sm text-destructive">{errors.name[0]}</p>}
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email Address *</Label>
					<Input
						id="email"
						type="email"
						placeholder="you@example.com"
						value={form.email}
						onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
						aria-invalid={!!errors.email}
					/>
					{errors.email && <p className="text-sm text-destructive">{errors.email[0]}</p>}
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				<div className="space-y-2">
					<Label htmlFor="phone">Phone (optional)</Label>
					<Input
						id="phone"
						type="tel"
						placeholder="(555) 000-0000"
						value={form.phone}
						onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="service">Service Interest *</Label>
					<Select
						value={form.service}
						onValueChange={(value) => setForm((s) => ({ ...s, service: value }))}
					>
						<SelectTrigger id="service" aria-invalid={!!errors.service}>
							<SelectValue placeholder="Select a service" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="credit-repair">Credit Repair</SelectItem>
							<SelectItem value="financial-coaching">Financial Coaching</SelectItem>
							<SelectItem value="both">Both Services</SelectItem>
						</SelectContent>
					</Select>
					{errors.service && <p className="text-sm text-destructive">{errors.service[0]}</p>}
				</div>
			</div>

			<div className="space-y-2">
				<Label htmlFor="message">Message *</Label>
				<Textarea
					id="message"
					rows={5}
					placeholder="Tell us about your situation and what you'd like help with..."
					value={form.message}
					onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
					aria-invalid={!!errors.message}
				/>
				{errors.message && <p className="text-sm text-destructive">{errors.message[0]}</p>}
			</div>

			<Button
				type="submit"
				size="lg"
				className="w-full bg-navy hover:bg-navy/90 text-white"
				disabled={loading}
			>
				{loading ? "Sending..." : "Send Message"}
			</Button>
		</form>
	);
}
