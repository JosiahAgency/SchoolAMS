"use client";

import { time } from "console";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam vel nisi nec nunc tincidunt tincidunt. Nulla facilisi. Nullam vel nisi nec nunc tincidunt tincidunt.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam vel nisi nec nunc tincidunt tincidunt. Nulla facilisi. Nullam vel nisi nec nunc tincidunt tincidunt.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla facilisi. Nullam vel nisi nec nunc tincidunt tincidunt. Nulla facilisi. Nullam vel nisi nec nunc tincidunt tincidunt.",
  },
];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-pink-100 rounded-md p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={24} height={24} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 shadow-md bg-purple-100 odd:border-t-shade05 even:border-t-shade06"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold capitalize text-gray-800">
                {event.title}
              </h1>
              <span className="text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-600 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
