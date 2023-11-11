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

export const TICKET_TYPES = [
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
      imgPath: `images/speakers-headshots-13.svg`,
      id: "16"
    },
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots.svg`,
      id: "1"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-1.svg`,
      id: "2"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-2.svg`,
      id:"3"
    },
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-3.svg`,
      id: "4"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-4.svg`,
      id: "5"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-5.svg`,
      id:"6"
    },
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-6.svg`,
      id: "7"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-7.svg`,
      id: "8"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-8.svg`,
      id:"9"
    },
    {
      name: "ROBERT TISSERAND ",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-9.svg`,
      id: "10"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Dekel was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-10.svg`,
      id: "11"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-11.svg`,
      id:"12"
    },
    {
      name: "RAKEFET SHIMONI",
      info: "Rakefet was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-12.svg`,
      id:"13"
    },
    {
      name: "PROF. DEKEL LIVNE",
      info: "Robert was the first retailer of essential oils in the UK in 1974, and has 45 years of experience in aromatherapy “functional fragrance” product development.",
      imgPath: `images/speakers-headshots-14.svg`,
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
    id: "1",
    imgPath: `images/agenda-picture-3.svg`
  },
  {
    title: "Of Plants & Pollinators",
    description: "How to make your garden into heaven for pollinator’s.",
    location: "2",
    dateTime: "2023-03-01T09:30",
    duration: 1.5,
    available: 15,
    booked: 10,
    id: "2",
    imgPath: `images/agenda-picture-2.svg`

  },
  {
    title: "Farm Model Building Part 1",
    description: "Taking the first steps in planing your homestead dream.",
    location: "3",
    dateTime: "2023-03-01T09:30",
    duration: 2.5,
    available: 15,
    booked: 10,
    id: "3",
    imgPath: `images/agenda-picture-4.svg`

  },
  {
    title: "Climate Resistance",
    description: "The story of a climate activists and the impact they make.",
    location: "1",
    dateTime: "2023-03-01T13:00",
    duration: 1.5,
    available: 15,
    booked: 10,
    id: "4",
    imgPath: `images/agenda-picture-1.svg`
  },
  {
    title: "Hydro DIY",
    description: "How to implement hydrophobic systems at (almost) any scale.",
    location: "2",
    dateTime: "2023-03-01T13:00",
    duration: 1.5,
    available: 15,
    booked: 15,
    id: "5",
    imgPath: `images/agenda-picture-5.svg`

  },
  {
    title: "Farm Model Building Part 2",
    description: "How can your kids get involved in the homestead chores.",
    location: "3",
    dateTime: "2023-03-01T13:00",
    duration: 3,
    available: 15,
    booked: 10,
    id: "6",
    imgPath: `images/agenda-picture-6.svg`
  },
  {
    title: "Self-Sufficiency Part 1",
    description: "Learn how to make your homestead independent.",
    location: "1",
    dateTime: "2023-03-02T09:30",
    duration: 1.5,
    available: 15,
    booked: 15,
    id: "7",
    imgPath: `images/agenda-picture-1.svg`
  },
  {
    title: "Buying Land",
    description: "How to find the right land for your homestead.",
    location: "2",
    dateTime: "2023-03-02T09:30",
    duration: 1.5,
    available: 15,
    booked: 10,
    id: "8",
    imgPath: `images/agenda-picture-3.svg`
  },
  {
    title: "Farm Model Building Part 3",
    description: "Taking the first steps in planing your homestead dream.",
    location: "3",
    dateTime: "2023-03-02T09:30",
    duration: 2.5,
    available: 15,
    booked: 10,
    id: "9",
    imgPath: `images/agenda-picture-6.svg`
  },
  {
    title: "Self-Sufficiency Part 2",
    description: "Learn how to make your homestead independent.",
    location: "1",
    dateTime: "2023-03-02T13:00",
    duration: 1.5,
    available: 15,
    booked: 10,
    id: "10",
    imgPath: `images/agenda-picture-4.svg`
  },
  {
    title: "Hydro DIY",
    description: "How to implement hydrophobic systems at (almost) any scale.",
    location: "2",
    dateTime: "2023-03-02T13:00",
    duration: 1.5,
    available: 15,
    booked: 15,
    id: "11",
    imgPath: `images/agenda-picture-5.svg`

  },
  {
    title: "Farm Model Building Part 4",
    description: "How can your kids get involved in the homestead chores.",
    location: "3",
    dateTime: "2023-03-02T13:00",
    duration: 3,
    available: 15,
    booked: 10,
    id: "12",
    imgPath: `images/agenda-picture-6.svg`
  },
];

  export const AGENDA_DATES = [{key: 1, value: "2023-03-01T00:00"}, {key: 2, value:"2023-03-02T00:00"}, {key: 3, value:"2023-03-03T00:00"}]
  