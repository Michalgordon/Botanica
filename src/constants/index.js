export const navbarItems=[
  {
    title: "speakers",
    navTo: "speakers"
  },
  {
    title: "agenda",
    navTo: "agenda"
  },
  {
    title: "q&a",
    navTo: "qa"
  },
  {
    title: "tickets",
    navTo: "tickets"
  },

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
