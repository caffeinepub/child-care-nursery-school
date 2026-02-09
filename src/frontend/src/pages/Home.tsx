import { Link } from '@tanstack/react-router';
import { BookOpen, Users, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { assetUrl } from '@/lib/assetUrl';

const highlights = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Rigorous curriculum designed to challenge and inspire students to reach their full potential.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'A supportive environment where students, families, and educators work together.',
  },
  {
    icon: Calendar,
    title: 'Rich Programs',
    description: 'Diverse extracurricular activities, clubs, and events that enrich student life.',
  },
  {
    icon: Trophy,
    title: 'Student Success',
    description: 'Proven track record of preparing students for college and career success.',
  },
];

export default function Home() {
  useDocumentTitle('Home - Child Care Nursery School');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-display">
                Welcome to Child Care Nursery School
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Providing exceptional education from pre-nursery through class 5. Our school offers the best facilities and a caring, qualified staff dedicated to nurturing young minds and building strong foundations for lifelong learning.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/learn-more">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/special-event">Special Event</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-[4/3] rounded-lg overflow-hidden shadow-soft">
              <img
                src={assetUrl('/assets/generated/school-hero.dim_1600x600.png')}
                alt="Child Care Nursery School campus with young students learning together in a nurturing environment"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Year Section */}
      <section className="bg-accent/30 py-8">
        <div className="container">
          <Card className="border-2 border-primary/20">
            <CardContent className="py-6">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground mb-1">Current</p>
                <h3 className="text-2xl font-bold text-primary">Academic Year: 2026–2027</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display mb-4">Why Choose Child Care Nursery School</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive educational experience that prepares students for success in an ever-changing world.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display mb-4">Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders guiding Child Care Nursery School towards excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center">
                <div className="mb-4 mx-auto">
                  <img
                    src={assetUrl('/assets/generated/principal-dr-meera-verma.dim_800x800.jpg')}
                    alt="Principal Dr Meera Verma"
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                  />
                </div>
                <CardTitle className="text-2xl">Dr Meera Verma</CardTitle>
                <CardDescription className="text-base font-medium text-primary">Principal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Leading our school with vision and dedication to provide the best educational experience for every child.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="text-center">
                <div className="mb-4 mx-auto">
                  <img
                    src={assetUrl('/assets/generated/manager-mr-ajeet-verma.dim_800x800.jpg')}
                    alt="Manager Mr Ajeet Verma"
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                  />
                </div>
                <CardTitle className="text-2xl">Mr Ajeet Verma</CardTitle>
                <CardDescription className="text-base font-medium text-primary">Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Ensuring smooth operations and maintaining the highest standards of excellence in all aspects of school management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Learn More About Us</CardTitle>
              <CardDescription>Discover our mission and values</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Explore what makes Child Care Nursery School special. Learn about our comprehensive programs, dedicated staff, and commitment to excellence in education.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/learn-more">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Special Event</CardTitle>
              <CardDescription>Join us for our Annual Fete</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Don't miss our upcoming Annual Fete! A wonderful opportunity for parents and the community to come together and celebrate.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/special-event">View Event Details</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
