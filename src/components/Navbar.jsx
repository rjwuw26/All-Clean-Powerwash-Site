import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-8 flex gap-6">
        <Link href="/" className="text-lg font-semibold">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </nav>
    );
}

