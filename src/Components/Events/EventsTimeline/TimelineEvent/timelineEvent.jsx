import React from "react";
import { Container } from "../../../../Styles/Elements/Container/Container";
import {
  Caption,
  HeadingLarge,
  SubHeading,
} from "../../../../Styles/Elements/Text/text";

export default function TimelineEvent(props) {
  return (
    <Container width="full">
      <Caption>June 3rd 2021</Caption>
      <Container width="lg">
        <SubHeading>Desi Picnic</SubHeading>
      </Container>
    </Container>
  );
}
