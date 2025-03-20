
import React from 'react';
import { 
  MessageSquare, 
  ThumbsUp, 
  Clock, 
  Star,
  BadgeCheck,
  Flag,
  CornerDownRight
} from 'lucide-react';
import { Comment } from '@/types';
import { 
  formatDate, 
  getSentimentColor 
} from '@/utils/commentUtils';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <Card className="mb-4 overflow-hidden transition-all duration-300 hover:shadow-md animate-slide-in glass-card">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src={comment.user.avatar} 
                alt={comment.user.name}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
              {comment.user.isLoyalFollower && (
                <div className="absolute -bottom-1 -right-1 bg-purple-500 rounded-full p-0.5">
                  <Star size={12} className="text-white" />
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-1">
              <h3 className="font-medium text-sm mr-1 truncate">
                {comment.user.name}
              </h3>
              
              {comment.user.isVerified && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <BadgeCheck size={16} className="text-blue-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Verified User</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              
              <div className="ml-auto flex items-center space-x-2 text-muted-foreground">
                <span className="flex items-center text-xs">
                  <Clock size={12} className="mr-1" />
                  {formatDate(comment.timestamp)}
                </span>
              </div>
            </div>
            
            <p className="text-sm mb-3 break-words">
              {comment.content}
            </p>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center mr-3 text-xs text-muted-foreground">
                <ThumbsUp size={14} className="mr-1" />
                {comment.likes}
              </div>
              
              {comment.sentiment && (
                <Badge variant="outline" className={`${getSentimentColor(comment.sentiment)}`}>
                  {comment.sentiment === 'positive' ? 'Positive' : 
                    comment.sentiment === 'negative' ? 'Negative' : 'Neutral'}
                </Badge>
              )}
              
              {comment.isImportant && (
                <Badge className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20">
                  Important
                </Badge>
              )}
              
              {comment.isPotentiallyHarmful && (
                <Badge variant="destructive">
                  <Flag size={12} className="mr-1" />
                  Flagged
                </Badge>
              )}
              
              <div className="ml-auto">
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <CornerDownRight size={14} className="mr-1" />
                  <span className="text-xs">Reply</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
