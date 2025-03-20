
import React from 'react';
import CommentCard from './CommentCard';
import { Comment } from '@/types';
import EmptyState from './EmptyState';

interface CommentListProps {
  comments: Comment[];
  isLoading: boolean;
  filter: string;
}

const CommentList: React.FC<CommentListProps> = ({ comments, isLoading, filter }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="loader" aria-label="Loading..."></div>
      </div>
    );
  }
  
  if (comments.length === 0) {
    return <EmptyState filter={filter} />;
  }
  
  return (
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <div key={comment.id} className={`animate-slide-in animate-delay-${index * 100}`} style={{ animationDelay: `${index * 50}ms` }}>
          <CommentCard comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
