"use client";

import { useState, useTransition } from "react";
import type { ContactSubmission } from "@/lib/db/schema";
import { updateLeadNotes, updateLeadStatus } from "./actions";

const STATUS_OPTIONS = [
	{ value: "new", label: "New", color: "bg-blue-100 text-blue-800" },
	{ value: "contacted", label: "Contacted", color: "bg-yellow-100 text-yellow-800" },
	{ value: "client", label: "Client", color: "bg-green-100 text-green-800" },
	{ value: "closed", label: "Closed", color: "bg-gray-100 text-gray-500" },
];

const SERVICE_LABELS: Record<string, string> = {
	"credit-repair": "Credit Repair",
	"financial-coaching": "Financial Coaching",
	both: "Both",
};

export function LeadRow({ lead }: { lead: ContactSubmission }) {
	const [expanded, setExpanded] = useState(false);
	const [notes, setNotes] = useState(lead.notes ?? "");
	const [isPending, startTransition] = useTransition();

	const statusConfig = STATUS_OPTIONS.find((s) => s.value === lead.status) ?? STATUS_OPTIONS[0];

	const handleStatusChange = (newStatus: string) => {
		startTransition(() => updateLeadStatus(lead.id, newStatus));
	};

	const handleSaveNotes = () => {
		startTransition(() => updateLeadNotes(lead.id, notes));
	};

	const date = new Date(lead.createdAt).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	return (
		<>
			<tr
				className="border-b border-border hover:bg-offwhite/60 cursor-pointer transition-colors"
				onClick={() => setExpanded(!expanded)}
			>
				<td className="px-4 py-3 text-sm text-charcoal/50 whitespace-nowrap">{date}</td>
				<td className="px-4 py-3">
					<div className="font-medium text-charcoal text-sm">{lead.name}</div>
					<div className="text-xs text-charcoal/50">{lead.email}</div>
				</td>
				<td className="px-4 py-3 text-sm text-charcoal/70 hidden sm:table-cell">
					{lead.phone ?? "—"}
				</td>
				<td className="px-4 py-3 text-sm text-charcoal/70 hidden md:table-cell">
					{SERVICE_LABELS[lead.service] ?? lead.service}
				</td>
				<td className="px-4 py-3 text-sm text-charcoal/60 hidden lg:table-cell max-w-xs">
					<span className="line-clamp-1">{lead.message}</span>
				</td>
				<td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
					<select
						value={lead.status}
						onChange={(e) => handleStatusChange(e.target.value)}
						disabled={isPending}
						className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${statusConfig.color}`}
					>
						{STATUS_OPTIONS.map((s) => (
							<option key={s.value} value={s.value}>
								{s.label}
							</option>
						))}
					</select>
				</td>
			</tr>

			{expanded && (
				<tr className="bg-offwhite/40 border-b border-border">
					<td colSpan={6} className="px-6 py-5">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h4 className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-2">
									Message
								</h4>
								<p className="text-sm text-charcoal leading-relaxed bg-white rounded-lg p-3 border border-border">
									{lead.message}
								</p>
								<div className="mt-3 flex flex-wrap gap-4 text-xs text-charcoal/50">
									<span>
										<span className="font-semibold">Email:</span>{" "}
										<a href={`mailto:${lead.email}`} className="text-navy hover:underline">
											{lead.email}
										</a>
									</span>
									{lead.phone && (
										<span>
											<span className="font-semibold">Phone:</span>{" "}
											<a href={`tel:${lead.phone}`} className="text-navy hover:underline">
												{lead.phone}
											</a>
										</span>
									)}
									<span>
										<span className="font-semibold">Service:</span>{" "}
										{SERVICE_LABELS[lead.service] ?? lead.service}
									</span>
								</div>
							</div>
							<div>
								<h4 className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-2">
									Notes
								</h4>
								<textarea
									value={notes}
									onChange={(e) => setNotes(e.target.value)}
									rows={4}
									className="w-full text-sm text-charcoal bg-white border border-border rounded-lg p-3 resize-none focus:outline-none focus:ring-1 focus:ring-navy/30"
									placeholder="Add internal notes..."
									onClick={(e) => e.stopPropagation()}
								/>
								<button
									onClick={(e) => {
										e.stopPropagation();
										handleSaveNotes();
									}}
									disabled={isPending}
									className="mt-2 text-xs font-semibold bg-navy text-white px-3 py-1.5 rounded-lg hover:bg-navy/90 disabled:opacity-50 transition-colors"
								>
									{isPending ? "Saving…" : "Save Notes"}
								</button>
							</div>
						</div>
					</td>
				</tr>
			)}
		</>
	);
}
