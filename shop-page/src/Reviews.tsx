import { useState } from "react"
import avatarIcon from "./assets/img/avatarIcon.svg"

type Review = {
    id: number;
    author: string;
    title: string;
    text: string;
    date: string;
    raiting: number;
}

export const Reviews = () => {
    const [reviews, setReviews] = useState<Review[]>([
        {
            id: 1,
            author: "Jack Cooper",
            title: "Amazing product",
            text: "Great product, quality matches the cost",
            date: "04/11/2025",
            raiting: 5,
        },
        {
            id: 2,
            author: "Max Still",
            title: "Best choice",
            text: "The best of the analogs, not easy, but the best choice",
            date: "12/07/2025",
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
            {
                reviews.map((review) => {
                    return (
                        <div className="reviewField" key={review.id}>
                            <div className="info">
                                <div className="user">
                                    <img src={avatarIcon} alt="Avatar-icon of the user who left a review" />
                                    <div className="infoBox">
                                        <h4 className="author">{review.author}</h4>
                                        <p className="rating">{review.raiting} Rating</p>
                                    </div>
                                </div>
                                <p className="date">{review.date}</p>
                            </div>
                            <div className="content">
                                <h4 className="title">`{review.title}`</h4>
                                <p className="text">{review.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}