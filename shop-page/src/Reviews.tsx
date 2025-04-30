import { useState } from "react"

type Review = {
    author: string;
    title: string;
    text: string;
    date: string;
    raiting: number;
}

export const Reviews = () => {
    const [reviews, setReviews] = useState<Review[]>([
        {
            author: "Jack Cooper",
            title: "Amazing product",
            text: "Great product, quality matches the cost",
            date: "04-11-2025",
            raiting: 5,
        }
        {
            author: "Max Still",
            title: "Best choice",
            text: "The best of the analogs, not easy, but the best choice",
            date: "12-07-2025",
            raiting: 9,
        }
    ])

    return (
        <div className="reviewBox">
            <div className="review">
                <h3>Reviews (189)</h3>
                <textarea placeholder="Provide your text..."></textarea>
                <button>Send review</button>
            </div>
        </div>
    )
}