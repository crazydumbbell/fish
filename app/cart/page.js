import { age, name } from "./data.js";
//!2개 익스포트한 파일을 임포트하면 익스포트한 이름 그대로 중괄호에 감싸서 받아야됨

const Cart = () => {
  let 장바구니 = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
    </div>
  );
};

export default Cart;

const CartItem = (props) => {
  return (
    <div className="cart-item">
      <p>상품명 {props.item}</p>
      <p>$40</p>
      <p>1개</p>
      <Banner company="삼성카드" />
      <Banner company="현대카드" />
      <Banner company="롯데카드" />
    </div>
  );
};

const Banner = (a) => {
  return <h5>{a.company} 결제 행사중</h5>;
};
