import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img,stock
        }

        addItem(item, quantity)
        
    }

    return (
        <div className="ContainerDetail">
            <div className="SegundoConteiner">
                <picture>
                    <img src={img} alt={name} className="ImgDetail" />
                </picture>
                <article className="CardItem">
                    <header className="Header">
                        <h2 className="ItemHeader">
                            {name}
                        </h2>
                    </header>
                    <section>
                        <p className="Info">
                            Marca: {category}
                        </p>
                        <p className="Info">
                            Precio: ${price}
                        </p>
                        
                    </section>

                    <footer className="ItemFooter">
                        {
                            quantityAdded > 0 ? (
                                <Link to="/cart" className="Option">Terminar compra</Link>
                            ) : (

                                <ItemCount initial={1} stock={stock} onAdd={(quantity) => handleOnAdd(quantity)} />
                            )
                        }
                    </footer>
                </article >
            </div>
            <p className="Info">
                Descripcion: {description}
            </p>
        </div>
    )
}

export default ItemDetail