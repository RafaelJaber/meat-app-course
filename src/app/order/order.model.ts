
class OrderModel {
  constructor(
    public address: string,
    public number: number,
    public complement: string,
    public paymentOption: string,
    public orderItems: OrderItemModel[] = []
  ) {}
}

class OrderItemModel {
  constructor(
    public quantity: number,
    public menuId: number
  ) {}
}

export {OrderModel, OrderItemModel}
