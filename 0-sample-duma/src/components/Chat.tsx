import { useState } from 'react';
import { mockConversations, mockUsers, currentUser } from '@/lib/mockData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export const Chat = () => {
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const allUsers = [currentUser, ...mockUsers];

  const selectedConversation = mockConversations.find(c => c.id === selectedConversationId);
  const selectedUser = selectedConversation 
    ? allUsers.find(u => u.id === selectedConversation.participantId)
    : null;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Messages</h2>
      
      <div className="space-y-3">
        {mockConversations.map((conversation) => {
          const user = allUsers.find(u => u.id === conversation.participantId);
          if (!user) return null;

          return (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversationId(conversation.id)}
              className="bg-card border border-border rounded-2xl p-4 cursor-pointer hover:bg-card/80 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarImage src={user.profilePhoto} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-semibold text-foreground">{user.name}</h3>
                      <p className="text-xs text-muted-foreground">{user.profession}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {formatDistanceToNow(conversation.lastMessageTime, { addSuffix: true })}
                      </span>
                      {conversation.unreadCount > 0 && (
                        <Badge variant="default" className="bg-primary text-primary-foreground h-5 min-w-5 flex items-center justify-center px-1.5">
                          {conversation.unreadCount}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Conversation Drawer */}
      <Drawer open={!!selectedConversationId} onOpenChange={() => setSelectedConversationId(null)}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-primary/20">
                  <AvatarImage src={selectedUser?.profilePhoto} alt={selectedUser?.name} />
                  <AvatarFallback>{selectedUser?.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <DrawerTitle className="text-left">{selectedUser?.name}</DrawerTitle>
                  <p className="text-xs text-muted-foreground">{selectedUser?.profession}</p>
                </div>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4 pb-4">
              {selectedConversation?.messages.map((message) => {
                const isCurrentUser = message.senderId === 'current';
                return (
                  <div
                    key={message.id}
                    className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                        isCurrentUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          isCurrentUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}
                      >
                        {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>

          <div className="border-t border-border p-4">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
