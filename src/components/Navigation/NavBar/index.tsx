import Link from "next/link";
import { SearchBar } from "../SearchBar";
import { ShoppingCart, User } from "lucide-react";

export function NavBar() {
  return (
    <header className="flex items-center justify-center px-32 py-6 border-b">
      <nav className="w-full flex items-center justify-start gap-16">
        <div className="flex items-center gap-6">
          {/* TODO: Add logo */}

          <h1 className="uppercase text-black text-4xl font-bold tracking-widest">
            <Link href={"/"}>WM Store</Link>
          </h1>
        </div>

        <SearchBar />

        <div className="flex items-center gap-6">
          {/* TODO: Buy cart AND Authenticated user avatar */}

          <ShoppingCart />
          <User />
        </div>
      </nav>
    </header>
  );
}
