import image_2016 from '../assets/img/history/2016.png';
import image_2017 from '../assets/img/history/2017.png';

import placeholderImage from '../assets/img/placeholders/balam_logo.svg';

const placeholderDescription = "BALAM 3527 is a passionate group of students and mentors dedicated to building innovative robots and fostering STEM education. Over the years, they have demonstrated excellence in both competition and community outreach, earning a reputation for collaboration, creativity, and resilience.";

const historyData = {
  2011: {
    year: "Logo Motion - 2011",
    robot: {
      name: "Jaguar Mk I",
      image: placeholderImage,
      description: "Our first-ever robot for FRC, focused on defense and learning the ropes.",
    },
    team: [
      { name: "name", role: "role" }
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
      "BALAM 3527 made its debut in 2011, marking the start of a long journey of innovation and learning. Their first robot, Jaguar Mk I, was a testament to their dedication to the fundamentals of FRC, focusing on defense and teamwork in a highly competitive environment.",
  },

  2012: {
    year: "Rebound Rumble - 2012",
    robot: { name: "Jaguar Mk II", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Greater Toronto West Regional", awards: [], ranking: "Ranking 52th" },
    ],
    summary: "The second year for BALAM saw the introduction of Jaguar Mk II. The team focused on refining their designs and strategies, preparing for more competitive seasons ahead.",
  },

  2013: {
    year: "Ultimate Ascent - 2013",
    robot: { name: "Jaguar Mk III", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Western Canadian FRC Regional", awards: [], ranking: "Ranking 25th" }
    ],
    summary: "2013 marked another leap forward for BALAM as they improved their robot design and honed their gameplay strategies. Their performance in the Western Canadian FRC Regional was a solid step in their ongoing journey.",
  },

  2014: {
    year: "Aerial Assist - 2014",
    robot: { name: "Jaguar Mk IV", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Mexico City Regional", awards: [], ranking: "Ranking 26th" }
    ],
    summary: "In 2014, BALAM ventured into the national stage with their first appearance at the Mexico City Regional, gaining valuable experience and strengthening their national presence in the FIRST Robotics community.",
  },

  2015: {
    year: "Recycle Rush - 2015",
    robot: { name: "DO-2", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Mexico City Regional", awards: [], ranking: "Finalist" }
    ],
    summary: "BALAM demonstrated their growing skills in robot design and strategy, making it to the finals in the Mexico City Regional and solidifying their place as a strong competitor.",
  },

  2016: {
    year: "Stronghold - 2016",
    robot: { name: "DO-2", image: image_2016, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Mexico City Regional", awards: ["Regional Winners"], ranking: "1st" },
      { name: "Archimedes Division", awards: [], ranking: "Participated" }
    ],
    summary: "In 2016, BALAM reached new heights, winning the Mexico City Regional with their robot DO-2. Their success at the regional competition demonstrated the hard work and technical skills of the entire team.",
  },

  2017: {
    year: "Steamworks - 2017",
    robot: { name: "DO-2", image: image_2017, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Toluca Regional", awards: ["Finalist"], ranking: "2nd" },
      { name: "Newton Division", awards: [], ranking: "Participated" }
    ],
    summary: "BALAM's performance at the 2017 season solidified their standing as one of the top teams in the region. They finished as finalists at the Toluca Regional and competed at the world championship level.",
  },

  2018: {
    year: "Power Up - 2018",
    robot: { name: "DO-2", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Monterrey Regional", awards: [], ranking: "24th" }
    ],
    summary: "The 2018 season was a year of growth and adaptation for BALAM. Despite challenges, they continued to refine their approach, with a focus on team dynamics and design improvements.",
  },

  2019: {
    year: "Destination: Deep Space - 2019",
    robot: { name: "Jaguar Mk V", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Regional de la Ciudad de México", awards: [], ranking: "Quarterfinals" }
    ],
    summary: "In 2019, BALAM continued their steady progress, reaching the quarterfinals at the Mexico City Regional and showcasing their strong teamwork and technical expertise.",
  },

  2020: {
    year: "Infinite Recharge - 2020",
    robot: { name: "D0-2", image: placeholderImage, description: 'Cancelled due to COVID-19' },
    team: [ /* ... */ ],
    competitions: [
      { name: "Regional Laguna", awards: [], ranking: "Cancelled" }
    ],
    summary: "The 2020 season was marked by the COVID-19 pandemic, which caused the cancellation of many events. BALAM embraced virtual challenges and continued to engage with the robotics community.",
  },

  2021: {
    year: "Infinite Recharge",
    robot: { name: "Jaguar Mk VI", image: placeholderImage, description: 'Virtual season, no physical events' },
    team: [ /* ... */ ],
    competitions: [
      { name: "Game Design Challenge", awards: [], ranking: "Participated" },
      { name: "Cobalt Group Game Design Challenge", awards: [], ranking: "Participated" }
    ],
    summary: "In the virtual season of 2021, BALAM shifted their focus to design and programming challenges, continuing to innovate despite the absence of physical competitions.",
  },

  2022: {
    year: "Rapid React - 2022",
    robot: { name: "Jaguar Mk VII", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Regional Laguna", awards: [], ranking: "Quarterfinals" }
    ],
    summary: "The 2022 season saw BALAM making a strong return to in-person events. While facing tough competition, they gained valuable experience and further improved their designs.",
  },

  2023: {
    year: "Charged Up - 2023",
    robot: { name: "Jaguar Mk VIII", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Regional Puebla", awards: ["Regional Winners"], ranking: "1st" },
      { name: "Daly Division", awards: [], ranking: "Participated" },
      { name: "MEXICO ALL-STAR", awards: [], ranking: "Participated" }
    ],
    summary: "Team capped off 2023 with a significant victory at the Puebla Regional, taking home the Regional Winners award. Their performance in the Daly Division and at Mexico All-Star demonstrated their competitive spirit and teamwork.",
  },

  2024: { 
    year: "Crescendo - 2024",
    robot: { name: "Jaguar Mk IX", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Regional Hermosillo", awards: [], ranking: "Double Elimination Bracket" },
      { name: "MEXICO ALL-STAR", awards: [], ranking: "Participated" }
    ],
    summary: "In 2024, BALAM continues to innovate and refine their strategies. Their performance at the Regional Hermosillo marked another successful year of development and learning.",
  },

  2025: {
    year: "Reefscape - 2025",
    robot: { name: "Jaguar Mk X", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Regional Monterrey", awards: [], ranking: "Ranking 30th" },
      { name: "MEXICO ALL-STAR", awards: [], ranking: "Participated" }
    ],
    summary: "2025 marks another exciting chapter in BALAM's history. With a new robot and fresh strategies, the team is eager to continue pushing the boundaries of innovation and competition.",
  },

  2026: {
    year: "AGE - 2026",
    robot: { name: "Jaguar Mk XI", image: placeholderImage, description: placeholderDescription },
    team: [ /* ... */ ],
    competitions: [
      { name: "Regional Laguna", awards: [], ranking: "Pending" }
    ],
    summary: "Looking ahead to 2026, BALAM is set to continue their legacy of excellence. With ambitious goals and a strong team dynamic, they are poised to achieve even greater success in the upcoming season.",
  }
};

export default historyData;
