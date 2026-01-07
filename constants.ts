import { Event, Story, NewsItem } from './types';

export const EVENTS: Event[] = [
  {
    id: '1',
    day: '22',
    month: 'Jun',
    year: '2026',
    title: 'Dolomites',
    dateRange: 'June 22-26, 2026',
    price: '$3000',
  },
  {
    id: '2',
    day: '04',
    month: 'Jul',
    year: '2026',
    title: 'Machu Picchu',
    dateRange: 'July 4-10, 2026',
    price: '$3,300',
  },
  {
    id: '3',
    day: '11',
    month: 'Oct',
    year: '2026',
    title: 'Mt Whitney to Death Valley',
    dateRange: '11-16 October 2026',
    price: '$2200',
  },
];

export const STORIES: Story[] = [
  {
    id: '1',
    title: "Sunita's Transformation",
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    title: "Priya's New Beginning",
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    title: "Meena's Journey",
    date: 'January 10, 2024',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    title: "Divya's Dreams",
    date: 'December 5, 2023',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Radiating Hope Teams Up with MD Anderson\'s RPA Team to Improve Global Cancer Care',
    date: 'September 17, 2024',
    image: 'https://picsum.photos/seed/news1/600/400',
  },
  {
    id: '2',
    title: 'Good Luck to Our 2024 Kili Team!',
    date: 'June 24, 2024',
    image: 'https://picsum.photos/seed/news2/600/400',
  },
  {
    id: '3',
    title: 'Celebrating Jill Casey\'s Incredible Fundraising Efforts and Upcoming Kilimanjaro Climb',
    date: 'June 18, 2024',
    image: 'https://picsum.photos/seed/news3/600/400',
  },
  {
    id: '4',
    title: 'Celebrating the Success of Our 2024 Mt. Hood Fundraising Climb',
    date: 'June 6, 2024',
    image: 'https://picsum.photos/seed/news4/600/400',
  },
];
