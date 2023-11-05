import { Agenda, MsgBubble, QuestionMark, Ticket } from "../assets/icons";

export const NAV_BAR_ITEMS=[
  {
    title: "speakers",
    navTo: "speakers",
    svg: MsgBubble
  },
  {
    title: "agenda",
    navTo: "agenda",
    svg: Agenda

  },
  {
    title: "q&a",
    navTo: "qa",
    svg: QuestionMark

  },
  {
    title: "tickets",
    navTo: "tickets",
    svg: Ticket

  },
]
export const LANGUAGES = [
  {language: 'english', shortLanguage: 'en'},
  {language: 'french', shortLanguage: 'fr'},
  { language: 'spanish', shortLanguage:'es'}
]

export const ticketTypes = [
    {
      type: "bud",
      perks: ["8 entrances for live or online lectures", "1 workshop"],
      price: 144,
      signUpNeeded: true,
      color: "green",
    },
    {
      type: "bloom",
      perks: [
        "10 live/online lectures",
        "5 workshops",
        "Mingling zone entrance",
      ],
      price: 256,
      signUpNeeded: false,
      color: "yellow",
    },
    {
      type: "bouquet",
      perks: [
        "Unlimited live/online lectures",
        "Unlimited workshops",
        "Mingling zone entrance",
      ],
      price: 356,
      signUpNeeded: false,
      color: "pink",
    }

 
  ];
export const QA_QUESTIONS = [
{question: "Where is the nearest airport?", answer: "Every workshop will send the specific details a week before the conference via email."},
{question: "Should I bring anything for the workshops?", answer: "Every workshop will send the specific details a week before the conference via email."},
{question: "Which are the recommended hotels in the area?", answer: "Every workshop will send the specific details a week before the conference via email."},
  ]

  export const SPEAKERS = [
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "",
      id: "1"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      id: "2"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src:"",
      id:"3"
    },
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "",
      id: "4"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      id: "5"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src:"",
      id:"6"
    },
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "",
      id: "7"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      id: "8"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src:"",
      id:"9"
    },
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "",
      id: "10"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      id: "11"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src:"",
      id:"12"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src:"",
      id:"13"
    },
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "",
      id: "14"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      src: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      id: "15"
    },

  ]


  export const FOOTER_ITEMS = [
{title: 'terms & conditions'},
{title: 'privacy'},
{title: 'settings'},
{title: 'about'},
{title: 'contact'},
  ]

  export const AGENDA_LOCATIONS = {
    1: "terra hall",
    2: "main hall",
    3: "workshop"

  }
  
  export const AGENDA_EVENTS = [
  {
    title: "Growth Journey",
    description: "How can your kids get involved in the homestead chores.",
    location: "1",
    dateTime: "2023-03-01T09:30",
    duration: 1.5,
    available: 15,
    booked: 15,
    id: "1"
  },
  {
    title: "Of Plants & Pollinators",
    description: "How to make your garden into heaven for pollinator’s.",
    location: "2",
    dateTime: "2023-03-01T09:30",
    duration: 1.5,
    available: 15,
    booked: 10,
    id: "2"

  },
  {
    title: "Farm Model Building Part 1",
    description: "Taking the first steps in planing your homestead dream.",
    location: "3",
    dateTime: "2023-03-01T09:30",
    duration: 2.5,
    available: 15,
    booked: 10,
    id: "3"

  },
  {
    title: "Climate Resistance",
    description: "The story of a climate activists and the impact they make.",
    location: "1",
    dateTime: "2023-03-01T13:00",
    duration: 1.5,
    available: 15,
    booked: 10,
    id: "4"

  },
  {
    title: "Hydro DIY",
    description: "How to implement hydrophobic systems at (almost) any scale.",
    location: "2",
    dateTime: "2023-03-01T13:00",
    duration: 1.5,
    available: 15,
    booked: 15,
    id: "5"

  },
  {
    title: "Farm Model Building Part 2",
    description: "How can your kids get involved in the homestead chores.",
    location: "3",
    dateTime: "2023-03-01T13:00",
    duration: 3,
    available: 15,
    booked: 10,
    id: "6"
  },
  {
    title: "Self-Sufficiency Part 1",
    description: "Learn how to make your homestead independent.",
    location: "1",
    dateTime: "2023-03-02T09:30",
    duration: 1.5,
    available: 15,
    booked: 15,
    id: "7"
  },
  {
    title: "Buying Land",
    description: "How to find the right land for your homestead.",
    location: "2",
    dateTime: "2023-03-02T09:30",
    duration: 1.5,
    available: 15,
    booked: 10,
    id: "8"

  },
  {
    title: "Farm Model Building Part 3",
    description: "Taking the first steps in planing your homestead dream.",
    location: "3",
    dateTime: "2023-03-02T09:30",
    duration: 2.5,
    available: 15,
    booked: 10,
    id: "9"

  },
  {
    title: "Self-Sufficiency Part 2",
    description: "Learn how to make your homestead independent.",
    location: "1",
    dateTime: "2023-03-02T13:00",
    duration: 1.5,
    available: 15,
    booked: 10,
    id: "10"

  },
  {
    title: "Hydro DIY",
    description: "How to implement hydrophobic systems at (almost) any scale.",
    location: "2",
    dateTime: "2023-03-02T13:00",
    duration: 1.5,
    available: 15,
    booked: 15,
    id: "11"

  },
  {
    title: "Farm Model Building Part 4",
    description: "How can your kids get involved in the homestead chores.",
    location: "3",
    dateTime: "2023-03-02T13:00",
    duration: 3,
    available: 15,
    booked: 10,
    id: "12"
  },
];

  export const AGENDA_DATES = [{key: 1, value: "2023-03-01T00:00"}, {key: 2, value:"2023-03-02T00:00"}, {key: 3, value:"2023-03-03T00:00"}]
  