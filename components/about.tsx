export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm">
            <img
              src="/coffee-roasting-professional-equipment-modern.jpg"
              alt="Coffee roasting process"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              우리의 철학
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                ROASTERY는 2018년부터 스페셜티 커피의 본질을 탐구해왔습니다. 우리는 단순히 커피를 판매하는 것이 아니라,
                농부들의 노고와 자연의 선물을 존중하며 최상의 맛을 전달합니다.
              </p>
              <p>
                세계 각지의 농장을 직접 방문하여 엄선한 생두를 소량씩 로스팅하고, 각 원두의 고유한 특성을 최대한
                살려냅니다. 신선함과 품질에 대한 우리의 약속은 타협하지 않습니다.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">협력 농장</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">원산지 국가</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">5K+</div>
                  <div className="text-sm text-muted-foreground">만족한 고객</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
