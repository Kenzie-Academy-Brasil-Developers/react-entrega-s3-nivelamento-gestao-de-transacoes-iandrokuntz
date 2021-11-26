import { useState } from "react";
import Form from "../Form";
import CashFlow from "../CashFlow";
import "./style.css"

const Display = () => {

    const [transactions, setTransactions ] = useState([
        {name: "banana", quantity: 100, price: 5 },
        {name: "strawberry", quantity: -10, price: 2 },
        {name: "orange", quantity: 50, price: 6 },
    ])

  return (
    <div>
      <h1>Fruits Shop</h1>
          <CashFlow transactions={transactions} setTransactions={setTransactions}/>
          <Form transactions={transactions} setTransactions={setTransactions}/>      
        
    </div>
  );
};

export default Display;