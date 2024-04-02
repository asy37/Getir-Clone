import { Link } from "react-router-dom";

const Category =({ category: { title, image, path } })=> {
    return (
        <Link to={path} className="flex items-center gap-x-2 justify-center flex-col h-[108px] w-[108px] hover:bg-hcolor rounded transition-all ease-in group">
            <img className="h-12 w-12 border border-bordercolor rounded-lg" src={image} alt='' />
            <span className="mt-3 tracking-tight whitespace-nowrap text-sm text-textcolor font-semibold group-hover:text-htext">
                {title}
            </span>
        </Link>
    )
}

export default Category;