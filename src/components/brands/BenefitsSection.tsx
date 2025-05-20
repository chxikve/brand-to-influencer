
import React from 'react';
import { SponsorBenefit } from '@/types/forBrands';
import { 
  Star,
  Handshake,
  Award,
  Gift,
  BadgePercent
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const sponsorBenefits: SponsorBenefit[] = [
    {
      title: "Brand Exposure",
      description: "Gain visibility and exposure to your target audience through various channels associated with the sponsored entity.",
      icon: <Star className="h-8 w-8 text-amber-500" />
    },
    {
      title: "Brand Association",
      description: "Align your brand with the values and image of the sponsored entity, enhancing your brand perception.",
      icon: <Handshake className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Marketing Opportunities",
      description: "Leverage platforms for product promotion, customer engagement, and market expansion.",
      icon: <Award className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Corporate Social Responsibility",
      description: "Sponsorship of charitable or community events aligns with CSR goals, improving brand reputation.",
      icon: <Gift className="h-8 w-8 text-green-500" />
    },
    {
      title: "Audience Reach",
      description: "Access extensive networks and marketing channels, enabling your brand to reach a broader audience.",
      icon: <BadgePercent className="h-8 w-8 text-red-500" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Brands</h2>
          <p className="text-sponsify-secondary dark:text-gray-300 mb-6">
            Discover the advantages of partnering with creators through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsorBenefits.map((benefit, index) => (
            <Card key={index} className="animate-on-scroll hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
