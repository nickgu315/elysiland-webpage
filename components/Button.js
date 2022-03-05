import useTranslation from "next-translate/useTranslation"

function Button() {
    const { t } = useTranslation()
    return (
        <a href="https://elysiland.gitbook.io/">
            <button
                className="flex items-center bg-white px-[24px] md:px-[30px] gap-3 h-[44px] md:h-[54px] text-[22px] md:text-[23px] font-praebrg font-medium relative group box_shadow_sm md:box_shadow_lg"
            >
                <span className="md:duration-200 md:mr-[-20px] md:group-hover:mr-0" >{t('common:learn_more')}</span>
                <span className="duration-200 ml-[-10px] group-hover:ml-0 opacity-0 group-hover:opacity-100 hidden md:inline" >
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" style={{ width: 21, height: 12 }} viewBox="0 0 21 10"><path d="M21.000,5.000 L15.000,10.000 L15.000,6.000 L-0.000,6.000 L-0.000,4.000 L15.000,4.000 L15.000,0.000 L21.000,5.000 Z"></path></svg>
                </span>
            </button>
        </a>
    )
}

export default Button
