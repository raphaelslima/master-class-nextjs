type Props = {
    params: {
        slugs: string[]
    }
}

const Shop = ({params} : Props) => {
    console.log(params)
    return(
        <div>
            <h1>shop</h1>
        </div>
    )
}

export default Shop