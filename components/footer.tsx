import { Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">ROASTERY</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              최상급 스페셜티 커피로 당신의 하루를 특별하게 만듭니다
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  전체 원두
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  구독 서비스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  기프트 세트
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  추출 도구
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  브랜드 스토리
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  로스팅 과정
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  매장 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  고객 후기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>서울시 강남구 테헤란로 123</li>
              <li>02-1234-5678</li>
              <li>hello@roastery.com</li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 ROASTERY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
