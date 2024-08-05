"use client";

import React, { useRef } from "react";

import { SpeedDial } from "primereact/speeddial";
import { Toast } from "primereact/toast";
import { MenuItem } from "primereact/menuitem";

const Page = () => {
  const toast = useRef<Toast>(null);
  //   const router = useRouter();
  const items: MenuItem[] = [
    {
      label: "Add",
      icon: "pi pi-pencil",
      command: () => {
        toast.current?.show({
          severity: "info",
          summary: "Add",
          detail: "Data Added",
        });
      },
      className: "size-20 bg-white",
    },
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current?.show({
          severity: "success",
          summary: "Update",
          detail: "Data Updated",
        });
      },
      className: "size-20 bg-red-500",
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        toast.current?.show({
          severity: "error",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
      className: "size-20 bg-green-500",
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      //   command: () => {
      //     router.push("/fileupload");
      //   },
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      //   command: () => {
      //     window.location.href = "https://react.dev/";
      //   },
      className: "size-20 bg-pink-300",
    },
  ];

  return (
    <div className="bg-gray-300">
      <Toast ref={toast} /> {/* Move Toast outside of SpeedDial container */}
      <div style={{ position: "relative", height: "500px" }}>
        <SpeedDial
          model={items}
          radius={80}
          type="circle"
          direction="up"
          style={{ left: "calc(50% - 2rem)", bottom: 0 }}
          buttonClassName="p-button-warning"
        />
        <SpeedDial
          model={items}
          radius={80}
          type="semi-circle"
          direction="down"
          style={{ left: "calc(50% - 2rem)", top: 0 }}
        />
        <SpeedDial
          model={items}
          radius={80}
          type="semi-circle"
          direction="left"
          style={{ top: "calc(50% - 2rem)", right: 0 }}
        />
        <SpeedDial
          model={items}
          radius={80}
          type="semi-circle"
          direction="right"
          style={{ top: "calc(50% - 2rem)", left: 0 }}
        />
      </div>
    </div>
  );
};

export default Page;
