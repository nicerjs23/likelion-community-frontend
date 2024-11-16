import * as S from "./MainPage.styled";
import { useState, useEffect } from "react";
import { MainHeader } from "@components/MainHeader";
import { Footer } from '@components/Footer'
import logo from '@assets/images/whiteLogo.svg'
import sliderImg from '@assets/images/slider5.png'
import { PopularPost } from '@components/mainPage/PopularPost';
import { PopularData } from "../../constant/mainPage/popularPostData";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import axiosInstance from "@apis/axiosInstance";
import 'swiper/css';

export const MainPage = () => {

	// 각 게시판 별 인기글 1개씩 반환

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try{
            const response = await axiosInstance.get('/post/popularposts');
            console.log('게시판 별 인기글 1개씩 :', response.data);
            setPosts(Array.isArray(response.data) ? response.data : [response.data]);
        } catch(error) {
            console.log('error:',error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

	


	return (
		<S.MainWrapper>
			<MainHeader title="EVERION" />
				<S.MainSwiper>
					<Swiper
						modules={[ Autoplay ]}
						loop={true}
						slidesPerView={1.2}
						spaceBetween={20}
						centeredSlides={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false 
						}}
						style={{ overflow: 'visible' }}
					>
					<SwiperSlide>
						<S.Slider1>
							<S.Left>
								<S.Desc>멋쟁이 사자처럼</S.Desc>
								<S.Desc>출석부터 네트워킹까지 한번에!</S.Desc>
								<S.Name>EVERION</S.Name>
							</S.Left>
							<S.RightLogo src={logo} />
						</S.Slider1>
					</SwiperSlide>
					<SwiperSlide>
						<S.Slider2 src={sliderImg} />
					</SwiperSlide>
					<SwiperSlide>
						<S.Slider1>
							<S.Left>
								<S.Desc>멋쟁이 사자처럼</S.Desc>
								<S.Desc>출석부터 네트워킹까지 한번에!</S.Desc>
								<S.Name>EVERION</S.Name>
							</S.Left>
							<S.RightLogo src={logo} />
						</S.Slider1>
					</SwiperSlide>
					<SwiperSlide>
						<S.Slider2 src={sliderImg} />
					</SwiperSlide>
					</Swiper>
				</S.MainSwiper>
				<S.Content>
				<S.Board>
					<S.Title>실시간 인기글</S.Title>
					<S.Posts>
						{posts.map((post,index) => (
							<PopularPost
								key={index}
								id={post.id}
								board_title={post.board_title}
								body={post.body}
							/>
						))}
					</S.Posts>
				</S.Board>
			</S.Content>
			<Footer />
		</S.MainWrapper>
	);
};
