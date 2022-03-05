import { gsap } from "gsap"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import { useEffect } from "react"

function RoadMapMobile() {

    const router = useRouter()
    const { t } = useTranslation()

    useEffect(() => {
        const timeline = gsap.timeline()
        timeline.pause()
        timeline.to('.vertical_bar', {
            height: router.locale === 'zh' ? '88.5%' : '93.5%',
            duration: 0.7
        })
            .to('.sq_1', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_1', {
                opacity: 1,
                width: '16px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_1', {
                scale: 1,
                ease: "back.out(1.2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_2', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_2', {
                opacity: 1,
                width: '16px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_2', {
                scale: 1,
                ease: "back.out(1.2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_3', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_3', {
                opacity: 1,
                width: '16px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_3', {
                scale: 1,
                ease: "back.out(1.2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_4', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_4', {
                opacity: 1,
                width: '16px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_4', {
                scale: 1,
                ease: "back.out(1.2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_5', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_5', {
                opacity: 1,
                width: '16px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_5', {
                scale: 1,
                ease: "back.out(1.2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_6', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_6', {
                opacity: 1,
                width: '16px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_6', {
                scale: 1,
                ease: "back.out(1.2)",
                duration: 0.4
            }, '-=0.3')


        gsap.to('.roadmap_section_mobile', {
            scrollTrigger: {
                trigger: '.roadmap_section_mobile',
                start: 'top 60%',
                end: 'bottom top',
                onEnter: () => timeline.play(),
                onEnterBack: () => timeline.play(),
                // onLeave: () => timeline.reverse('0.2'),
                // onLeaveBack: () => timeline.reverse('0.2'),
                // markers: true
            }
        })
    }, [router])


    return (
        <section className="section_py roadmap_section_mobile pb-40" id="roadmap">
            <h2 className="heading_md text-center">Roadmap</h2>

            <div className="w-[95%] mx-auto mt-[50px]">
                <ol className="w-[85%] mx-auto relative" >
                    {/* Vertical Bar --Start-- */}
                    <div className="vertical_bar absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[0%] bg-white"></div>
                    {/* Vertical Bar --End-- */}

                    {/* Single List 1 --Start-- */}
                    <li className="w-1/2 pr-[30px] relative" >

                        {/* Square --Start-- */}
                        <div className="w-3.5 h-3.5 bg-white top-0 right-0 scale-0 translate-x-1/2 absolute sq_1"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-0 bg-white h-[5px] absolute top-[4px] right-0 line_1"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="space-y-0.5 text-right scale-0 content_1">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_1_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_1_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_1_bullet_1')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_1_bullet_2')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_1_bullet_3')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List 1 --End-- */}

                    {/* Single List 2 --Start-- */}
                    <li className="w-1/2 ml-auto pl-[30px] relative" >

                        {/* Square --Start-- */}
                        <div className="w-3.5 h-3.5 bg-white top-0 left-0 -translate-x-1/2 absolute scale-0 sq_2"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-0 bg-white h-[5px] absolute top-[4px] left-0 line_2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="space-y-0.5 scale-0 content_2">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_2_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_2_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_2_bullet_1')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_2_bullet_2')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_2_bullet_3')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List 2 --End-- */}

                    {/* Single List 3 --Start-- */}
                    <li className="w-1/2 pr-[30px] relative" >

                        {/* Square --Start-- */}
                        <div className="w-3.5 h-3.5 scale-0 bg-white top-0 right-0 translate-x-1/2 absolute sq_3"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-0 bg-white h-[5px] absolute top-[4px] right-0 line_3"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="space-y-0.5 text-right content_3 scale-0">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_3_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_3_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_3_bullet_1')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_3_bullet_2')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_3_bullet_3')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List 3 --End-- */}

                    {/* Single List 4 --Start-- */}
                    <li className="w-1/2 ml-auto pl-[30px] relative" >

                        {/* Square --Start-- */}
                        <div className="w-3.5 h-3.5 bg-white top-0 left-0 -translate-x-1/2 absolute sq_4"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-0 bg-white h-[5px] absolute top-[4px] left-0 line_4"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="space-y-0.5 content_4 scale-0">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_4_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_4_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_4_bullet_1')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_4_bullet_2')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List 4 --End-- */}

                    {/* Single List 5 --Start-- */}
                    <li className="w-1/2 pr-[30px] relative" >

                        {/* Square --Start-- */}
                        <div className="w-3.5 h-3.5 bg-white top-0 right-0 translate-x-1/2 scale-0 absolute sq_5"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-0 bg-white h-[5px] absolute top-[4px] right-0 line_5"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="space-y-0.5 text-right scale-0 content_5">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_5_title')}1-Q2
                            </p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_5_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_5_bullet_1')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List 5 --End-- */}

                    {/* Single List 6 --Start-- */}
                    <li className="w-1/2 ml-auto pl-[30px] relative mt-10" >

                        {/* Square --Start-- */}
                        <div className="w-3.5 h-3.5 bg-white top-0 left-0 -translate-x-1/2 absolute scale-0 sq_6"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-0 bg-white h-[5px] absolute top-[4px] left-0 line_6"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="space-y-0.5 content_6 scale-0">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_6_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_6_subtitle')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List 6 --End-- */}
                </ol>
            </div>
        </section>
    )
}

export default RoadMapMobile
