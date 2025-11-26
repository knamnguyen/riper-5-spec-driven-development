import { User } from '@/lib/mockData';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface UserProfileDrawerProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UserProfileDrawer = ({ user, isOpen, onClose }: UserProfileDrawerProps) => {
  if (!user) return null;

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[75vh] bg-background">
        <DrawerHeader className="border-b border-border">
          <DrawerTitle className="text-left text-foreground">{user.name}'s Profile</DrawerTitle>
        </DrawerHeader>
        
        <div className="overflow-y-auto px-4 pb-8">
          {/* Profile Header */}
          <div className="flex items-start gap-4 py-6">
            <img 
              src={user.profilePhoto} 
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-border"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">{user.name}, {user.age}</h2>
              <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm">{user.profession}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{user.locationCity}</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          {user.bio && (
            <>
              <Separator className="my-4" />
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">About</h3>
                <p className="text-sm text-muted-foreground">{user.bio}</p>
              </div>
            </>
          )}

          {/* Interests */}
          {user.interests && user.interests.length > 0 && (
            <>
              <Separator className="my-4" />
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {user.interests.map((interest, idx) => {
                    const colors = [
                      'bg-blue-100 text-blue-700',
                      'bg-green-100 text-green-700',
                      'bg-purple-100 text-purple-700',
                      'bg-pink-100 text-pink-700',
                      'bg-yellow-100 text-yellow-700',
                    ];
                    return (
                      <Badge 
                        key={interest} 
                        className={`${colors[idx % colors.length]} border-0 text-xs`}
                      >
                        {interest}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Past Events */}
          {user.pastEvents && user.pastEvents.length > 0 && (
            <>
              <Separator className="my-4" />
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Past Events</h3>
                <div className="space-y-2">
                  {user.pastEvents.map((event, index) => (
                    <div key={index} className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm font-medium text-foreground">{event.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {event.type} • {event.attendees} attended
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Activity Photos */}
          {user.activityPhotos && user.activityPhotos.length > 0 && (
            <>
              <Separator className="my-4" />
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Activity Photos</h3>
                <div className="grid grid-cols-2 gap-2">
                  {user.activityPhotos.map((photo, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={photo} 
                        alt={`Activity ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
