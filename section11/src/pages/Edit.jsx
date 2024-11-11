import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  return (
    <div>
      <p>{id}번 일기를 수정합니다.</p>
    </div>
  );
};

export default Edit;
