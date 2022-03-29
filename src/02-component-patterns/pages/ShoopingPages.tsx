import { ProductButtons, ProductTitle, ProductCard, ProductImage } from '../components';

import "../styles/custom-styles.css";

const product = {
    id: "1",
    title: "coffee - muggi",
    img: "./coffee-mug.png"
}

const ShoopingPages = () => {
    return (
        <div>
            <h1>Shooping Pages</h1>
            <hr />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title={"Cafe"} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} className="bg-dark" >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoopingPages