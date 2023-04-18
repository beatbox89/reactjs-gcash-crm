import { useState } from "react";
import "./CRM.css";

import Navbar from "../component/Navbar";
import Dashboard from "../component/Dashboard";

import Account from "../assets/account-circle.svg";
import {
  ComputerDesktopIcon,
  SquaresPlusIcon,
  UserIcon,
  IdentificationIcon,
  CreditCardIcon,
  WrenchScrewdriverIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Contact from "../component/Contact";
import Payment from "../pages/Payment";

const CRM = () => {
  const crmBtn = [
    {
      id: 1,
      icon: <ComputerDesktopIcon />,
      type: "button",
      name: "Monitoring",
    },
    {
      id: 2,
      icon: <SquaresPlusIcon />,
      type: "button",
      name: "Dashboard",
    },
    {
      id: 3,
      icon: <UserIcon />,
      type: "button",
      name: "Contact",
    },
    {
      id: 4,
      icon: <IdentificationIcon />,
      type: "button",
      name: "Payment",
    },
    {
      id: 5,
      icon: <CreditCardIcon />,
      type: "button",
      name: "Transaction",
    },
    {
      id: 6,
      icon: <WrenchScrewdriverIcon />,
      type: "button",
      name: "Setting",
    },
  ];

  const [isActive, setIsActive] = useState("");
  const [myLink, setMyLink] = useState(null);

  const crmLinkBtn = (btn) => {
    setIsActive(btn.id);
    setMyLink(btn.name);
    // console.log(myLink);
  };

  return (
    <div className="crm-container">
      <nav>
        <div>
          <img src={Account} alt="" />
          <h3>
            Jay Oso
            <p>Lorem ipsum dolor sit amet.</p>
          </h3>
        </div>
        <ul>
          {crmBtn.map((btn) => (
            <li key={btn.id}>
              <button
                type={btn.type}
                name={btn.id}
                className={isActive === btn.id ? "crm-active" : ""}
                onClick={() => crmLinkBtn(btn)}
              >
                {btn.icon}
                <p> {btn.name}</p>
              </button>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <button name="LogOut">
              <ArrowRightOnRectangleIcon />
              <p>Log Out</p>
            </button>
          </li>
        </ul>
      </nav>
      <main className="main-container">
        <Navbar />
        {myLink === "Monitoring" ? (
          <Payment />
        ) : myLink === "Dashboard" ? (
          <Dashboard />
        ) : myLink === "Contact" ? (
          <Contact />
        ) : myLink === "Payment" ? (
          "payment"
        ) : myLink === "Transaction" ? (
          "transaction"
        ) : myLink === "Setting" ? (
          "setting"
        ) : (
          <Dashboard />
        )}
      </main>
    </div>
  );
};

export default CRM;
