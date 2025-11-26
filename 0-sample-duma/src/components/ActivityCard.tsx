import { ActivityPost, User, mockUsers } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, BookOpen, Users, Dumbbell, Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { UserProfileDrawer } from './UserProfileDrawer';

interface ActivityCardProps {
  activity: ActivityPost;
  host: User;
  allUsers?: User[];
}

const activityIcons = {
  workdate: Coffee,
  studydate: BookOpen,
  hangout: Users,
  sports: Dumbbell,
  event: Calendar,
  other: Users
};

export const ActivityCard = ({ activity, host, allUsers = mockUsers }: ActivityCardProps) => {
  const Icon = activityIcons[activity.activityType];
  const spotsLeft = activity.maxParticipants - activity.participationCount;
  const fillPercentage = (activity.participationCount / activity.maxParticipants) * 100;
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  // Get participant users including host
  const participantUsers = [host, ...activity.participants.map(id => 
    allUsers.find(u => u.id === id)
  ).filter(Boolean)] as User[];
  
  return (
    <>
      <Card className="w-full max-w-sm mx-auto overflow-hidden shadow-2xl border-0 relative h-[600px]">
        <ScrollArea className="h-full">
          {/* Main Activity Cover Image */}
          <div className="relative h-96">
            <img 
              src={activity.coverPhoto} 
              alt={activity.description}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          {/* Activity Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-background text-foreground shadow-lg">
              <Icon className="h-3 w-3 mr-1" />
              {activity.activityType}
            </Badge>
          </div>

          {/* Spots Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-background text-foreground shadow-lg">
              {spotsLeft} spots left
            </Badge>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-white/80" />
          </div>

          {/* Content at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="space-y-3">
              {/* Host Info */}
              <div className="flex items-center gap-3">
                <Avatar 
                  data-avatar-clickable
                  className="h-12 w-12 border-2 border-white cursor-pointer"
                  onClick={() => setSelectedUser(host)}
                >
                  <AvatarImage src={host.profilePhoto} alt={host.name} />
                  <AvatarFallback>{host.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white/90">Hosted by</p>
                  <h2 className="text-lg font-bold">{host.name}</h2>
                </div>
              </div>

              <p className="text-xl font-bold text-white">
                {activity.description}
              </p>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <Clock className="h-4 w-4" />
                  <span>{format(activity.dateTime, 'EEE, MMM d • h:mm a')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90">
                  <MapPin className="h-4 w-4" />
                  <span>{activity.locationHint}</span>
                </div>
              </div>

              {/* Participants Section */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/90">
                    {activity.participationCount} of {activity.maxParticipants} spots filled
                  </p>
                  <p className="text-sm font-medium text-white/90">
                    {spotsLeft} left
                  </p>
                </div>
                <Progress value={fillPercentage} className="h-2 bg-white/20" />
                
                {/* Participant Avatars */}
                <div className="flex items-center gap-1 pt-1">
                  {participantUsers.slice(0, 5).map((user, index) => (
                    <Avatar 
                      key={user.id}
                      data-avatar-clickable
                      className="h-10 w-10 border-2 border-white cursor-pointer hover:scale-110 transition-transform"
                      style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                      onClick={() => setSelectedUser(user)}
                    >
                      <AvatarImage src={user.profilePhoto} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                  {participantUsers.length > 5 && (
                    <div className="h-10 w-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs font-bold" style={{ marginLeft: '-8px' }}>
                      +{participantUsers.length - 5}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Below */}
        <div className="bg-card p-6 space-y-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">About {host.name}</h3>
            <p className="text-muted-foreground">{host.bio}</p>
          </div>

          <Separator />

          {/* Activity Photos */}
          {activity.activityPhotos && activity.activityPhotos.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Previous Sessions</h3>
              <div className="grid grid-cols-2 gap-3">
                {activity.activityPhotos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={photo} 
                      alt={`Session ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Past Events */}
          {host.pastEvents && host.pastEvents.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Past Events</h3>
              <div className="space-y-3">
                {host.pastEvents.map((event, index) => {
                  const EventIcon = activityIcons[event.type as keyof typeof activityIcons] || Users;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <EventIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{event.title}</p>
                          <p className="text-xs text-muted-foreground">{event.type}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {event.attendees} joined
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <Separator />

          {/* Interests */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {host.interests.map((interest, idx) => {
                const colors = [
                  'bg-blue-100 text-blue-700',
                  'bg-green-100 text-green-700',
                  'bg-purple-100 text-purple-700',
                  'bg-pink-100 text-pink-700',
                  'bg-yellow-100 text-yellow-700',
                  'bg-red-100 text-red-700',
                ];
                return (
                  <Badge 
                    key={interest} 
                    className={`${colors[idx % colors.length]} border-0`}
                  >
                    {interest}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollArea>
    </Card>
    
    <UserProfileDrawer 
      user={selectedUser}
      isOpen={!!selectedUser}
      onClose={() => setSelectedUser(null)}
    />
  </>
  );
};
