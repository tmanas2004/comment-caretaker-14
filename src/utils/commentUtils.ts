import { Comment, User, CommentFilter, SocialPlatform, SocialProfile } from '@/types';

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

// Social media profiles mock data
export const mockSocialProfiles: SocialProfile[] = [
  {
    platform: 'youtube',
    username: 'YourChannelName',
    url: 'https://youtube.com/c/yourchannel',
    isConnected: true,
  },
  {
    platform: 'instagram',
    username: 'your_insta_handle',
    url: 'https://instagram.com/your_insta_handle',
    isConnected: true,
  },
  {
    platform: 'facebook',
    username: 'Your Page',
    url: 'https://facebook.com/yourpage',
    isConnected: true,
  },
  {
    platform: 'linkedin',
    username: 'Your Name',
    url: 'https://linkedin.com/in/yourname',
    isConnected: false,
  },
  {
    platform: 'twitter',
    username: '@yourhandle',
    url: 'https://twitter.com/yourhandle',
    isConnected: true,
  },
];

export const mockComments: Comment[] = [
  {
    id: '1',
    content: "This content is so insightful! I've been following your work for years and always learn something new.",
    timestamp: '2023-11-15T14:32:00Z',
    user: mockUsers[0],
    likes: 24,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'positive',
    relevanceScore: 0.92,
    tags: ['praise', 'long-term-follower'],
    platform: 'youtube',
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
    platform: 'facebook',
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
    platform: 'instagram',
  },
  {
    id: '4',
    content: "This is garbage content. You clearly don't know what you're talking about!",
    timestamp: '2023-11-16T10:30:00Z',
    user: mockUsers[3],
    likes: 1,
    isImportant: false,
    isPotentiallyHarmful: true,
    sentiment: 'negative',
    relevanceScore: 0.31,
    tags: ['offensive', 'trolling'],
    platform: 'twitter',
  },
  {
    id: '5',
    content: "I've implemented your suggestions and they've helped my business grow by 30%! Thank you so much.",
    timestamp: '2023-11-17T11:22:00Z',
    user: mockUsers[4],
    likes: 32,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'positive',
    relevanceScore: 0.95,
    tags: ['success-story', 'gratitude'],
    platform: 'linkedin',
  },
  {
    id: '6',
    content: "When is your next video coming out? I've been checking daily!",
    timestamp: '2023-11-17T12:35:00Z',
    user: mockUsers[0],
    likes: 8,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'positive',
    relevanceScore: 0.70,
    tags: ['question', 'eager'],
    platform: 'youtube',
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
    platform: 'youtube',
  },
  {
    id: '8',
    content: 'Your latest post inspired me to start my own business!',
    timestamp: '2023-11-18T09:10:00Z',
    user: mockUsers[2],
    likes: 19,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'positive',
    relevanceScore: 0.88,
    tags: ['inspiration', 'success-story'],
    platform: 'instagram',
  },
  {
    id: '9',
    content: 'Can you do a follow-up on this topic next week?',
    timestamp: '2023-11-18T14:25:00Z',
    user: mockUsers[3],
    likes: 11,
    isImportant: true,
    isPotentiallyHarmful: false,
    sentiment: 'neutral',
    relevanceScore: 0.75,
    tags: ['request', 'question'],
    platform: 'facebook',
  },
  {
    id: '10',
    content: 'Stop spreading misinformation to your followers.',
    timestamp: '2023-11-19T10:05:00Z',
    user: mockUsers[4],
    likes: 2,
    isImportant: false,
    isPotentiallyHarmful: true,
    sentiment: 'negative',
    relevanceScore: 0.45,
    tags: ['accusation', 'criticism'],
    platform: 'twitter',
  },
];

// Function to filter comments by platform
export const filterCommentsByPlatform = (comments: Comment[], platform: SocialPlatform): Comment[] => {
  if (platform === 'all') {
    return comments;
  }
  return comments.filter(comment => comment.platform === platform);
};

// Function to filter comments
export const filterComments = (comments: Comment[], filter: CommentFilter, platform: SocialPlatform): Comment[] => {
  // First filter by platform
  const platformFiltered = filterCommentsByPlatform(comments, platform);
  
  // Then apply the comment filter
  switch (filter) {
    case 'important':
      return platformFiltered.filter(comment => comment.isImportant);
    case 'reward-eligible':
      return platformFiltered.filter(comment => 
        comment.user.isLoyalFollower && 
        comment.likes > 10 && 
        comment.sentiment === 'positive'
      );
    case 'flagged':
      return platformFiltered.filter(comment => comment.isPotentiallyHarmful);
    case 'all':
    default:
      return platformFiltered;
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

// Function to get platform color
export const getPlatformColor = (platform: SocialPlatform): string => {
  switch (platform) {
    case 'youtube':
      return 'text-red-600 bg-red-50 dark:bg-red-900/20';
    case 'instagram':
      return 'text-pink-600 bg-pink-50 dark:bg-pink-900/20';
    case 'facebook':
      return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
    case 'twitter':
      return 'text-sky-600 bg-sky-50 dark:bg-sky-900/20';
    case 'linkedin':
      return 'text-blue-700 bg-blue-50 dark:bg-blue-900/20';
    default:
      return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
  }
};
