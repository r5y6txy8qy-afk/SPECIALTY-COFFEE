import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/specialty-coffee-beans-being-roasted-in-modern-roa.jpg" 
          alt="Coffee roasting" 
          fill
          priority
          quality={95}
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance">
            최상급 스페셜티<br />커피 원두
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            세계 각지에서 엄선한 프리미엄 원두를 직접 로스팅하여 신선하게 전달합니다
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/coffee-beans">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                원두 둘러보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/subscription">
              <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
                구독 서비스
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
