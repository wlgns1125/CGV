import "../css/MainPage.css";
import { Link } from "react-router-dom";



function MovieChard() {

    return (
        <Link to="/movieDetail" >
            <div class="movieChartScreen">
                <div class="contents">
                    <div class="swiper movieChart_list" id="movieChart_list">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="img_wrap" data-scale="false">
                                    <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg" />
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="img_wrap" data-scale="false">

                                    <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img>


                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="img_wrap" data-scale="false">

                                    <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img>


                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="img_wrap" data-scale="false">

                                    <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img>

                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-next" tabindex="0" role="button" aria-label="다음 슬라이드" aria-disabled="false" onclick="">

                        </div>
                        <div class="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="이전 슬라이드" aria-disabled="true"></div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>

                </div>
            </div>
        </Link>
    );
}

export default MovieChard;

