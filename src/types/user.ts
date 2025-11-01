export interface User {
  email: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  picture: string | './images/mainUser.png';
  country: string | null;
  city: string | null;
  auctionNumber: string | null;
  verified: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  id: string;
}
