/**
 * Выводит пример запроса из массива в случайном порядке
 */
function SearchBottom({ searchExamples }) {
    const rand = Math.floor(Math.random() * searchExamples.length);

    return (
        <div className="search-bottom">
            <span>Найдётся всё. Например, </span>
            <a href="#">{searchExamples[rand]}</a>
        </div>
    );
}

export default SearchBottom;
