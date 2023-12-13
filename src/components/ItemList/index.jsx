import { useEffect, useState } from "react";
import ItemCount from "../ItemCount";

const Produtos = [
    { id: 1, name: 'Samsung Galaxy A54', description: '8gb RAM, 256gb armazenamento', price: 1700, stock: 3 , imgUrl:"/images/a54.png"},
    { id: 2, name: 'Samsung Galaxy M54', description: '8gb RAM, 256gb armazenamento', price: 1750, stock: 2 , imgUrl:"/images/m54.avif"},
    { id: 3, name: 'Samsung Galaxy S23 FE', description: '8gb RAM, 128gb armazenamento', price: 3300 , stock: 1 , imgUrl:"/images/s23fe.avif"}
]

const ItemList = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        setProdutos(Produtos)
    }, [])

    return (
        <>
            <ul className="list-group">
                {produtos.map((p, i) => {
                    return <li className="list-group-item" key={`produto-${i}`}>{p.name}</li>
                })}
            </ul>
            <ItemCount produtos={Produtos}/>
        </>
    )
}

export default ItemList;