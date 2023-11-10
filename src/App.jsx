import React from "react";

import {
  Navbar,
  Hero,
  Speakers,
  QA,
  Agenda,
  Tickets,
  Footer,
  ContactUs,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary overflow-hidden w-full flex-col font-inter">
      <Navbar></Navbar>

      <div className="flex flex-col">
        <Hero> </Hero>
        <Speakers> </Speakers>
        <Agenda></Agenda>

        <QA></QA>
        <Tickets></Tickets>
        <ContactUs />
        <Footer></Footer>
      </div>
    </div>
  );
};
export default App;
