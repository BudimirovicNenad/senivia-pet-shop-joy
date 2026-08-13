export function BoxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
}) {
  return (
    <div className={`relative aspect-square w-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt=""
        aria-hidden
        loading={loading}
        className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl"
      />
      <img
        src={src}
        alt={alt}
        width={1200}
        height={900}
        loading={loading}
        className={`absolute inset-0 h-full w-full object-contain ${imgClassName}`}
      />
    </div>
  );
}
