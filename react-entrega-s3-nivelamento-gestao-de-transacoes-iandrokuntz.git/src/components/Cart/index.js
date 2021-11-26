

const Cart = ({ transactions }) => {


    const totalPrice = transactions.reduce((acc, value) => {
      return  value.price + acc  * value.quantity
    }, 0)
  
    return(

      <div>

        {transactions.map((item, index) => {
          return (
            <ul key={index}>
              <h5>{item.name} </h5>
              <li>Quantity: {item.quantity}</li>
              <li>Price: R$ {item.price}</li>
            </ul>
          )
        })}
        <h3>Total Price: R$ {totalPrice}</h3>

      </div>

    )
  }
  
  export default Cart;