"use client";

import { useState } from "react";

import { Dock } from "primereact/dock";
import { MenuItem } from "primereact/menuitem";
import { RadioButton } from "primereact/radiobutton";

const Page = () => {
  const [position, setPosition] = useState<"bottom" | "top" | "left" | "right">(
    "bottom"
  );

  const items: MenuItem[] = [
    {
      label: "Finder",
      icon: () => (
        <img
          alt="Finder"
          src="https://primefaces.org/cdn/primereact/images/dock/finder.svg"
          width="100%"
        />
      ),
    },
    {
      label: "App Store",
      icon: () => (
        <img
          alt="App Store"
          src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg"
          width="100%"
        />
      ),
    },
    {
      label: "Photos",
      icon: () => (
        <img
          alt="Photos"
          src="https://primefaces.org/cdn/primereact/images/dock/photos.svg"
          width="100%"
        />
      ),
    },
    {
      label: "Trash",
      icon: () => (
        <img
          alt="trash"
          src="https://primefaces.org/cdn/primereact/images/dock/trash.png"
          width="100%"
        />
      ),
    },
  ];

  const positions: Array<{
    label: string;
    value: "bottom" | "top" | "left" | "right";
  }> = [
    {
      label: "Bottom",
      value: "bottom",
    },
    {
      label: "Top",
      value: "top",
    },
    {
      label: "Left",
      value: "left",
    },
    {
      label: "Right",
      value: "right",
    },
  ];

  return (
    <div>
      {/* Dock */}
      <div
        style={{
          padding: "16px",
          position: "relative",
          backgroundImage:
            "url('https://primefaces.org/cdn/primereact/images/dock/window.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "700px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          {positions.map((option) => {
            const { value, label } = option;

            return (
              <div
                style={{ display: "flex", alignItems: "center" }}
                key={label}
              >
                <RadioButton
                  value={value}
                  onChange={() => setPosition(value)}
                  checked={position === value}
                />
                <label htmlFor={label} style={{ marginLeft: "8px" }}>
                  {label}
                </label>
              </div>
            );
          })}
        </div>

        <Dock
          model={items}
          position={position}
          className="h-[100px] bg-white"
        />
      </div>
    </div>
  );
};

export default Page;
