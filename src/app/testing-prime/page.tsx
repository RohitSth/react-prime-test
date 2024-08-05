"use client";

import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { ColorPicker, ColorPickerProps } from "primereact/colorpicker";

const Page = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [colorHEX, setColorHEX] = useState<string>(""); // Initialize with an empty string

  return (
    <div className="flex justify-center w-full flex-col items-center">
      <div>TESTING REACT PRIME</div>

      {/* Calendar */}
      <div>
        <h1>Calendar</h1>
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value ?? null)}
          className="border-2 border-black"
        />
      </div>

      {/* Color Picker */}
      <div className="">
        <div className="font-bold" style={{ color: `#${colorHEX}` }}>
          COLOR SHOULD
        </div>

        <ColorPicker
          format="hex"
          value={colorHEX}
          onChange={(e) => setColorHEX((e.value as string) ?? "")}
        />
      </div>
    </div>
  );
};

export default Page;
