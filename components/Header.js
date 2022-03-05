import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from 'react-icons/io';
import LanguageSwitcher from "./LanguageSwitcher";
import useTranslation from 'next-translate/useTranslation'

function Header() {

    const { t } = useTranslation()

    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    const closeSidebar = () => {
        setIsOpenSidebar(false)
        document.documentElement.style.overflow = 'auto'
        document.body.style.right = '0'
        document.querySelector('#top_header').style.left = 0
    }
    const openSidebar = () => {
        setIsOpenSidebar(true)

        document.body.style.right = `${(window.innerWidth / 100) * 80}px`
        document.querySelector('#top_header').style.left = `-${(window.innerWidth / 100) * 80}px`
        document.documentElement.style.overflow = 'hidden'
    }

    useEffect(() => {

        if (typeof window !== 'undefined') {
            document.body.style.position = 'relative'
            document.body.style.transition = '0.2s'
        }

        let prevScrollTop = 0
        const trackHeader = () => {
            const currentScrollTop = document.documentElement.scrollTop;
            if (currentScrollTop > prevScrollTop) {
                document.querySelector('#top_header').style.transform = 'translateY(-100%)'
            } else {
                document.querySelector('#top_header').style.transform = 'translateY(0)'
            }
            prevScrollTop = currentScrollTop
        }

        window.addEventListener('scroll', (e) => {
            trackHeader()
        })

        return () => window.removeEventListener('scroll', trackHeader)
    }, [])

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'mobile_nav_overly') {
                closeSidebar()
            }
        })
    }, [])

    return (
        <header className="bg-dark-blue flex items-center justify-between py-3 md:py-4 px-[18px] md:px-[60px] fixed top-0 left-0 w-full z-50 border-b border_soft" id="top_header" style={{ transition: '0.2s' }}>
            <div className="max-w-[165px] md:max-w-[180px]" >
                <Link href="/">
                    <a>
                        <Image width={447} height={108} src="/img/logo.png" alt="Elysiland" />
                    </a>
                </Link>
            </div>

            <div>

                {/* Hamburger Icon --Start-- */}
                <div className="flex flex-col space-y-[5px] w-[28px] group md:hidden" onClick={openSidebar}>
                    <span className="w-[80%] group-hover:w-full duration-100 block bg-white h-[2px]"></span>
                    <span className="w-full block bg-white h-[2px]"></span>
                    <span className="w-[65%] block group-hover:w-full duration-100 delay-75 bg-white h-[2px]"></span>
                </div>
                {/* Hamburger Icon --End-- */}

                <nav id="mobile_nav_overly" className={`fixed overflow-auto md:overflow-visible top-0 left-0 w-full h-screen md:h-auto duration-200 ${isOpenSidebar ? "bg-black/90 pointer-events-auto opacity-100" : 'pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100'} md:static md:bg-transparent`} >
                    <ul className={`flex flex-col md:flex-row w-[90%] md:w-full px-1 bg-dark-blue md:bg-transparent ml-auto md:ml-[unset] min-h-full md:h-auto ${!isOpenSidebar ? "translate-x-full md:translate-x-0" : 'translate-x-0'} duration-200`}>
                        <li className="px-5 py-3 sticky top-0 left-0 w-full z-10 bg-dark-blue flex items-center justify-between md:hidden mb-[25px] border-b border_soft" >
                            <span className="nav_link px-0 py-0 text_shadow_sm" >{t('common:menu')}</span>
                            <span className="text-white" onClick={closeSidebar} >
                                <IoMdClose size={28} />
                            </span>
                        </li>

                        <li>
                            <Link href="/">
                                <a className="nav_link">
                                    {t('common:home')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#nft">
                                <a className="nav_link">
                                    NFT
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#game">
                                <a className="nav_link">
                                    {t('common:game')}
                                </a>
                            </Link>
                        </li>
                        <li>

                            <a className="nav_link" href="https://elysiland.gitbook.io/" target="_blank" rel="noreferrer">
                                {t('common:whitepaper')}
                            </a>
                        </li>
                        <li>
                            <Link href="#marketplace">
                                <a className="nav_link">
                                    {t('common:marketplace')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#team">
                                <a className="nav_link">
                                    {t('common:team')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#roadmap">
                                <a className="nav_link">
                                    {t('common:roadmap')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className="nav_link">
                                    {t('common:contact')}
                                </a>
                            </Link>
                        </li>

                        <li >
                            <LanguageSwitcher />
                        </li>

                        <li className="md:hidden px-5 w-full mt-auto pt-12">
                            <ul className="flex items-center gap-3 text-white" >
                                <li>
                                    <a href="https://twitter.com/elysiland2021" target="_blank" rel="noreferrer">
                                        <BsTwitter size={22} />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Elysiland-100640432530484/">
                                        <AiFillFacebook size={25} />
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href="https://discord.gg/AMDn3Na4">
                                        <svg className="group-hover:scale-[1.1] duration-100" width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.3478 0L1 6.261V31.302H9.6046V36H14.3024L18.9954 31.302H26.037L35.4278 21.9146V0H3.3478ZM6.47572 3.12852H32.2985V20.3462L26.8198 25.8253H18.2139L13.5221 30.5168V25.8253H6.47572V3.12852Z" fill="#d4d4d4"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0838 18.7831H18.2139V9.39282H15.0838V18.7831ZM23.6903 18.7831H26.8198V9.39282H23.6903V18.7831Z" fill="#d4d4d4"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer" href="mailto:hello@elysiland.com">
                                        <svg className="group-hover:scale-[1.1] duration-100" width="24" height="24" fill="#d4d4d4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M25.87 5.42V4.9H.1v15.28c0 .4.4.78.78.78h24.35c.4 0 .78-.4.78-.78l-.14-14.76zm-2.98.77l-9.97 8.3-9.97-8.3H22.9zM1.52 19.4V7.1l10.88 8.94c.13.13.26.13.52.13s.4 0 .52-.13L24.32 7.1v12.3H1.52z"></path></svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="px-5 pt-5 py-10 paragraph_sm md:hidden" >{t('common:only_copy_right')} <Link href="/"><a>Elysiland Limited</a></Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
