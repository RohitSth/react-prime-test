"use client";

import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { ColorPicker, ColorPickerProps } from "primereact/colorpicker";
import { Chips } from "primereact/chips";

const Page = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [colorHEX, setColorHEX] = useState<string>(""); // Initialize with an empty string
  const [chipValue, setChipValue] = useState<string[]>([]);

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

      {/* Chip */}
      <div>
        <div>Chip</div>
        <Chips
          value={chipValue}
          onChange={(e) => {
            // Handle null or undefined value
            const newValue = e.value ?? [];
            setChipValue(newValue);
          }}
          className="border-2 border-black"
        />
      </div>
    </div>
  );
};

export default Page;
