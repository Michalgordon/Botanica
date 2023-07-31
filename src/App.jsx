import React from "react";

import { Navbar, Hero, Speakers, QA, Agenda, Tickets } from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden flex-col flex-grow font-inter">
      <Navbar></Navbar>
      <div className="flex flex-col gap-8 px-20 py-12">
        <Hero className=""> </Hero>
        <Speakers> </Speakers>
        <QA></QA>
        <Tickets></Tickets>
        <Agenda></Agenda>
      </div>
    </div>
  );
};
export default App;
