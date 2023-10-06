import { Agenda, MsgBubble, QuestionMark, Ticket } from "../assets";

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
    },
  ];
