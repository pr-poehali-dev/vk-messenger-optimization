import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "Что такое VPN и зачем он нужен?",
      answer:
        "VPN (Virtual Private Network) — это зашифрованный туннель между вашим устройством и интернетом. Он скрывает ваш реальный IP-адрес, шифрует трафик и защищает данные от слежки провайдером, хакерами и рекламными трекерами.",
    },
    {
      question: "Замедлит ли VPN мой интернет?",
      answer:
        "Незначительно. Наши серверы работают на скорости до 1 Гбит/с. Большинство пользователей не замечают разницы при просмотре видео, играх и видеозвонках. Мы автоматически выбираем ближайший быстрый сервер.",
    },
    {
      question: "Какие устройства поддерживаются?",
      answer:
        "Windows, macOS, iOS, Android, Linux и расширения для браузеров Chrome и Firefox. Одна подписка позволяет подключить от 5 до 10 устройств одновременно в зависимости от тарифа.",
    },
    {
      question: "Вы сохраняете логи активности?",
      answer:
        "Нет. Наша политика No-Log означает, что мы не храним историю посещений, DNS-запросы, IP-адреса или любую другую информацию о вашей активности в сети.",
    },
    {
      question: "Есть ли гарантия возврата денег?",
      answer:
        "Да, мы предоставляем 30-дневную гарантию возврата средств без лишних вопросов. Если вас что-то не устроит — вернём деньги в полном объёме.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Частые вопросы
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Ответы на популярные вопросы о нашем VPN-сервисе.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
