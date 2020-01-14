import { Toast } from "vant";

export default {
  addCount(state, payload) {

    Toast('添加购物车成功')
    payload.count++;
  },
  addToCart(state, payload) {
    payload.count += 1;
    state.cartList.push(payload);
  }
};
