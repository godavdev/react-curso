const Producto = ({ title, description, price, image }) => {
    return (
        <div className="bg-slate-800 text-white rounded-lg w-80 aspect-[9/12] overflow-hidden border border-slate-700">
            <img src={image} className="bg-white w-full aspect-square object-cover" />
            <div className="w-full h-full p-2">
                <div className="flex items-center justify-between">
                    <div className="text-3xl">{title}</div>
                    <div className="text-xl">${price}</div>
                </div>
                <div className="overflow-ellipsis">{description}</div>
            </div>
        </div>
    )
}

export default Producto