"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { coffeeBeans, CoffeeBean } from "@/lib/coffee-data"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"

export default function CoffeeBeansPage() {
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all")
  const [selectedProcess, setSelectedProcess] = useState<string>("all")
  const [selectedRoastLevel, setSelectedRoastLevel] = useState<string>("all")
  const { addToCart } = useCart()

  const handleAddToCart = (bean: CoffeeBean) => {
    addToCart(bean)
  }

  const origins = Array.from(new Set(coffeeBeans.map(bean => bean.origin)))
  const processes = Array.from(new Set(coffeeBeans.map(bean => bean.process)))
  const roastLevels = Array.from(new Set(coffeeBeans.map(bean => bean.roastLevel).filter(Boolean)))

  const filteredBeans = coffeeBeans.filter(bean => {
    const originMatch = selectedOrigin === "all" || bean.origin === selectedOrigin
    const processMatch = selectedProcess === "all" || bean.process === selectedProcess
    const roastMatch = selectedRoastLevel === "all" || bean.roastLevel === selectedRoastLevel
    return originMatch && processMatch && roastMatch
  })

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* 헤더 섹션 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              전체 원두 컬렉션
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              세계 각지에서 엄선한 프리미엄 원두들을 만나보세요
            </p>
          </div>

          {/* 필터 섹션 */}
          <div className="mb-12">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">필터</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 원산지 필터 */}
                <div>
                  <label className="block text-sm font-medium mb-2">원산지</label>
                  <select 
                    value={selectedOrigin} 
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="all">전체</option>
                    {origins.map(origin => (
                      <option key={origin} value={origin}>{origin}</option>
                    ))}
                  </select>
                </div>

                {/* 가공방법 필터 */}
                <div>
                  <label className="block text-sm font-medium mb-2">가공방법</label>
                  <select 
                    value={selectedProcess} 
                    onChange={(e) => setSelectedProcess(e.target.value)}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="all">전체</option>
                    {processes.map(process => (
                      <option key={process} value={process}>{process}</option>
                    ))}
                  </select>
                </div>

                {/* 로스팅 레벨 필터 */}
                <div>
                  <label className="block text-sm font-medium mb-2">로스팅 레벨</label>
                  <select 
                    value={selectedRoastLevel} 
                    onChange={(e) => setSelectedRoastLevel(e.target.value)}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="all">전체</option>
                    {roastLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* 결과 개수 */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              총 <span className="font-semibold text-foreground">{filteredBeans.length}</span>개의 원두를 찾았습니다
            </p>
          </div>

          {/* 원두 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBeans.map((bean) => (
              <Card key={bean.id} className="group overflow-hidden border-border hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={bean.image || "/placeholder.svg"}
                    alt={bean.name}
                    fill
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {bean.badge && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      {bean.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">{bean.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{bean.origin}</span>
                      <span>•</span>
                      <span>{bean.process}</span>
                      {bean.roastLevel && (
                        <>
                          <span>•</span>
                          <span>{bean.roastLevel}</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{bean.notes}</p>
                    {bean.description && (
                      <p className="text-xs text-muted-foreground line-clamp-2">{bean.description}</p>
                    )}
                  </div>
                  
                  {/* 원두 특성 */}
                  <div className="mb-4">
                    <div className="flex gap-2 text-xs">
                      {bean.acidity && (
                        <Badge variant="outline" className="text-xs">
                          산미: {bean.acidity}
                        </Badge>
                      )}
                      {bean.body && (
                        <Badge variant="outline" className="text-xs">
                          바디: {bean.body}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{bean.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => handleAddToCart(bean)}
                    >
                      장바구니
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 빈 결과 메시지 */}
          {filteredBeans.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                선택한 조건에 맞는 원두가 없습니다.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedOrigin("all")
                  setSelectedProcess("all")
                  setSelectedRoastLevel("all")
                }}
                className="mt-4"
              >
                필터 초기화
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
