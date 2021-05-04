import {Link} from 'react-router-dom'

export default function Products() {
    return (
        <div>
            <p>Product page!</p>
            <ul>
                <li><Link to='/products/p1'>Product 1</Link></li>
                <li><Link to='/products/p2'>Product 2</Link></li>
                <li><Link to='/products/p3'>Product 3</Link></li>
                <li><Link to='/products/p4'>Product 4</Link></li>
                <li><Link to='/products/p5'>Product 5</Link></li>
            </ul>
        </div>
    )
}
