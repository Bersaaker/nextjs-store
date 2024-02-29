interface CategoryProps {
    params: {
        category: string
    }
}

export default function category(props: CategoryProps) {
    const { category } = props.params
    return (
        <h1>Categoria dinámica: {category}</h1>
    )
}