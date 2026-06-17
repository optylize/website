import { type CSSProperties } from "react";

export function ImagePlaceholder({
  label,
  aspect = "16/9",
  className = "",
  rounded = "rounded-lg",
}: {
  label: string;
  aspect?: string;
  className?: string;
  rounded?: string;
}) {
  const style: CSSProperties = { aspectRatio: aspect };
  return (
    <div
      style={style}
      className={`flex w-full items-center justify-center border-2 border-dashed border-foreground/20 bg-foreground/5 ${rounded} ${className}`}
    >
      <span className="px-3 text-center text-[11px] uppercase tracking-widest text-foreground/50">
        {label}
      </span>
    </div>
  );
}
