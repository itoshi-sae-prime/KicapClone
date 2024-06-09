export const SamplePrevArrow = (props) => {
    return (
        <div
            className={props.className + " bg-red-500"}
            style={{ ...props.style, display: "block", background: "red" }}
            onClick={props.onClick}
        />
    );
};