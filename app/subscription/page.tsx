"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Coffee, Truck, Heart } from "lucide-react"
import { useState } from "react"

const subscriptionPlans = [
  {
    id: "basic",
    name: "베이직",
    price: "15,000원",
    period: "월",
    description: "매월 새로운 원두를 경험해보세요",
    features: [
      "월 1회 원두 배송",
      "200g 원두 2종",
      "로스팅 노트 포함",
      "무료 배송"
    ],
    popular: false,
    icon: Coffee
  },
  {
    id: "premium",
    name: "프리미엄",
    price: "25,000원",
    period: "월",
    description: "더 다양한 프리미엄 원두를 만나보세요",
    features: [
      "월 1회 원두 배송",
      "300g 원두 3종",
      "로스팅 노트 포함",
      "무료 배송",
      "전용 원두 선별",
      "브루잉 가이드 제공"
    ],
    popular: true,
    icon: Star
  },
  {
    id: "deluxe",
    name: "델럭스",
    price: "35,000원",
    period: "월",
    description: "최고급 원두와 특별한 혜택을 누리세요",
    features: [
      "월 1회 원두 배송",
      "400g 원두 4종",
      "로스팅 노트 포함",
      "무료 배송",
      "전용 원두 선별",
      "브루잉 가이드 제공",
      "1:1 커피 상담",
      "특별 이벤트 초대"
    ],
    popular: false,
    icon: Heart
  }
]

const benefits = [
  {
    icon: Truck,
    title: "신선한 배송",
    description: "로스팅 후 48시간 내 신선하게 배송"
  },
  {
    icon: Coffee,
    title: "전문가 선별",
    description: "Q-Grader가 직접 선별한 최고급 원두"
  },
  {
    icon: Star,
    title: "맞춤형 서비스",
    description: "개인 취향에 맞는 원두 추천"
  }
]

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("premium")

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* 헤더 섹션 */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              커피 구독 서비스
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              매월 새로운 원두를 집에서 편리하게 만나보세요
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <benefit.icon className="h-4 w-4" />
                  <span>{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 혜택 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 구독 플랜 섹션 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">구독 플랜 선택</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subscriptionPlans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative cursor-pointer transition-all duration-200 ${
                    selectedPlan === plan.id 
                      ? 'ring-2 ring-primary shadow-lg' 
                      : 'hover:shadow-md'
                  } ${plan.popular ? 'border-primary' : 'border-border'}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                      인기
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">
                      {plan.price}
                      <span className="text-sm font-normal text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        selectedPlan === plan.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-transparent'
                      }`}
                      variant={selectedPlan === plan.id ? "default" : "outline"}
                    >
                      {selectedPlan === plan.id ? '선택됨' : '선택하기'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 구독 신청 섹션 */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">구독 신청하기</h3>
                <p className="text-muted-foreground mb-6">
                  선택하신 플랜으로 구독을 시작하시겠습니까?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    구독 시작하기
                  </Button>
                  <Button size="lg" variant="outline">
                    문의하기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ 섹션 */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">언제 배송되나요?</h3>
                  <p className="text-sm text-muted-foreground">
                    매월 첫째 주에 배송됩니다. 로스팅 후 48시간 내 신선하게 배송해드립니다.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">구독을 언제든 중단할 수 있나요?</h3>
                  <p className="text-sm text-muted-foreground">
                    네, 언제든지 구독을 중단하실 수 있습니다. 다음 배송 전까지 알려주시면 됩니다.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">원두를 변경할 수 있나요?</h3>
                  <p className="text-sm text-muted-foreground">
                    구독 관리 페이지에서 원두 선호도를 설정하실 수 있습니다.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">배송비가 별도인가요?</h3>
                  <p className="text-sm text-muted-foreground">
                    모든 구독 플랜에 무료 배송이 포함되어 있습니다.
                  </p>
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
