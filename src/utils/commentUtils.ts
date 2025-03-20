
import { Comment, User, CommentFilter } from '@/types';

// Mock data for demonstration
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    isVerified: true,
    isLoyalFollower: true,
    commentCount: 42,
    joinedDate: '2022-03-15',
  },
  {
    id: '2',
    name: 'Sarah Miller',
    avatar: 'https://i.pravatar.cc/150?img=2',
    isVerified: false,
    isLoyalFollower: true,
    commentCount: 37,
    joinedDate: '2022-05-20',
  },
  {
    id: '3',
    name: 'James Wilson',
    avatar: 'https://i.pravatar.cc/150?img=3',
    isVerified: true,
    isLoyalFollower: false,
    commentCount: 12,
    joinedDate: '2023-01-10',
  },
  {
    id: '4',
    name: 'Emma Parker',
    avatar: 'https://i.pravatar.cc/150?img=4',
    isVerified: false,
    isLoyalFollower: false,
    commentCount: 5,
    joinedDate: '2023-07-25',
  },
  {
    id: '5',
    name: 'Michael Chang',
    avatar: 'https://i.pravatar.cc/150?img=5',
    isVerified: true,
    isLoyalFollower: true,
    commentCount: 27,
    joinedDate: '2022-09-18',
  },
];

export const mockComments: Comment[] = [
  {
    id: '1',
    content: 'This content is so insightful! I've been following your work for years and always learn something new.',
    timestamp: '2023-11-15T14:32:00Z',
    user: mockUsers[0],
    likes: 24,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'positive',
    relevanceScore: 0.92,
    tags: ['praise', 'long-term-follower'],
  },
  {
    id: '2',
    content: 'I disagree with some points. The information about AI systems seems outdated.',
    timestamp: '2023-11-15T15:45:00Z',
    user: mockUsers[1],
    likes: 7,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'neutral',
    relevanceScore: 0.78,
    tags: ['critique', 'feedback'],
  },
  {
    id: '3',
    content: 'Have you considered talking about the ethical implications more? This topic deserves deeper analysis.',
    timestamp: '2023-11-16T09:12:00Z',
    user: mockUsers[2],
    likes: 15,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'neutral',
    relevanceScore: 0.85,
    tags: ['question', 'suggestion'],
  },
  {
    id: '4',
    content: 'This is garbage content. You clearly don't know what you're talking about!',
    timestamp: '2023-11-16T10:30:00Z',
    user: mockUsers[3],
    likes: 1,
    isImportant: false,
    isPotentiallyHarmful: true,
    sentiment: 'negative',
    relevanceScore: 0.31,
    tags: ['offensive', 'trolling'],
  },
  {
    id: '5',
    content: 'I've implemented your suggestions and they've helped my business grow by 30%! Thank you so much.',
    timestamp: '2023-11-17T11:22:00Z',
    user: mockUsers[4],
    likes: 32,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'positive',
    relevanceScore: 0.95,
    tags: ['success-story', 'gratitude'],
  },
  {
    id: '6',
    content: 'When is your next video coming out? I\'ve been checking daily!',
    timestamp: '2023-11-17T12:35:00Z',
    user: mockUsers[0],
    likes: 8,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'positive',
    relevanceScore: 0.70,
    tags: ['question', 'eager'],
  },
  {
    id: '7',
    content: 'The sound quality in this video was not as good as your previous ones.',
    timestamp: '2023-11-17T16:20:00Z',
    user: mockUsers[1],
    likes: 4,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'neutral',
    relevanceScore: 0.65,
    tags: ['technical-feedback'],
  },
];

// Function to filter comments
export const filterComments = (comments: Comment[], filter: CommentFilter): Comment[] => {
  switch (filter) {
    case 'important':
      return comments.filter(comment => comment.isImportant);
    case 'reward-eligible':
      return comments.filter(comment => 
        comment.user.isLoyalFollower && 
        comment.likes > 10 && 
        comment.sentiment === 'positive'
      );
    case 'flagged':
      return comments.filter(comment => comment.isPotentiallyHarmful);
    case 'all':
    default:
      return comments;
  }
};

// Function to sort comments by relevance
export const sortCommentsByRelevance = (comments: Comment[]): Comment[] => {
  return [...comments].sort((a, b) => b.relevanceScore - a.relevanceScore);
};

// Function to get sentiment color
export const getSentimentColor = (sentiment: Comment['sentiment']): string => {
  switch (sentiment) {
    case 'positive':
      return 'text-emerald-500';
    case 'negative':
      return 'text-rose-500';
    case 'neutral':
    default:
      return 'text-blue-500';
  }
};

// Function to get formatted date
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return new Date(dateString).toLocaleDateString(undefined, options);
};
