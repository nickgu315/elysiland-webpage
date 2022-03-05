import useTranslation from "next-translate/useTranslation"

function SubscribeNewsLetterSection() {
    const { t } = useTranslation()
    return (
        <section className="section_py text-center bg-[#1D1F20] border-b border_soft">
            <p className="heading_sm md:text-[30px] md:leading-[33px] text_spacing" style={{ textShadow: "4px 4px 0 #000" }}>{t('common:subscribe_title')}</p>
            <div className="md:w-[810px] mx-auto px-[18px] md:px-0" >
                <form className="w-full flex flex-col md:flex-row md:items-center gap-5 md:gap-0" >
                    <input type="text" placeholder={t('common:email_address')} className="grow h-[54px] text-[26px] font-praebrg border border-white/20 px-5 bg-transparent outline-none text-white placeholder:text-white duration-150 hover:border-white/80 focus:border-white focus:border-[2px]" />
                    <button
                        type="submit"
                        className="flex shrink-0 flex-col items-center bg-white px-[30px] gap-3 h-[44px] md:h-[54px] text-2xl font-praebrg font-medium relative group justify-center box_shadow_sm md:box_shadow_lg overflow-hidden group"
                    >
                        <span className="group-hover:-mt-[50px] group-hover:duration-200" >{t('common:sign_up')}</span>
                        <span className="-mb-[50px] group-hover:mb-[-10.5px] group-hover:duration-200" >{t('common:sign_up')}</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default SubscribeNewsLetterSection
