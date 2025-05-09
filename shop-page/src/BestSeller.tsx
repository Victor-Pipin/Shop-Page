
import { useEffect, useState } from "react"
import { Link } from "react-router"
import axios from "axios"

export type ProductType = {
    _id: string;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    cratedAt: string;
    updatedAt: string;
    __v: number;
};

export const BestSellers = () => {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        axios.get("https://masterclass.kimitsu.it-incubator.io/api/products")
        .then((res) => {
            const products = res.data
            setProducts(products)
        })
    }, [])

    return (
        <div className="bestSeller">
            <h2>Best Seller</h2>
            <div className="cards">
                {
                    products.map((prod) => {
                        return (
                            <div className="card" key={prod.id}>
                                <img className="card img" src={prod.image}
                                alt="Product card with price, image, button to go to product details " />
                                <h4 className="card h4">{prod.title}</h4>
                                <p className="card price">${prod.price}</p>
                                <Link to={`/product/${prod.id}`}>Show More</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}