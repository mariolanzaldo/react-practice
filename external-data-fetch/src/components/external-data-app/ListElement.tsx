import { MainDataInterface } from "./List";

function ListElement({ id, title, content }: MainDataInterface) {
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