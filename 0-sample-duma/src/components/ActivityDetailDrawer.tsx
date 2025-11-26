import { useState } from 'react';
import { ActivityPost, User, mockUsers, currentUser } from '@/lib/mockData';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Calendar, Users, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { UserProfileDrawer } from './UserProfileDrawer';

interface ActivityDetailDrawerProps {
  activity: ActivityPost;
  host: User;
  isOpen: boolean;
  onClose: () => void;
}

export const ActivityDetailDrawer = ({ activity, host, isOpen, onClose }: ActivityDetailDrawerProps) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const allUsers = [currentUser, ...mockUsers];
  const participantUsers = allUsers.filter((u) => activity.participants.includes(u.id));
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[75vh]">
        <DrawerHeader className="pb-2">
          <DrawerTitle className="text-xl">{activity.description}</DrawerTitle>
          <DrawerDescription>Hosted by {host.name}</DrawerDescription>
        </DrawerHeader>

        <div className="px-4 pb-4 space-y-4 overflow-y-auto max-h-[calc(75vh-180px)]">
          {/* Activity Photo */}
          {activity.activityPhoto && (
            <div className="w-full h-40 rounded-lg overflow-hidden">
              <img 
                src={activity.activityPhoto} 
                alt="Activity" 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Location on Map */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Location</span>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium text-sm">{activity.locationHiddenAddress}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.locationHint}</p>
            </div>
            {/* Map placeholder */}
            <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto text-muted-foreground mb-1" />
                <p className="text-xs text-muted-foreground">Map preview</p>
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Date & Time</span>
            </div>
            <p className="text-foreground text-sm">{format(activity.dateTime, 'EEEE, MMMM d, yyyy • h:mm a')}</p>
          </div>

          {/* Participants */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
              <Users className="h-4 w-4 text-primary" />
              <span>Participants</span>
            </div>
            <p className="text-foreground text-sm">
              {activity.participationCount} / {activity.maxParticipants} spots filled
            </p>
            
            {/* Participant Avatars */}
            {participantUsers.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {participantUsers.map((user) => (
                  <div
                    key={user.id}
                    className="flex flex-col items-center gap-1 cursor-pointer group"
                    onClick={() => setSelectedUser(user)}
                  >
                    <Avatar 
                      data-avatar-clickable
                      className="h-12 w-12 border-2 border-primary/20 group-hover:border-primary transition-colors"
                    >
                      <AvatarImage src={user.profilePhoto} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {user.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Meetup Notes */}
          {activity.meetupNotes && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <FileText className="h-4 w-4 text-primary" />
                <span>Notes from Host</span>
              </div>
              <p className="text-muted-foreground text-sm">{activity.meetupNotes}</p>
            </div>
          )}
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
      
      {/* User Profile Drawer */}
      <UserProfileDrawer
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </Drawer>
  );
};
