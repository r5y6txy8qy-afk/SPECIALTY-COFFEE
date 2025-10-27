"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

const products = [
  {
    id: 1,
    name: "에티오피아 예가체프",
    origin: "Ethiopia",
    process: "Washed",
    notes: "플로럴, 베리, 시트러스",
    price: "28,000원",
    image: "/ethiopian-coffee-beans-in-white-bowl.jpg",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "콜롬비아 수프리모",
    origin: "Colombia",
    process: "Washed",
    notes: "초콜릿, 캐러멜, 견과류",
    price: "25,000원",
    image: "/colombian-coffee-beans-on-wooden-surface.jpg",
    badge: "NEW",
  },
  {
    id: 3,
    name: "케냐 AA",
    origin: "Kenya",
    process: "Washed",
    notes: "블랙커런트, 와인, 시트러스",
    price: "32,000원",
    image: "/kenyan-coffee-beans-close-up.jpg",
    badge: "PREMIUM",
  },
]

export function FeaturedProducts() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: any) => {
    addToCart(product)
  }

  return (
    <section id="coffee" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Featured Beans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">매주 새롭게 로스팅되는 시그니처 원두 컬렉션</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">{product.badge}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{product.origin}</span>
                    <span>•</span>
                    <span>{product.process}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.notes}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => handleAddToCart(product)}
                  >
                    장바구니
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/coffee-beans">
            <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
              전체 원두 보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
