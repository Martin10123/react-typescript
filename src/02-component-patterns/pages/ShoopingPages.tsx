
import { ProductButtons, ProductTitle, ProductCard, ProductImage } from '../components';
import { products } from '../data/products';

import "../styles/custom-styles.css";

const product = products[0]


const ShoopingPages = () => {

    return (
        <div>
            <h1>Shooping Pages</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {({ reset, increaseBy, count, isMaxReached }) => (
                    <>
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-white" />
                        <ProductButtons className="custom-buttons" />

                        <button onClick={reset}>Reset</button>

                        {!isMaxReached && <button onClick={() => increaseBy(+2)}>+2</button>}
                        <button onClick={() => increaseBy(-2)}>-2</button>
                        <span style={{ color: '#fff' }}>
                            {count}
                        </span>
                    </>
                )}
            </ProductCard>

        </div >
    )
}

export default ShoopingPages