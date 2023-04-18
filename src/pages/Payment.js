import { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [paymentList, setPaymentList] = useState([
    {
      id: Date.now(),
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 460787,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 46976,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 596435,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 6783,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 23548,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 45686,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 85464,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 785665,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 45345,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 3453,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
    {
      id: Date.now() + 545,
      tr: 314388612345,
      name: "Jay Oso",
      date: "May 9, 2023",
      biller: "Meralco",
      amount: "169.81",
    },
  ]);
  return (
    <div className="payment-container">
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>FULLNAME</th>
            <th>ADDRESS</th>
            <th>MERALCO</th>
            <th>MANILA WATER</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {paymentList.map((pay) => (
            <tr key={pay.id}>
              <td>{pay.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
