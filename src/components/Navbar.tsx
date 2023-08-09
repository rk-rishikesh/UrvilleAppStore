import logo from '../assets/logo.png'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../redux/store'
import { selectGetTotalQuantity, setOpenCart } from '../redux/CartSlice'
const Navbar = () => {
    const [navState, setNavState] = useState(false)
    const dispatch = useAppDispatch()
    const quantityItems = useAppSelector(selectGetTotalQuantity)

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }


    const onNavScrool = () => {
        if (window.scrollY > 30) {
            setNavState(false)
        } else {
            setNavState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScrool);

        return () => {
            window.removeEventListener('scroll', onNavScrool)
        }

    }, [])

    return (
        <>
            <header className={!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
                : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'}>
                <nav className='flex items-center justify-between the-container'>
                    <div className='flex items-center sm:mr-4'>
                        <NavLink to="/">
                            <img src={logo} alt="logo/img" className={`w-24 h-auto ${navState && "filter brightness-0"} `} />
                        </NavLink>

                    </div>
                    <ul className='flex items-center justify-center gap-2'>
                        <div className="flex mr-4 items-center justify-center">
                            <div className="flex rounded-full border-2 border-violet-300">
                                <input type="text" className="focus:outline-0 ml-4 px-4 py-2 w-56 sm:w-24 sm:px-2 sm:py-1" placeholder="Games, NFTs & more..." />
                                <button className="px-4 text-white bg-violet-300 border-l rounded-full">
                                    <img className="w-[25px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" />
                                </button>
                            </div>
                        </div>

                        <li className='grid items-center '>
                            <button type='button' onClick={onCartToggle}
                                className='border-none outline-none
                            active:scale-110 transition-all duration-300 relative'>
                                <img className="w-[40px]" src="https://icones.pro/wp-content/uploads/2022/02/icone-de-cloche-violette.png" />
                                <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight
                                font-medium rounded-full flex items-center justify-center
                                cursor-pointer hover:scale-110 transition-all duration-300 ${navState ?
                                        "bg-slate-900 text-slate-100 shadow-slate-900" :
                                        "bg-slate-100 text-slate-900 shadow-slate-100"}`}>{quantityItems}</div>
                            </button>

                        </li>
                        {/* <button type='button'
                            className='border-none outline-none
                            active:scale-110 transition-all duration-300 relative'>
                            <img className="w-[40px]" src="https://cdn-icons-png.flaticon.com/512/7382/7382094.png" />
                        </button> */}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar