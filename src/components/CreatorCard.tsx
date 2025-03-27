
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  MessageSquare, 
  Users, 
  Star
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle, 
  CardDescription, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis } from 'recharts';
import { Creator, getPlatformIcon, formatFollowers } from '@/data/creators';

interface CreatorCardProps {
  creator: Creator;
  index: number;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ creator, index }) => {
  return (
    <Card className="overflow-hidden animate-on-scroll hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <Avatar className="h-12 w-12 mr-3 border-2 border-primary/20">
              <AvatarImage src={creator.avatar} alt={creator.name} />
              <AvatarFallback>{creator.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{creator.name}</CardTitle>
              <CardDescription className="text-sm">
                {creator.handle} · {creator.niche}
              </CardDescription>
            </div>
          </div>
          <div className="flex gap-1">
            {creator.platforms.map((platform, i) => (
              <span key={i} className="inline-block">
                {getPlatformIcon(platform)}
              </span>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-2">
        <p className="text-sm text-muted-foreground mb-4">{creator.description}</p>
        
        <div className="mb-4 h-28">
          <ChartContainer
            config={{
              followers: { color: creator.color, label: "Followers" }
            }}
            className="h-full aspect-auto"
          >
            <AreaChart
              data={creator.growthData}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={creator.color} stopOpacity={0.6} />
                  <stop offset="100%" stopColor={creator.color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                tick={{ fontSize: 10 }}
                tickFormatter={formatFollowers}
                tickLine={false}
                axisLine={false}
                width={30}
              />
              <ChartTooltip
                content={<ChartTooltipContent labelFormatter={(label) => `${label} 2023`} />}
              />
              <Area 
                type="monotone" 
                dataKey="followers" 
                stroke={creator.color} 
                fillOpacity={1}
                fill={`url(#gradient-${index})`}
              />
            </AreaChart>
          </ChartContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            <div className="flex items-center gap-1 mb-1">
              <Users size={14} className="text-gray-500" />
              <span className="text-xs text-gray-500">Followers</span>
            </div>
            <p className="font-semibold">{creator.followers}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp size={14} className="text-gray-500" />
              <span className="text-xs text-gray-500">Engagement</span>
            </div>
            <p className="font-semibold">{creator.engagementRate}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
            <div className="flex items-center gap-1 mb-1">
              <MessageSquare size={14} className="text-gray-500" />
              <span className="text-xs text-gray-500">Comments</span>
            </div>
            <p className="font-semibold">{creator.avgComments}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-sm font-medium">Top {index + 1}% Creator</span>
        </div>
        <Button
          variant="ghost"
          className="text-sm font-medium text-primary hover:underline"
          asChild
        >
          <Link to={`/creator/${creator.id}`}>
            View Profile
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreatorCard;
