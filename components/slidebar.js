import React from "react";
import { useRecoilValue } from "recoil";
import { sampleState } from "./atom/Atom";

function Sidebar() {
  const sample = useRecoilValue(sampleState);
  return (
    <div>
      <p>{sample}</p>
    </div>
  );
}

export default Sidebar;
