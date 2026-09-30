import Image from 'next/image';
import type { SitePhoto } from '@/data/site-images';

type SectionPhotoProps = {
  photo: SitePhoto;
  className?: string;
  sizes: string;
  loading?: 'lazy' | 'eager';
};

/** Renders a responsive editorial photo in a sized container with a blurred placeholder. */
export default function SectionPhoto({
  photo,
  className = '',
  sizes,
  loading = 'lazy',
}: SectionPhotoProps) {
  return (
    <div className={`section-photo ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        loading={loading}
        placeholder="blur"
        style={{ objectPosition: photo.position }}
      />
    </div>
  );
}
