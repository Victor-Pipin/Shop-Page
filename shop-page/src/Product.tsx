
// (if (product === null)...) Добавлена  условная отрисовка (conditional rendering). Необходима, что бы не было ошибки из-за асинхронщины 
// Проверяется, загружены ли данные о товаре, и, если они еще не загружены (т.е. product === null), отображается сообщение о загрузке.

import axios from "axios"
import { useEffect, useState } from "react"
import type { ProductType } from "./BestSeller.tsx"
import ratingStar from "./assets/img/rating.svg"

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
            <div>Заглушка. Кнопка назад?</div>
            <div className="product">
                <img className="product img" src={product.image} alt="Black Hoodie" />
                <div className="product info">
                    <p className="product info title">{product.title}</p>
                    <p className="product info price">$ {product.price}</p>
                    <div className="product info rating">
                        <p>Raiting: {product.rating.rate}</p>
                        <img src={ratingStar} alt="yellow svg-star" />
                    </div>
                </div>
            </div>
        </div>
    )
}