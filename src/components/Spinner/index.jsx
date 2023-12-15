const Spinner = () => {

    return (
        <>
            <div className="container text-center align-middle" style={{height: "90vh"}}>
                <div className="spinner-border text-primary" role="status"  style={{position: 'relative', top: "50%"}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner;