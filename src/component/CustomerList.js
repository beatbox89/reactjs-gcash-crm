const CustomerList = ({ customerArray }) => {
  return (
    <>
      <tbody>
        {customerArray.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.date}</td>
            <td>{customer.fullName}</td>
            <td>{customer.address}</td>
            <td>{customer.meralco}</td>
            <td>{customer.manilaWater}</td>
            <td>action</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default CustomerList;
