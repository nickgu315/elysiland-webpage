import useTranslation from 'next-translate/useTranslation';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamCard from './TeamCard';

const teams = [
    {
        title: 'team_member_1_name',
        linkedin: 'https://www.linkedin.com/in/nickgulikhang',
        subtitle: 'team_member_1_subtitle',
        imgSrc: '/img/nick_480x.jpg',
        imgAlt: 'team_member_1_name'
    },
    {
        title: 'team_member_2_name',
        linkedin: 'https://www.linkedin.com/in/kennycsngan',
        subtitle: 'team_member_2_subtitle',
        imgSrc: '/img/ngan_480x.jpg',
        imgAlt: 'team_member_2_name'
    },
    {
        title: 'team_member_3_name',
        linkedin: 'https://www.linkedin.com/in/fclsteven',
        subtitle: 'team_member_3_subtitle',
        imgSrc: '/img/steven_480x.jpg',
        imgAlt: 'team_member_3_name'
    },
    {
        title: 'team_member_4_name',
        linkedin: 'https://www.linkedin.com/in/lok-wong-620431228',
        subtitle: 'team_member_4_subtitle',
        imgSrc: '/img/lok_480x.jpg',
        imgAlt: 'team_member_4_name'
    },
    {
        title: 'team_member_5_name',
        linkedin: 'https://www.linkedin.com/in/yuki-kato-0337a392',
        subtitle: 'team_member_5_subtitle',
        imgSrc: '/img/yuki_7a74966f-a3b5-46b3-b949-4d9ab4621bfa_480x.jpg',
        imgAlt: 'team_member_5_name'
    },
]

function TeamSection() {
    const { t } = useTranslation()
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 border-t border-b border_soft" id="team">
            <div className="md:px-[9vw] border-r border_soft py-[120px] md:grid md:items-center">
                <h2 className="heading_md text-center md:text-left" >{t('common:team')}</h2>
            </div>
            <div className="pt-0 pb-6 md:py-[120px] md:ml-[70px] md:pr-10 team_slider_wrapper" >
                <div>
                    <Swiper
                        spaceBetween={35}
                        slidesPerView={1.4}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            el: '.team_slider_pagination',
                            renderBullet: function (index, className) {
                                return `<span class="dot swiper-pagination-bullet"></span>`;
                            },
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.25,
                                spaceBetween: 12
                            },
                            750: {
                                slidesPerView: 1.4,
                                spaceBetween: 35
                            },

                        }}


                    >
                        {teams.map((team, index) => (
                            <SwiperSlide key={index}><TeamCard {...team} /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="team_slider_pagination flex items-center justify-center mt-6 md:mt-8"></div>
            </div>
        </section>
    )
}

export default TeamSection
