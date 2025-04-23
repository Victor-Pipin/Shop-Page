
// (if (product === null)...) Добавлена  условная отрисовка (conditional rendering). Необходима, что бы не было ошибки из-за асинхронщины 
// Проверяется, загружены ли данные о товаре, и, если они еще не загружены (т.е. product === null), отображается сообщение о загрузке.

import axios from "axios"
import { useEffect, useState } from "react"
import type { ProductType } from "./BestSeller.tsx"
import ratingStar from "./assets/img/rating.svg"
import whiteCart from "./assets/img/cartWhite.svg"

export const Product = () => {
    const [product, setProduct] = useState<ProductType | null>(null)

    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.io/api/products/10")
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
                <img src={product.image} alt="Black Hoodie" />
                <div className="info">
                    <p className="title">{product.title}</p>
                    <p className="price">$ {product.price}</p>
                    <div className="rating">
                        <p>Raiting: {product.rating.rate}</p>
                        <img src={ratingStar} alt="yellow svg-star" />
                    </div>
                    <div className="category">
                        <span>Category:</span>
                        <p>{product.category}</p>
                    </div>
                    <p className="description">{product.description}</p>
                    <button><img src={whiteCart} alt="White cart icon" />Add To Cart</button>
                </div>
            </div>
        </div>
    )
}