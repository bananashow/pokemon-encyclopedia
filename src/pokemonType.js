export const typeTransform = (enType) => {
  let color;
  let koType;

  switch (enType) {
    case "normal":
      color = "#999999";
      koType = "노말";
      break;
    case "fighting":
      color = "#ffa202";
      koType = "격투";
      break;
    case "flying":
      color = "#95c9ff";
      koType = "비행";
      break;
    case "poison":
      color = "#994dcf";
      koType = "독";
      break;
    case "ground":
      color = "#ab7939";
      koType = "땅";
      break;
    case "rock":
      color = "#bcb889";
      koType = "바위";
      break;
    case "bug":
      color = "#9fa424";
      koType = "벌레";
      break;
    case "ghost":
      color = "#6e4570";
      koType = "고스트";
      break;
    case "steel":
      color = "#6aaed3";
      koType = "강철";
      break;
    case "fire":
      color = "#ff612c";
      koType = "불꽃";
      break;
    case "water":
      color = "#2992ff";
      koType = "물";
      break;
    case "grass":
      color = "#42bf24";
      koType = "풀";
      break;
    case "electric":
      color = "gray";
      koType = "전기";
      break;
    case "psychic":
      color = "#ff637f";
      koType = "에스퍼";
      break;
    case "ice":
      color = "#42d8ff";
      koType = "얼음";
      break;
    case "dragon":
      color = "#5462d6";
      koType = "드래곤";
      break;
    case "dark":
      color = "#4f4747";
      koType = "악";
      break;
    case "fairy":
      color = "#ffb1ff";
      koType = "페어리";
      break;

    default:
      break;
  }

  return { color, koType };
};
