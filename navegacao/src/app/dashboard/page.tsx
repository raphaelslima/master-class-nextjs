"use client"

import { useRouter } from "next/navigation"


const Dashboard = () => {
    const router = useRouter()
    return(
        <div>
            <h2>Dashboard</h2>
            <button onClick={()=> router.back()}>Voltar</button>
        </div>
    )
}

export default Dashboard