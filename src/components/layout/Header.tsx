import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Student Life", href: "/student-life" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/98 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">LL</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground">
              Little Legends School
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="relative text-muted-foreground font-medium transition-all duration-300 hover:text-primary after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                activeClassName="text-primary after:scale-x-100 after:origin-bottom-left"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="sm"
                className="transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/admissions">
              <Button 
                size="sm"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium py-2 pl-2 border-l-2 border-transparent"
                  activeClassName="text-primary border-l-primary bg-primary/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full transition-all duration-300 active:scale-95"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full transition-all duration-300 active:scale-95">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
