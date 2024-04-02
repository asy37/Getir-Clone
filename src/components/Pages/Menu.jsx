import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Collapse } from 'react-collapse';
import { IoIosArrowDown } from 'react-icons/io';

export default function Menu({ title, items }) {
    const windowWidth = useWindowWidth()
    const [isOpen, setIsOpen] = useState(true);

    const toggleCollapse = () => {
        if (windowWidth <= 768) {
            setIsOpen(!isOpen);
        }
    }

    useEffect(() => {
        if (isOpen && windowWidth <= 768) {
            setIsOpen(false)
        }
        if (!isOpen && windowWidth > 768) {
            setIsOpen(true)
        }
    }, [isOpen,windowWidth])


    return (
        <>
             <section>
            <nav className="grid gap-y-2 md:gap-y-4">
                <h6 onClick={toggleCollapse} className="pb-2 text-xl text-brand flex items-center justify-between">
                    {title}
                    <button className="grid md:hidden w-6 h-6 place-items-center rounded-lg bg-brand bg-opacity-10 text-brand">
                        <span className={`transition-all transform ${isOpen ? '-rotate-180' : ''}`}>
                            <IoIosArrowDown size={14} />
                        </span>
                    </button>
                </h6>
                <Collapse isOpened={isOpen}>
                    <nav className="transition-all duration-300">
                        <ul className="grid gap-y-1 md:gap-y-2 ">
                        {items.map((item, key) => (
                            <li key={key}>
                                <div className="text-sm hover:text-brand text-graay pb-2 ">
                                    {item.title}
                                </div>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </Collapse>
            </nav>
        </section>

        </>
    )
}

