export default function DashboardLayout ({children}: {children: React.ReactNode}) {
    return(
        <>
            <nav className="bg-yellow-500">
                <ul>
                    <li>Perfil</li>
                    <li>Configurações</li>
                </ul>
            </nav>
            {children}
        </>
    )
}