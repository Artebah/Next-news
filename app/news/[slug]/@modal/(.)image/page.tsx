"use client";

import { notFound, useRouter } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

export default function InterceptedImagePage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image src={`/images/${newsItem.image}`} alt={newsItem.title} width={0} height={0} sizes="100vw" />
        </div>
      </dialog>
    </>
  );
}
