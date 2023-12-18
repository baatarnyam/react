const Price = (props) => {
  const { price1, price2, price3 } = props;
  //   console.log(props);
  return (
    <div>
      <div>{price1}</div>
      <div>{price2}</div>
      <div>{price3}</div>
    </div>
  );
};

export default Price;
