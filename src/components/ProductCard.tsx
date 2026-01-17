import { ProductCardProps } from "../Interfaces";

const ProductCard: React.FC<ProductCardProps> = ({ product, selected, disableAdd, onToggle }) => {

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            onToggle(product);
        }
    };

    return (
        <div className="card" tabIndex={0} onKeyDown={handleKeyDown}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.brand}</p>
            <p>₹{product.price}</p>
            <p>{product.battery} mAh</p>
            <button
                onClick={() => onToggle(product)}
                disabled={!selected && disableAdd}
                aria-pressed={selected}
            >
                {selected ? "Remove" : "Add to Compare"}
            </button>
        </div>
    );
};

export default ProductCard;