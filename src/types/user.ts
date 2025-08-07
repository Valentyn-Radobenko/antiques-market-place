export interface UserState {
  email: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  auctionNumber: string | null;
  verified: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
