
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Target, Building2, TrendingUp } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "High Budgets",
      description: "Access to substantial campaign budgets ranging from $30K to $80K per project",
      icon: <DollarSign className="h-8 w-8 text-green-500" />
    },
    {
      title: "Multiple Campaigns",
      description: "Companies run multiple campaigns throughout the year, providing ongoing opportunities",
      icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Brand Recognition",
      description: "Partner with established companies to boost your credibility and reach",
      icon: <Building2 className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Growth Potential",
      description: "Long-term partnerships that can significantly grow your audience and income",
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with These Companies</h2>
          <p className="text-muted-foreground mb-6">
            These leading brands offer incredible opportunities for creators to grow and monetize their content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="animate-on-scroll hover-scale text-center" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
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
