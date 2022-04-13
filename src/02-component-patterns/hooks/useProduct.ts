import { useEffect, useRef, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    onChange?: (args: OnChangeArgs) => void
    product: Product
    value?: number
    initialValues?: InitialValues
}

const useProduct = ( {onChange, product, value = 0, initialValues}: useProductArgs ) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false)

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0)
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue)
        onChange && onChange({ count: newValue, product })
    }    

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
      if (!isMounted.current) return;
      setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
      }, [])

    return {
        counter, 
        increaseBy, 
        isMaxReached:!!initialValues?.maxCount && counter === initialValues?.maxCount,
        maxCount: initialValues?.maxCount,
        reset
    }
}

export default useProduct