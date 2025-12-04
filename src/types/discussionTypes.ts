export type Comment = {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  text: string;
  date: Date;
  isAnswer: string | null;
};

type Author = {
  name: string;
  image: string;
  id: string;
};

export type DiscussionData = {
  id: string;
  slug: string;
  name: string;
  theme: string[];
  description?: string;
  date: Date;
  author: Author;
  images: string[];
  comments: Comment[];
  status: 'ongoing' | 'ended';
  anonimus: boolean;
};
