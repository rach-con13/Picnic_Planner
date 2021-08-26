import React from "react";
import { Container } from "../../../Styles/Elements/Container/Container";
import { SubHeading } from "../../../Styles/Elements/Text/text";
import TimelineEvent from "./TimelineEvent/timelineEvent";

export default function EventsTimeline(props) {
  return (
    <>
      <Container margin="2rem" width="full">
        <SubHeading color="dark">Events Timeline</SubHeading>
        <Container margin="1rem" padding="1rem 0rem" width="full" hasBG>
          <Container margin="0rem" width="lg">
            <Container margin="0rem" width="full">
              <TimelineEvent />
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}
