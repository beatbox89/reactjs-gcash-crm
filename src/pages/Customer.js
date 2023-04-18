import { useState } from "react";
import "./Customer.css";

import CustomerNew from "../component/CustomerNew";
import CustomerView from "../component/CustomerView";

const Customer = () => {
  const [customerArray] = useState([
    // {
    //   id: Date.now(),
    //   date: Date.now(),
    //   fullName: "Jay",
    //   address: "address",
    //   meralco: "Meralco",
    //   manilaWater: "ManilaWater",
    // },
    // {
    //   id: Date.now() + 1,
    //   date: Date.now(),
    //   fullName: "Lorem",
    //   address:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus recusandae voluptates architecto quam modi porro!",
    //   meralco: "1234567",
    //   manilaWater: "7654321",
    // },
    // {
    //   id: Date.now() + 2,
    //   date: Date.now(),
    //   fullName: "sad",
    //   address:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore!",
    //   meralco: "976543",
    //   manilaWater: "6953",
    // },
    // {
    //   id: Date.now() + 3,
    //   date: Date.now(),
    //   fullName: "joeh",
    //   address:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ex reiciendis excepturi unde quaerat enim alias! In id consectetur labore.",
    //   meralco: "27413",
    //   manilaWater: "133421341",
    // },
  ]);
  const [addBtn, setAddBtn] = useState(false);

  const addBtnClick = (e) => {
    e.preventDefault();
    setAddBtn(!addBtn);
  };
  return (
    <div className="customer-container">
      {addBtn === false ? (
        <CustomerView addBtnClick={addBtnClick} customerArray={customerArray} />
      ) : (
        <CustomerNew addBtnClick={addBtnClick} />
      )}
    </div>
  );
};

export default Customer;
