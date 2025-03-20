
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Filter, 
  Star, 
  AlertCircle, 
  MessageSquare 
} from 'lucide-react';
import { CommentFilter } from '@/types';

interface FilterPanelProps {
  activeFilter: CommentFilter;
  onFilterChange: (filter: CommentFilter) => void;
  counts: {
    all: number;
    important: number;
    rewardEligible: number;
    flagged: number;
  };
}

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  activeFilter, 
  onFilterChange,
  counts
}) => {
  return (
    <div className="glass-card rounded-lg p-4 mb-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium flex items-center">
          <Filter size={16} className="mr-2" />
          Comment Filters
        </h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Button
          variant={activeFilter === 'all' ? 'default' : 'outline'}
          className="justify-start h-auto py-3 transition-all duration-300"
          onClick={() => onFilterChange('all')}
        >
          <MessageSquare size={16} className="mr-2" />
          <div className="text-left">
            <div className="text-sm font-medium">All</div>
            <div className="text-xs text-muted-foreground">{counts.all} comments</div>
          </div>
        </Button>
        
        <Button
          variant={activeFilter === 'important' ? 'default' : 'outline'}
          className="justify-start h-auto py-3 transition-all duration-300"
          onClick={() => onFilterChange('important')}
        >
          <Star size={16} className="mr-2 text-amber-500" />
          <div className="text-left">
            <div className="text-sm font-medium">Important</div>
            <div className="text-xs text-muted-foreground">{counts.important} comments</div>
          </div>
        </Button>
        
        <Button
          variant={activeFilter === 'reward-eligible' ? 'default' : 'outline'}
          className="justify-start h-auto py-3 transition-all duration-300"
          onClick={() => onFilterChange('reward-eligible')}
        >
          <Star size={16} className="mr-2 text-purple-500" />
          <div className="text-left">
            <div className="text-sm font-medium">Reward</div>
            <div className="text-xs text-muted-foreground">{counts.rewardEligible} eligible</div>
          </div>
        </Button>
        
        <Button
          variant={activeFilter === 'flagged' ? 'default' : 'outline'}
          className="justify-start h-auto py-3 transition-all duration-300"
          onClick={() => onFilterChange('flagged')}
        >
          <AlertCircle size={16} className="mr-2 text-rose-500" />
          <div className="text-left">
            <div className="text-sm font-medium">Flagged</div>
            <div className="text-xs text-muted-foreground">{counts.flagged} comments</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;
