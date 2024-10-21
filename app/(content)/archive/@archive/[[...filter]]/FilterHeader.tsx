import { getAvailableNewsMonths, getAvailableNewsYears } from '@/lib/news';
import Link from 'next/link';

async function FilterHeader({ year, month }: { year: string; month: string }) {
  const availableYears = await getAvailableNewsYears();
  let links: string[] = availableYears;

  if ((year && !availableYears.includes(year)) || (month && !getAvailableNewsMonths(year).includes(month))) {
    throw new Error('Invalid filter.');
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export { FilterHeader };
