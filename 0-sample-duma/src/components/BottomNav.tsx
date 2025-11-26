import { Home, PlusCircle, Calendar, User, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BottomNavProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav = ({ currentTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'create', label: 'Create', icon: PlusCircle },
    { id: 'home', label: 'Discover', icon: Home },
    { id: 'activities', label: 'Activities', icon: Calendar },
    { id: 'chat', label: 'Chat', icon: MessageCircle }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-col items-center justify-center flex-1 h-full transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-6 w-6 mb-1", isActive && "fill-current")} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
