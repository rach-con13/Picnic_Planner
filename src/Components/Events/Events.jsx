import React from "react";
import { Container } from "../../Styles/Elements/Container/Container";
import { SubHeading } from "../../Styles/Elements/Text/text";
import Event from "./Event/Event";
import { EventsGrid } from "./events.style";

export default function Events({ events }) {
  return (
    <Container padding="2rem 0rem 0rem 0rem" width="full">
      <SubHeading color="dark">Your Upcoming Events</SubHeading>
      <EventsGrid>
        <Event name="Park Event" />
        <Event name="Park Event" />
        <Event name="Park Event" />
        <Event name="Park Event" />
      </EventsGrid>

      {/* {events.map((event, index) => {
        return <Event name="Park Event" key={index} />;
      })} */}
    </Container>
  );
}
