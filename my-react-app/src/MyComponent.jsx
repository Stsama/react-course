import React,{useState} from 'react'

const MyComponent = () => {
    const [name, setName] = useState('Stranger')
    const [quantity, setQuantity] = useState(1)
    const [instructions, setInstructions] = useState("")
    const [payment, setPayment] = useState("Credit Card")
    const [shipping, setShipping] = useState("UPS")

    const changeName = (e) => {
        setName(e.target.value)
    }
    const quantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const instructionsChange = (e) => {
        setInstructions(e.target.value)
    }

    const paymentSelect = (e) => {
        setPayment(e.target.value)
    }

    const shippingSelect = (e) => {
        setShipping(e.target.value)
    }

  return (
    <div>
        <h1>Hello, {name}</h1>
        <input type="text" value={name} onChange={changeName} />
        <h1>Quantity: {quantity}</h1>
        <input type="number" value={quantity} onChange={quantityChange} />
        <h1>Special Instructions:</h1>
        <textarea value={instructions} onChange={instructionsChange} placeholder='Enter delivery instructions'></textarea>
        <h1>Payment Method: {payment}</h1>
        <select value={payment} onChange={paymentSelect}>
            <option value="">Select an option</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
        </select>
        <h1>Shipping Method: {shipping}</h1>
        {/* radio  */}
        <label>
            <input type="radio" value="UPS" checked={shipping === "UPS"} onChange={shippingSelect} />
            UPS
        </label> <br /> 
        <label>
            <input type="radio" value="FedEx" checked={shipping === "FedEx"} onChange={shippingSelect} />
            FedEx
        </label> <br />
        <label>
            <input type="radio" value="USPS" checked={shipping === "USPS"} onChange={shippingSelect} />
            USPS
        </label>
    </div>
  )
}

export default MyComponent