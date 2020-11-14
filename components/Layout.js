
import Link from "next/link";

export default function Layout() {
  return (
    <div>
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkımda</a>
      </Link>
    </div>
  );
}
