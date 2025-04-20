
// (if (product === null)...) Добавлена  условная отрисовка (conditional rendering). Необходима что бы не было ошибки из-за асинхронщины 
// Проверяется, загружены ли данные о товаре, и, если они еще не загружены (т.е. product === null), отображаете сообщение о загрузке.

import axios from "axios"
import { useEffect, useState } from "react"
import type { ProductType } from "./BestSeller.tsx"

export const Product = () => {
    const [product, setProduct] = useState<ProductType | null>(null)

    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.io/api/products/1")
    .then((res) => {
        const product = res.data
        setProduct(product)
    })
    }, [])

    if (product === null) {
        return <h2>Загрузка карточки товара...</h2>
    }

    return (
        <div>
            <h1>Product {product.title}</h1>
        </div>
    )
}