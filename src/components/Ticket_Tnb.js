import { Link } from "react-router-dom";

function Ticket_tnb() {
    return (
        <>
            <link rel="stylesheet" href="http://img.cgv.co.kr/CGV_RIA/Ticket/Common/css/2022/0512/FORM_TYPE/reservation_tnb.css" />

            <div id="ticket_tnb" class="tnb_container ">
                <div class="tnb step2">
                    {/* <!-- btn-left --> */}
                    <a class="btn-left" href="#" onclick="OnTnbLeftClick(); return false;" title="영화선택">이전단계로 이동</a>
                    <div class="info movie">
                        <span class="movie_poster"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_185.JPG" alt="영화 포스터" /></span>
                        <div class="row movie_title colspan2">
                            <span class="data letter-spacing-min ellipsis-line2"><a href="http://www.cgv.co.kr/movies/detail-view/?midx=82120" target="_blank" onmousedown="javascript:logClick('SUMMARY/영화상세보기');" title="탑건-매버릭">탑건-매버릭</a></span>
                        </div>
                        <div class="row movie_type">
                            <span class="data ellipsis-line1" title="2D(프리미어 상영)">2D(프리미어 상영)</span>
                        </div>
                        <div class="row movie_rating">
                            <span class="data" title="12세 관람가">12세 관람가</span>
                        </div>
                    </div>
                    <div class="info theater">
                        <div class="row name">
                            <span class="header">극장</span>
                            <span class="data letter-spacing-min ellipsis-line1"><a target="_blank" onmousedown="javascript:logClick('SUMMARY/극장상세보기');" href="http://www.cgv.co.kr/theaters/?theaterCode=0057" title="CGV 미아">CGV 미아</a></span>
                        </div>
                        <div class="row date">
                            <span class="header">일시</span>
                            <span class="data" title="2022.6.19(일) 15:20">2022.6.19(일) 15:20</span>
                        </div>
                        <div class="row screen_">
                            <span class="header">상영관</span>
                            <span class="data" title="1관 9층">1관 9층</span>
                        </div>
                        <div class="row number">
                            <span class="header">인원</span>
                            <span class="data" title="일반 5명">일반 5명</span>
                        </div>
                    </div>

                    <div class="info seat">
                        <div class="row seat_name">
                            <span class="header">좌석명</span>
                            <span class="data" title=""></span>
                        </div>
                        <div class="row seat_no colspan3">
                            <span class="header">좌석번호</span>
                            <span class="data ellipsis-line3" title=""></span>
                        </div>
                    </div>

                    {/* <div class="info payment-ticket" style="width: 155px;">
            <div class="row payment-millitary" style="display: none;">
                <span class="header">군인</span>
                <span class="data"><span class="price"></span>원 x <span class="quantity" style="display: none;"></span></span>
            </div>
            <div class="row payment-adult" style="display: none;">
                <span class="header">일반</span>
                <span class="data"><span class="price"></span>원 x <span class="quantity" style="display: none;"></span></span>
            </div>
            <div class="row payment-youth" style="display: none;">
                <span class="header">청소년</span>
                <span class="data"><span class="price"></span>원 x <span class="quantity" style="display: none;"></span></span>
            </div>
            <div class="row payment-child" style="display: none;">
                <span class="header">어린이</span>
                <span class="data"><span class="price"></span>원 x <span class="quantity" style="display: none;"></span></span>
            </div>						
            <div class="row payment-senior" style="display: none;">
                <span class="header">경로</span>
                <span class="data"><span class="price"></span>원 x <span class="quantity" style="display: none;"></span></span>
            </div>
            <div class="row payment-special" style="display: none;">
                <span class="header">우대</span>
                <span class="data"><span class="price"></span>원 x <span class="quantity" style="display: none;"></span></span>
            </div>
            <div class="row payment-final" style="display: none;">
                <span class="header">총금액</span>
                <span class="data"><span class="price">0</span><span class="won">원</span></span>
            </div>
        </div> */}
                    <div class="info path">
                        <div class="row colspan4">
                            <span class="path-step2" title="좌석선택">&nbsp;</span>
                            <span class="path-step3" title="결제">&nbsp;</span>
                        </div>
                    </div>
                    {/* <!-- btn-right --> */}
                    <div class="tnb_step_btn_right_before" id="tnb_step_btn_right_before"></div>
                    {/* <Link to="/SelectSeat"> */}
                    <a class="btn-right" id="tnb_step_btn_right" href="/SelectSeat" onclick="OnTnbRightClick(); return false;" title="결제선택">다음단계로 이동 - 레이어로 서비스 되기 때문에 가상커서를 해지(Ctrl+Shift+F12)한 후 사용합니다.</a>
                    {/* </Link> */}
                </div>
            </div>
        </>

    );
}

export default Ticket_tnb;