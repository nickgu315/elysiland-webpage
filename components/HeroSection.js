import useTranslation from "next-translate/useTranslation"
import Button from "./Button"

function HeroSection() {
    const { t } = useTranslation()

    return (
        <section className="h-[100vh] md:min-h-[110vh] flex flex-col md:items-end md:justify-end bg-dark-blue md:px-[9vw] pb-[23vh] bg-no-repeat hero_bg_mobile md:hero_bg_desktop relative" >

            <img src="/img/main_background_5npc_mobile_640x.webp" className="absolute top-0 left-0 w-full h-full object-cover md:hidden block" alt="" />

            <div className="relative z-[5] flex flex-col items-center md:items-end mt-[26vh] md:mt-0">
                <h1 className="heading_lg text_spacing">{t('common:hero_title')}</h1>
                <Button />
            </div>
        </section>
    )
}

export default HeroSection
