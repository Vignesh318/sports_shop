export interface CategoryItem {
  id: string;
  name: string;
  icon?: string;
  subcategories: string[];
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'athletics',
    name: 'Athletics Equipment',
    subcategories: [
      'Javelins & Accessories',
      'Discus Throw',
      'Shot Put',
      'Hurdles & Steeplechase',
      'Starting Blocks',
      'High Jump & Pole Vault',
      'Relay Batons & Stopwatches',
    ],
  },
  {
    id: 'badminton',
    name: 'Badminton Equipment',
    subcategories: [
      'Badminton Racquets',
      'Feather Shuttlecocks',
      'Nylon Shuttlecocks',
      'Badminton Nets & Posts',
      'Kit Bags & Grips',
    ],
  },
  {
    id: 'basketball',
    name: 'Basketball Equipment',
    subcategories: [
      'Basketballs Size 5, 6, 7',
      'Basketball Rings & Nets',
      'Backboards & Systems',
      'Scoreboards & Whistles',
    ],
  },
  {
    id: 'board-games',
    name: 'Board Games',
    subcategories: [
      'Carrom Boards Tournament',
      'Carrom Men & Strikers',
      'Chess Boards & Pieces',
      'Ludo & Snakes & Ladders',
    ],
  },
  {
    id: 'boxing',
    name: 'Boxing Equipment',
    subcategories: [
      'Boxing Gloves',
      'Punching Bags & Brackets',
      'Hand Wraps & Inner Gloves',
      'Head Guards & Mouth Guards',
    ],
  },
  {
    id: 'carrom',
    name: 'Carrom Boards & Accessories',
    subcategories: [
      'Carrom Board Champion 32"',
      'Carrom Board Club 28"',
      'Carrom Coins & Strikers',
      'Silky Smooth Carrom Powder',
      'Carrom Stands & Covers',
    ],
  },
  {
    id: 'coaching',
    name: 'Coaching Clipboards',
    subcategories: [
      'Football Tactical Boards',
      'Basketball Strategy Clipboards',
      'Cricket Coaching Boards',
      'Magnetic Player Counters',
    ],
  },
  {
    id: 'cricket',
    name: 'Cricket Equipment',
    subcategories: [
      'English Willow Bats',
      'Kashmir Willow Bats',
      'Leather Match Cricket Balls',
      'Cricket Stumps & Bails',
      'Batting Pads & Gloves',
      'Cricket Helmets & Guards',
    ],
  },
  {
    id: 'cones',
    name: 'Field Markers & Cones',
    subcategories: [
      '2-Inch Regular Space Markers',
      'Saucer Cones Set of 50',
      'Agility Traffic Cones 9" & 12"',
      'Slalom Agility Poles',
      'Marker Disc Sets',
    ],
  },
  {
    id: 'fitness',
    name: 'Fitness & Gym Equipment',
    subcategories: [
      'Push Up Bars & Stands',
      'Agility Ladders Flat / Adjustable',
      'Resistance Bands & Loops',
      'Aerobic Steppers & Riser Pads',
      'Gym Exercise Mats 8mm-12mm',
      'Dumbbells & Kettlebells',
    ],
  },
  {
    id: 'football',
    name: 'Football / Soccer Accessories',
    subcategories: [
      'Match Footballs Size 5',
      'Training Footballs',
      'Goalkeeper Gloves',
      'Shin Guards & Ankle Supports',
      'Corner Flags & Whistles',
    ],
  },
  {
    id: 'gymnastics',
    name: 'Gymnastics Equipment',
    subcategories: [
      'Springboards & Vaulting Box',
      'Crash Mats & Landing Pads',
      'Gymnastic Ribbons & Hoops',
      'Balance Beams',
    ],
  },
  {
    id: 'handballs',
    name: 'Handballs & Accessories',
    subcategories: [
      'Handballs Match Quality',
      'Training Handballs',
      'Handball Goal Nets',
    ],
  },
  {
    id: 'swimming',
    name: 'Swimming Accessories',
    subcategories: [
      'Anti-Fog Swimming Goggles',
      'Silicone Swim Caps',
      'Kickboards & Pull Buoys',
      'Ear Plugs & Nose Clips',
    ],
  },
  {
    id: 'table-tennis',
    name: 'Table Tennis',
    subcategories: [
      'Tournament TT Tables',
      'TT Racquets & Rubber',
      '3-Star TT Balls',
      'TT Post & Net Sets',
    ],
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    subcategories: [
      'Match Volleyballs',
      'Volleyball Nets & Antennas',
      'Knee Pads & Court Markers',
    ],
  },
  {
    id: 'yoga',
    name: 'Yoga & Aerobics',
    subcategories: [
      'Non-Slip Yoga Mats 6mm/8mm',
      'EVA Foam Rollers',
      'Anti-Burst Gym Balls',
      'Yoga Blocks & Straps',
    ],
  },
];
