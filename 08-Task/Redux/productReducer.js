const defaultProducts = [
  {
    id: 1,
    name: "iPhone 15",
    price: 1200,
    description: "Latest Apple smartphone with A17 chip",
    image: "https://m.media-amazon.com/images/I/71657TiFeHL.jpg"
  },
  {
    id: 2,
    name: "Samsung TV",
    price: 900,
    description: "55 inch 4K Smart TV",
    image: "https://m.media-amazon.com/images/I/81KBpyj05eL.jpg"
  },
  {
    id: 3,
    name: "Nike Shoes",
    price: 150,
    description: "Comfortable running shoes",
    image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/DECEMBER/5/s5cY2DdT_4ff7d33740664e01aafb75c4899f2dd2.jpg"
  },
  {
    id: 4,
    name: "MacBook Pro",
    price: 2200,
    description: "Powerful laptop for developers",
    image: "https://inventstore.in/wp-content/uploads/2024/11/5-scaled.webp"
  }
];

const stored = JSON.parse(localStorage.getItem("products"));

if (!stored) {
  localStorage.setItem("products", JSON.stringify(defaultProducts));
}

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || []
};

const productReducer = (state = initialState, action) => {
  let updated;

  switch (action.type) {
    case "ADD":
      updated = [...state.products, action.payload];
      localStorage.setItem("products", JSON.stringify(updated));
      return { products: updated };

    case "DELETE":
      updated = state.products.filter(p => p.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(updated));
      return { products: updated };

    case "UPDATE":
      updated = state.products.map(p =>
        p.id === action.payload.id ? action.payload : p
      );
      localStorage.setItem("products", JSON.stringify(updated));
      return { products: updated };

    default:
      return state;
  }
};

export default productReducer;