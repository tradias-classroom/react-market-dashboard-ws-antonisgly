import { useState } from "react";

export default function Table({ data }: { data: any }) {
    const [symbol, setSymbol] = useState('ALL');

    const onSymbolFilterChange = (e) => {
        setSymbol(e.target.value);

    }

    const filteredData = data.filter((item: any) => {
        if (symbol === 'ALL') return true;
        return item.symbol === symbol;
    });

    return (
        <>
            <div className="w-full text-black text-center">
                <label htmlFor="symbol">Symbol</label>
                <select id="symbol" onChange={onSymbolFilterChange} value={symbol}>
                    <option value="ALL">ALL</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="XRP">XRP</option>
                    <option value="SOL">SOL</option>
                </select>
            </div>
            <table className="w-full text-black text-center">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Volume</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((item: any) => (
                            <tr key={item.ts}>
                            <td>{item.symbol}</td>
                            <td>{item.price}</td>
                            <td>{item.change24h}</td>
                            <td>{item.volume24h}</td>
                            <td>{item.ts}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
