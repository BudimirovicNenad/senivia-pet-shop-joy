import { CreditCard } from "lucide-react";

export function PaymentCard({
  number,
  name,
  expiry,
}: {
  number: string;
  name: string;
  expiry: string;
}) {
  const digits = number.replace(/\D/g, "").padEnd(16, "•").slice(0, 16);
  const groups = [0, 4, 8, 12].map((i) => digits.slice(i, i + 4));

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.25rem] bg-forest text-primary-foreground shadow-lift sm:rounded-2xl">
      <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-primary-foreground/8" />
      <div className="absolute -bottom-20 -left-8 h-52 w-52 rounded-full bg-bronze/20" />
      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <span className="text-[0.68rem] tracking-[0.24em] uppercase">SENIVIA</span>
          <CreditCard className="h-5 w-5 text-primary-foreground/80" strokeWidth={1.5} />
        </div>
        <div className="mt-4 h-8 w-12 rounded-md bg-bronze/70" />
        <p className="font-mono text-[1.05rem] tracking-[0.18em] sm:text-xl">{groups.join(" ")}</p>
        <div className="flex items-end justify-between gap-4 text-[0.7rem] tracking-[0.14em] uppercase">
          <span className="min-w-0 truncate text-primary-foreground/85">
            {name || "Karteninhaber"}
          </span>
          <span className="text-primary-foreground/85">{expiry || "MM/JJ"}</span>
        </div>
      </div>
    </div>
  );
}