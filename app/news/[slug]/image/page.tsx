import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function ImagePage({ params }: { params: { slug: string } }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/${newsItem.image}`} alt={newsItem.title} width={500} height={500} />
    </div>
  );
}
