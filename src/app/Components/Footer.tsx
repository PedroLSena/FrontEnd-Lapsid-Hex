const Footer:React.FC=()=> {
    return (
        <footer className="w-full bg-gray-900 text-white py-4 px-8 flex items-center justify-center mt-8">
            <span className="text-sm">&copy; {new Date().getFullYear()} Gerenciamento Hexagonal. Todos os direitos reservados.</span>
        </footer>
    )
}

export default Footer