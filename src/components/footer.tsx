
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {year} SnappyPDF. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/privacy" className="text-sm text-muted-foreground hover:underline">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:underline">
            Terms
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
