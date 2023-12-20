import topLeftCss from "@/styles/topLeft.module.css";

const TopLeft = (props) => {
  const { text, txtColor, fontSize, fontWeight } = props;
  return (
    <div
      className={topLeftCss.topLeft}
      style={{ color: txtColor, fontSize, fontWeight }}
    >
      {text}
    </div>
  );
};
export default TopLeft;
