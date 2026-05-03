import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Как VPN защищает вас в публичном Wi-Fi",
      description: "Почему подключение в кафе, аэропорту или отеле опасно — и как зашифровать трафик за 30 секунд.",
      date: "20 апреля 2026",
      readTime: "5 мин",
    },
    {
      title: "VPN и стриминг: смотрите Netflix из любой страны",
      description: "Пошаговая инструкция по разблокировке зарубежных библиотек Netflix, Hulu и Disney+.",
      date: "5 апреля 2026",
      readTime: "4 мин",
    },
    {
      title: "Что такое Kill Switch и почему он важен",
      description: "Разбираем, как аварийное отключение защищает ваш IP при нестабильном VPN-соединении.",
      date: "18 марта 2026",
      readTime: "6 мин",
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">Статьи о безопасности</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Советы по защите данных, инструкции и новости из мира кибербезопасности.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card">
                <CardHeader>
                  <CardTitle className="tracking-tight">{post.title}</CardTitle>
                  <CardDescription className="opacity-70">
                    {post.date} · {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground opacity-70">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-primary hover:underline transition-colors"
                  >
                    Читать далее
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
