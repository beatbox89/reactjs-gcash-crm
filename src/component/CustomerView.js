import { UserPlusIcon } from "@heroicons/react/24/outline";
import CustomerList from "../component/CustomerList";

const CustomerView = ({ addBtnClick, customerArray }) => {
  return (
    <>
      <h2>
        <button onClick={addBtnClick}>
          <UserPlusIcon />
        </button>
        <p>Customer List</p>
      </h2>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>REGISTER DATE</th>
              <th>FULLNAME</th>
              <th>ADDRESS</th>
              <th>MERALCO</th>
              <th>MANILA WATER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <CustomerList customerArray={customerArray} />
        </table>
      </div>
      {customerArray.length === 0 && (
        <h1>
          <p>No Data record</p>{" "}
        </h1>
      )}
    </>
  );
};

export default CustomerView;
