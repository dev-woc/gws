import { desc } from "drizzle-orm";
import type { Metadata } from "next";
import { db } from "@/lib/db";
import { contactSubmissions } from "@/lib/db/schema";
import { AddLeadDialog } from "./add-lead-dialog";
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

const SOURCE_FILTERS = [
	{ key: "all", label: "All" },
	{ key: "consultation", label: "Consultations" },
	{ key: "inquiry", label: "Inquiries" },
] as const;

export default async function LeadsPage({
	searchParams,
}: {
	searchParams: Promise<{ status?: string; source?: string }>;
}) {
	const { status, source } = await searchParams;

	const allLeads = await db
		.select()
		.from(contactSubmissions)
		.orderBy(desc(contactSubmissions.createdAt));

	const statusCounts = {
		all: allLeads.length,
		new: allLeads.filter((l) => l.status === "new").length,
		contacted: allLeads.filter((l) => l.status === "contacted").length,
		client: allLeads.filter((l) => l.status === "client").length,
		closed: allLeads.filter((l) => l.status === "closed").length,
	};

	const sourceCounts = {
		all: allLeads.length,
		consultation: allLeads.filter((l) => l.source === "consultation").length,
		inquiry: allLeads.filter((l) => l.source === "inquiry").length,
	};

	const filtered = allLeads.filter((l) => {
		const statusMatch = !status || status === "all" || l.status === status;
		const sourceMatch = !source || source === "all" || l.source === source;
		return statusMatch && sourceMatch;
	});

	function filterHref(params: { status?: string; source?: string }) {
		const p = new URLSearchParams();
		if (params.status && params.status !== "all") p.set("status", params.status);
		if (params.source && params.source !== "all") p.set("source", params.source);
		const qs = p.toString();
		return qs ? `/admin/leads?${qs}` : "/admin/leads";
	}

	return (
		<div>
			<div className="mb-6 flex items-center justify-between">
				<h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-navy">
					Leads
				</h1>
				<div className="flex items-center gap-3">
					<span className="text-sm text-charcoal/50">{allLeads.length} total</span>
					<AddLeadDialog />
				</div>
			</div>

			{/* Source filter */}
			<div className="flex gap-2 mb-3 flex-wrap">
				{SOURCE_FILTERS.map(({ key, label }) => (
					<a
						key={key}
						href={filterHref({ status, source: key })}
						className={`text-sm px-3 py-1.5 rounded-full font-medium transition-colors ${
							(source ?? "all") === key
								? "bg-gold text-dark"
								: "bg-white border border-border text-charcoal/70 hover:border-gold/40"
						}`}
					>
						{label}{" "}
						<span className="opacity-70">{sourceCounts[key as keyof typeof sourceCounts]}</span>
					</a>
				))}
			</div>

			{/* Status filter */}
			<div className="flex gap-2 mb-6 flex-wrap">
				{STATUS_COUNTS.map(({ key, label }) => (
					<a
						key={key}
						href={filterHref({ status: key, source })}
						className={`text-sm px-3 py-1.5 rounded-full font-medium transition-colors ${
							(status ?? "all") === key
								? "bg-navy text-white"
								: "bg-white border border-border text-charcoal/70 hover:border-navy/40"
						}`}
					>
						{label}{" "}
						<span className="opacity-70">{statusCounts[key as keyof typeof statusCounts]}</span>
					</a>
				))}
			</div>

			{filtered.length === 0 ? (
				<div className="text-center py-20 text-charcoal/40">
					<p className="text-lg">No leads found</p>
					<p className="text-sm mt-1">
						{status || source
							? "Try clearing the filters above."
							: "Inquiries and consultation bookings will appear here."}
					</p>
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
