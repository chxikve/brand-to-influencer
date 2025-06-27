
export interface Campaign {
  id: string;
  title: string;
  description: string;
  budget: string;
  deadline: string;
  requirements: string[];
  status: 'open' | 'closed';
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  location: string;
  website: string;
  employees: string;
  founded: string;
  campaigns: Campaign[];
  totalBudget: string;
  activeCampaigns: number;
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'TechFlow Solutions',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop&crop=center',
    industry: 'Technology',
    description: 'Leading software development company specializing in AI and machine learning solutions for businesses.',
    location: 'San Francisco, CA',
    website: 'techflow.com',
    employees: '500-1000',
    founded: '2018',
    totalBudget: '$250K',
    activeCampaigns: 3,
    campaigns: [
      {
        id: 'c1',
        title: 'AI Product Launch Campaign',
        description: 'Promote our new AI-powered productivity tool to tech-savvy professionals.',
        budget: '$50,000',
        deadline: '2024-08-15',
        requirements: ['Tech content creators', '10K+ followers', 'Professional audience'],
        status: 'open'
      },
      {
        id: 'c2',
        title: 'Developer Tools Showcase',
        description: 'Create content showcasing our development tools and APIs.',
        budget: '$30,000',
        deadline: '2024-07-30',
        requirements: ['Software developers', 'Coding tutorials', 'GitHub presence'],
        status: 'open'
      },
      {
        id: 'c3',
        title: 'Tech Conference Sponsorship',
        description: 'Partnership for major tech conference coverage.',
        budget: '$75,000',
        deadline: '2024-09-01',
        requirements: ['Event coverage', 'Live streaming', '50K+ reach'],
        status: 'open'
      }
    ]
  },
  {
    id: '2',
    name: 'FitLife Nutrition',
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=center',
    industry: 'Health & Wellness',
    description: 'Premium nutrition and supplement brand focused on natural, science-backed products for active lifestyles.',
    location: 'Austin, TX',
    website: 'fitlifenutrition.com',
    employees: '100-250',
    founded: '2020',
    totalBudget: '$180K',
    activeCampaigns: 2,
    campaigns: [
      {
        id: 'c4',
        title: 'Summer Fitness Challenge',
        description: 'Partner with fitness influencers for a 30-day transformation challenge.',
        budget: '$75,000',
        deadline: '2024-09-01',
        requirements: ['Fitness influencers', '25K+ followers', 'Transformation content'],
        status: 'open'
      },
      {
        id: 'c5',
        title: 'Plant-Based Protein Launch',
        description: 'Introduce our new plant-based protein line to health-conscious audiences.',
        budget: '$40,000',
        deadline: '2024-08-20',
        requirements: ['Health & wellness creators', 'Nutrition expertise', 'Recipe content'],
        status: 'open'
      }
    ]
  },
  {
    id: '3',
    name: 'StyleForward',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop&crop=center',
    industry: 'Fashion',
    description: 'Sustainable fashion brand creating trendy, eco-friendly clothing for modern, conscious consumers.',
    location: 'New York, NY',
    website: 'styleforward.com',
    employees: '50-100',
    founded: '2019',
    totalBudget: '$120K',
    activeCampaigns: 1,
    campaigns: [
      {
        id: 'c6',
        title: 'Sustainable Fashion Awareness',
        description: 'Educate audiences about sustainable fashion while showcasing our eco-friendly collections.',
        budget: '$60,000',
        deadline: '2024-10-15',
        requirements: ['Fashion influencers', 'Sustainability focus', '15K+ followers'],
        status: 'open'
      }
    ]
  },
  {
    id: '4',
    name: 'GameZone Studios',
    logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&h=150&fit=crop&crop=center',
    industry: 'Gaming',
    description: 'Independent game development studio creating innovative mobile and PC games with engaging storylines.',
    location: 'Seattle, WA',
    website: 'gamezonestudios.com',
    employees: '25-50',
    founded: '2021',
    totalBudget: '$90K',
    activeCampaigns: 2,
    campaigns: [
      {
        id: 'c7',
        title: 'New RPG Game Launch',
        description: 'Promote our upcoming fantasy RPG game to gaming communities.',
        budget: '$45,000',
        deadline: '2024-09-30',
        requirements: ['Gaming content creators', 'RPG gameplay', 'Streaming capability'],
        status: 'open'
      },
      {
        id: 'c8',
        title: 'Mobile Game Beta Testing',
        description: 'Get early feedback on our new mobile puzzle game.',
        budget: '$25,000',
        deadline: '2024-08-10',
        requirements: ['Mobile gaming creators', 'Beta testing', 'Honest reviews'],
        status: 'open'
      }
    ]
  },
  {
    id: '5',
    name: 'EcoHome Solutions',
    logo: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=150&h=150&fit=crop&crop=center',
    industry: 'Home & Garden',
    description: 'Smart home technology company focused on energy-efficient and sustainable living solutions.',
    location: 'Portland, OR',
    website: 'ecohomesolutions.com',
    employees: '150-300',
    founded: '2017',
    totalBudget: '$200K',
    activeCampaigns: 1,
    campaigns: [
      {
        id: 'c9',
        title: 'Smart Home Automation Series',
        description: 'Showcase how our smart home products make life easier and more sustainable.',
        budget: '$80,000',
        deadline: '2024-11-01',
        requirements: ['Home improvement creators', 'Tech reviews', 'DIY content'],
        status: 'open'
      }
    ]
  },
  {
    id: '6',
    name: 'Wanderlust Travel Co.',
    logo: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=150&h=150&fit=crop&crop=center',
    industry: 'Travel & Tourism',
    description: 'Boutique travel agency specializing in unique, off-the-beaten-path destinations and authentic experiences.',
    location: 'Miami, FL',
    website: 'wanderlusttravel.co',
    employees: '20-50',
    founded: '2016',
    totalBudget: '$150K',
    activeCampaigns: 0,
    campaigns: [
      {
        id: 'c10',
        title: 'Hidden Gems Travel Series',
        description: 'Feature lesser-known travel destinations through engaging content and storytelling.',
        budget: '$70,000',
        deadline: '2024-07-15',
        requirements: ['Travel influencers', 'Photography skills', 'Adventure content'],
        status: 'closed'
      }
    ]
  }
];

console.log('Companies data loaded:', companies.length, 'companies');
