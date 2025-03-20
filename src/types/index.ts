
export interface User {
  id: string;
  name: string;
  avatar: string;
  isVerified: boolean;
  isLoyalFollower: boolean;
  commentCount: number;
  joinedDate: string;
}

export interface Comment {
  id: string;
  content: string;
  timestamp: string;
  user: User;
  likes: number;
  isImportant: boolean;
  isPotentiallyHarmful: boolean;
  sentiment: 'positive' | 'neutral' | 'negative';
  relevanceScore: number;
  tags: string[];
}

export type CommentFilter = 'all' | 'important' | 'reward-eligible' | 'flagged';
