import { CompareTableProps } from "../Interfaces";

const CompareTable: React.FC<CompareTableProps> = ({ items, onClear }) => {
    const bestPrice = Math.min(...items.map(i => i.price));
    const bestBattery = Math.max(...items.map(i => i.battery));

    const highlight = (value: number, best: number) =>
        value === best ? "highlight" : "";

    return (
        <div className="compare-bar" tabIndex={0}>
            <h3>Comparison</h3>
            <table>
                <thead>
                    <tr>
                        <th>Feature</th>
                        {items.map(p => (
                            <th key={p.id}>{p.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        {items.map(p => (
                            <td key={p.id} className={highlight(p.price, bestPrice)}>
                                ₹{p.price}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Battery</td>
                        {items.map(p => (
                            <td key={p.id} className={highlight(p.battery, bestBattery)}>
                                {p.battery} mAh
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Display</td>
                        {items.map(p => (
                            <td key={p.id}>{p.display}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Camera</td>
                        {items.map(p => (
                            <td key={p.id}>{p.camera}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <button onClick={onClear}>Clear Comparison</button>
        </div>
    );
};

export default CompareTable;