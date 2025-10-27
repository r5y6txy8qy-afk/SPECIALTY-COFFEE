"use client"

import { ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer">
                PINK BEAN ROASTERY
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#coffee" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              COFFEE
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              ABOUT
            </a>
            <a href="#process" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              PROCESS
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
              CONTACT
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground">
              <User className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="text-foreground relative">
                <ShoppingCart className="h-5 w-5" />
                {state.totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#coffee" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                COFFEE
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                ABOUT
              </a>
              <a href="#process" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                PROCESS
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                CONTACT
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
