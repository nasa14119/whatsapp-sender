import SideBar from "@/components/SideBar";
import React, { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-1">
      <SideBar />
      <main>{children}</main>
    </div>
  );
}

export default layout;
