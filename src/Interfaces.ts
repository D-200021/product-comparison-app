interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    battery: number;
    display: string;
    camera: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
    selected: boolean;
    disableAdd: boolean;
    onToggle: (product: Product) => void;
}

interface CompareTableProps {
    items: Product[];
    onClear: () => void;
}

interface CompareProps {
    products: Product[]
}

export { Product, ProductCardProps, CompareTableProps, CompareProps }