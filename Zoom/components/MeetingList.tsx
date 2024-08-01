"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingList = () => {
  const Router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        des="Create an instant meeting"
        handleClick={() => {
          setMeetingState("isInstantMeeting");
        }}
        className="bg-orange-500"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        des="Plan your meeting"
        handleClick={() => {
          setMeetingState("isScheduleMeeting");
        }}
        className="bg-blue-500"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        des="Check your recordings"
        handleClick={() => {
          Router.push("/recordings");
        }}
        className="bg-purple-500"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        des="Via invitation link"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
        className="bg-red-500"
      />
    </section>
  );
};

export default MeetingList;
