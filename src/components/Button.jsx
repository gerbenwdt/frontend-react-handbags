// eslint-disable-next-line react/prop-types
export default function Button({children, disabled, buttonType}) {
    // handleClick,
    return (
        <button disabled={disabled} type={buttonType} onClick={() => console.log(children)}>
        {/*<button disabled={disabled} type={buttonType} onClick={handleClick}>*/}
            {children}
        </button>
    );
}
