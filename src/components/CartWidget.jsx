import cart from "../assets/cartwidget.png";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="carrito" height={30} />
      <span>1</span>
    </>
  );
};
