import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function FeaturesSection() {
  const features = [
    {
      icon: <Icon name="Shield" className="h-10 w-10 text-red-500" />,
      title: "AES-256 шифрование",
      description: "Военный уровень защиты данных. Ваш трафик полностью зашифрован и недоступен третьим лицам.",
      progress: 100,
      borderClass: "border-glow-red",
    },
    {
      icon: <Icon name="EyeOff" className="h-10 w-10 text-blue-500" />,
      title: "Нет логов",
      description: "Строгая политика No-Log. Мы не храним историю ваших действий в сети.",
      progress: 100,
      borderClass: "border-glow-blue",
    },
    {
      icon: <Icon name="Zap" className="h-10 w-10 text-yellow-500" />,
      title: "Высокая скорость",
      description: "Серверы на 1 Гбит/с без ограничений трафика. Стриминг 4K и торренты без лагов.",
      progress: 95,
      borderClass: "border-glow-yellow",
    },
    {
      icon: <Icon name="Globe" className="h-10 w-10 text-green-500" />,
      title: "50+ стран",
      description: "Более 100 серверов в 50+ странах. Всегда найдётся быстрый сервер рядом с вами.",
      progress: 90,
      borderClass: "border-glow-green",
    },
    {
      icon: <Icon name="Smartphone" className="h-10 w-10 text-purple-500" />,
      title: "Все устройства",
      description: "Windows, macOS, iOS, Android, Linux. Одна подписка для 5 устройств одновременно.",
      progress: 100,
      borderClass: "border-glow-purple",
    },
    {
      icon: <Icon name="Lock" className="h-10 w-10 text-orange-500" />,
      title: "Kill Switch",
      description: "Аварийное отключение от сети при обрыве VPN. Ваш IP никогда не раскроется случайно.",
      progress: 100,
      borderClass: "border-glow-orange",
    },
  ]

  return (
    <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Всё для вашей безопасности в сети"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Наш VPN использует передовые технологии защиты, чтобы вы были в безопасности в любой точке мира."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingTiltCard>
                  <Card className={`h-full glassmorphic-card ${feature.borderClass}`}>
                    <CardHeader>
                      <div className="mb-2">{feature.icon}</div>
                      <CardTitle className="tracking-tight">{feature.title}</CardTitle>
                      <CardDescription className="opacity-70">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ProgressCard value={feature.progress} label="Надёжность" />
                    </CardContent>
                  </Card>
                </GlowingTiltCard>
              </ScrollReveal>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  )
}
