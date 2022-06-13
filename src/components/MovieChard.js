import "../css/MainPage.css";
import { Link } from "react-router-dom";



function MovieChard({ movieList, setClickedMenu }) {

    return (
        <div class="movieChartScreen">
            <div class="contents">
                <div class="swiper movieChart_list" id="movieChart_list">
                    <div class="swiper-wrapper">
                        <Link to="/movieDetail" onClick={
                            (e) => {
                                setClickedMenu(0);
                            }
                        } >
                            <div class="swiper-slide">
                                <div class="img_wrap" data-scale="false">
                                    <img src={movieList[0].poster} />
                                </div>
                            </div>
                        </Link>
                        <Link to="/movieDetail" onClick={
                            (e) => {
                                setClickedMenu(1);
                            }
                        } >
                            <div class="swiper-slide">
                                <div class="img_wrap" data-scale="false">

                                    <img src={movieList[1].poster} />


                                </div>
                            </div>
                        </Link>
                        <Link to="/movieDetail" onClick={
                            (e) => {
                                setClickedMenu(2);
                            }
                        } >
                            <div class="swiper-slide">
                                <div class="img_wrap" data-scale="false">

                                    <img src={movieList[2].poster} />


                                </div>
                            </div>
                        </Link>
                        <Link to="/movieDetail" onClick={
                            (e) => {
                                setClickedMenu(3);
                            }
                        }>
                            <div class="swiper-slide">
                                <div class="img_wrap" data-scale="false">

                                    <img src={movieList[3].poster} />

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div class="swiper-button-next" tabindex="0" role="button" aria-label="다음 슬라이드" aria-disabled="false" onclick="">

                    </div>
                    <div class="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="이전 슬라이드" aria-disabled="true"></div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>

            </div>
        </div>
    );
}

export default MovieChard;

