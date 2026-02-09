import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function SpecialEvent() {
  useDocumentTitle('Special Event - Child Care Nursery School');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Special Event</span>
            </div>
            <h1 className="font-display">Annual Fete 2026</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Join us for a day of celebration, fun, and community spirit!
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Key Information Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Date</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">13 November 2026</p>
                <p className="text-muted-foreground mt-2">Mark your calendars!</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Child Care Nursery School</p>
                <p className="text-muted-foreground mt-2">320 Ailwal, Azamgarh, Uttar Pradesh</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Invitation */}
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">All Parents Are Invited!</CardTitle>
              <CardDescription className="text-lg mt-4">
                We warmly invite all parents to join us for our Annual Fete
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Annual Fete is one of our most cherished traditions, bringing together students, parents, teachers, and the wider community for a day filled with joy, entertainment, and celebration.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                This special event is a wonderful opportunity to connect with other families, support our school community, and create lasting memories with your children.
              </p>
            </CardContent>
          </Card>

          {/* Event Description */}
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl mb-6">About the Event</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our Annual Fete is a highlight of the school year, featuring a variety of activities and attractions for all ages. From exciting games and competitions to delicious food stalls and cultural performances, there's something for everyone to enjoy.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              This event not only provides entertainment but also strengthens the bonds within our school community. It's a chance for parents to see their children's school in action, meet other families, and support the various initiatives that make Child Care Nursery School such a special place.
            </p>
          </div>

          {/* What to Expect */}
          <div>
            <h2 className="font-display text-3xl mb-8">What to Expect</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fun Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enjoy a wide range of games, competitions, and interactive activities designed for children and families.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cultural Performances</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Watch talented students showcase their skills through music, dance, and theatrical performances.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Food & Refreshments</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Savor delicious food and refreshments from various stalls offering a variety of treats and snacks.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Closing Message */}
          <Card className="border-2 bg-muted/30">
            <CardContent className="py-8 text-center">
              <p className="text-lg font-semibold text-primary mb-2">
                We look forward to seeing you there!
              </p>
              <p className="text-muted-foreground">
                For any questions or additional information, please contact us at +91 9506504091 or +91 7398550589
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
