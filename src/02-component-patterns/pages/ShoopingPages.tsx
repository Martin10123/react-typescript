
import { ProductButtons, ProductTitle, ProductCard, ProductImage } from '../components';
import { products } from '../data/products';
import { useShoopingCart } from '../hooks/useShoopingCart';


import "../styles/custom-styles.css";



const ShoopingPages = () => {

    const { shoppingCart, onProductChange } = useShoopingCart()

    return (
        <div>
            <h1>Shooping Pages</h1>
            <hr />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className="bg-dark"
                        value={shoppingCart[product.id]?.count || 0}
                        onChange={(evento) => onProductChange(evento)}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-white" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>

                ))}
            </div>

            <div className="custom-cart">

                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        product={product}
                        className="bg-dark"
                        style={{ width: "150px" }}
                        value={product.count}
                        onChange={onProductChange}
                    >
                        <ProductImage className="custom-image" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>
        </div >
    )
}

export default ShoopingPages