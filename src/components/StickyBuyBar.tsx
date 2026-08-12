import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  /** Element to watch — bar appears once it scrolls out of view. */
  watchRef: React.RefObject<HTMLElement | null>;
  title: string;
  price: string;
  compareAt?: string;
  action: ReactNode;
};

export function StickyBuyBar({ watchRef, title, price, compareAt, action }: Props) {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const target = watchRef.current;
      if (!target) return;
      setVisible(target.getBoundingClientRect().bottom < 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [watchRef]);

  return () => observer.disconnect();
  }, [watchRef]);

  return (
    <div
      ref={barRef}
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3">
        <div className="min-w-0">
          <p className="truncate text-[0.8rem] leading-tight">{title}</p>
          <p className="mt-0.5 text-sm">
            {price}
            {compareAt ? (
              <span className="ml-2 text-xs text-muted-foreground line-through">{compareAt}</span>
            ) : null}
          </p>
        </div>
        <div className="shrink-0">{action}</div>
      </div>
    </div>
  );
}
