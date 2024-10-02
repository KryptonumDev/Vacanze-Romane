import { v4 } from 'uuid';

export const createCheckoutData = (order, paymentMethods, needInpost, parcelMachine) => {
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
      phone: order.phone,
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
      phone: order.phone,
      company: '',
    },
    customerNote: order.comment + (needInpost ? parcelMachine ? ` Numer paczkomatu: ${parcelMachine.name}` : ' Najbliższy paczkomat do adresu rozliczeniowego' : ''),
    shipToDifferentAddress: false,
    paymentMethod: paymentMethods[order.payment].methodId,
    shippingMethod: order.shipping || null,
    // transactionId: order.transactionId,
    // isPaid: order.isPaid,
    // metaData: [
    //   { key: "paczkomat_id", value: "KRA30A" },
    // ]
  };

  // if (order.shippingMethod) {
  //   checkoutData.shippingMethod = order.shippingMethod.methodId;
  // }

  // if (order.inpostNumber.name) {
  //   checkoutData.metaData.push({ key: 'parcel_machine_id', value: order.inpostNumber.name })
  // }

  return checkoutData;
};