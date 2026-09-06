import { useEffect, useRef, useState } from 'react';

interface ImageSlotProps {
  id: string;
  placeholder: string;
  /** Optional preset image (e.g. a shipped screenshot in /public). */
  src?: string;
  alt?: string;
}

/**
 * A fillable image placeholder. Click or drag-drop a local image to preview it
 * in-session — mirrors the original design's <image-slot> intent without any
 * runtime dependency. To ship a permanent screenshot, pass `src`.
 */
export function ImageSlot({ id, placeholder, src, alt = '' }: ImageSlotProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [url, setUrl] = useState<string | null>(src ?? null);
  const [dragover, setDragover] = useState(false);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  const fill = (file: File | undefined) => {
    if (!file || !file.type.startsWith('image/')) return;
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const next = URL.createObjectURL(file);
    objectUrlRef.current = next;
    setUrl(next);
  };

  return (
    <button
      type="button"
      id={id}
      className={`img-slot${dragover ? ' is-dragover' : ''}`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragover(true);
      }}
      onDragLeave={() => setDragover(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragover(false);
        fill(e.dataTransfer.files?.[0]);
      }}
      aria-label={placeholder}
    >
      {url ? (
        <img src={url} alt={alt} />
      ) : (
        <div className="img-slot__ph">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span>{placeholder}</span>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => fill(e.target.files?.[0])}
      />
    </button>
  );
}
