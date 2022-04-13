import { createContext } from 'react';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandler } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
    product: Product
    // children?: React.ReactElement | React.ReactElement[]
    children: (args: ProductCardHandler) => JSX.Element
    className?: string
    style?: React.CSSProperties
    onChange?: (args: OnChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { increaseBy, counter, isMaxReached, maxCount, reset } = useProduct({ onChange, product, value, initialValues })

    return (
        <Provider value={{ counter, increaseBy, product, maxCount }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >

                {children({
                    count: counter,
                    isMaxReached,
                    maxCount,
                    product,

                    increaseBy,
                    reset
                })}

            </div>
        </Provider>
    )
}


