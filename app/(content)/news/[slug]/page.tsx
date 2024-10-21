import { notFound } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';
import { getNewsItem } from '@/lib/news';
import { New } from '@/app/types/New';

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const newsSlug = params.slug;
  const newsItem = (await getNewsItem(newsSlug)) as New;

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/${newsItem.image}`}
            alt={newsItem.title}
            width={120}
            height={120}
            sizes="100vw"
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
