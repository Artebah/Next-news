import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Image src={`/images/${newsItem.image}`} alt={newsItem.title} width={120} height={120} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
