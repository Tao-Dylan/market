export default {
  addCart(context, payload) {
    //查找之前数组中是否含有该商品
    console.log(payload)
    let oldProduct = context.state.cartList.find(
      item => item.iid === payload.iid
    );
    if (oldProduct) {
      oldProduct.count += 1;
      context.commit("addCount", oldProduct);
    } else {
      payload.count = 1;
      context.commit("addToCart", payload);
    }
  }
};
