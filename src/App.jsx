import React from "react";

import {
  Navbar,
  Hero,
  Speakers,
  QA,
  Agenda,
  Tickets,
  Footer,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden flex-col flex-grow font-inter">
      <Navbar></Navbar>
      <div className="flex flex-col">
        <Hero> </Hero>
        <Speakers> </Speakers>
        <Agenda></Agenda>

        <QA></QA>
        <Tickets></Tickets>
        <Footer></Footer>
      </div>
    </div>
  );
};
export default App;
