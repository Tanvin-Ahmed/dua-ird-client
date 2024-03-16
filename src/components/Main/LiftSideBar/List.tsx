"use client";

import { useState } from "react";
import Card from "./Card";
import SubCategoryTimeline from "./SubCategoryTimeline";
import DuaTimeline from "./DuaTimeline";

const List = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState("");
  return (
    <div className="w-full">
      <Card onClick={() => setSelectedCategoryId("1")} />
      {selectedCategoryId === "1" && (
        <>
          <SubCategoryTimeline setSubCatId={setSelectedSubCategoryId} />
          {selectedSubCategoryId === "1" && <DuaTimeline />}
        </>
      )}
    </div>
  );
};

export default List;
