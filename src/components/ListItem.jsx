export default function ListItem({itemData, deleteToDo}) {



    return (
    <li className="p-2 text-white bg-slate-800 mb-2 rounded flex">
        <span>{itemData.content}</span>
        <button onClick={() => deleteToDo(itemData.id)} className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200">X</button>
    </li>
    )
}