import { v4 } from 'uuid';

export const createCheckoutData = (order, paymentMethods) => {
  const checkoutData = {
    clientMutationId: v4(),
    shipping: {
      firstName: order.name,
      lastName: order.surname,
      address1: order.address,
      address2: '',
      city: order.city,
      country: 'PL',
      state: '',
      postcode: order['post-code'],
      email: order['e-mail'],
      phone: '',
      company: '',
    },
    billing: {
      firstName: order.name,
      lastName: order.surname,
      address1: order.address,
      address2: '',
      city: order.city,
      country: 'PL',
      state: '',
      postcode: order['post-code'],
      email: order['e-mail'],
      phone: '',
      company: '',
    },
    customerNote: order.comment,
    shipToDifferentAddress: false,
    paymentMethod: paymentMethods[order.payment].methodId,
    shippingMethod: order.shipping || null,
    // transactionId: order.transactionId,
    // isPaid: order.isPaid,
    // metaData: []
  };

  // if (order.shippingMethod) {
  //   checkoutData.shippingMethod = order.shippingMethod.methodId;
  // }

  // if (order.inpostNumber.name) {
  //   checkoutData.metaData.push({ key: 'parcel_machine_id', value: order.inpostNumber.name })
  // }

  return checkoutData;
};