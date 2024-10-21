import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { getNewsItem } from '@/lib/news';
import { New } from '@/app/types/New';

export default async function ImagePage({ params }: { params: { slug: string } }) {
  const newsItemSlug = params.slug;
  const newsItem = (await getNewsItem(newsItemSlug)) as New;

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <Image src={`/images/${newsItem.image}`} alt={newsItem.title} width={500} height={500} sizes="100vw" />
    </div>
  );
}
