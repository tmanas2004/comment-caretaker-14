
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FilterPanel from '@/components/FilterPanel';
import CommentList from '@/components/CommentList';
import SocialPlatformSelector from '@/components/SocialPlatformSelector';
import { mockComments, filterComments, sortCommentsByRelevance, filterCommentsByPlatform } from '@/utils/commentUtils';
import { CommentFilter, SocialPlatform } from '@/types';

const Index = () => {
  const [filter, setFilter] = useState<CommentFilter>('all');
  const [platform, setPlatform] = useState<SocialPlatform>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredComments, setFilteredComments] = useState(mockComments);
  
  // Get platform-filtered comments for count calculation
  const platformFilteredComments = filterCommentsByPlatform(mockComments, platform);
  
  // Filter counts for display
  const counts = {
    all: platformFilteredComments.length,
    important: platformFilteredComments.filter(c => c.isImportant).length,
    rewardEligible: platformFilteredComments.filter(c => 
      c.user.isLoyalFollower && c.likes > 10 && c.sentiment === 'positive'
    ).length,
    flagged: platformFilteredComments.filter(c => c.isPotentiallyHarmful).length
  };
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Filter comments when filter or platform changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      const filtered = filterComments(mockComments, filter, platform);
      const sorted = sortCommentsByRelevance(filtered);
      setFilteredComments(sorted);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [filter, platform]);
  
  const handleFilterChange = (newFilter: CommentFilter) => {
    setFilter(newFilter);
  };
  
  const handlePlatformChange = (newPlatform: SocialPlatform) => {
    setPlatform(newPlatform);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-light tracking-tight mb-2">Comment Management</h1>
          <p className="text-muted-foreground">
            AI-powered system to monitor, analyze, and prioritize your audience's comments across social platforms.
          </p>
        </div>
        
        <SocialPlatformSelector
          activePlatform={platform}
          onPlatformChange={handlePlatformChange}
        />
        
        <FilterPanel
          activeFilter={filter}
          onFilterChange={handleFilterChange}
          counts={counts}
        />
        
        <CommentList 
          comments={filteredComments}
          isLoading={isLoading}
          filter={filter}
        />
      </main>
    </div>
  );
};

export default Index;
