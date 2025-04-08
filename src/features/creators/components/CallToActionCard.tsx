
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CallToActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToActionCard: React.FC<CallToActionCardProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <Card className="max-w-2xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </CardContent>
      <CardFooter className="justify-center pb-6">
        <Button
          variant="default"
          size="lg"
          className="inline-flex items-center justify-center gap-2"
          asChild
        >
          <Link to={buttonLink}>
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CallToActionCard;
