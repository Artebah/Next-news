import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getNewsItem } from '@/lib/news';
import { New } from '@/app/types/New';
import { ModalBackdrop } from '@/components/ModalBackdrop';

export default async function InterceptedImagePage({ params }: { params: { slug: string } }) {
  const newsItemSlug = params.slug;
  const newsItem: New = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image src={`/images/${newsItem.image}`} alt={newsItem.title} width={0} height={0} sizes="100vw" />
        </div>
      </dialog>
    </>
  );
}
