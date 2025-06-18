export type Comment = {
  id: string;
  userId: string;
  userName: string;
  text: string;
  date: Date;
  isAnswer: string | null;
};

export type DiscussionData = {
  id: string;
  name: string;
  theme: string;
  description: string;
  date: Date;
  author: string;
  images: string[];
  comments: Comment[];
  status: 'ongoin' | 'ended';
};
