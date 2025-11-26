export interface User {
  id: string;
  name: string;
  age: number;
  profession: string;
  profilePhoto: string;
  interests: string[];
  locationCity: string;
  bio?: string;
  activityPhotos?: string[];
  pastEvents?: Array<{ title: string; type: string; attendees: number }>;
}

export interface ActivityPost {
  id: string;
  hostUserId: string;
  activityType: 'workdate' | 'studydate' | 'hangout' | 'sports' | 'event' | 'other';
  dateTime: Date;
  description: string;
  maxParticipants: number;
  locationHiddenAddress: string;
  locationHint: string;
  participationCount: number;
  meetupNotes?: string;
  activityPhoto?: string;
  coverPhoto: string;
  activityPhotos: string[];
  participants: string[];
}

export interface JoinRequest {
  id: string;
  activityPostId: string;
  requesterUserId: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  participantId: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  messages: Message[];
}

// Current user - Marc Lou style indie hacker
export const currentUser: User = {
  id: 'current',
  name: 'Marc',
  age: 32,
  profession: 'Indie Hacker & Founder',
  profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  interests: ['workdate', 'hangout', 'events'],
  locationCity: 'San Francisco',
  bio: 'Building in public. Coffee-fueled coding sessions. Always shipping.',
  activityPhotos: [
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
  ],
  pastEvents: [
    { title: 'Startup Founders Brunch', type: 'hangout', attendees: 8 },
    { title: 'Coworking & Coffee', type: 'workdate', attendees: 5 }
  ]
};

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Chen',
    age: 28,
    profession: 'Software Engineer',
    profilePhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    interests: ['workdate', 'sports', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Full-stack dev • Rock climbing enthusiast • Always down for pickleball',
    activityPhotos: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Pickleball Tournament', type: 'sports', attendees: 8 },
      { title: 'Coding Bootcamp Reunion', type: 'hangout', attendees: 15 },
      { title: 'Weekend Hackathon', type: 'workdate', attendees: 12 }
    ]
  },
  {
    id: '2',
    name: 'Sarah Martinez',
    age: 26,
    profession: 'Product Designer',
    profilePhoto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    interests: ['workdate', 'events', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'UI/UX designer • Concert lover • Foodie at heart',
    activityPhotos: [
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'K-Pop Concert Meetup', type: 'event', attendees: 6 },
      { title: 'Ramen Crawl', type: 'hangout', attendees: 8 },
      { title: 'Design Sprint', type: 'workdate', attendees: 5 }
    ]
  },
  {
    id: '3',
    name: 'Marcus Johnson',
    age: 30,
    profession: 'Data Scientist',
    profilePhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    interests: ['sports', 'studydate'],
    locationCity: 'San Francisco',
    bio: 'ML engineer • Marathon runner • Beach volleyball player',
    activityPhotos: [
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Beach Volleyball League', type: 'sports', attendees: 10 },
      { title: 'AI Study Group', type: 'studydate', attendees: 7 },
      { title: 'Ocean Beach Run', type: 'sports', attendees: 12 }
    ]
  },
  {
    id: '4',
    name: 'Emma Williams',
    age: 27,
    profession: 'Marketing Manager',
    profilePhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    interests: ['hangout', 'events', 'workdate'],
    locationCity: 'San Francisco',
    bio: 'Growth hacker • Wine enthusiast • Brunch queen',
    activityPhotos: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Wine Tasting Tour', type: 'hangout', attendees: 8 },
      { title: 'Marketing Conference', type: 'event', attendees: 50 },
      { title: 'Sunday Brunch Club', type: 'hangout', attendees: 10 }
    ]
  },
  {
    id: '5',
    name: 'Jordan Lee',
    age: 29,
    profession: 'UX Researcher',
    profilePhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    interests: ['workdate', 'studydate', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'User researcher • Cafe hopper • Board game addict',
    activityPhotos: [
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606503153255-59d14e20c6a1?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Board Game Night', type: 'hangout', attendees: 8 },
      { title: 'Coffee Shop Coworking', type: 'workdate', attendees: 6 },
      { title: 'UX Research Workshop', type: 'studydate', attendees: 15 }
    ]
  },
  {
    id: '6',
    name: 'Lisa Park',
    age: 25,
    profession: 'Content Creator',
    profilePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    interests: ['hangout', 'events'],
    locationCity: 'San Francisco',
    bio: 'YouTuber • Photography lover • Nature explorer',
    activityPhotos: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Sunset Photo Walk', type: 'hangout', attendees: 12 },
      { title: 'Hiking Lands End', type: 'sports', attendees: 8 },
      { title: 'Creator Meetup', type: 'event', attendees: 25 }
    ]
  },
  {
    id: '7',
    name: 'David Thompson',
    age: 33,
    profession: 'Startup Founder',
    profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    interests: ['workdate', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Building SaaS • Angel investor • Tennis player',
    activityPhotos: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Founder Friday Drinks', type: 'hangout', attendees: 15 },
      { title: 'Tennis Doubles', type: 'sports', attendees: 4 },
      { title: 'Pitch Practice Session', type: 'workdate', attendees: 6 }
    ]
  },
  {
    id: '8',
    name: 'Maya Patel',
    age: 24,
    profession: 'Graphic Designer',
    profilePhoto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    interests: ['events', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Visual artist • Yoga instructor • Music festival goer',
    activityPhotos: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Morning Yoga Session', type: 'sports', attendees: 10 },
      { title: 'Art Gallery Opening', type: 'event', attendees: 30 },
      { title: 'EDM Concert Meetup', type: 'event', attendees: 8 }
    ]
  },
  {
    id: '9',
    name: 'Ryan Kim',
    age: 31,
    profession: 'Product Manager',
    profilePhoto: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    interests: ['sports', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'PM at tech startup • Cyclist • Craft beer lover',
    activityPhotos: [
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618184535578-0f6c0c21e2c6?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Bay Area Cycling Tour', type: 'sports', attendees: 12 },
      { title: 'Brewery Hopping', type: 'hangout', attendees: 8 },
      { title: 'Golden Gate Bike Ride', type: 'sports', attendees: 10 }
    ]
  },
  {
    id: '10',
    name: 'Zoe Anderson',
    age: 26,
    profession: 'Social Media Manager',
    profilePhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    interests: ['events', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Social media guru • Bookworm • Karaoke enthusiast',
    activityPhotos: [
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Karaoke Night', type: 'hangout', attendees: 12 },
      { title: 'Book Club Meeting', type: 'studydate', attendees: 8 },
      { title: 'Indie Concert', type: 'event', attendees: 6 }
    ]
  },
  {
    id: '11',
    name: 'James Rodriguez',
    age: 35,
    profession: 'Chef',
    profilePhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    interests: ['hangout', 'events'],
    locationCity: 'San Francisco',
    bio: 'Executive chef • Food truck owner • Cooking class host',
    activityPhotos: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Cooking Class: Italian', type: 'event', attendees: 10 },
      { title: 'Food Truck Rally', type: 'hangout', attendees: 20 },
      { title: 'Farm to Table Dinner', type: 'hangout', attendees: 12 }
    ]
  },
  {
    id: '12',
    name: 'Olivia Chang',
    age: 27,
    profession: 'Financial Analyst',
    profilePhoto: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop',
    interests: ['sports', 'workdate'],
    locationCity: 'San Francisco',
    bio: 'Numbers person • Rock climbing addict • Coffee connoisseur',
    activityPhotos: [
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Indoor Climbing Session', type: 'sports', attendees: 6 },
      { title: 'Finance Networking', type: 'workdate', attendees: 15 },
      { title: 'Morning Coffee Cowork', type: 'workdate', attendees: 4 }
    ]
  },
  {
    id: '13',
    name: 'Tyler Brooks',
    age: 29,
    profession: 'Video Editor',
    profilePhoto: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop',
    interests: ['events', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Freelance editor • Film buff • Jazz lover',
    activityPhotos: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Jazz Club Night', type: 'event', attendees: 8 },
      { title: 'Film Screening', type: 'event', attendees: 15 },
      { title: 'Independent Movie Night', type: 'hangout', attendees: 6 }
    ]
  },
  {
    id: '14',
    name: 'Nina Garcia',
    age: 23,
    profession: 'Graduate Student',
    profilePhoto: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
    interests: ['studydate', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'PhD candidate • Language learner • Meditation practitioner',
    activityPhotos: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Language Exchange Cafe', type: 'studydate', attendees: 10 },
      { title: 'Meditation Circle', type: 'hangout', attendees: 12 },
      { title: 'Study Group Session', type: 'studydate', attendees: 6 }
    ]
  },
  {
    id: '15',
    name: 'Chris Murphy',
    age: 32,
    profession: 'Sales Director',
    profilePhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    interests: ['sports', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Sales leader • Golf enthusiast • Stand-up comedy fan',
    activityPhotos: [
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1533923156502-be31530547cd?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Golf Outing', type: 'sports', attendees: 4 },
      { title: 'Comedy Show Night', type: 'event', attendees: 10 },
      { title: 'Networking Happy Hour', type: 'hangout', attendees: 20 }
    ]
  },
  {
    id: '16',
    name: 'Aria Shah',
    age: 25,
    profession: 'Software Developer',
    profilePhoto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
    interests: ['workdate', 'events'],
    locationCity: 'San Francisco',
    bio: 'Backend engineer • Hackathon organizer • K-pop fan',
    activityPhotos: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549451371-64aa98a6f660?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Tech Hackathon', type: 'workdate', attendees: 30 },
      { title: 'K-Pop Dance Class', type: 'event', attendees: 15 },
      { title: 'Late Night Coding', type: 'workdate', attendees: 8 }
    ]
  },
  {
    id: '17',
    name: 'Ethan Foster',
    age: 28,
    profession: 'Photographer',
    profilePhoto: 'https://images.unsplash.com/photo-1520409364224-63400afe26e5?w=400&h=400&fit=crop',
    interests: ['hangout', 'events'],
    locationCity: 'San Francisco',
    bio: 'Portrait photographer • Outdoor adventurer • Drone pilot',
    activityPhotos: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Golden Hour Photo Walk', type: 'hangout', attendees: 10 },
      { title: 'Drone Flying Meetup', type: 'event', attendees: 8 },
      { title: 'Landscape Photography Trip', type: 'hangout', attendees: 6 }
    ]
  },
  {
    id: '18',
    name: 'Sophia Wilson',
    age: 30,
    profession: 'Architect',
    profilePhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    interests: ['hangout', 'events'],
    locationCity: 'San Francisco',
    bio: 'Urban designer • Museum explorer • Wine tasting enthusiast',
    activityPhotos: [
      'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'SFMOMA Visit', type: 'event', attendees: 8 },
      { title: 'Architecture Walking Tour', type: 'hangout', attendees: 12 },
      { title: 'Napa Valley Day Trip', type: 'hangout', attendees: 6 }
    ]
  },
  {
    id: '19',
    name: 'Miguel Santos',
    age: 27,
    profession: 'Personal Trainer',
    profilePhoto: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=400&h=400&fit=crop',
    interests: ['sports', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Fitness coach • Marathon runner • Nutrition enthusiast',
    activityPhotos: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Group Workout Session', type: 'sports', attendees: 15 },
      { title: 'Bay to Breakers Run', type: 'sports', attendees: 8 },
      { title: 'Healthy Cooking Demo', type: 'event', attendees: 12 }
    ]
  },
  {
    id: '20',
    name: 'Hannah Lee',
    age: 24,
    profession: 'Journalist',
    profilePhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
    interests: ['events', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Tech reporter • Podcast host • Open mic performer',
    activityPhotos: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Open Mic Night', type: 'event', attendees: 20 },
      { title: 'Podcast Recording Meetup', type: 'workdate', attendees: 6 },
      { title: 'Press Conference After Party', type: 'hangout', attendees: 15 }
    ]
  },
  {
    id: '21',
    name: 'Jake Morrison',
    age: 31,
    profession: 'DevOps Engineer',
    profilePhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    interests: ['workdate', 'sports'],
    locationCity: 'San Francisco',
    bio: 'Cloud architect • Soccer player • Homebrewer',
    activityPhotos: [
      'https://images.unsplash.com/photo-1529900672901-387d50491a37?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606503153255-59d14e20c6a1?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Sunday Soccer League', type: 'sports', attendees: 12 },
      { title: 'Brewing Workshop', type: 'event', attendees: 10 },
      { title: 'DevOps Meetup', type: 'workdate', attendees: 25 }
    ]
  },
  {
    id: '22',
    name: 'Isabella Torres',
    age: 26,
    profession: 'Fashion Designer',
    profilePhoto: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop',
    interests: ['events', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Sustainable fashion advocate • Vintage collector • Salsa dancer',
    activityPhotos: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Salsa Night', type: 'event', attendees: 20 },
      { title: 'Vintage Market Tour', type: 'hangout', attendees: 8 },
      { title: 'Fashion Show Afterparty', type: 'event', attendees: 30 }
    ]
  },
  {
    id: '23',
    name: 'Lucas Bennett',
    age: 34,
    profession: 'Music Producer',
    profilePhoto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
    interests: ['events', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Producer/DJ • Vinyl collector • Live music fanatic',
    activityPhotos: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Underground DJ Night', type: 'event', attendees: 50 },
      { title: 'Record Store Tour', type: 'hangout', attendees: 6 },
      { title: 'Warehouse Concert', type: 'event', attendees: 100 }
    ]
  },
  {
    id: '24',
    name: 'Chloe Adams',
    age: 25,
    profession: 'Environmental Scientist',
    profilePhoto: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
    interests: ['sports', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Climate researcher • Trail runner • Ocean swimmer',
    activityPhotos: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Ocean Beach Swim', type: 'sports', attendees: 8 },
      { title: 'Trail Running Group', type: 'sports', attendees: 10 },
      { title: 'Environmental Cleanup', type: 'hangout', attendees: 25 }
    ]
  },
  {
    id: '25',
    name: 'Noah Jackson',
    age: 29,
    profession: 'Lawyer',
    profilePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    interests: ['workdate', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Corporate attorney • Whiskey collector • Basketball fan',
    activityPhotos: [
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Whiskey Tasting', type: 'hangout', attendees: 8 },
      { title: 'Warriors Watch Party', type: 'event', attendees: 20 },
      { title: 'Legal Networking Event', type: 'workdate', attendees: 30 }
    ]
  },
  {
    id: '26',
    name: 'Ava Martinez',
    age: 27,
    profession: 'HR Manager',
    profilePhoto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
    interests: ['hangout', 'events'],
    locationCity: 'San Francisco',
    bio: 'People operations • Pilates instructor • Brunch organizer',
    activityPhotos: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Pilates Morning Class', type: 'sports', attendees: 12 },
      { title: 'HR Professionals Meetup', type: 'workdate', attendees: 20 },
      { title: 'Bottomless Brunch', type: 'hangout', attendees: 10 }
    ]
  },
  {
    id: '27',
    name: 'Daniel Kim',
    age: 33,
    profession: 'Real Estate Agent',
    profilePhoto: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    interests: ['sports', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'Property specialist • Golfer • Food tour enthusiast',
    activityPhotos: [
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Golf Club Meetup', type: 'sports', attendees: 8 },
      { title: 'Food Truck Festival', type: 'hangout', attendees: 15 },
      { title: 'Real Estate Networking', type: 'workdate', attendees: 25 }
    ]
  },
  {
    id: '28',
    name: 'Grace Thompson',
    age: 26,
    profession: 'Nurse',
    profilePhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    interests: ['sports', 'hangout'],
    locationCity: 'San Francisco',
    bio: 'ICU nurse • Marathon runner • Baking enthusiast',
    activityPhotos: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Charity Run', type: 'sports', attendees: 50 },
      { title: 'Baking Class Workshop', type: 'event', attendees: 10 },
      { title: 'Hospital Fundraiser', type: 'event', attendees: 100 }
    ]
  },
  {
    id: '29',
    name: 'Leo Rivera',
    age: 28,
    profession: 'Data Analyst',
    profilePhoto: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=400&fit=crop',
    interests: ['workdate', 'studydate'],
    locationCity: 'San Francisco',
    bio: 'Analytics pro • Chess player • Podcast listener',
    activityPhotos: [
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606504275578-4226fc914e25?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Chess Tournament', type: 'hangout', attendees: 16 },
      { title: 'Data Science Bootcamp', type: 'studydate', attendees: 20 },
      { title: 'Coworking at WeWork', type: 'workdate', attendees: 8 }
    ]
  },
  {
    id: '30',
    name: 'Violet Chen',
    age: 24,
    profession: 'Animation Artist',
    profilePhoto: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=400&fit=crop',
    interests: ['events', 'hangout'],
    locationCity: 'San Francisco',
    bio: '3D animator • Cosplay creator • Anime convention regular',
    activityPhotos: [
      'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
    ],
    pastEvents: [
      { title: 'Comic Con Meetup', type: 'event', attendees: 30 },
      { title: 'Anime Screening Night', type: 'hangout', attendees: 12 },
      { title: 'Digital Art Workshop', type: 'event', attendees: 15 }
    ]
  }
];

export const mockActivities: ActivityPost[] = [
  {
    id: '1',
    hostUserId: 'current',
    activityType: 'workdate',
    dateTime: new Date(Date.now() + 3 * 60 * 60 * 1000),
    description: '☕ Coffee shop coding session',
    maxParticipants: 4,
    locationHiddenAddress: 'Blue Bottle Coffee, 315 Linden St, San Francisco, CA 94102',
    locationHint: 'Hayes Valley',
    participationCount: 2,
    meetupNotes: 'Bring your laptop and headphones. Working on side projects - happy to share tips!',
    activityPhoto: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
    ],
    participants: ['2', '5']
  },
  {
    id: '2',
    hostUserId: '1',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 5 * 60 * 60 * 1000),
    description: '🏓 Pickleball doubles match',
    maxParticipants: 4,
    locationHiddenAddress: 'Mission Dolores Park, 19th St & Dolores St',
    locationHint: 'Mission District',
    participationCount: 3,
    meetupNotes: 'Beginners welcome! We have extra paddles. Come for fun, not competition.',
    activityPhoto: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop'
    ],
    participants: ['3', '9', '19']
  },
  {
    id: '3',
    hostUserId: '6',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
    description: '🥾 Lands End coastal hike',
    maxParticipants: 8,
    locationHiddenAddress: 'Lands End Trailhead, 680 Point Lobos Ave',
    locationHint: 'Outer Richmond',
    participationCount: 6,
    meetupNotes: 'Moderate 3-mile trail with stunning views. Bring water and wear good shoes!',
    activityPhoto: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop'
    ],
    participants: ['17', '24', '3', '12', '19']
  },
  {
    id: '4',
    hostUserId: '24',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 8 * 60 * 60 * 1000),
    description: '🏊 Morning ocean swim at Aquatic Park',
    maxParticipants: 6,
    locationHiddenAddress: 'Aquatic Park, 499 Jefferson St',
    locationHint: 'Fisherman\'s Wharf',
    participationCount: 4,
    meetupNotes: 'Wetsuit recommended! Experienced swimmers only. Meet at the beach entrance.',
    activityPhoto: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&h=600&fit=crop'
    ],
    participants: ['3', '19', '28']
  },
  {
    id: '5',
    hostUserId: '2',
    activityType: 'event',
    dateTime: new Date(Date.now() + 48 * 60 * 60 * 1000),
    description: '🎤 NewJeans concert meetup',
    maxParticipants: 6,
    locationHiddenAddress: 'Chase Center, 1 Warriors Way',
    locationHint: 'Mission Bay',
    participationCount: 5,
    meetupNotes: 'K-pop fans unite! Meet before the concert for pre-show dinner. I have lightsticks!',
    activityPhoto: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop'
    ],
    participants: ['16', '10', '8', '30']
  },
  {
    id: '6',
    hostUserId: '11',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
    description: '🍜 Ramen crawl in Japantown',
    maxParticipants: 5,
    locationHiddenAddress: 'Japan Center, 1737 Post St',
    locationHint: 'Japantown',
    participationCount: 4,
    meetupNotes: 'Trying 3 different ramen spots! Come hungry. Split checks at each place.',
    activityPhoto: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop'
    ],
    participants: ['2', '4', '10']
  },
  {
    id: '7',
    hostUserId: '7',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 20 * 60 * 60 * 1000),
    description: '🎾 Saturday morning tennis',
    maxParticipants: 4,
    locationHiddenAddress: 'Golden Gate Park Tennis Center, 501 John F Kennedy Dr',
    locationHint: 'Golden Gate Park',
    participationCount: 3,
    meetupNotes: 'Intermediate level doubles. Bring your own racquet. Courts are reserved!',
    activityPhoto: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&h=600&fit=crop'
    ],
    participants: ['3', '15']
  },
  {
    id: '8',
    hostUserId: '5',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
    description: '🎲 Board game night at cafe',
    maxParticipants: 6,
    locationHiddenAddress: 'The Game Parlour, 3630 Balboa St',
    locationHint: 'Outer Richmond',
    participationCount: 5,
    meetupNotes: 'Catan, Ticket to Ride, and more! All skill levels welcome. Cafe has great snacks.',
    activityPhoto: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1606503153255-59d14e20c6a1?w=800&h=600&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606503153255-59d14e20c6a1?w=800&h=600&fit=crop'
    ],
    participants: ['10', '14', '29', '1']
  },
  {
    id: '9',
    hostUserId: '18',
    activityType: 'event',
    dateTime: new Date(Date.now() + 72 * 60 * 60 * 1000),
    description: '🎨 SFMOMA modern art tour',
    maxParticipants: 8,
    locationHiddenAddress: 'San Francisco Museum of Modern Art, 151 3rd St',
    locationHint: 'SoMa',
    participationCount: 6,
    meetupNotes: 'Exploring the new exhibition! Museum tickets $25. Coffee after at nearby cafe.',
    activityPhoto: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=800&h=600&fit=crop'
    ],
    participants: ['8', '22', '6', '17', '30']
  },
  {
    id: '10',
    hostUserId: '4',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 12 * 60 * 60 * 1000),
    description: '🍷 Wine tasting in Nob Hill',
    maxParticipants: 6,
    locationHiddenAddress: 'The Fairmont Hotel, 950 Mason St',
    locationHint: 'Nob Hill',
    participationCount: 5,
    meetupNotes: 'Trying California wines! $30 flight. Great views from the terrace.',
    activityPhoto: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop'
    ],
    participants: ['18', '25', '27', '7']
  },
  {
    id: '11',
    hostUserId: '12',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 10 * 60 * 60 * 1000),
    description: '🧗 Indoor rock climbing session',
    maxParticipants: 6,
    locationHiddenAddress: 'Mission Cliffs, 2295 Harrison St',
    locationHint: 'Mission District',
    participationCount: 4,
    meetupNotes: 'All levels welcome! Day pass $28. Equipment rental available. Great workout!',
    activityPhoto: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=600&fit=crop'
    ],
    participants: ['1', '3', '24']
  },
  {
    id: '12',
    hostUserId: '9',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 28 * 60 * 60 * 1000),
    description: '🚴 Golden Gate Bridge bike ride',
    maxParticipants: 8,
    locationHiddenAddress: 'Crissy Field, 1199 East Beach',
    locationHint: 'Presidio',
    participationCount: 6,
    meetupNotes: 'Cycling across the bridge to Sausalito! Bring your own bike or rent nearby. 2-hour ride.',
    activityPhoto: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&h=600&fit=crop'
    ],
    participants: ['7', '24', '19', '3', '28']
  },
  {
    id: '13',
    hostUserId: '10',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 18 * 60 * 60 * 1000),
    description: '🎤 Karaoke night in Korea town',
    maxParticipants: 8,
    locationHiddenAddress: 'Mint Karaoke, 1942 University Ave, Berkeley',
    locationHint: 'Berkeley',
    participationCount: 7,
    meetupNotes: 'Private room booked! $15 per person. No judgment zone - just fun vibes!',
    activityPhoto: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&h=600&fit=crop'
    ],
    participants: ['2', '16', '20', '8', '30', '22']
  },
  {
    id: '14',
    hostUserId: '13',
    activityType: 'event',
    dateTime: new Date(Date.now() + 96 * 60 * 60 * 1000),
    description: '🎷 Jazz night at SFJAZZ Center',
    maxParticipants: 6,
    locationHiddenAddress: 'SFJAZZ Center, 201 Franklin St',
    locationHint: 'Hayes Valley',
    participationCount: 4,
    meetupNotes: 'Live performance! Tickets $45. Meeting for pre-show drinks at 7pm.',
    activityPhoto: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop'
    ],
    participants: ['23', '18', '25']
  },
  {
    id: '15',
    hostUserId: '16',
    activityType: 'workdate',
    dateTime: new Date(Date.now() + 7 * 60 * 60 * 1000),
    description: '💻 Late night coding hackathon',
    maxParticipants: 10,
    locationHiddenAddress: 'General Assembly, 225 Bush St',
    locationHint: 'Financial District',
    participationCount: 8,
    meetupNotes: 'Building projects until midnight! Pizza provided. Bring ideas and energy.',
    activityPhoto: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
    ],
    participants: ['1', 'current', '29', '5', '21', '12', '7']
  },
  {
    id: '16',
    hostUserId: '14',
    activityType: 'studydate',
    dateTime: new Date(Date.now() + 14 * 60 * 60 * 1000),
    description: '🗣️ Spanish language exchange',
    maxParticipants: 8,
    locationHiddenAddress: 'Philz Coffee, 2140 Polk St',
    locationHint: 'Russian Hill',
    participationCount: 6,
    meetupNotes: 'Practice Spanish conversation! All levels welcome. Native speakers helping out.',
    activityPhoto: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop'
    ],
    participants: ['11', '22', '4', '18', '20']
  },
  {
    id: '17',
    hostUserId: '8',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 16 * 60 * 60 * 1000),
    description: '🧘 Sunset yoga at Marina Green',
    maxParticipants: 12,
    locationHiddenAddress: 'Marina Green, Marina Blvd',
    locationHint: 'Marina District',
    participationCount: 10,
    meetupNotes: 'Free outdoor yoga session! Bring your mat and water. Amazing sunset views.',
    activityPhoto: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    participants: ['26', '24', '28', '14', '18', '6', '2', '8', '4']
  },
  {
    id: '18',
    hostUserId: '17',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 30 * 60 * 60 * 1000),
    description: '📸 Golden hour photography walk',
    maxParticipants: 10,
    locationHiddenAddress: 'Palace of Fine Arts, 3601 Lyon St',
    locationHint: 'Marina District',
    participationCount: 8,
    meetupNotes: 'Capturing the best light! All cameras welcome. Tips for beginners provided.',
    activityPhoto: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ],
    participants: ['6', '30', '8', '2', '18', '22', '10']
  },
  {
    id: '19',
    hostUserId: '19',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 22 * 60 * 60 * 1000),
    description: '🏃 Morning run club - Bay Trail',
    maxParticipants: 15,
    locationHiddenAddress: 'Embarcadero, Ferry Building',
    locationHint: 'Embarcadero',
    participationCount: 12,
    meetupNotes: '5K easy pace run. All fitness levels welcome! Coffee after at Ferry Building.',
    activityPhoto: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop'
    ],
    participants: ['28', '24', '3', '9', '12', '1', '7', '15', '19', '21', '26']
  },
  {
    id: '20',
    hostUserId: '11',
    activityType: 'event',
    dateTime: new Date(Date.now() + 36 * 60 * 60 * 1000),
    description: '👨‍🍳 Italian cooking class',
    maxParticipants: 8,
    locationHiddenAddress: '18 Reasons, 3674 18th St',
    locationHint: 'Mission District',
    participationCount: 7,
    meetupNotes: 'Making fresh pasta from scratch! $55 includes ingredients and wine. Delicious!',
    activityPhoto: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop'
    ],
    participants: ['4', '18', '22', '26', '2', '10']
  },
  {
    id: '21',
    hostUserId: '21',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 40 * 60 * 60 * 1000),
    description: '⚽ Sunday pickup soccer',
    maxParticipants: 14,
    locationHiddenAddress: 'Kezar Stadium, 755 Stanyan St',
    locationHint: 'Golden Gate Park',
    participationCount: 12,
    meetupNotes: 'Casual game, all skill levels! Bring cleats and shin guards. Water breaks included.',
    activityPhoto: 'https://images.unsplash.com/photo-1529900672901-387d50491a37?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1529900672901-387d50491a37?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop'
    ],
    participants: ['9', '15', '19', '3', '1', '7', '25', '27', '12', '28', '21']
  },
  {
    id: '22',
    hostUserId: '20',
    activityType: 'event',
    dateTime: new Date(Date.now() + 50 * 60 * 60 * 1000),
    description: '🎭 Open mic comedy night',
    maxParticipants: 10,
    locationHiddenAddress: 'Punch Line, 444 Battery St',
    locationHint: 'Financial District',
    participationCount: 8,
    meetupNotes: 'Supporting local comedians! $15 cover with 2-drink minimum. Guaranteed laughs.',
    activityPhoto: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800&h=600&fit=crop'
    ],
    participants: ['15', '10', '5', '13', '25', '7', '4']
  },
  {
    id: '23',
    hostUserId: '22',
    activityType: 'event',
    dateTime: new Date(Date.now() + 60 * 60 * 60 * 1000),
    description: '💃 Salsa dancing lesson & social',
    maxParticipants: 12,
    locationHiddenAddress: 'Roccapulco Supper Club, 3140 Mission St',
    locationHint: 'Mission District',
    participationCount: 10,
    meetupNotes: 'Beginner-friendly lesson at 8pm, social dancing after! $20 includes lesson.',
    activityPhoto: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1445384763658-0400939829cd?w=800&h=600&fit=crop'
    ],
    participants: ['8', '11', '18', '14', '26', '4', '2', '10', '6']
  },
  {
    id: '24',
    hostUserId: '23',
    activityType: 'event',
    dateTime: new Date(Date.now() + 80 * 60 * 60 * 1000),
    description: '🎵 Underground DJ set at warehouse',
    maxParticipants: 20,
    locationHiddenAddress: 'Secret location (DM for address)',
    locationHint: 'SoMa',
    participationCount: 16,
    meetupNotes: 'House and techno vibes! $15 entry. Location sent day-of. Bring good energy!',
    activityPhoto: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop'
    ],
    participants: ['8', '2', '16', '30', '10', '22', '20', '13', '17', '6', '18', '4', '26', '12', '1']
  },
  {
    id: '25',
    hostUserId: '26',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 26 * 60 * 60 * 1000),
    description: '🥞 Bottomless brunch at Mission',
    maxParticipants: 8,
    locationHiddenAddress: 'Foreign Cinema, 2534 Mission St',
    locationHint: 'Mission District',
    participationCount: 7,
    meetupNotes: 'Mimosas and good vibes! $45 per person. Make new friends over brunch.',
    activityPhoto: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop'
    ],
    participants: ['4', '2', '10', '18', '22', '8']
  },
  {
    id: '26',
    hostUserId: '27',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 44 * 60 * 60 * 1000),
    description: '🍔 Food truck festival hopping',
    maxParticipants: 10,
    locationHiddenAddress: 'Off the Grid, Fort Mason',
    locationHint: 'Marina District',
    participationCount: 8,
    meetupNotes: 'Trying different cuisines! Bring cash. We\'ll share and taste everything.',
    activityPhoto: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop'
    ],
    participants: ['11', '4', '9', '15', '25', '2', '10']
  },
  {
    id: '27',
    hostUserId: '25',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 54 * 60 * 60 * 1000),
    description: '🥃 Whiskey tasting experience',
    maxParticipants: 6,
    locationHiddenAddress: 'Hard Water, Pier 3',
    locationHint: 'Embarcadero',
    participationCount: 5,
    meetupNotes: 'Sampling rare bourbons! $60 tasting flight. Learn about whiskey making.',
    activityPhoto: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527281400156-5facc8e8c001?w=800&h=600&fit=crop'
    ],
    participants: ['7', '15', '27', '9']
  },
  {
    id: '28',
    hostUserId: '29',
    activityType: 'studydate',
    dateTime: new Date(Date.now() + 15 * 60 * 60 * 1000),
    description: '♟️ Chess club meetup',
    maxParticipants: 10,
    locationHiddenAddress: 'Mechanics Institute, 57 Post St',
    locationHint: 'Downtown',
    participationCount: 8,
    meetupNotes: 'All skill levels! Play casual games, learn strategies. Historic chess club.',
    activityPhoto: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606504275578-4226fc914e25?w=800&h=600&fit=crop'
    ],
    participants: ['5', '14', '16', '1', '21', '7', '12']
  },
  {
    id: '29',
    hostUserId: '30',
    activityType: 'event',
    dateTime: new Date(Date.now() + 120 * 60 * 60 * 1000),
    description: '🎮 Anime convention meetup',
    maxParticipants: 12,
    locationHiddenAddress: 'Moscone Center, 747 Howard St',
    locationHint: 'SoMa',
    participationCount: 10,
    meetupNotes: 'Cosplay welcome! Day pass $30. Meeting at main entrance at 10am.',
    activityPhoto: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&h=600&fit=crop'
    ],
    participants: ['2', '16', '8', '10', '20', '6', '22', '13', '17']
  },
  {
    id: '30',
    hostUserId: '15',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 32 * 60 * 60 * 1000),
    description: '⛳ Golf at Lincoln Park',
    maxParticipants: 4,
    locationHiddenAddress: 'Lincoln Park Golf Course, 300 34th Ave',
    locationHint: 'Outer Richmond',
    participationCount: 3,
    meetupNotes: '9 holes, ocean views! Intermediate level. Tee time booked for 10am.',
    activityPhoto: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop'
    ],
    participants: ['27', '25']
  },
  {
    id: '31',
    hostUserId: '3',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 52 * 60 * 60 * 1000),
    description: '🏐 Beach volleyball at Ocean Beach',
    maxParticipants: 8,
    locationHiddenAddress: 'Ocean Beach, near Balboa St',
    locationHint: 'Outer Sunset',
    participationCount: 6,
    meetupNotes: 'Fun pickup games! Bring sunscreen. We play rain or shine (mostly shine).',
    activityPhoto: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ],
    participants: ['19', '24', '1', '9', '21']
  },
  {
    id: '32',
    hostUserId: '28',
    activityType: 'event',
    dateTime: new Date(Date.now() + 64 * 60 * 60 * 1000),
    description: '🧁 Dessert baking workshop',
    maxParticipants: 10,
    locationHiddenAddress: 'Sur La Table, 845 Market St',
    locationHint: 'SoMa',
    participationCount: 8,
    meetupNotes: 'French pastry making! $85 includes all ingredients. Take home your creations.',
    activityPhoto: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1557979619-445218f326b9?w=800&h=600&fit=crop'
    ],
    participants: ['11', '26', '4', '22', '2', '18', '10']
  },
  {
    id: '33',
    hostUserId: '5',
    activityType: 'workdate',
    dateTime: new Date(Date.now() + 9 * 60 * 60 * 1000),
    description: '📖 Book club discussion + cowork',
    maxParticipants: 8,
    locationHiddenAddress: 'The Interval, 2 Marina Blvd',
    locationHint: 'Marina District',
    participationCount: 6,
    meetupNotes: 'Discussing "Atomic Habits" then coworking. Coffee included. Bring the book!',
    activityPhoto: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop'
    ],
    participants: ['10', '14', '29', '16', '20']
  },
  {
    id: '34',
    hostUserId: '14',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 38 * 60 * 60 * 1000),
    description: '🧘‍♀️ Meditation & mindfulness circle',
    maxParticipants: 15,
    locationHiddenAddress: 'Japanese Tea Garden, Golden Gate Park',
    locationHint: 'Golden Gate Park',
    participationCount: 12,
    meetupNotes: 'Guided meditation in serene setting. Free! Bring cushion or mat. Beginner-friendly.',
    activityPhoto: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop'
    ],
    participants: ['8', '26', '24', '18', '6', '28', '4', '2', '22', '10', '20']
  },
  {
    id: '35',
    hostUserId: '6',
    activityType: 'event',
    dateTime: new Date(Date.now() + 84 * 60 * 60 * 1000),
    description: '🎬 Indie film screening & discussion',
    maxParticipants: 12,
    locationHiddenAddress: 'Roxie Theater, 3117 16th St',
    locationHint: 'Mission District',
    participationCount: 10,
    meetupNotes: 'Arthouse cinema! $12 tickets. Director Q&A after. Drinks at nearby bar.',
    activityPhoto: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop'
    ],
    participants: ['13', '17', '20', '30', '10', '5', '22', '18', '8']
  },
  {
    id: '36',
    hostUserId: '21',
    activityType: 'event',
    dateTime: new Date(Date.now() + 48 * 60 * 60 * 1000),
    description: '₿ Web3 & NFT networking mixer',
    maxParticipants: 20,
    locationHiddenAddress: 'NFT Bay, 988 Market St',
    locationHint: 'Mid-Market',
    participationCount: 16,
    meetupNotes: 'Crypto enthusiasts welcome! Discussing DeFi, DAOs, and new projects. Free drinks!',
    activityPhoto: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop'
    ],
    participants: ['29', '1', 'current', '7', '16', '23', '27', '12', '19', '25', '5', '21', '9', '15', '3']
  },
  {
    id: '37',
    hostUserId: '8',
    activityType: 'event',
    dateTime: new Date(Date.now() + 60 * 60 * 60 * 1000),
    description: '🎨 Watercolor painting class',
    maxParticipants: 12,
    locationHiddenAddress: 'Atelier Gallery, 747 Clement St',
    locationHint: 'Inner Richmond',
    participationCount: 9,
    meetupNotes: 'Beginner-friendly! All materials provided. Paint landscapes together. $45 per person.',
    activityPhoto: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop'
    ],
    participants: ['18', '6', '30', '22', '4', '26', '10', '14']
  },
  {
    id: '38',
    hostUserId: '9',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 18 * 60 * 60 * 1000),
    description: '🚴 Bay to Breakers bike ride',
    maxParticipants: 15,
    locationHiddenAddress: 'Ferry Building, Embarcadero',
    locationHint: 'Embarcadero',
    participationCount: 12,
    meetupNotes: 'Scenic 15-mile ride! All fitness levels. Stops for photos. Brunch after at Fisherman\'s Wharf.',
    activityPhoto: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=600&fit=crop'
    ],
    participants: ['19', '28', '24', '3', '7', '15', '1', '21', '12', '27', '5']
  },
  {
    id: '39',
    hostUserId: '3',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 26 * 60 * 60 * 1000),
    description: '🏀 Pickup basketball at the Presidio',
    maxParticipants: 10,
    locationHiddenAddress: 'Presidio YMCA, 63 Funston Ave',
    locationHint: 'Presidio',
    participationCount: 8,
    meetupNotes: 'Full court games! Bring your A-game. Indoor court. Water fountains available.',
    activityPhoto: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=600&fit=crop'
    ],
    participants: ['21', '15', '9', '19', '1', '7', '24']
  },
  {
    id: '40',
    hostUserId: '5',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 11 * 60 * 60 * 1000),
    description: '☕ SF cafe hopping tour',
    maxParticipants: 8,
    locationHiddenAddress: 'Blue Bottle Coffee, 66 Mint St',
    locationHint: 'SoMa',
    participationCount: 6,
    meetupNotes: 'Visiting 5 best cafes in SF! Coffee tasting journey. Bring appetite for caffeine!',
    activityPhoto: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop'
    ],
    participants: ['12', '14', '29', '4', '10']
  },
  {
    id: '41',
    hostUserId: '7',
    activityType: 'workdate',
    dateTime: new Date(Date.now() + 15 * 60 * 60 * 1000),
    description: '🤝 Startup founders networking breakfast',
    maxParticipants: 15,
    locationHiddenAddress: 'The Battery, 717 Battery St',
    locationHint: 'Financial District',
    participationCount: 12,
    meetupNotes: 'Connect with fellow founders! Share insights, find cofounders. Continental breakfast included.',
    activityPhoto: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
    ],
    participants: ['current', '1', '29', '27', '25', '23', '16', '12', '21', '15', '9']
  },
  {
    id: '42',
    hostUserId: '22',
    activityType: 'event',
    dateTime: new Date(Date.now() + 70 * 60 * 60 * 1000),
    description: '🏺 Pottery & ceramics workshop',
    maxParticipants: 10,
    locationHiddenAddress: 'Heath Ceramics, 2900 18th St',
    locationHint: 'Mission District',
    participationCount: 8,
    meetupNotes: 'Make your own bowl! Clay provided. Pieces will be fired and ready in 2 weeks. $65.',
    activityPhoto: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&h=600&fit=crop'
    ],
    participants: ['8', '18', '30', '26', '6', '14', '4']
  },
  {
    id: '43',
    hostUserId: '29',
    activityType: 'event',
    dateTime: new Date(Date.now() + 44 * 60 * 60 * 1000),
    description: '💎 Blockchain & crypto study group',
    maxParticipants: 12,
    locationHiddenAddress: 'Parisoma, 169 11th St',
    locationHint: 'SoMa',
    participationCount: 9,
    meetupNotes: 'Deep dive into smart contracts! Bring laptop. Pizza & energy drinks provided.',
    activityPhoto: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop'
    ],
    participants: ['21', '1', '16', 'current', '7', '23', '27', '25']
  },
  {
    id: '44',
    hostUserId: '17',
    activityType: 'event',
    dateTime: new Date(Date.now() + 54 * 60 * 60 * 1000),
    description: '🖼️ Street art walking tour',
    maxParticipants: 15,
    locationHiddenAddress: 'Clarion Alley, btw Valencia & Mission',
    locationHint: 'Mission District',
    participationCount: 12,
    meetupNotes: 'Explore famous murals! Photo opportunities galore. Free tour, tips appreciated.',
    activityPhoto: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop'
    ],
    participants: ['6', '30', '8', '22', '18', '2', '10', '14', '4', '26', '20']
  },
  {
    id: '45',
    hostUserId: '24',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 34 * 60 * 60 * 1000),
    description: '🚴 Mountain biking in Marin Headlands',
    maxParticipants: 10,
    locationHiddenAddress: 'Marin Headlands Trailhead, Conzelman Rd',
    locationHint: 'Marin Headlands',
    participationCount: 7,
    meetupNotes: 'Intermediate trails! Bring your mountain bike, helmet, water. Epic views guaranteed!',
    activityPhoto: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?w=800&h=600&fit=crop'
    ],
    participants: ['9', '19', '3', '28', '7', '21']
  },
  {
    id: '46',
    hostUserId: '15',
    activityType: 'workdate',
    dateTime: new Date(Date.now() + 21 * 60 * 60 * 1000),
    description: '📊 Sales & marketing networking lunch',
    maxParticipants: 12,
    locationHiddenAddress: 'Foreign Cinema, 2534 Mission St',
    locationHint: 'Mission District',
    participationCount: 10,
    meetupNotes: 'B2B professionals unite! Share strategies, make connections. Prix fixe lunch $35.',
    activityPhoto: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    ],
    participants: ['4', '7', '27', '25', '23', '1', 'current', '12', '29']
  },
  {
    id: '47',
    hostUserId: '21',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 42 * 60 * 60 * 1000),
    description: '🏀 3-on-3 basketball tournament',
    maxParticipants: 12,
    locationHiddenAddress: 'Mission Rec Center, 2450 Harrison St',
    locationHint: 'Mission District',
    participationCount: 9,
    meetupNotes: 'Competitive games! Form teams or join solo. Prizes for winners. Bring your jersey!',
    activityPhoto: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop'
    ],
    participants: ['3', '15', '9', '19', '1', '7', '24', '28']
  },
  {
    id: '48',
    hostUserId: '11',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 46 * 60 * 60 * 1000),
    description: '🍵 Matcha & Japanese sweets tasting',
    maxParticipants: 8,
    locationHiddenAddress: 'Matcha Cafe Maiko, 1581 Webster St',
    locationHint: 'Japantown',
    participationCount: 6,
    meetupNotes: 'Try 6 different matcha varieties! Traditional ceremony. Learn about tea culture. $30.',
    activityPhoto: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=800&h=600&fit=crop'
    ],
    participants: ['2', '10', '14', '18', '26']
  },
  {
    id: '49',
    hostUserId: '30',
    activityType: 'event',
    dateTime: new Date(Date.now() + 76 * 60 * 60 * 1000),
    description: '✏️ Life drawing & sketch session',
    maxParticipants: 15,
    locationHiddenAddress: 'San Francisco Art Institute, 800 Chestnut St',
    locationHint: 'North Beach',
    participationCount: 11,
    meetupNotes: 'Figure drawing with live model! Bring sketchbook & pencils. All levels welcome. $20.',
    activityPhoto: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop'
    ],
    participants: ['8', '22', '6', '17', '18', '30', '14', '4', '26', '20']
  },
  {
    id: '50',
    hostUserId: '1',
    activityType: 'workdate',
    dateTime: new Date(Date.now() + 13 * 60 * 60 * 1000),
    description: '💼 Tech professionals happy hour',
    maxParticipants: 25,
    locationHiddenAddress: 'Cityscape Lounge, 333 O\'Farrell St',
    locationHint: 'Union Square',
    participationCount: 20,
    meetupNotes: 'Network with tech professionals! Casual vibe. First drink on me. Bring business cards.',
    activityPhoto: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop'
    ],
    participants: ['current', '7', '16', '29', '5', '21', '23', '25', '27', '12', '15', '9', '1', '19', '3', '24', '28', '4', '2', '13']
  },
  {
    id: '51',
    hostUserId: '26',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 58 * 60 * 60 * 1000),
    description: '🚴 Twin Peaks sunset cycling',
    maxParticipants: 12,
    locationHiddenAddress: 'Twin Peaks Summit, Christmas Tree Point',
    locationHint: 'Twin Peaks',
    participationCount: 9,
    meetupNotes: 'Challenging climb! Reward: 360° city views at sunset. E-bikes welcome. Group pace.',
    activityPhoto: 'https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1486704155675-e4c07f8ad160?w=800&h=600&fit=crop'
    ],
    participants: ['9', '19', '24', '28', '3', '7', '21', '15']
  },
  {
    id: '52',
    hostUserId: '23',
    activityType: 'event',
    dateTime: new Date(Date.now() + 66 * 60 * 60 * 1000),
    description: '🎭 Improv comedy workshop',
    maxParticipants: 16,
    locationHiddenAddress: 'BATS Improv, Fort Mason Center',
    locationHint: 'Marina District',
    participationCount: 13,
    meetupNotes: 'Learn improv basics! No experience needed. Hilarious & fun. Build confidence. $25.',
    activityPhoto: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1533923156502-be31530547cd?w=800&h=600&fit=crop'
    ],
    participants: ['10', '2', '13', '20', '5', '22', '4', '14', '18', '8', '26', '6']
  },
  {
    id: '53',
    hostUserId: '27',
    activityType: 'workdate',
    dateTime: new Date(Date.now() + 23 * 60 * 60 * 1000),
    description: '🚀 Product managers meetup',
    maxParticipants: 18,
    locationHiddenAddress: 'WeWork, 575 Market St',
    locationHint: 'Financial District',
    participationCount: 14,
    meetupNotes: 'PM best practices! Case study discussions. Career tips. Free coffee & pastries.',
    activityPhoto: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop'
    ],
    participants: ['9', '1', 'current', '7', '15', '29', '23', '25', '16', '5', '12', '21', '4']
  },
  {
    id: '54',
    hostUserId: '18',
    activityType: 'event',
    dateTime: new Date(Date.now() + 80 * 60 * 60 * 1000),
    description: '🖌️ Acrylic pour painting party',
    maxParticipants: 12,
    locationHiddenAddress: 'ARTspot Concord, 1740 Willow Pass Rd',
    locationHint: 'East Bay',
    participationCount: 10,
    meetupNotes: 'Create abstract masterpieces! All supplies included. Take home 2 canvases. Wine provided. $55.',
    activityPhoto: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop'
    ],
    participants: ['8', '22', '30', '6', '26', '14', '4', '2', '18']
  },
  {
    id: '55',
    hostUserId: '19',
    activityType: 'sports',
    dateTime: new Date(Date.now() + 50 * 60 * 60 * 1000),
    description: '🏀 NBA watch party - Warriors game',
    maxParticipants: 20,
    locationHiddenAddress: 'Hi Tops, 2247 Market St',
    locationHint: 'Castro',
    participationCount: 16,
    meetupNotes: 'Dub Nation! Watch on big screens. Food & drink specials. Jersey optional but encouraged!',
    activityPhoto: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&h=600&fit=crop'
    ],
    participants: ['3', '21', '15', '9', '1', '7', '24', '28', '19', '12', '25', '27', '23', '5', '29']
  },
  {
    id: '56',
    hostUserId: '12',
    activityType: 'hangout',
    dateTime: new Date(Date.now() + 62 * 60 * 60 * 1000),
    description: '☕ Specialty coffee cupping session',
    maxParticipants: 10,
    locationHiddenAddress: 'Ritual Coffee Roasters, 1300 Haight St',
    locationHint: 'Haight-Ashbury',
    participationCount: 8,
    meetupNotes: 'Professional coffee tasting! Learn origins, flavor notes. Beans from 4 continents. $20.',
    activityPhoto: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop'
    ],
    participants: ['5', '14', '29', 'current', '4', '10', '2']
  },
  {
    id: '57',
    hostUserId: '25',
    activityType: 'workdate',
    dateTime: new Date(Date.now() + 27 * 60 * 60 * 1000),
    description: '🌐 Women in tech brunch & network',
    maxParticipants: 20,
    locationHiddenAddress: 'Tartine Manufactory, 595 Alabama St',
    locationHint: 'Mission District',
    participationCount: 16,
    meetupNotes: 'Supporting women in STEM! Career advice, mentorship. Inspiring conversations. Brunch buffet.',
    activityPhoto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop',
    coverPhoto: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
    activityPhotos: [
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
    ],
    participants: ['2', '4', '8', '26', '14', '18', '10', '22', '30', '6', '16', '12', '20', '28', '24']
  }
];

export const mockJoinRequests: JoinRequest[] = [
  {
    id: '1',
    activityPostId: '1',
    requesterUserId: '5',
    status: 'pending'
  },
  {
    id: '2',
    activityPostId: '1',
    requesterUserId: '3',
    status: 'pending'
  },
  {
    id: '3',
    activityPostId: '2',
    requesterUserId: 'current',
    status: 'approved'
  },
  {
    id: '4',
    activityPostId: '3',
    requesterUserId: 'current',
    status: 'approved'
  },
  {
    id: '5',
    activityPostId: '4',
    requesterUserId: 'current',
    status: 'pending'
  }
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    participantId: '1',
    lastMessage: 'See you at the tennis court tomorrow!',
    lastMessageTime: new Date(Date.now() - 15 * 60 * 1000),
    unreadCount: 2,
    messages: [
      {
        id: 'm1',
        senderId: 'current',
        content: 'Hey! Down for tennis tomorrow?',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
      },
      {
        id: 'm2',
        senderId: '1',
        content: 'Absolutely! What time works?',
        timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000)
      },
      {
        id: 'm3',
        senderId: 'current',
        content: '9am at Golden Gate Park?',
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000)
      },
      {
        id: 'm4',
        senderId: '1',
        content: 'Perfect! I\'ll bring the balls.',
        timestamp: new Date(Date.now() - 30 * 60 * 1000)
      },
      {
        id: 'm5',
        senderId: '1',
        content: 'See you at the tennis court tomorrow!',
        timestamp: new Date(Date.now() - 15 * 60 * 1000)
      }
    ]
  },
  {
    id: '2',
    participantId: '2',
    lastMessage: 'That design session was super helpful, thanks!',
    lastMessageTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
    unreadCount: 0,
    messages: [
      {
        id: 'm6',
        senderId: '2',
        content: 'Hey! Want to join my design feedback session?',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000)
      },
      {
        id: 'm7',
        senderId: 'current',
        content: 'Would love to! When is it?',
        timestamp: new Date(Date.now() - 23 * 60 * 60 * 1000)
      },
      {
        id: 'm8',
        senderId: '2',
        content: 'Tomorrow at Sightglass Coffee, 2pm',
        timestamp: new Date(Date.now() - 22 * 60 * 60 * 1000)
      },
      {
        id: 'm9',
        senderId: '2',
        content: 'That design session was super helpful, thanks!',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000)
      }
    ]
  },
  {
    id: '3',
    participantId: '4',
    lastMessage: 'Can\'t wait for the happy hour!',
    lastMessageTime: new Date(Date.now() - 6 * 60 * 60 * 1000),
    unreadCount: 1,
    messages: [
      {
        id: 'm10',
        senderId: '4',
        content: 'Join us for happy hour tonight?',
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000)
      },
      {
        id: 'm11',
        senderId: 'current',
        content: 'Count me in! Where at?',
        timestamp: new Date(Date.now() - 7 * 60 * 60 * 1000)
      },
      {
        id: 'm12',
        senderId: '4',
        content: 'The View Lounge at 6pm. First round on me! 🍸',
        timestamp: new Date(Date.now() - 6.5 * 60 * 60 * 1000)
      },
      {
        id: 'm13',
        senderId: '4',
        content: 'Can\'t wait for the happy hour!',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000)
      }
    ]
  },
  {
    id: '4',
    participantId: '6',
    lastMessage: 'Your photos from the last event were amazing!',
    lastMessageTime: new Date(Date.now() - 12 * 60 * 60 * 1000),
    unreadCount: 0,
    messages: [
      {
        id: 'm14',
        senderId: 'current',
        content: 'Loved the creator meetup last week!',
        timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000)
      },
      {
        id: 'm15',
        senderId: '6',
        content: 'Thanks! Working on the next one already 🎨',
        timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000)
      },
      {
        id: 'm16',
        senderId: '6',
        content: 'Your photos from the last event were amazing!',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000)
      }
    ]
  },
  {
    id: '5',
    participantId: '5',
    lastMessage: 'Library coworking was productive!',
    lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
    unreadCount: 0,
    messages: [
      {
        id: 'm17',
        senderId: '5',
        content: 'Want to do a quiet coworking session?',
        timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000)
      },
      {
        id: 'm18',
        senderId: 'current',
        content: 'Yes! Where are you thinking?',
        timestamp: new Date(Date.now() - 47 * 60 * 60 * 1000)
      },
      {
        id: 'm19',
        senderId: '5',
        content: 'Main library? Great for deep work',
        timestamp: new Date(Date.now() - 46 * 60 * 60 * 1000)
      },
      {
        id: 'm20',
        senderId: 'current',
        content: 'Perfect. See you there!',
        timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000)
      },
      {
        id: 'm21',
        senderId: '5',
        content: 'Library coworking was productive!',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000)
      }
    ]
  }
];
