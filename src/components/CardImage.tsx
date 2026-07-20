import { useState } from "react";
import { AnchorIcon } from "./Icons";

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export default function CardImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackSrc = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=500&fit=crop&auto=format",
  containerClassName = "",
  ...props
}: CardImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-navy-900 ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-navy-800 animate-pulse flex items-center justify-center text-steel-400">
          <AnchorIcon size={24} color="#E85C0D" />
        </div>
      )}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt || "3C Marine Engineering"}
        className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setIsLoaded(true);
          }
        }}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
}
