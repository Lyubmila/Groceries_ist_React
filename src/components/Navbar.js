const Navbar = (props) => {
    return(
        <nav style={styles.navStyle}>
            <h1>{props.text}</h1>

            <ul>
                <li>Home</li>
                <li>GroceryList</li>
            </ul>
        </nav>
    )
}

const styles = {
    navStyle: {
        display: "flex",
        justifyContent: "space-around",
        border: "solid green 3px"
    }
}

export default Navbar