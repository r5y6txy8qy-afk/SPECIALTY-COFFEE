"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart()

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원'
  }

  if (state.items.length === 0) {
    return (
      <main className="min-h-screen">
        <Header />
        
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4">장바구니가 비어있습니다</h1>
              <p className="text-muted-foreground mb-8">
                맛있는 원두를 장바구니에 담아보세요
              </p>
              <Link href="/coffee-beans">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  원두 둘러보기
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* 헤더 */}
          <div className="mb-8">
            <Link href="/coffee-beans" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4">
              <ArrowLeft className="h-4 w-4" />
              쇼핑 계속하기
            </Link>
            <h1 className="text-3xl font-bold">장바구니</h1>
            <p className="text-muted-foreground">
              총 {state.totalItems}개의 상품이 담겨있습니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 장바구니 아이템 목록 */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <Card key={item.id} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* 상품 이미지 */}
                      <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* 상품 정보 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                              <span>{item.origin}</span>
                              <span>•</span>
                              <span>{item.process}</span>
                              {item.roastLevel && (
                                <>
                                  <span>•</span>
                                  <span>{item.roastLevel}</span>
                                </>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{item.notes}</p>
                          </div>
                          {item.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>

                        {/* 수량 조절 및 가격 */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">수량:</span>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold">
                              {formatPrice(parseInt(item.price.replace(/,/g, '')) * item.quantity)}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {item.price} × {item.quantity}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 삭제 버튼 */}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 주문 요약 */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-border">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">주문 요약</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span>상품 금액</span>
                      <span>{formatPrice(state.totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>배송비</span>
                      <span className="text-green-600">무료</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>총 결제금액</span>
                      <span>{formatPrice(state.totalPrice)}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      주문하기
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full"
                      onClick={clearCart}
                    >
                      장바구니 비우기
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2 text-sm">배송 정보</h3>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 로스팅 후 48시간 내 신선 배송</li>
                      <li>• 전국 무료 배송</li>
                      <li>• 평일 오후 2시 이전 주문 시 당일 발송</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
