export const pickBackGroundColor = ({ variant }) => {
  switch (variant) {
    case "success":
      return "#2BE90C";
    case "danger":
      return "#E91C0C";
    case "disabled":
      return "#grey";
    default:
      return "#4eb5f1";
  }
};

export const pickHoverColor = ({ variant }) => {
  switch (variant) {
    case "success":
      return "#23A80D";
    case "danger":
      return "#AC0D01";
    case "disabled":
      return "#grey";
    default:
      return "#4095C6";
  }
};
