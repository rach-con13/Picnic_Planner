import React from "react";
import Events from "../../Components/Events/Events";
import EventsTimeline from "../../Components/Events/EventsTimeline/EventsTimeline";
import MainSection from "../../Components/Main/MainSection";
import { DashboardGrid } from "./dashboard.style";

export default function Dashboard(props) {
  return (
    <MainSection mainTitle="Dashboard">
      <DashboardGrid>
        <Events />
        <EventsTimeline />
      </DashboardGrid>
    </MainSection>
  );
}
