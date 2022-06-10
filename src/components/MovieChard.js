import "../css/MainPage.css";




function MovieChard() {


   return(
        <div class ="movieChartScreen">
            <div class ="contents">
                <div class = "swiper movieChart_list" id = "movieChart_list">
                        <div class = "swiper-wrapper">
                            <div class = "swiper-slide">
                                <div class ="img_wrap" data-scale="false">
                                 
                                    <a href = "">
                                <img src ="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img>
                                    </a>
                                </div>
                            </div>
                            <div class = "swiper-slide">
                                <div class ="img_wrap" data-scale="false">
                                    ::before
                                <img src ="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img>
                                <div class = "movieChart_btn_wrap">
                                    <a href="" class="btn_movieChart_detail">상세보기</a>
                                </div>
                                ::after 
                                </div>
                            </div>
                            <div class = "swiper-slide">
                                <div class ="img_wrap" data-scale="false">
                                    ::before
                                <img src ="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img>
                                <div class = "movieChart_btn_wrap">
                                    <a href="" class="btn_movieChart_detail">상세보기</a>
                                </div>
                                ::after 
                                </div>
                            </div>
                            <div class = "swiper-slide">
                                <div class ="img_wrap" data-scale="false">
                                    ::before
                                <img src ="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"></img>
                                <div class = "movieChart_btn_wrap">
                                    <a href="" class="btn_movieChart_detail">상세보기</a>
                                </div>
                                ::after 
                                </div>
                            </div>
                          </div>
                        <div class="swiper-button-next" tabindex="0" role="button" aria-label="다음 슬라이드" aria-disabled="false" onclick ="">
                            ::after
                        </div>
                        <div class="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="이전 슬라이드" aria-disabled="true"></div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>  
                
            </div>
       </div>
  
   );
}

export default MovieChard;

