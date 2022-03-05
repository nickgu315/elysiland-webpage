import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function NftCard({ imgSrc, imgAlt, title }) {
    const { t } = useTranslation()

    return (
        <div className="md:p-[14px] border border_soft" >
            <div className="overflow-hidden group relative">
                {/* Overly --Start-- */}
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/40 items-center justify-center opacity-0 group-hover:opacity-100 duration-300 px-6 text-center hidden md:flex">
                    <p className="heading_sm !font-praebrg !text-[42px] !leading-[55px] translate-y-5 duration-300 group-hover:translate-y-0">{t(`common:${title}`)}</p>
                </div>
                {/* Overly --End-- */}
                <div className="md:group-hover:scale-105 md:duration-[700ms] overflow-hidden">
                    <Image width={300} height={481} layout="responsive" src={imgSrc} alt={imgAlt || 'Nft Card'} />
                </div>
                <div className="h-[90px] pr-5 pl-4 py-3 md:hidden" >
                    <p className="heading_sm !font-praebrg !text-[19px] !leading-[25px]">{t(`common:${title}`)}</p>
                </div>
            </div>
        </div>
    )
}

export default NftCard
