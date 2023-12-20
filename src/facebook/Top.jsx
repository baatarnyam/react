import topCss from "@/styles/top.module.css";

const Top = (props) => {
  return <div className={topCss.top}>{props.children}</div>;
};

export default Top;
