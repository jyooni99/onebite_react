import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

export const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [diaryItem, setDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setDiaryItem(currentDiaryItem);
  }, [id, data]);

  return diaryItem;
};