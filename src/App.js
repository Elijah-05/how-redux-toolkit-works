import { useSelector } from "react-redux";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

function App() {
  const {
    account: { balance },
    customer: { fullName },
  } = useSelector((state) => state);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer customerName={fullName} />
          <AccountOperations />
          <BalanceDisplay balance={balance} />
        </>
      )}
    </div>
  );
}

export default App;
