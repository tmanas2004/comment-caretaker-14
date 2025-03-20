
import React from 'react';
import { Button } from '@/components/ui/button';
import { SocialPlatform } from '@/types';
import { Youtube, Instagram, Facebook, Linkedin, Twitter, Globe } from 'lucide-react';
import { mockSocialProfiles } from '@/utils/commentUtils';

interface SocialPlatformSelectorProps {
  activePlatform: SocialPlatform;
  onPlatformChange: (platform: SocialPlatform) => void;
}

const SocialPlatformSelector: React.FC<SocialPlatformSelectorProps> = ({
  activePlatform,
  onPlatformChange,
}) => {
  const getPlatformIcon = (platform: SocialPlatform) => {
    switch (platform) {
      case 'youtube':
        return <Youtube size={20} className="text-red-600" />;
      case 'instagram':
        return <Instagram size={20} className="text-pink-600" />;
      case 'facebook':
        return <Facebook size={20} className="text-blue-600" />;
      case 'twitter':
        return <Twitter size={20} className="text-sky-500" />;
      case 'linkedin':
        return <Linkedin size={20} className="text-blue-700" />;
      case 'all':
      default:
        return <Globe size={20} className="text-gray-600" />;
    }
  };

  const getPlatformStatus = (platform: SocialPlatform) => {
    if (platform === 'all') return true;
    const profile = mockSocialProfiles.find(p => p.platform === platform);
    return profile ? profile.isConnected : false;
  };

  return (
    <div className="glass-card rounded-lg p-4 mb-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium flex items-center">
          <Globe size={16} className="mr-2" />
          Social Platforms
        </h2>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Button
          variant={activePlatform === 'all' ? 'default' : 'outline'}
          className="flex items-center gap-2 transition-all duration-300"
          onClick={() => onPlatformChange('all')}
        >
          <Globe size={16} />
          <span>All Platforms</span>
        </Button>
        
        {mockSocialProfiles.map((profile) => (
          <Button
            key={profile.platform}
            variant={activePlatform === profile.platform ? 'default' : 'outline'}
            className={`flex items-center gap-2 transition-all duration-300 ${!profile.isConnected ? 'opacity-50' : ''}`}
            onClick={() => profile.isConnected && onPlatformChange(profile.platform)}
            disabled={!profile.isConnected}
          >
            {getPlatformIcon(profile.platform)}
            <span>{profile.platform.charAt(0).toUpperCase() + profile.platform.slice(1)}</span>
            {!profile.isConnected && <span className="text-xs ml-1">(Not Connected)</span>}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialPlatformSelector;
