import useTranslation from "next-translate/useTranslation"
import Button from "./Button"
import NftCard from "./NftCard"

const nftCard = [
    {
        imgSrc: "/nfts/Caesar_final-01_640x.png",
        imgAlt: 'Caesar',
        title: "hero_1"
    },
    {
        imgSrc: "/nfts/zeus_04-01-01_640x.png",
        imgAlt: 'Zeus',
        title: "hero_2"
    },
    {
        imgSrc: "/nfts/ODA-01_640x.png",
        imgAlt: 'ODA',
        title: "hero_3"
    },
    {
        imgSrc: "/nfts/Guanyu-01_640x.png",
        imgAlt: 'Guanyu',
        title: "hero_4"
    },
    {
        imgSrc: "/nfts/WaynaQhapaq_final-01_640x.png",
        imgAlt: 'Wayna Qhapaq',
        title: "hero_5"
    },
    {
        imgSrc: "/nfts/Muhammad_final-01_640x.png",
        imgAlt: 'Muhammad',
        title: "hero_6"
    },
    {
        imgSrc: "/nfts/pharaoh_final-01_640x.png",
        imgAlt: 'Pharaoh',
        title: "hero_7"
    },
    {
        imgSrc: "/nfts/roosevelt_final-01_640x.png",
        imgAlt: 'Roosevelt',
        title: "hero_8"
    },
    {
        imgSrc: "/nfts/athena_cardfinal-01_640x.png",
        imgAlt: 'Athena',
        title: "hero_9"
    },
    {
        imgSrc: "/nfts/cleopatra_cardfinal-01_640x.png",
        imgAlt: 'Cleopatra',
        title: "hero_10"
    },
    {
        imgSrc: "/nfts/marilyn_cardfinal-01_640x.png",
        imgAlt: 'Marilyn Monroe',
        title: "hero_11"
    },
    {
        imgSrc: "/nfts/featheredserpent_cardfinal-01_640x.png",
        imgAlt: 'Feathered Serpent',
        title: "hero_12"
    },
    {
        imgSrc: "/nfts/teresa_cardfinal-01_640x.png",
        imgAlt: 'Mother Teresa',
        title: "hero_13"
    },
    {
        imgSrc: "/nfts/mary_cardfinal-01_640x.png",
        imgAlt: 'Mary In Islam',
        title: "hero_14"
    },
    {
        imgSrc: "/nfts/wuzetian_cardfinal-01_640x.png",
        imgAlt: 'Wu Zetian',
        title: "hero_15"
    },
    {
        imgSrc: "/nfts/EmpressMS_cardfinal-01_640x.png",
        imgAlt: 'Empress Myeongseong',
        title: "hero_16"
    },
]

function NftSection() {

    const { t } = useTranslation()
    return (
        <>
            <section className="section_py" id="nft">
                <div className="container text-center flex flex-col items-center">
                    <h2 className="heading_sm text_spacing">NFT</h2>
                    <p className="paragraph_sm">{t('common:nft_subtitle_1')}</p>
                    <p className="paragraph_sm">{t('common:nft_subtitle_2')}</p>
                    <p className="paragraph_sm text_spacing">{t('common:nft_subtitle_3')}</p>
                    <Button />
                </div>
            </section>
            <section>
                {/* Nft Cards Grid --Start-- */}
                <div className="container !px-0">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {nftCard.map((card, index) => (
                            <NftCard key={index} {...card} />
                        ))}
                    </div>
                </div>
                {/* Nft Cards Grid --End-- */}
            </section>
        </>
    )
}

export default NftSection
