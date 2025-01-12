import Link from "next/link";
import { SearchBar } from "../SearchBar";
import { ShoppingCart, User } from "lucide-react";
import { InfoTopBar } from "@/components/UI/InfoTopBar";

export function NavBar() {
  return (
    <header className="w-full bg-white flex flex-col items-center justify-center border-b fixed top-0 left-0 z-[1000]">
      <InfoTopBar />

      <nav className="w-full flex items-center justify-start gap-16 px-32 py-6">
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
