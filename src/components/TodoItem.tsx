import { Todo } from "../types";

interface Props extends Todo {
    onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {

    const onClickButton = () => {
        props.onClickDelete(props.id);
    }
    return (
        <div className="flex items-center justify-between py-2">
            <div className="w-[300px]">{props.content}</div>
            <button className="p-2 rounded-md bg-gray-200 text-sm" onClick={onClickButton}>삭제</button>
        </div>
    )
}