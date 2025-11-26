import { currentUser } from '@/lib/mockData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase } from 'lucide-react';

export const Profile = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] px-4 py-8">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Profile Header */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="relative h-48 bg-gradient-to-br from-primary via-primary-glow to-secondary" />
          
          <div className="px-6 pb-6">
            <div className="relative -mt-16 mb-4">
              <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                <AvatarImage src={currentUser.profilePhoto} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name[0]}</AvatarFallback>
              </Avatar>
            </div>

            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  {currentUser.name}, {currentUser.age}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <Briefcase className="h-4 w-4" />
                  <span>{currentUser.profession}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{currentUser.locationCity}</span>
                </div>
              </div>

              {currentUser.bio && (
                <p className="text-foreground/80 text-lg">
                  {currentUser.bio}
                </p>
              )}

              {/* Interests */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                  INTERESTS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentUser.interests.map((interest) => (
                    <Badge 
                      key={interest} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 text-center border-0 shadow-md">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Activities</div>
          </Card>
          <Card className="p-4 text-center border-0 shadow-md">
            <div className="text-2xl font-bold text-primary">48</div>
            <div className="text-sm text-muted-foreground">Connections</div>
          </Card>
          <Card className="p-4 text-center border-0 shadow-md">
            <div className="text-2xl font-bold text-primary">4.9</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </Card>
        </div>
      </div>
    </div>
  );
};
