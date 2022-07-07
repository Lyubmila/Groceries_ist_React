const GroceryItem = (props) => {
    const {item, brand, units, quantity} = props.grocery

    return(
        <div>
            <h3>Item: <br></br>{item}</h3>
            <h3>Brand: <br></br>{brand}</h3>
            <h3>Quantity: <br></br>{quantity} {units}</h3>

            <button onClick={() => props.handleRemove(props.grocery, props.idx)}>Remove</button>
        </div>
    )

}

export default GroceryItem