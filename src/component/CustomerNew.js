import {
  NoSymbolIcon,
  PlusIcon,
  UserMinusIcon,
} from "@heroicons/react/24/outline";

const CustomerNew = ({ addBtnClick }) => {
  const addFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addFormSubmit}>
      <h2>
        <button onClick={addBtnClick}>
          <UserMinusIcon />
        </button>
        <p>New Customer</p>
      </h2>
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
      </table>

      <div className="customer-add-form">
        <input
          type="text"
          required
          name="fullName"
          placeholder="Enter full name"
        />
        <input
          type="text"
          required
          name="address"
          placeholder="Enter address"
        />
        <input
          type="text"
          required
          name="meralco"
          placeholder="Enter meralco"
        />
        <input
          type="text"
          required
          name="manilaWater"
          placeholder="Customer manila water"
        />
        <button>
          <PlusIcon />
        </button>
        <button onClick={addBtnClick}>
          <NoSymbolIcon />
        </button>
      </div>
    </form>
  );
};

export default CustomerNew;
