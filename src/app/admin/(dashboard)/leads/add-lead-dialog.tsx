"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createLeadManually } from "./actions";

export function AddLeadDialog() {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const result = await createLeadManually(new FormData(e.currentTarget));

		if (result.success) {
			setOpen(false);
		} else {
			setError(result.error ?? "Something went wrong.");
			setLoading(false);
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="bg-navy hover:bg-navy/90 text-white gap-2">
					<Plus className="size-4" />
					Add Lead
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="font-[family-name:var(--font-playfair)] text-navy">
						Add Lead Manually
					</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="space-y-4 mt-2">
					{error && (
						<p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
							{error}
						</p>
					)}

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-1.5">
							<Label htmlFor="ml-name">Full Name *</Label>
							<Input id="ml-name" name="name" placeholder="John Smith" required />
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="ml-email">Email *</Label>
							<Input
								id="ml-email"
								name="email"
								type="email"
								placeholder="john@example.com"
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-1.5">
							<Label htmlFor="ml-phone">Phone</Label>
							<Input id="ml-phone" name="phone" type="tel" placeholder="(813) 555-0000" />
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="ml-source">Source</Label>
							<select
								id="ml-source"
								name="source"
								className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-navy/30"
							>
								<option value="inquiry">Inquiry</option>
								<option value="consultation">Consultation</option>
								<option value="referral">Referral</option>
								<option value="phone-call">Phone Call</option>
							</select>
						</div>
					</div>

					<div className="space-y-1.5">
						<Label htmlFor="ml-service">Service Interest</Label>
						<select
							id="ml-service"
							name="service"
							className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-navy/30"
						>
							<option value="not-specified">Not specified</option>
							<option value="credit-repair">Credit Repair</option>
							<option value="financial-coaching">Financial Coaching</option>
							<option value="both">Both Services</option>
						</select>
					</div>

					<div className="space-y-1.5">
						<Label htmlFor="ml-notes">Notes</Label>
						<Textarea
							id="ml-notes"
							name="notes"
							rows={3}
							placeholder="How did you meet? What did they mention?"
							className="resize-none"
						/>
					</div>

					<div className="flex justify-end gap-3 pt-2">
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
							disabled={loading}
						>
							Cancel
						</Button>
						<Button
							type="submit"
							className="bg-navy hover:bg-navy/90 text-white"
							disabled={loading}
						>
							{loading ? "Saving..." : "Add Lead"}
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}
