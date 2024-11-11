import emotion1 from "../emotion1.png";
import emotion2 from "../emotion2.png";
import emotion3 from "../emotion3.png";
import emotion4 from "../emotion4.png";
import emotion5 from "../emotion5.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}