function ListElement({ id, title, content }) {
    return (
        <li
            id={id}
        >
            <div>{title}</div>
            <div
                dangerouslySetInnerHTML={{
                    __html: content
                }}
            />
        </li>
    );
}

export default ListElement;