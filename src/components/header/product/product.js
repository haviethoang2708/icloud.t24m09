
export default function Product (props) {
    const price = props.price;
    const name = props.name;
    return (
        <div className='product'>
            <h2>{name}</h2>
            <p>Price: {price}$</p>
            <p>Dien thoai thong minh so 1 the gioi !</p>
            <button type="button">Add to cart</button>
        </div>
    );
}
