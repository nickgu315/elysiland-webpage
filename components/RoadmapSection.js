import { gsap } from 'gsap';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';

function RoadmapSection() {
    const { t } = useTranslation()

    useEffect(() => {
        const timeline = gsap.timeline()
        timeline.pause()
        timeline.to('.horizontal_bar', {
            width: '100%',
            duration: 0.7
        })
            .to('.sq_1', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_1', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_1', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_2', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_2', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_2', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_3', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_3', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_3', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_4', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_4', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_4', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_5', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_5', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_5', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')
            .to('.sq_6', {
                scale: 1,
                duration: 0.5,
                ease: "back.out(2)"
            }, '-=0.5')
            .to('.line_6', {
                opacity: 1,
                height: '62px',
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.4')
            .to('.content_6', {
                scale: 1,
                ease: "back.out(2)",
                duration: 0.4
            }, '-=0.3')


        gsap.to('.roadmap_section', {
            scrollTrigger: {
                trigger: '.roadmap_section',
                start: 'top 30%',
                end: 'bottom top',
                onEnter: () => timeline.play(),
                // onEnterBack: () => timeline.play(),
                // onLeave: () => timeline.reverse('0.2'),
                // onLeaveBack: () => timeline.reverse('0.2'),
                // markers: true
            }
        })
    }, [])

    return (
        <section className="section_py roadmap_section" id="roadmap">
            <h2 className="heading_md text-center">{t('common:roadmap')}</h2>

            <div className="md:w-[95%] mx-auto pt-[3%]" >
                <ol className="relative py-[200px] w-[calc(100%-220px)] mx-auto" >
                    {/* Horizonlat Bar --Start-- */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[0%] h-1 bg-white horizontal_bar"></div>
                    {/* Horizonlat Bar --End-- */}

                    {/* Single List Box 1 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-0 bottom-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-0 scale-0 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute sq_1"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] absolute top-0 opacity-0 left-1/2 -translate-x-1/2 line_1"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute top-[80px] w-full scale-0 content_1">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_1_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_1_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_1_bullet_1')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_1_bullet_2')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_1_bullet_3')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 1 --End-- */}

                    {/* Single List Box 2 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[20%] top-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-[100%] -translate-y-1/2 left-1/2 -translate-x-1/2 absolute sq_2 scale-0"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_2 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute bottom-[80px] w-full scale-0 content_2">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_2_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_2_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_2_bullet_1')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_2_bullet_2')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_2_bullet_3')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 2 --End-- */}

                    {/* Single List Box 3 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[40%] bottom-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute scale-0 sq_3"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_3 absolute top-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute top-[80px] w-full scale-0 content_3">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_3_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_3_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_3_bullet_1')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_3_bullet_2')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_3_bullet_3')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 3 --End-- */}


                    {/* Single List Box 4 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[60%] top-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-[100%] -translate-y-1/2 left-1/2 -translate-x-1/2 absolute scale-0 sq_4"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_4 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute bottom-[80px] w-full scale-0 content_4">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_4_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_4_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_4_bullet_1')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_4_bullet_2')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 4 --End-- */}


                    {/* Single List Box 5 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[80%] bottom-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute scale-0 sq_5"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_5 absolute top-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute top-[80px] w-full scale-0 content_5">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_5_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_5_subtitle')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_5_bullet_1')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 5 --End-- */}



                    {/* Single List Box 6 --Start-- */}
                    <li className="absolute w-[280px] h-[200px] left-[100%] top-0 ml-[-140px]" >
                        {/* Square --Start-- */}
                        <div className="w-5 h-5 bg-white top-[100%] -translate-y-1/2 left-1/2 -translate-x-1/2 absolute scale-0 sq_6"></div>
                        {/* Square --End-- */}

                        {/* Line --Start-- */}
                        <div className="w-1 bg-white h-[40px] opacity-0 line_6 absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                        {/* Line --End-- */}

                        {/* Content --Start-- */}
                        <div className="text-center space-y-0.5 absolute bottom-[80px] w-full scale-0 content_6">
                            <p className="heading_sm !text-base font-praebrg !font-bold" style={{ textShadow: '2px 2px 0 #c39e53' }}>{t('common:roadmap_box_6_title')}</p>
                            <p className="paragraph_sm text-base">{t('common:roadmap_box_6_subtitle')}</p>
                        </div>
                        {/* Content --End-- */}
                    </li>
                    {/* Single List Box 6 --End-- */}


                </ol>
            </div>
        </section>
    )
}


export default RoadmapSection
