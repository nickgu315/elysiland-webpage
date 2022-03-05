import useTranslation from "next-translate/useTranslation"
import Button from "./Button"

function GameSection() {
    const { t } = useTranslation()
    return (
        <section className="section_py" id="game">
            <div className="container text-center flex flex-col items-center">
                <h2 className="heading_sm text_spacing">{t('common:game')}</h2>
                <p className="paragraph_sm">{t('common:game_subtitle_1')}</p>
                <p className="paragraph_sm text_spacing">{t('common:game_subtitle_2')}</p>
                <Button />
            </div>
        </section>
    )
}

export default GameSection
