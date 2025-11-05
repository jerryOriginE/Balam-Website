import placeholderImage from '../assets/img/placeholders/balam_logo.svg';
const placeholderDescription = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const historyData = {
  2011: {
    year: "Logo Motion - 2011",
    robot: {
      name: "Jaguar Mk I",
      image: placeholderImage,
      description: "Our first-ever robot for FRC, focused on defense and learning the ropes.",
    },
    team: [
      { name: "Juan Pérez", role: "Captain" },
      { name: "María Gómez", role: "Programmer" },
      // ...
    ],
    competitions: [
      {
        name: "Greater Toronto East Regional",
        awards: ["Rookie All-Star Award"],
        ranking: "Ranking 24th",
      },
      {
        name: "Championship - Galileo Division",
        awards: [],
        ranking: "Participated",
      },
      {
        name: "Championship - Einstein Field",
        awards: ["Rookie Inspiration Award"],
        ranking: "Participated",
      }
    ],
    summary:
      "Team BALAM 3527 made its debut in 2011, marking the start of a long journey of innovation...",
  },

  2012: {
    year: "Rebound Rumble - 2012",
    robot: { name: "Jaguar Mk II", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Greater Toronto West Regional", awards: [], ranking: "Ranking 52th" },
    ],
    summary: placeholderDescription,
  },

  // ... up to 2025
};

export default historyData;
