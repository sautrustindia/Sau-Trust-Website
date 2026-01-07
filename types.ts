export interface Event {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  dateRange: string;
  price: string;
}

export interface Story {
  id: string;
  title: string;
  date: string;
  image: string;
  videoUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
}

export enum DonationFrequency {
  OneTime = 'One-time',
  Monthly = 'Monthly'
}
