import React from "react";
import { Container } from "../../../Styles/Elements/Container/Container";
import {
  BodyText,
  Caption,
  SubHeading,
} from "../../../Styles/Elements/Text/text";

export default function Event({ name }) {
  return (
    <Container hasBG width="full" padding="2rem 0rem">
      <Container.Flex width="lg" justify="space-between">
        <SubHeading color="extraDark">{name}</SubHeading>
        <Caption accent>8/24/2021</Caption>
      </Container.Flex>
      <Container style={{ marginTop: "0.8rem" }} width="lg">
        <BodyText>
          Welcome to our daily lunch , that occurs every Friday of the month
        </BodyText>
      </Container>
    </Container>
  );
}
