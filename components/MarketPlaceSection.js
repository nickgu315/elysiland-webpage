import useTranslation from "next-translate/useTranslation"

function MarketPlaceSection() {
    const { t } = useTranslation()
    return (
        <>
            <section className="section_py my-5 md:my-0" id="marketplace">
                <div className="container text-center flex flex-col items-center">
                    <h2 className="heading_sm text_spacing">{t('common:marketplace')}</h2>
                    <p className="paragraph_sm">{t('common:marketplace_subtitle')}</p>
                </div>
            </section>
            <div className="h-[66vh] md:h-screen w-full relative">
                <img src="/img/Marketplace.jfif" className="absolute top-0 left-0 w-full h-full object-cover" alt="" />
                <div className="h-full flex flex-col items-center justify-center text-center relative z-[5]">
                    <p className="text_spacing paragraph_sm">{t('common:coming_soon')}</p>
                    <h2 className="heading_lg w-[80%] mx-auto">
                        {t('common:coming_soon_subtitle')}
                    </h2>
                </div>
            </div>
        </>
    )
}

export default MarketPlaceSection
