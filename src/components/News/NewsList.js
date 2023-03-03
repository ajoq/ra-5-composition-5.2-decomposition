/**
 * Вывод списка новостей
 */
function NewsList({ news }) {
    return (
        <div className="topnews-list">
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <a href={item.link}>
                            <img src={item.icon} alt={item.sourseName} />
                            <span>{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsList;
