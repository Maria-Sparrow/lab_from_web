import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "ANALGIN",
      producer: "Ukraine",
      description:
        "Analgin (metamizole sodium) has analgesic, antipyretic and anti-inflammatory effects. The analgesic effect is due to the inhibition of COX and blocking the synthesis of prostaglandins from arachidonic acid, which are involved in the formation of pain reactions (bradykinins, prostaglandins, etc.); slowing down the conduction of extra- and proprioceptive pain impulses in the central nervous system, increasing the threshold of excitability of the thalamic centers of pain sensitivity and reducing the response of brain structures responsible for the perception of pain to external stimuli.",
      price: 25.0,
      image:
        "https://i.etsystatic.com/7866579/r/il/a9a7f2/694601383/il_570xN.694601383_r7w6.jpg",
    },
    {
      id: 2,
      title: "PARACETAMOL",
      producer: "India",
      description:
        "Inhibits GHG synthesis and reduces the excitability of the thermoregulatory center of the hypothalamus. Rapidly absorbed from the gastrointestinal tract, binds to plasma proteins. T 1/2 from plasma 1-4 hours Metabolized in the liver with the formation of glucuronide and paracetamol sulfate. Excreted by the kidneys mainly as conjugation products, less than 5% is excreted unchanged.",
      price: 20.0,
      image:
        "https://usatsneakhype.files.wordpress.com/2014/12/glitter-pills-1.jpg?w=1000",
    },
    {
      id: 3,
      title: "LINEX",
      producer: "USA",
      description:
        "Combined preparation containing 3 different types of lyophilized viable lactic acid bacteria from different parts of the intestine, which are part of the normal intestinal flora, maintain and regulate the physiological balance of the intestinal microflora.",
      price: 50.0,
      image:
        "https://i.pinimg.com/originals/1c/7b/69/1c7b698a23d7273432210b0b66ed9117.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;