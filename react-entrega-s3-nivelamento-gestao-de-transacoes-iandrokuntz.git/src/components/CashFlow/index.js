

const CashFlow = ({ transactions }) => {
    const filterIn = transactions.filter((item) => item.quantity >= 0);
    
    
    const totalPriceIn = filterIn.reduce((acc, value) => {
      return (value.price * value.quantity) + acc 
    }, 0)
  
    const totalQuantityIn = filterIn.reduce((acc, value) => {
      return value.quantity + acc
    }, 0)

    const filterOut = transactions.filter((item) => item.quantity < 0);

    const totalPriceOut = filterOut.reduce((acc, value) => {
      return (value.price * value.quantity) + acc 
    }, 0)
  
    const totalQuantityOut = filterOut.reduce((acc, value) => {
      return value.quantity + acc
    }, 0)

  return(
        <div>
    
      <h4>Product entry</h4>
      {filterIn.map((item, index) => {
        return (
          <ul key={index}>
            <h3>{item.name} </h3>
            <li>Quantity:  <strong>R$ {item.quantity}</strong></li>
            <li>Price:  <strong>R$ {item.price}</strong></li>
          </ul>
        )
      })}
      <div className="total">
        <p>Total Price: <strong> R${totalPriceIn}</strong></p>
        <p>Total Quantity Input: <strong>{totalQuantityIn}</strong></p>
      </div>

      <h4>Product output</h4>
      {filterOut.map((item, index) => {
        return (
          <ul key={index}>
            <h3>{item.name}</h3>
            <li>Quantity:  <strong className="negative">R$ {item.quantity}</strong></li>
            <li>Price:  <strong>R$ {item.price}</strong></li>
          </ul>
        )
      })}
      <div className="total">
        <p>Total Price: <strong className="negative"> R$ {totalPriceOut}</strong></p>
        <p>Total Quantity Output: <strong className="negative">{totalQuantityOut}</strong></p>
      </div>
    </div>
  )
}

  export default CashFlow