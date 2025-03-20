
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 glass px-6 py-4 border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="rounded-lg bg-primary p-2 text-primary-foreground">
            <MessageSquare size={20} />
          </div>
          <div>
            <h1 className="text-xl font-medium tracking-tight">CommentCaretaker</h1>
            <p className="text-sm text-muted-foreground">AI-powered comment management</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium">AI Active</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
