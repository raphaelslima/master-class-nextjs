export default function Dashboard({children}: {children : React.ReactNode}){
    return(
        <div>
            <h1>Page Layout</h1>
            <div>
                {children}
            </div>
        </div>
    )
}