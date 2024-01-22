import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { numberFormat } from '../../utils/numberFormat';
import OrderItem from '../OrderItem';

const OrdersListContainer = () => {
    const [orders, setOrders] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const ordersDb = collection(db, "orders");
        getDocs(ordersDb).then((snapshot) => {
            setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
    }, [])

    return (
        <>
            <div className="row text-center">
                {orders.length === 0 || orders.length === undefined ?
                    <>
                        <div>Sem pedidos registrados!</div>
                        <Link to="/" className="btn btn-warning fw-bold mt-3">Voltar</Link>
                    </>
                    :
                    <>
                        <h3>ID: {orders[0].id}</h3>
                        <table className="table table-hover table-responsive">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">ID Produto</th>
                                    <th scope="col">Produto</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Preço/Un</th>
                                    <th scope="col">Quantidade</th>
                                    <th scope="col" className="fw-bold">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders[0].items.map((p) => {
                                    return <>
                                        <tr className="text-center align-middle" key={`item-${p.id}`}>
                                            <OrderItem item={p} />
                                        </tr>
                                    </>
                                })}

                                <tr className="align-middle bg-gray">
                                    <td colSpan={5} className="fw-bold text-end">TOTAL:</td>
                                    <td className="fs-5 fw-bold">{numberFormat(orders[0].total)}</td>
                                </tr>
                            </tbody>


                        </table>
                    </>
                }
            </div>

        </>
    )
}

export default OrdersListContainer;