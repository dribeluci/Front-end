import Categoria from "./Categoria"

interface Produto{
    id: number
    nome: string
    quantidade: number
    preco: number
    descricao: string
    tamanho: string
    categoria: Categoria
}
export default Produto