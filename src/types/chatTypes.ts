export type CurrentChatT = {
  id: string;
  sender: string;
  messageTitle?: string;
  files?: File[];
  messageText: string;
  date: Date;
  status: 'read' | 'unread';
};

export type ChatT = {
  id: string;
  name: string;
  sender: string;
  canAnswer: boolean;
  messages: CurrentChatT[];
};
