import { useState, useRef } from 'react';
import { ActivityCard } from './ActivityCard';
import { Button } from '@/components/ui/button';
import { X, Heart } from 'lucide-react';
import { mockActivities, mockUsers, currentUser } from '@/lib/mockData';

export const SwipeFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const allUsers = [currentUser, ...mockUsers];
  
  const currentActivity = mockActivities[currentIndex];
  const currentHost = allUsers.find(u => u.id === currentActivity?.hostUserId);
  const nextActivity = mockActivities[currentIndex + 1];
  const nextHost = nextActivity ? allUsers.find(u => u.id === nextActivity?.hostUserId) : null;

  const handleSwipe = (liked: boolean) => {
    // Animate out
    const direction = liked ? 1 : -1;
    setDragOffset({ x: direction * 1000, y: 0 });
    
    setTimeout(() => {
      // Reset position FIRST
      setDragOffset({ x: 0, y: 0 });
      
      // Then update index after a brief delay
      setTimeout(() => {
        if (currentIndex < mockActivities.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
      }, 50);
    }, 300);
  };


  if (!currentActivity || !currentHost) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">No more activities to show</p>
      </div>
    );
  }

  const rotation = dragOffset.x * 0.05;
  const opacity = 1 - Math.abs(dragOffset.x) / 1000;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-8 pb-32">
      {/* Stack container */}
      <div className="relative mb-8">
        {/* Next card (behind) */}
        {nextActivity && nextHost && (
          <div 
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{
              transform: 'scale(0.95)',
              opacity: 0.5,
            }}
          >
            <ActivityCard activity={nextActivity} host={nextHost} allUsers={allUsers} />
          </div>
        )}
        
        {/* Current card (front) */}
        <div 
          key={currentIndex}
          className="relative select-none transition-all animate-in fade-in zoom-in-95 duration-300"
          style={{
            transform: `translateX(${dragOffset.x}px) rotate(${rotation}deg)`,
            opacity: Math.max(opacity, 0.5),
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
            zIndex: 10,
          }}
        >
          <ActivityCard activity={currentActivity} host={currentHost} allUsers={allUsers} />
        </div>
      </div>

      {/* Sticky Swipe Actions */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex gap-6 z-40">
        <Button
          size="lg"
          variant="outline"
          className="rounded-full h-16 w-16 border-2 bg-background shadow-lg hover:bg-destructive/10 hover:border-destructive hover:text-destructive"
          onClick={() => handleSwipe(false)}
        >
          <X className="h-8 w-8" />
        </Button>
        <Button
          size="lg"
          className="rounded-full h-16 w-16 bg-primary hover:bg-primary/90 shadow-lg"
          onClick={() => handleSwipe(true)}
        >
          <Heart className="h-8 w-8 fill-white" />
        </Button>
      </div>
    </div>
  );
};
