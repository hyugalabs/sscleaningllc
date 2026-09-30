"use client";

import { Plus } from "lucide-react";
import { ADD_SERVICE_EVENT, type ServiceId } from "@/lib/business";

export function AddToOrder({ id, label }: { id: ServiceId; label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent(ADD_SERVICE_EVENT, { detail: id }))}
      className="semi-cond inline-flex min-h-11 items-center gap-2 border-2 border-ink px-4 text-[0.9rem] font-bold uppercase tracking-[0.06em] text-ink transition-colors duration-150 hover:bg-ink hover:text-paper active:bg-paper active:text-ink"
    >
      <Plus className="size-4" strokeWidth={2.5} aria-hidden="true" />
      Add to work order
      <span className="sr-only">: {label}</span>
    </button>
  );
}
