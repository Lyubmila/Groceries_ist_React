import GroceryItem from "./GroceryItem";

const GroceryList = (props) => {
 
 return(
    <div>
        <h2>Groceries</h2>
        
        {
        props.groceries.map(
            (i, idx) => !i.isPurchased ? (<GroceryItem grocery={i} 
            key={idx} idx={idx} handleRemove ={props.handleRemove}/>) : (<h3 key={idx}>{i.item} is purchased!</h3>)
        )
        }
    </div>
 )  

}

export default GroceryList