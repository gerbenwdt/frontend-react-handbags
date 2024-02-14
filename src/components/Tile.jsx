
// eslint-disable-next-line react/prop-types
function Tile({children, image, alt, title}) {
    return (
        <section>
            {image ? <img src={image} alt={alt}/> : <><h2>{title}</h2>{children}</>}

            {/* Andere methode: */}
            {/*{image && <img src={image} alt={alt} />}*/}
            {/*<h2>{title}</h2>*/}
            {/*{children}*/}
        </section>
    );
}

export default Tile;