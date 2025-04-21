
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-brand-600 to-brand-800 text-transparent bg-clip-text">SnappyPDF</span>
        </Link>
        <nav className="ml-auto flex gap-4 items-center">
          <Link to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <Button variant="default" className="bg-gradient-to-r from-brand-600 to-brand-800 hover:from-brand-700 hover:to-brand-900">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
