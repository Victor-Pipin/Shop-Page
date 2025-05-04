// currentReviewHandler:
// e: ChangeEvent<HTMLTextAreaElement>: Здесь мы указываем, что переменная e является объектом события изменения (change event), 
// который возникает в элементе <textarea>.
// ChangeEvent — это встроенный тип в TypeScript, который определяет структуру события изменения для элементов формы.
// e.currentTarget.value: currentTarget указывает на элемент, к которому привязано событие. 
// В данном случае это <textarea>. Мы получаем текущее значение текстовой области через свойство value.

import { ChangeEvent, useState } from "react"
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
            date: "04/11/2024",
            raiting: 5,
        },
        {
            id: 3,
            author: "Greg Brook",
            title: "Classic quality",
            text: "Stable quality over many years",
            date: "22/05/2025",
            raiting: 6,
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
    const [currentReview, setCurrentReview] = useState('')

    const currentReviewHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.currentTarget.value
        setCurrentReview(newValue)
    }

    return (
        <div className="reviewBox">
            <div className="review">
                <h3>Reviews (189)</h3>
                <textarea 
                    placeholder="Provide your text..."
                    onChange={currentReviewHandler}
                    ></textarea>
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
                                <div>
                                    <p className="date">{review.date}</p>
                                </div>
                            </div>
                            <div className="content">
                                <h4 className="title">`{review.title}`</h4>
                                <p className="text">
                                    `{review.text} 
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sunt voluptate ducimus aut 
                                    provident, assumenda eum mollitia earum temporibus necessitatibus officiis possimus sit quibusdam 
                                    quia veniam nemo maxime quod tenetur!`
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}