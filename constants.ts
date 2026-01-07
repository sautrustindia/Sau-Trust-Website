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
    title: "Don Flint's Story",
    date: 'October 20, 2017',
    image: 'https://picsum.photos/seed/story1/400/500',
  },
  {
    id: '2',
    title: "Lacey Tucker's story",
    date: 'September 20, 2017',
    image: 'https://picsum.photos/seed/story2/400/500',
  },
  {
    id: '3',
    title: "I Can Do Hard Things",
    date: 'September 6, 2017',
    image: 'https://picsum.photos/seed/story3/400/500',
  },
  {
    id: '4',
    title: "Dr. Ed Hughes",
    date: 'September 21, 2020',
    image: 'https://picsum.photos/seed/story4/400/500',
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
