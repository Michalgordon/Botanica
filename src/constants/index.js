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
