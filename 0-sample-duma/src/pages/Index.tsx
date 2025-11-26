import { useState } from 'react';
import { BottomNav } from '@/components/BottomNav';
import { SwipeFeed } from '@/components/SwipeFeed';
import { MyActivities } from '@/components/MyActivities';
import { Profile } from '@/components/Profile';
import { HostedActivities } from '@/components/HostedActivities';
import { Chat } from '@/components/Chat';
import logo from '@/assets/logo.png';

const Index = () => {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <SwipeFeed />;
      case 'create':
        return <HostedActivities />;
      case 'activities':
        return <MyActivities />;
      case 'profile':
        return <Profile />;
      case 'chat':
        return <Chat />;
      default:
        return <SwipeFeed />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-center gap-3">
          <img src={logo} alt="Duma Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold text-foreground">Duma</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
    </div>
  );
};

export default Index;
