import { useEffect, useState } from "react";
// import ItemCount from "../ItemCount";
import Item from "../Item";
import { Produtos } from "../../produtos";
import Spinner from "../Spinner";

const ItemList = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {

        const delay = setTimeout(() => {

            setProdutos(Produtos)
      
          }, 2000)
      
          return () => {
      
            clearTimeout(delay)
      
          }
    }, [])

    return (
        <>
            <div className="row">
                {produtos.length === 0 ? <Spinner /> : produtos.map((p, i) => {
                    return <div className="col col-md-6 col-lg-4 col-xl-3 my-3 d-flex" key={`produto-${i}`}><Item item={p} key={`produto-${p.id}`}/></div>
                })}
            </div>
            {/* <ItemCount produtos={Produtos}/> */}
            
        </>
    )
}

export default ItemList;