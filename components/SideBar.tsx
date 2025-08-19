import { RiWhatsappLine } from "@remixicon/react";
import React from "react";

const SideBar = () => {
  return (
    <aside className="border-r-2 border-zinc-600/40 flex flex-col p-2 w-[max(300px,25vw)]">
      <h1 className="font-bold text-2xl lg:text-3xl flex items-center gap-x-2">
        <RiWhatsappLine className="text-[#33d46aff] size-10" />
        <span>WhatsApp Sender</span>
      </h1>
    </aside>
  );
};

export default SideBar;
