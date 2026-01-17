import { useEffect, useState } from "react";
import { CompareProps, Product } from "../Interfaces";
import ProductCard from "./ProductCard";
import CompareTable from "./CompareTable";

const Compare: React.FC<CompareProps> = ({ products = [] }) => {

    const storedCompare = localStorage.getItem("compare");

    const [compare, setCompare] = useState<Product[]>(
        storedCompare ? JSON.parse(storedCompare) : []
    );
    const [search, setSearch] = useState<string>("");
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        localStorage.setItem("compare", JSON.stringify(compare));
    }, [compare]);

    const toggleCompare = (product: Product) => {
        setCompare(prev => {
            const exists = prev.some(p => p.id === product.id);

            if (exists) {
                return prev.filter(p => p.id !== product.id);
            }

            if (prev.length === 3) {
                return prev;
            }

            return [...prev, product];
        });
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={`app ${darkMode ? "dark" : ""}`}>
            <div className="header">
                <h2>Product Comparison</h2>
                <input
                    type="text"
                    placeholder="Search by name or brand"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button onClick={() => setDarkMode(prev => !prev)}>
                    {darkMode ? "Light" : "Dark"} Mode
                </button>
            </div>
            <div className="grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        selected={compare.some(c => c.id === product.id)}
                        disableAdd={compare.length === 3}
                        onToggle={toggleCompare}
                    />
                ))}
            </div>
            {compare.length >= 2 && (
                <CompareTable
                    items={compare}
                    onClear={() => setCompare([])}
                />
            )}
        </div>
    );
};

export default Compare;
