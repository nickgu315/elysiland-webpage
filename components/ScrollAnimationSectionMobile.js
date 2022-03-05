import useTranslation from "next-translate/useTranslation";
import { useRef } from "react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Parallax, Pagination]);

function ScrollAnimationSectionMobile() {
    const { t } = useTranslation()

    return (
        <section className="section_py border-t border-b border_soft !pb-0 md:hidden flex flex-col-reverse">

            <div className="border-t border_soft py-4 flex items-center justify-between px-[18px] mt-6" >
                <span className="paragraph_sm tracking-[1px] fraction_pagination_el" ></span>

                <div className="flex items-center gap-6 " >
                    <button className="prev_el">
                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16.6022" y="7.01343" width="14" height="2" transform="rotate(-180 16.6022 7.01343)" fill="#fff"></rect><path d="M6.23853 12.0134L0.965798 6.01343L2.32943 4.51343L7.60216 10.5134L6.23853 12.0134Z" fill="#fff"></path><path d="M7.60221 1.51343L2.32948 7.51343L0.965841 6.01349L6.23857 0.0134263L7.60221 1.51343Z" fill="#fff"></path></svg>
                    </button>
                    <button className="next_el">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="-0.00012207" y="5.01343" width="14" height="2" fill="#fff"></rect><path d="M10.3635 0.0134277L15.6363 6.01343L14.2726 7.51343L8.99989 1.51343L10.3635 0.0134277Z" fill="#fff"></path><path d="M8.99984 10.5134L14.2726 4.51343L15.6362 6.01337L10.3635 12.0134L8.99984 10.5134Z" fill="#fff"></path></svg>
                    </button>
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                    parallax={true}
                    pagination={{
                        type: 'fraction',
                        el: '.fraction_pagination_el'
                    }}
                    navigation={{
                        nextEl: '.next_el',
                        prevEl: '.prev_el'
                    }}
                    spaceBetween={50}
                    speed={600}
                >

                    <SwiperSlide>
                        <div>
                            <div className="h-[450px] flex items-center justify-center" >
                                <div className="px-4 md:px-0">
                                    <img src="/img/Soldier-Types-02-crop_1080x.png" className="w-full object-cover h-full" alt="" data-swiper-parallax="-30%" />
                                </div>
                            </div>
                            <div className="text-center h-[290px] mt-5 flex flex-col justify-center items-center px-[18px]" >
                                <h3 className="heading_md text_spacing" data-swiper-parallax="-50%">{t('common:soldier_types')}</h3>
                                <p className="paragraph_sm" data-swiper-parallax="-60%" >{t('common:soldier_types_subtitle')}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="h-[450px] flex items-center justify-center" >
                                <div className="px-3 md:px-0">
                                    <img src="/img/element-signs-final_02_1860x.png" className="w-full object-cover h-full" alt="" data-swiper-parallax="-30%" />
                                </div>
                            </div>
                            <div className="text-center h-[290px] mt-5 flex flex-col justify-center items-center px-[18px]" >
                                <h3 className="heading_md text_spacing" data-swiper-parallax="-50%">{t('common:elements')}</h3>
                                <p className="paragraph_sm" data-swiper-parallax="-60%" >{t('common:elements_subtitle')}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="h-[450px] flex items-center justify-center" >
                                <img src="/img/PVE.jpg" className="w-full object-cover h-full" alt="" data-swiper-parallax="-30%" />
                            </div>
                            <div className="text-center h-[290px] mt-5 flex flex-col justify-center items-center px-[18px]" >
                                <h3 className="heading_md text_spacing" data-swiper-parallax="-50%">{t('common:pve')}</h3>
                                <p className="paragraph_sm" data-swiper-parallax="-60%" >{t('common:pve_subtitle')}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="h-[450px] flex items-center justify-center" >
                                <img src="/img/new_dessertcity_final_01.png" className="w-full object-cover h-full" alt="" data-swiper-parallax="-30%" />
                            </div>
                            <div className="text-center h-[290px] mt-5 flex flex-col justify-center items-center px-[18px]" >
                                <h3 className="heading_md text_spacing" data-swiper-parallax="-50%">{t('common:pvp')}</h3>
                                <p className="paragraph_sm" data-swiper-parallax="-60%" >{t('common:pvp_subtitle')}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </section>
    )
}

export default ScrollAnimationSectionMobile
