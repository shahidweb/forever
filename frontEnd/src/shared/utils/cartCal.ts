export const cartTotalCal = (items: any) => {
  const subTotal = items.reduce(
    (sum: any, item: any) => sum + item.productId.price * (item.quantity ?? 1),
    0
  );

  const updated = {
    subtotal: subTotal,
    shipping: 11,
    total: subTotal + 11,
  };
  return updated;
};
