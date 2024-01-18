import { useContext, useEffect, useState } from "react";
import Item from "../Item";
import { Produtos } from "../../produtos";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";

const ItemList = () => {

    const { category } = useParams();
    const [produtos, setProdutos] = useState([])

    console.log("PRODUTOS NO CONTEXT: ",useContext(CartContext).products)
    console.log("PRODUTOS MOCKADOS: ", produtos)

    useEffect(() => {
        setProdutos([])
        const delay = setTimeout(() => {
            setProdutos(category ? Produtos.filter((item) => {
                return item.category === category
            }) : Produtos)
        }, 1000)

        return () => {
            clearTimeout(delay)
        }
    }, [category])

    return (
        <>
            <div className="row">
                {produtos.length === 0 ? <Spinner /> : produtos.map((p, i) => {
                    return <div className="col-6 col-md-6 col-lg-4 col-xl-3 my-3 d-flex" key={`produto-${i}`}><Item item={p} key={`produto-${p.id}`} /></div>
                })}
            </div>

        </>
    )
}

export default ItemList;