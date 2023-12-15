import { useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import Item from "../Item";
import { Produtos } from "../../produtos";

const ItemList = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        setProdutos(Produtos)
    }, [])

    return (
        <>
            <div className="row">
                {produtos.map((p, i) => {
                    return <div className="col col-md-6 col-lg-4 col-xl-3 my-3 d-flex" key={`produto-${i}`}><Item item={p} key={`produto-${p.id}`}/></div>
                })}
            </div>
            {/* <ItemCount produtos={Produtos}/> */}
            
        </>
    )
}

export default ItemList;