"use client";

import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { ColorPicker, ColorPickerProps } from "primereact/colorpicker";
import { Chips, ChipsChangeEvent } from "primereact/chips";

const Page = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [colorHEX, setColorHEX] = useState<string>(""); // Initialize with an empty string
  const [chipValue, setChipValue] = useState<string[]>([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>TESTING REACT PRIME</div>

      {/* Calendar */}
      <div>
        <h1>Calendar</h1>
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value ?? null)}
          style={{ border: "2px solid black" }}
        />
      </div>

      {/* Color Picker */}
      <div>
        <div style={{ fontWeight: "bold", color: `#${colorHEX}` }}>
          COLOR SHOULD
        </div>
        <ColorPicker
          format="hex"
          value={colorHEX}
          onChange={(e) => setColorHEX((e.value as string) ?? "")}
        />
      </div>

      {/* Chip */}
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <div>Chip</div>
        <Chips
          value={chipValue}
          onChange={(e: ChipsChangeEvent) => {
            const newValue = e.value ?? [];
            setChipValue(newValue);
          }}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "lightblue",
          }}
          className="custom-chips"
        />
      </div>

      <style jsx global>{`
        .custom-chips .p-chips-token {
          background-color: #007bff;
          color: white;
          border: none;
          margin: 2px;
          padding: 5px 10px;
          border-radius: 16px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
        }

        .custom-chips .p-chips-token-icon {
          color: white;
          cursor: pointer;
          margin-left: 5px;
        }

        .custom-chips .p-chips-input-token {
          margin: 2px;
        }

        .custom-chips .p-inputtext {
          padding: 5px 10px;
          border: none;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
};

export default Page;
