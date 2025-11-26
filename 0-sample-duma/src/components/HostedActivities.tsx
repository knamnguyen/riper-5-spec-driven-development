import { useState } from 'react';
import { mockActivities, mockUsers, mockJoinRequests, currentUser } from '@/lib/mockData';
import { Calendar, MapPin, Users, Clock, Share2, Check, X } from 'lucide-react';
import { ActivityDetailDrawer } from './ActivityDetailDrawer';
import { UserProfileDrawer } from './UserProfileDrawer';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { toast } from '@/hooks/use-toast';

const activityIcons = {
  workdate: '💼',
  studydate: '📚',
  hangout: '🎉',
  sports: '⚽',
  event: '🎪',
  other: '✨',
};

export const HostedActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState<typeof mockActivities[0] | null>(null);
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);

  // Filter activities hosted by current user
  const hostedActivities = mockActivities.filter(
    (activity) => activity.hostUserId === currentUser.id
  );

  // Get pending requests for hosted activities
  const getPendingRequests = (activityId: string) => {
    return mockJoinRequests.filter(
      (request) => request.activityPostId === activityId && request.status === 'pending'
    );
  };

  const handleShareInvite = (activityId: string) => {
    const inviteLink = `${window.location.origin}/invite/${activityId}`;
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Invite link copied!",
      description: "Share this link to invite people to join",
    });
  };

  const handleApprove = (requestId: string, requesterName: string) => {
    toast({
      title: "Request approved!",
      description: `${requesterName} can now join your activity`,
    });
  };

  const handleDecline = (requestId: string, requesterName: string) => {
    toast({
      title: "Request declined",
      description: `${requesterName}'s request was declined`,
    });
  };

  if (hostedActivities.length === 0) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)] px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">No Activities Hosted Yet</h2>
          <p className="text-muted-foreground">Create your first activity to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">Hosting</h2>
        <p className="text-muted-foreground">Manage your activities and join requests</p>
      </div>

      {hostedActivities.map((activity) => {
        const host = mockUsers.find((u) => u.id === activity.hostUserId) || currentUser;
        const pendingRequests = getPendingRequests(activity.id);
        const participantUsers = mockUsers.filter((u) => activity.participants.includes(u.id));

        return (
          <Card
            key={activity.id}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div onClick={() => setSelectedActivity(activity)}>
              {/* Cover Photo */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={activity.coverPhoto}
                  alt={activity.description}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-primary text-primary-foreground">
                    {activityIcons[activity.activityType]} {activity.activityType}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{activity.description}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{activity.dateTime.toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{activity.dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{activity.locationHint}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>
                        {activity.participationCount} / {activity.maxParticipants} spots filled
                      </span>
                    </div>
                  </div>

                  {/* Participants */}
                  {participantUsers.length > 0 && (
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-sm text-muted-foreground">Confirmed:</span>
                      <div className="flex items-center">
                        {participantUsers.slice(0, 5).map((user, index) => (
                          <Avatar
                            key={user.id}
                            data-avatar-clickable
                            className="h-8 w-8 border-2 border-background cursor-pointer hover:scale-110 transition-transform"
                            style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedUser(user);
                            }}
                          >
                            <AvatarImage src={user.profilePhoto} alt={user.name} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                          </Avatar>
                        ))}
                        {participantUsers.length > 5 && (
                          <div className="ml-2 text-sm text-muted-foreground">
                            +{participantUsers.length - 5} more
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Share & Requests Section */}
            <div className="border-t border-border p-4 bg-muted/20 space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleShareInvite(activity.id);
                }}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Invite Link
              </Button>

              {pendingRequests.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">
                    Pending Requests ({pendingRequests.length})
                  </p>
                  {pendingRequests.map((request) => {
                    const requester = mockUsers.find((u) => u.id === request.requesterUserId);
                    if (!requester) return null;

                    return (
                      <div
                        key={request.id}
                        className="flex items-center justify-between gap-3 p-3 bg-background rounded-lg"
                      >
                        <div
                          className="flex items-center gap-3 flex-1 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedUser(requester);
                          }}
                        >
                          <Avatar data-avatar-clickable className="h-10 w-10">
                            <AvatarImage src={requester.profilePhoto} alt={requester.name} />
                            <AvatarFallback>{requester.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm">{requester.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {requester.profession}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="default"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleApprove(request.id, requester.name);
                            }}
                          >
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDecline(request.id, requester.name);
                            }}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </Card>
        );
      })}

      {/* Activity Detail Drawer */}
      {selectedActivity && (
        <ActivityDetailDrawer
          activity={selectedActivity}
          host={mockUsers.find(u => u.id === selectedActivity.hostUserId) || currentUser}
          isOpen={true}
          onClose={() => setSelectedActivity(null)}
        />
      )}

      {/* User Profile Drawer */}
      <UserProfileDrawer
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
};
