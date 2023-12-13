const Item = ({ item }) => {

    const promiseProdutos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(produtos)
        }, 2000)
    })

    promiseProdutos.then((response) => {
        console.log(response)
    })

    return (
        <>

        </>
    )
}

export default Item;