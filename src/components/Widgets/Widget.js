/**
 * Вывод виджета. Общее у всех виджетов - заголовок и ссылка.
 * Тело виджета у каждого разное. Там, где сейчас выводится {body}, должны выводиться компоненты конкретного виджета
 */
function Widget({ link, name, body }) {
    return (
        <div className="widget">
            <a href={link} className="widget-title">
                {name}
            </a>
            <div className="widget-body">{body}</div>
        </div>
    );
}

export default Widget;
