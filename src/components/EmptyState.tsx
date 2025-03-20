
import React from 'react';
import { MessageSquare, Search } from 'lucide-react';

interface EmptyStateProps {
  filter: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ filter }) => {
  let message = 'No comments found';
  let description = 'There are no comments to display at the moment.';
  
  switch (filter) {
    case 'important':
      message = 'No important comments';
      description = 'None of your comments have been identified as important yet.';
      break;
    case 'reward-eligible':
      message = 'No reward-eligible users';
      description = 'No users currently qualify for rewards based on your criteria.';
      break;
    case 'flagged':
      message = 'No flagged comments';
      description = 'No potentially harmful comments have been detected.';
      break;
  }
  
  return (
    <div className="text-center py-16 px-6 glass-card rounded-lg animate-fade-in">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 animate-pulse-subtle">
        {filter === 'flagged' ? (
          <Search className="text-muted-foreground" size={24} />
        ) : (
          <MessageSquare className="text-muted-foreground" size={24} />
        )}
      </div>
      <h3 className="text-lg font-medium mb-2">{message}</h3>
      <p className="text-muted-foreground text-sm max-w-md mx-auto">{description}</p>
    </div>
  );
};

export default EmptyState;
