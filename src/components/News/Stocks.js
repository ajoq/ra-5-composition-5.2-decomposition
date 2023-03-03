/**
 * Вывод биржевой сводки
 */
function Stocks({ stocks }) {
    return (
        <div className="stocks">
            <ul>
                {stocks.map((item) => (
                    <li key={item.id}>
                        <a href={item.link} className="stocks-name">
                            {item.name}
                        </a>
                        <span className="stocks-value">{item.value}</span>
                        <span className="stocks-change">{item.change}</span>
                    </li>
                ))}
                <li key="all-link">
                    <a href="#">...</a>
                </li>
            </ul>
        </div>
    );
}

export default Stocks;
