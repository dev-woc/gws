import { desc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/lib/db";
import { contactSubmissions } from "@/lib/db/schema";
import { LeadRow } from "./lead-row";

export const metadata: Metadata = { title: "Leads — GWS Admin" };
export const dynamic = "force-dynamic";

const STATUS_COUNTS = [
	{ key: "all", label: "All" },
	{ key: "new", label: "New" },
	{ key: "contacted", label: "Contacted" },
	{ key: "client", label: "Client" },
	{ key: "closed", label: "Closed" },
] as const;

export default async function LeadsPage({
	searchParams,
}: {
	searchParams: Promise<{ status?: string }>;
}) {
	const { status } = await searchParams;

	const allLeads = await db
		.select()
		.from(contactSubmissions)
		.orderBy(desc(contactSubmissions.createdAt));

	const counts = {
		all: allLeads.length,
		new: allLeads.filter((l) => l.status === "new").length,
		contacted: allLeads.filter((l) => l.status === "contacted").length,
		client: allLeads.filter((l) => l.status === "client").length,
		closed: allLeads.filter((l) => l.status === "closed").length,
	};

	const filtered =
		status && status !== "all" ? allLeads.filter((l) => l.status === status) : allLeads;

	return (
		<div>
			<div className="mb-6 flex items-center justify-between">
				<h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
					Contact Leads
				</h1>
				<span className="text-sm text-charcoal/50">{allLeads.length} total</span>
			</div>

			{/* Status filter tabs */}
			<div className="flex gap-2 mb-6 flex-wrap">
				{STATUS_COUNTS.map(({ key, label }) => (
					<a
						key={key}
						href={key === "all" ? "/admin/leads" : `/admin/leads?status=${key}`}
						className={`text-sm px-3 py-1.5 rounded-full font-medium transition-colors ${
							(status ?? "all") === key
								? "bg-navy text-white"
								: "bg-white border border-border text-charcoal/70 hover:border-navy/40"
						}`}
					>
						{label}{" "}
						<span className="opacity-70">
							{counts[key as keyof typeof counts]}
						</span>
					</a>
				))}
			</div>

			{filtered.length === 0 ? (
				<div className="text-center py-20 text-charcoal/40">
					<p className="text-lg">No leads yet</p>
					<p className="text-sm mt-1">Contact form submissions will appear here.</p>
				</div>
			) : (
				<div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="border-b border-border bg-offwhite/60 text-xs font-semibold text-charcoal/50 uppercase tracking-wider">
									<th className="px-4 py-3 text-left">Date</th>
									<th className="px-4 py-3 text-left">Contact</th>
									<th className="px-4 py-3 text-left hidden sm:table-cell">Phone</th>
									<th className="px-4 py-3 text-left hidden md:table-cell">Service</th>
									<th className="px-4 py-3 text-left hidden lg:table-cell">Message</th>
									<th className="px-4 py-3 text-left">Status</th>
								</tr>
							</thead>
							<tbody>
								{filtered.map((lead) => (
									<LeadRow key={lead.id} lead={lead} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
}
