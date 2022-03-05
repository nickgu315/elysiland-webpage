import Link from "next/link"
import { BsTwitter } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';
import useTranslation from "next-translate/useTranslation";

function Footer() {
    const { t } = useTranslation()
    return (
        <footer className="bg-[#1D1F20]" >
            {/* Top Footer --Start-- */}
            <div className="max-w-[898px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[72px] md:gap-0 border-b border_soft section_py px-[18px] md:px-0">
                <nav>
                    <ul className="space-y-1" >
                        <li>
                            <Link href="#">
                                <a className="footer_nav_link !px-0 md:px-5 !text-[#d4d4d4]">
                                    NFT
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="footer_nav_link !px-0 md:px-5 !text-[#d4d4d4]">
                                    {t('common:game')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="footer_nav_link !px-0 md:px-5 !text-[#d4d4d4]">
                                    {t('common:whitepaper')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="footer_nav_link !px-0 md:px-5 !text-[#d4d4d4]">
                                    {t('common:team')}
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="footer_nav_link !px-0 md:px-5 !text-[#d4d4d4]">
                                    {t('common:contact_us')}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div>
                    <ul className="flex flex-col gap-6" >
                        <li className="w-auto inline-block" >
                            <a href="https://twitter.com/elysiland2021" target="_blank" rel="noreferrer" className="group flex items-center gap-5 !text-[#d4d4d4]">
                                <BsTwitter size={25} className="group-hover:scale-[1.1] duration-100" />
                                <span className="footer_nav_link social_link !text-[#d4d4d4]">{t('common:twitter')}</span>
                            </a>
                        </li>
                        <li className="w-auto inline-block" >
                            <a href="https://www.facebook.com/Elysiland-100640432530484/" target="_blank" rel="noreferrer" className="group flex items-center gap-5 !text-[#d4d4d4]">
                                <AiFillFacebook size={25} className="group-hover:scale-[1.1] duration-100" />
                                <span className="footer_nav_link social_link !text-[#d4d4d4]">{t('common:facebook')}</span>
                            </a>
                        </li>
                        <li className="w-auto inline-block" >
                            <a href="https://discord.gg/AMDn3Na4" target="_blank" rel="noreferrer" className="group flex items-center gap-5 !text-[#d4d4d4]">

                                <svg className="group-hover:scale-[1.1] duration-100" width="25" height="25" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.3478 0L1 6.261V31.302H9.6046V36H14.3024L18.9954 31.302H26.037L35.4278 21.9146V0H3.3478ZM6.47572 3.12852H32.2985V20.3462L26.8198 25.8253H18.2139L13.5221 30.5168V25.8253H6.47572V3.12852Z" fill="#d4d4d4"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.0838 18.7831H18.2139V9.39282H15.0838V18.7831ZM23.6903 18.7831H26.8198V9.39282H23.6903V18.7831Z" fill="#d4d4d4"></path>
                                </svg>


                                <span className="footer_nav_link social_link !text-[#d4d4d4]">{t('common:discord')}</span>
                            </a>
                        </li>
                        <li className="w-auto inline-block" >
                            <a href="mailto:hello@elysiland.com" target="_blank" rel="noreferrer" className="group flex items-center gap-5 !text-[#d4d4d4]">

                                <svg className="group-hover:scale-[1.1] duration-100" width="25" height="25" fill="#d4d4d4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M25.87 5.42V4.9H.1v15.28c0 .4.4.78.78.78h24.35c.4 0 .78-.4.78-.78l-.14-14.76zm-2.98.77l-9.97 8.3-9.97-8.3H22.9zM1.52 19.4V7.1l10.88 8.94c.13.13.26.13.52.13s.4 0 .52-.13L24.32 7.1v12.3H1.52z"></path></svg>

                                <span className="footer_nav_link social_link !text-[#d4d4d4]">{t('common:email')}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Top Footer --End-- */}

            {/* Bottom Footer --Start-- */}
            <div className="px-[18px] md:px-0 md:max-w-[898px] mx-auto section_py md:text-center pt-[50px]">
                <p className="paragraph_sm text-[21px] leading-[34px] md:text-[25px] md:leading-[39px] !text-[#d4d4d4]">{t('common:copy_right')}</p>
                <p className="paragraph_sm text-[21px] leading-[34px] md:text-[25px] md:leading-[39px] !text-[#d4d4d4]">{t('common:footer_address')}</p>
            </div>
            {/* Bottom Footer --End-- */}
        </footer>
    )
}

export default Footer
