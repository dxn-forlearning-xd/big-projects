export const getOrders = () => {
  return fetch('https://dummyjson.com/carts/2').then((res) => res.json());
};

export const getRevenue = () => {
  return fetch('https://dummyjson.com/carts').then((res) => res.json());
};

export const getInventory = () => {
  return fetch('https://dummyjson.com/products').then((res) => res.json());
};

export const getContacts = () => {
  return fetch('https://dummyjson.com/users').then((res) => res.json());
};
