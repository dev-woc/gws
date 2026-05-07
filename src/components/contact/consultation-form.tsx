"use client";

import { useState } from "react";
import { toast } from "sonner";
import { submitConsultationForm } from "@/app/contact/actions";
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

interface FormErrors {
	name?: string[];
	email?: string[];
	phone?: string[];
	service?: string[];
}

export function ConsultationForm({ calendlyUrl }: { calendlyUrl: string }) {
	const [form, setForm] = useState({ name: "", email: "", phone: "", service: "" });
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
		if (form.service) formData.set("service", form.service);

		const result = await submitConsultationForm(formData);

		if (result.success) {
			toast.success("You're all set! Taking you to the scheduler...");
			setTimeout(() => {
				window.open(calendlyUrl, "_blank", "noopener,noreferrer");
			}, 800);
		} else if (result.message) {
			toast.error(result.message);
			setLoading(false);
		} else if (result.errors) {
			setErrors(result.errors);
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="space-y-1.5">
					<Label htmlFor="consult-name" className="text-white/80 text-sm">
						Full Name *
					</Label>
					<Input
						id="consult-name"
						placeholder="John Smith"
						value={form.name}
						onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
						aria-invalid={!!errors.name}
						className="bg-white/10 border-white/20 text-white placeholder-white/30 focus:border-gold/60 focus:ring-gold/40"
					/>
					{errors.name && <p className="text-xs text-red-400">{errors.name[0]}</p>}
				</div>
				<div className="space-y-1.5">
					<Label htmlFor="consult-email" className="text-white/80 text-sm">
						Email Address *
					</Label>
					<Input
						id="consult-email"
						type="email"
						placeholder="you@example.com"
						value={form.email}
						onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
						aria-invalid={!!errors.email}
						className="bg-white/10 border-white/20 text-white placeholder-white/30 focus:border-gold/60 focus:ring-gold/40"
					/>
					{errors.email && <p className="text-xs text-red-400">{errors.email[0]}</p>}
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="space-y-1.5">
					<Label htmlFor="consult-phone" className="text-white/80 text-sm">
						Phone (optional)
					</Label>
					<Input
						id="consult-phone"
						type="tel"
						placeholder="(555) 000-0000"
						value={form.phone}
						onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
						className="bg-white/10 border-white/20 text-white placeholder-white/30 focus:border-gold/60 focus:ring-gold/40"
					/>
				</div>
				<div className="space-y-1.5">
					<Label htmlFor="consult-service" className="text-white/80 text-sm">
						Service Interest (optional)
					</Label>
					<Select
						value={form.service}
						onValueChange={(value) => setForm((s) => ({ ...s, service: value }))}
					>
						<SelectTrigger
							id="consult-service"
							className="bg-white/10 border-white/20 text-white focus:border-gold/60 focus:ring-gold/40"
						>
							<SelectValue placeholder="Select a service" className="text-white/30" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="credit-repair">Credit Repair</SelectItem>
							<SelectItem value="financial-coaching">Financial Coaching</SelectItem>
							<SelectItem value="both">Both Services</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<Button
				type="submit"
				size="lg"
				className="w-full bg-gold hover:bg-gold/90 text-dark font-semibold mt-2"
				disabled={loading}
			>
				{loading ? "Saving your info..." : "Book My Free Consultation →"}
			</Button>
		</form>
	);
}
