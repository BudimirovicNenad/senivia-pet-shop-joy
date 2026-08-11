import logoDark from "@/assets/senivia-logo-dark.png.asset.json";
import logoLight from "@/assets/senivia-logo-light.png.asset.json";

/** SENIVIA Wortmarke. tone="light" = helles Logo für dunkle Flächen. */
export function Logo({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <img
      src={tone === "light" ? logoLight.url : logoDark.url}
      alt="SENIVIA"
      width={1920}
      height={711}
      className={`h-8 w-auto sm:h-9 ${className}`}
    />
  );
}