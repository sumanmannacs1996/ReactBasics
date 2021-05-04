import {useParams} from 'react-router-dom'

export default function ProductDetails() {
    const params = useParams();
    return (
        <div>
            <h1>Product details</h1>
            <p>{params.productId}</p>
        </div>
    )
}
