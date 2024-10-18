import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news.js";

export default function FilteredNewsPage({ params }: { params: { year: string } }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
