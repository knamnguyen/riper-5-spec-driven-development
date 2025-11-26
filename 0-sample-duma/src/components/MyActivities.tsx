import { useState } from 'react';
import { mockActivities, mockUsers, mockJoinRequests, currentUser } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, BookOpen, Users, Dumbbell, Calendar, MapPin, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import { ActivityDetailDrawer } from './ActivityDetailDrawer';

const activityIcons = {
  workdate: Coffee,
  studydate: BookOpen,
  hangout: Users,
  sports: Dumbbell,
  event: Calendar,
  other: Users
};

export const MyActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState<{ activity: any; host: any } | null>(null);
  
  const myJoinedActivities = mockJoinRequests
    .filter(req => req.requesterUserId === currentUser.id)
    .map(req => {
      const activity = mockActivities.find(a => a.id === req.activityPostId);
      const host = mockUsers.find(u => u.id === activity?.hostUserId);
      return { activity, host, request: req };
    })
    .filter(item => item.activity && item.host);

  const approvedActivities = myJoinedActivities.filter(item => item.request.status === 'approved');
  const pendingActivities = myJoinedActivities.filter(item => item.request.status === 'pending');

  const ActivityItem = ({ activity, host, request }: any) => {
    const Icon = activityIcons[activity.activityType];
    const isApproved = request.status === 'approved';

    return (
      <Card 
        className="p-0 overflow-hidden border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => isApproved && setSelectedActivity({ activity, host })}
      >
        <div className="flex gap-0 min-h-[140px]">
          {/* Activity Photo */}
          {activity.activityPhoto && (
            <div className="w-36 flex-shrink-0">
              <img 
                src={activity.activityPhoto} 
                alt="Activity" 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold text-foreground text-base line-clamp-2">{activity.description}</h3>
                <p className="text-xs text-muted-foreground mt-1">by {host.name}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
                  <Calendar className="h-3 w-3 flex-shrink-0" />
                  <span>{format(activity.dateTime, 'EEE, MMM d')}</span>
                  <Clock className="h-3 w-3 ml-2 flex-shrink-0" />
                  <span>{format(activity.dateTime, 'h:mm a')}</span>
                </div>
                
                {isApproved ? (
                  <div className="flex items-center gap-1.5 text-xs text-foreground">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span className="font-medium truncate">{activity.locationHint}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span className="truncate">{activity.locationHint} • Pending</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap pt-2">
              <Badge 
                variant="secondary"
                className="text-xs px-2 py-0.5"
              >
                <Icon className="h-2.5 w-2.5 mr-1" />
                {activity.activityType}
              </Badge>
              {isApproved && (
                <Badge variant="outline" className="text-xs px-2 py-0.5 border-primary text-primary">
                  ✓ Confirmed
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <>
      <div className="min-h-[calc(100vh-8rem)] px-4 py-8 pb-24">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-2xl font-bold text-foreground">My Activities</h1>

          {approvedActivities.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 uppercase tracking-wide">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Confirmed
              </h2>
              {approvedActivities.map((item) => (
                <ActivityItem key={item.request.id} {...item} />
              ))}
            </div>
          )}

          {pendingActivities.length > 0 && (
            <>
              {approvedActivities.length > 0 && <Separator className="my-6" />}
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 uppercase tracking-wide">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                  Pending Approval
                </h2>
                {pendingActivities.map((item) => (
                  <ActivityItem key={item.request.id} {...item} />
                ))}
              </div>
            </>
          )}

          {myJoinedActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No activities yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                Start swiping to join activities!
              </p>
            </div>
          )}
        </div>
      </div>

      {selectedActivity && (
        <ActivityDetailDrawer
          activity={selectedActivity.activity}
          host={selectedActivity.host}
          isOpen={!!selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </>
  );
};
