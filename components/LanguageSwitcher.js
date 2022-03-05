import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react"
import { GoChevronDown } from 'react-icons/go';

function LanguageSwitcher() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()

    const localeChangeHandler = (locale) => {
        setIsOpen(false)
        router.push(router.asPath, router.asPath, {
            locale: locale
        })
    }

    return (
        <div className="relative select-none" >
            <div className="nav_link flex items-center gap-3 cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                <p>{router.locale === 'zh' ? t('common:chinese') : t('common:english')}</p>
                <GoChevronDown className={`${isOpen ? 'rotate-180' : ''} duration-200`} />
            </div>

            <ul className={`nav_link px-0 py-0 md:absolute top-full left-5 md:left-auto md:right-5 bg-dark-blue border border_soft whitespace-nowrap md:opacity-0 md:translate-y-5 hidden md:!block duration-200 pointer-events-none z-50 ${isOpen ? 'md:!opacity-100 md:!translate-y-0 !pointer-events-auto !block' : ''}`} >
                {router.locales.map(locale => (
                    <li key={locale} onClick={() => localeChangeHandler(locale)} className="px-5 md:px-10 py-2 md:py-3.5 cursor-pointer hover:bg-[#1b4a79] border-b border_soft">{locale === 'zh' ? t('common:chinese') : t('common:english')}</li>
                ))}
            </ul>
        </div>
    )
}

export default LanguageSwitcher
