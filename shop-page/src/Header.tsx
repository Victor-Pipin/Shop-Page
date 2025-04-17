import logo from "./assets/img/logo.svg"
import cart from "./assets/img/cart.svg"

export const Header = () => {
    return (
    <div className="header">
        <img src={logo} alt="Logo icon" />
        <img src={cart} alt="Cart icon" />
    </div>
    )
}