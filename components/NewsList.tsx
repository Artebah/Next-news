import { New } from "@/app/types/New";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsList = ({ news }: { news: New[] }) => {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/${newsItem.image}`}
              alt={newsItem.title}
              width={100}
              height={100}
              sizes="100vw"
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
