import NewsList from '@/components/NewsList';
import { getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';

async function FilteredNews({ year, month }: { year: string; month: string }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export { FilteredNews };
