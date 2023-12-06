type Props = {
    params: {
        id: string
    }
}

const Blog = ({params}: Props) => {
    return(
        <div>
            <h2>Blog {params.id}</h2>
        </div>
    )
}

export default Blog