export interface Track {
  id: string;
  name: string;
  image: string;
  spotifyEmbedUrl: string;
  imagePosition?: "top" | "center" | "bottom";
  imageFit?: "cover" | "contain"; // contain shows full image with possible letterboxing
}

export const tracks: Track[] = [
  {
    id: "oathpack-abandoned",
    name: "Oathpack Abandoned",
    image: "/music-assets/oathpack-abandoned.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2DETBcJ3Efuk103NWm2idq?utm_source=generator&theme=0",
  },
  {
    id: "the-assassin-in-white",
    name: "The Assassin in White",
    image: "/music-assets/the-assassin-in-white.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2LwloVwcCioleysC5kdpVD?utm_source=generator&theme=0",
  },
  {
    id: "honor-is-dead",
    name: "Honor is Dead",
    image: "/music-assets/honor-is-dead.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/35WIJGEQgRBm4ySam5Zvqp?utm_source=generator&theme=0",
    imageFit: "contain", // Show full width of image
  },
  {
    id: "sylphrena",
    name: "Sylphrena",
    image: "/music-assets/sylphrena.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/3mmHLvx3hFKcHDr8uqCZzr?utm_source=generator&theme=0",
  },
  {
    id: "the-shattered-planes",
    name: "The Shattered Planes",
    image: "/music-assets/the-shattered-planes.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/4fr6ilRIQJAQ93d7GY9yS1?utm_source=generator&theme=0",
    imageFit: "contain", // Show full image like Honor is Dead
  },
  {
    id: "bridge-four",
    name: "Bridge Four",
    image: "/music-assets/bridge-four.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/27Sn6lKawxUXt5RZaLv4n6?utm_source=generator&theme=0",
  },
  {
    id: "honor-chasm",
    name: "Honor Chasm",
    image: "/music-assets/honor-chasm.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/3supRSBIgx9rRpyOvQQYKY?utm_source=generator&theme=0",
  },
  {
    id: "the-blackthorn",
    name: "The Blackthorn",
    image: "/music-assets/the-blackthorn.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/1napo1UKZuoyMwux08S2oK?utm_source=generator&theme=0",
    imageFit: "contain", // Show full image
  },
  {
    id: "alethi-codes-of-war",
    name: "Alethi Codes of War",
    image: "/music-assets/alethi-codes-of-war.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/5VopDYAlK6e5OEvyUxge3i?utm_source=generator&theme=0",
  },
  {
    id: "the-kings-wit",
    name: "The King's Wit",
    image: "/music-assets/the-kings-wit.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/6FN6qvzZiW65LFhoC32xGz?utm_source=generator&theme=0",
  },
  {
    id: "youre-in-my-spot",
    name: "You're in My Spot",
    image: "/music-assets/your-in-my-spot.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2N7QMxZ0ya3EAqWEqZo0of?utm_source=generator&theme=0",
    imagePosition: "top",
  },
  {
    id: "chasm-kata",
    name: "Chasm Kata",
    image: "/music-assets/chasm-kata.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2stmLyf7yyy4IJPRKU2dGX?utm_source=generator&theme=0",
  },
  {
    id: "unite-them",
    name: "Unite Them",
    image: "/music-assets/unite-them.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/1LbydWSLr6c9irO4V3ekt9?utm_source=generator&theme=0",
  },
  {
    id: "bridge-four-shield",
    name: "Bridge Four Shield",
    image: "/music-assets/bridge-four-shield.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/1BqHhgF3rWl2xAi5XNrNs0?utm_source=generator&theme=0",
  },
  {
    id: "high-storm",
    name: "High Storm",
    image: "/music-assets/high-storm.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/5cOAMz7fCdfAGsUxbvaW7H?utm_source=generator&theme=0",
  },
  {
    id: "rysn",
    name: "Rysn",
    image: "/music-assets/rysn.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/01ZWx3JIxNGZPkEejwnym8?utm_source=generator&theme=0",
  },
  {
    id: "hearthstone-tiens-theme",
    name: "Hearthstone - Tien's Theme",
    image: "/music-assets/tien.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/7Htam0mM3ngrZkvm8GE6Ym?utm_source=generator&theme=0",
    imagePosition: "top", // Show Tien's head at top
  },
  {
    id: "sas-nahn",
    name: "Sas Nahn",
    image: "/music-assets/slave-brand.png",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2F9IbzSKEx7TodyxI5kd4C?utm_source=generator&theme=0",
  },
  {
    id: "the-day-of-recreance",
    name: "The Day of Recreance",
    image: "/music-assets/recreance.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2CxrAxu8F2P0m1fgi4KHBL?utm_source=generator&theme=0",
  },
  {
    id: "wandersail",
    name: "Wandersail",
    image: "/music-assets/wandersail.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/7ii05fj42Z9b2X0tbrgt5r?utm_source=generator&theme=0",
  },
  {
    id: "three-glyphs",
    name: "Three Glyphs (Wind, Beloved, Protection)",
    image: "/music-assets/glyph.jpeg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/5byFrG3AFMC2CuoyXUNhhO?utm_source=generator&theme=0",
  },
  {
    id: "rhythm-of-mourning",
    name: "Rhythm of Mourning",
    image: "/music-assets/rythm-of-mourning.jpeg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/5zzpfxKipbZHWA4Rd8FHr1?utm_source=generator&theme=0",
    imagePosition: "top", // Show head at top
  },
  {
    id: "16-seconds-pre-death",
    name: "16 Seconds Pre-death",
    image: "/music-assets/16-seconds-pre-death.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/63wfvQyXfE96zXDcfbrV3b?utm_source=generator&theme=0",
  },
  {
    id: "tien",
    name: "Tien",
    image: "/music-assets/tien.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/0DLfydshJse5zfUXtNsH0T?utm_source=generator&theme=0",
  },
  {
    id: "the-tower",
    name: "The Tower",
    image: "/music-assets/the-tower.jpeg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/6CrUqKtMWucQvukVMTNk6B?utm_source=generator&theme=0",
  },
  {
    id: "thath-justice",
    name: "Thath (Justice)",
    image: "/music-assets/thath-justice.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/6QbBMIdnw78hUumOQXqAzY?utm_source=generator&theme=0",
  },
  {
    id: "warrior",
    name: "Warrior",
    image: "/music-assets/warrior.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/74fz7iQmUSbktWjYAByVSO?utm_source=generator&theme=0",
    imagePosition: "top", // Show head at top
  },
  {
    id: "shallans-lullaby",
    name: "Shallan's Lullaby",
    image: "/music-assets/shalan.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/28VgtHAlkdLzA1lmFGg8e4?utm_source=generator&theme=0",
  },
  {
    id: "tarah",
    name: "Tarah",
    image: "/music-assets/tarah.webp",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/7MnKXNK62ijF0Msgxv6Qfy?utm_source=generator&theme=0",
    imagePosition: "top",
  },
  {
    id: "the-knights-radiant",
    name: "The Knights Radiant Theme",
    image: "/music-assets/knights-radiant.jpg",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/1fq1mGltL3DvMEuczga329?utm_source=generator&theme=0",
  },
];

export const MUSIC_ATTRIBUTION = "Music Composed, Orchestrated, and Conducted by The Black Piper";
