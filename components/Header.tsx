import Link from "next/link";

export default function Header() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/archive">Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
