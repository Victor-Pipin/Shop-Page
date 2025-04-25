
// (if (product === null)...) Добавлена  условная отрисовка (conditional rendering). Необходима, что бы не было ошибки из-за асинхронщины 
// Проверяется, загружены ли данные о товаре, и, если они еще не загружены (т.е. product === null), отображается сообщение о загрузке.

    // В каком порядке работатет код в компоненте Product: 
    // 1. Заводится состояние product со значением (null)
    // 2. Пропускается(регестрируется) useEffect т.к. асинхронщина, код в return не отработает(не получены данные) поэтому...
    // 3. Делаю ранний return в проверке состояния на null - if (product === null)..., заодно подстраховка если данные всё же не придут -
    // отобразиться <h2>Загрузка карточки товара...</h2>
    // 4. Далее очередь useEffect, где устанавливаю полученные данные в состояние product и теперь он уже не null, если состояние 
    // изменилось по правилам react происходит перерисовка... 
    // 5. Снова происходит  проверка состояния product на null, не отрабатывает т.к. в состояние установлены данные полученные с сервера,
    // далее в return отрсовывается jsx на основе полученных данных

import axios from "axios"
import { useEffect, useState } from "react"
import type { ProductType } from "./BestSeller.tsx"
import ratingStar from "./assets/img/rating.svg"
import whiteCart from "./assets/img/cartWhite.svg"

export const Product = () => {
    const [product, setProduct] = useState<ProductType | null>(null)

    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.io/api/products/6")
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