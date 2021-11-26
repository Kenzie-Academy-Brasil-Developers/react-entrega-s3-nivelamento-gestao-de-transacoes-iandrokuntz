import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const Form = ({ transactions, setTransactions }) => {


    const [name, setName] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()

    const formSchema = yup.object().shape({
      name: yup.string().required("Name Required"),
      quantity: yup.string().required("Quantity Required"),
      price: yup.string().required("Price Required"),
    });
  
    const {register,handleSubmit,formState: { errors }} = useForm({
      resolver: yupResolver(formSchema),
    });
  
    const newFruit = {
        
        name: name, 
        quantity: Number(quantity), 
        price: Number(price)
    }

    const onSubmit = () => {


      setTransactions([...transactions, newFruit])
    };
  
  
    return (

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Register cash input/output:</h3>
          
              <input type="text" placeholder="Name..." {...register("name")} onChange={(evt) => setName(evt.target.value)} value={name}/>
                <span>{errors.name?.message}</span>
            
              <input type="number" placeholder="Quantity"{...register("quantity")} onChange={(evt) => setQuantity(evt.target.value)} value={quantity}/>
                <span>{errors.quantity?.message}</span>
            
              <input type="number" placeholder="Price" {...register("price")} onChange={(evt) => setPrice(evt.target.value)} value={price}/>
                <span>{errors.price?.message}</span>
            
            <button type="submit">Register</button>
        
        </form>
      </div>

    )
    }
  export default Form;