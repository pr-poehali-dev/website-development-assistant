import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', eventType: '', message: '' });
  };

  const services = [
    {
      icon: "Sparkles",
      title: "Свадьбы",
      description: "Превращу ваш особенный день в незабываемое событие",
      price: "от 50 000 ₽"
    },
    {
      icon: "Briefcase",
      title: "Корпоративы",
      description: "Профессиональное ведение деловых мероприятий",
      price: "от 40 000 ₽"
    },
    {
      icon: "Users",
      title: "Юбилеи",
      description: "Душевная атмосфера для празднования важных дат",
      price: "от 35 000 ₽"
    },
    {
      icon: "Heart",
      title: "Дни рождения",
      description: "Яркое и веселое проведение праздников",
      price: "от 30 000 ₽"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/b7094a29-0d79-427e-b906-3d59170c9b4a/files/d24373e5-b78d-41f5-8f06-7cfa81571b9b.jpg",
      title: "Корпоративная конференция",
      description: "Бизнес-форум на 500 человек"
    },
    {
      image: "https://cdn.poehali.dev/projects/b7094a29-0d79-427e-b906-3d59170c9b4a/files/2bdef633-5d99-4278-bedc-289e1a70f426.jpg",
      title: "Свадебная церемония",
      description: "Выездная регистрация у моря"
    },
    {
      image: "https://cdn.poehali.dev/projects/b7094a29-0d79-427e-b906-3d59170c9b4a/files/8a85fb35-3399-412c-a411-639831c09656.jpg",
      title: "Юбилей компании",
      description: "Празднование 25-летия бренда"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      event: "Свадьба",
      text: "Спасибо за незабываемый праздник! Гости до сих пор вспоминают нашу свадьбу.",
      rating: 5
    },
    {
      name: "Игорь Смирнов",
      event: "Корпоратив",
      text: "Профессионально провели мероприятие. Все сотрудники остались довольны!",
      rating: 5
    },
    {
      name: "Мария Козлова",
      event: "Юбилей",
      text: "Прекрасная атмосфера, внимание к каждой детали. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Ведущий мероприятий</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-foreground hover:text-accent transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">Портфолио</a>
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
              <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <a href="#request">Оставить заявку</a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Создаю атмосферу вашего идеального праздника
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Более 10 лет опыта в проведении мероприятий любого формата. Превращаю события в воспоминания, которые остаются на всю жизнь.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <a href="#request">Заказать мероприятие</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#portfolio">Посмотреть работы</a>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/b7094a29-0d79-427e-b906-3d59170c9b4a/files/8a85fb35-3399-412c-a411-639831c09656.jpg" 
                alt="Ведущий мероприятий" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Обо мне</h2>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Я профессиональный ведущий с более чем 10-летним опытом работы. За это время провел более 500 мероприятий различного формата – от камерных семейных праздников до масштабных корпоративных событий.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Моя специализация – создание уникальной атмосферы, которая идеально подходит именно вашему празднику. Я не работаю по шаблонам – каждое мероприятие разрабатывается индивидуально с учетом ваших пожеланий и особенностей аудитории.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Мероприятий проведено</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Примеры моих работ</p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Профессиональное проведение мероприятий</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:border-accent">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят мои клиенты</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm">{testimonial.event}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Оставить заявку</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Заполните форму, и я свяжусь с вами в ближайшее время
          </p>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип мероприятия *</label>
                  <Input 
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    placeholder="Свадьба, корпоратив, юбилей..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о вашем мероприятии..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">host@example.com</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Instagram" className="text-accent" size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-muted-foreground">@event_host</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ведущий мероприятий</h3>
          <p className="text-primary-foreground/80 mb-6">
            Создаю незабываемые моменты вашей жизни
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
