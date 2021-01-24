import Item1 from "../../images/pizza/pizza1-min.jpg";
import Item2 from "../../images/pizza/pizza2-min.jpg";
import Item3 from "../../images/pizza/pizza3-min.jpeg";

import Item4 from "../../images/pasta/pastacom.jpg";
import Item5 from "../../images/pasta/pastacom2.jpg";
import Item6 from "../../images/pasta/pastacom3.jpg";

import Item7 from "../../images/burger/burger1.jpg";
import Item8 from "../../images/burger/burger2.jpg";
import Item9 from "../../images/burger/burger3.jpg";

import {
  ADD_ITEM,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Farmhouse",
      desc: "Capsicum, tomato & grilled mushroom",
      price: 150,
      img: Item1,
      type: true,
    },
    {
      id: 2,
      title: "Peppy Paneer",
      desc: "Paneer, crisp capsicum with red paprika",
      price: 200,
      img: Item2,
      type: true,
    },
    {
      id: 3,
      title: "Veggie Paradise",
      desc: "Golden corn, black olives, capsicum,",
      price: 250,
      img: Item3,
      type: true,
    },
    {
      id: 4,
      title: "Chicken Pepperoni",
      desc: "Chicken Pepperoni with extra cheese",
      price: 150,
      img: Item3,
      type: false,
    },
    {
      id: 5,
      title: "Chicken Fiesta",
      desc: "Grilled chicken rashers, peri-peri chicken",
      price: 200,
      img: Item1,
      type: false,
    },
    {
      id: 6,
      title: "Chicken Sausage",
      desc: "Spicy, herbed chicken sausage on pizza",
      price: 250,
      img: Item2,
      type: false,
    },

    {
      id: 7,
      title: "McSpicy Paneer",
      desc: "Rich and filling cottage cheese patty",
      price: 150,
      img: Item7,
      type: true,
    },
    {
      id: 8,
      title: "McVeggie ",
      desc: "Patty filled with potatoes, peas, carrots ",
      price: 200,
      img: Item8,
      type: true,
    },
    {
      id: 9,
      title: "American Cheese  ",
      desc: "Grilled chicken patty covered with cheese",
      price: 250,
      img: Item9,
      type: true,
    },
    {
      id: 10,
      title: "McChicken Burger",
      desc: "Creamy mayonnaise and crunchy lettuce",
      price: 150,
      img: Item9,
      type: false,
    },
    {
      id: 11,
      title: "Chicken Maharaja ",
      desc: "Tender and juicy chicken patty",
      price: 200,
      img: Item7,
      type: false,
    },
    {
      id: 12,
      title: "Schezwan Chicken",
      desc: " Chicken patty grilled to perfection",
      price: 250,
      img: Item8,
      type: false,
    },
    {
      id: 13,
      title: "Creamy Tomato",
      desc: "Delicious creamy tomato pasta",
      price: 150,
      img: Item4,
      type: true,
    },
    {
      id: 14,
      title: "Moroccan Spice  ",
      desc: "Harissa sauce and delicious pasta.",
      price: 200,
      img: Item5,
      type: true,
    },
    {
      id: 15,
      title: "Tikka Masala ",
      desc: "Onion, Paneer Tikka, Parsley sprinkle",
      price: 250,
      img: Item6,
      type: true,
    },

    {
      id: 16,
      title: "Moroccan Spice  ",
      desc: "Spicy Red dressing, Onion, Chicken",
      price: 150,
      img: Item6,
      type: false,
    },

    {
      id: 17,
      title: "Creamy Tomato  ",
      desc: "Creamy tomato pasta topping",
      price: 200,
      img: Item4,
      type: false,
    },

    {
      id: 18,
      title: "Tikka Masala ",
      desc: "Spicy Red dressing, Onion, Chicken Tikka",
      price: 250,
      img: Item5,
      type: false,
    },
  ],

  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  if (action.type === ADD_ITEM) {
    let addItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addItem.quantity += 1;
      return {
        ...state,
        total: state.total + addItem.price,
      };
    } else {
      addItem.quantity = 1;
      let newTotal = state.total + addItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addItem],
        total: newTotal,
      };
    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
