const getChipByCat = (cat: string) => {
  if (cat === "International") {
    return "#009270";
  } else if (cat === "League") {
    return "#32c8ed";
  } else if (cat === "Domestic") {
    return "#e8850c";
  } else return "#e63298";
};

const getChipByFormat = (cat: string) => {
  if (cat === "TEST") {
    return "#f089c3";
  } else if (cat === "ODI") {
    return "#89d6f0";
  } else if (cat === "T20") {
    return "#89d6f0";
  } else return "##a889f0";
};

const getBackgroundColorByType = (cat: string) => {
  if (cat === "International") {
    return "#e1f5f0";
  } else if (cat === "League") {
    return "#e6f4f7";
  } else if (cat === "Domestic") {
    return "#f7eada";
  } else return "#f7d7ea";
};

export { getChipByCat, getChipByFormat, getBackgroundColorByType };
