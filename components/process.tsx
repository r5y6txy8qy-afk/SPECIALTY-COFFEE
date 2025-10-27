import { Leaf, Flame, Package, Truck } from "lucide-react"

const steps = [
  {
    icon: Leaf,
    title: "원두 선별",
    description: "세계 최고 품질의 스페셜티 등급 생두만을 엄선합니다",
  },
  {
    icon: Flame,
    title: "정밀 로스팅",
    description: "각 원두의 특성에 맞춘 최적의 로스팅 프로파일을 적용합니다",
  },
  {
    icon: Package,
    title: "신선한 포장",
    description: "로스팅 직후 원두의 신선함을 지키는 특수 포장을 진행합니다",
  },
  {
    icon: Truck,
    title: "빠른 배송",
    description: "주문 후 24시간 내 신선한 원두를 고객님께 전달합니다",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">완벽한 한 잔을 위한 우리의 여정</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
