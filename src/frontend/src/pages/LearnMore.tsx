import { BookOpen, Users, Heart, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'From pre-nursery through class 5, we offer a well-rounded curriculum that builds strong academic foundations while fostering creativity and critical thinking.',
  },
  {
    icon: Users,
    title: 'Qualified & Caring Staff',
    description: 'Our dedicated team of experienced educators is committed to providing personalized attention and nurturing each child\'s unique potential.',
  },
  {
    icon: Heart,
    title: 'Nurturing Environment',
    description: 'We create a safe, supportive, and inclusive atmosphere where every child feels valued, respected, and encouraged to explore and learn.',
  },
  {
    icon: Award,
    title: 'Excellent Facilities',
    description: 'Our modern campus features well-equipped classrooms, play areas, and learning resources designed to enhance the educational experience.',
  },
];

export default function LearnMore() {
  useDocumentTitle('Learn More - Child Care Nursery School');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-display">About Child Care Nursery School</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Discover what makes our school a special place for young learners to grow, explore, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Child Care Nursery School, we are dedicated to providing exceptional education for children from pre-nursery through class 5. Our mission is to nurture young minds in a caring and supportive environment, where every child can develop their full potential academically, socially, and emotionally.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We believe that the early years of education are crucial in shaping a child's future. That's why we combine strong academic foundations with character development, creativity, and critical thinking skills. Our qualified and caring staff work tirelessly to ensure that each child receives personalized attention and support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl mb-6">Our Facilities</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Child Care Nursery School boasts some of the best facilities in the region. Our modern campus is designed with young learners in mind, featuring bright and spacious classrooms, safe outdoor play areas, a well-stocked library, and specialized learning spaces for art, music, and physical education.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We continuously invest in our infrastructure and resources to ensure that our students have access to the tools and environments they need to succeed. From interactive learning materials to age-appropriate play equipment, every aspect of our facility is carefully chosen to support holistic child development.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl mb-6">Our Commitment</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are committed to maintaining the highest standards of education and care. Our qualified staff undergo regular professional development to stay current with the latest educational practices and child development research. We work closely with parents and families to create a strong partnership that supports each child's learning journey.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Child Care Nursery School, we don't just prepare children for the next grade level – we prepare them for life. Through our comprehensive approach to education, we help students develop confidence, curiosity, compassion, and the skills they need to become lifelong learners and responsible citizens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
