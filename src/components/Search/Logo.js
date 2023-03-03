/**
 * Выводит логотип перед строкой поиска
 */
function Logo({ logo }) {
    return (
        <div className="logo">
            <a href={logo.link} title={logo.title}>
                <img src={logo.img} alt={logo.title} />
            </a>
        </div>
    );
}

export default Logo;
