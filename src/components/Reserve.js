import "./Reserve.css";
import Ticket_tnb from "./Ticket_Tnb";

function Reserve() {
  return (
  <>
    <div class="container">
        <div class="movie-container">
            <div class="movie-head">
            영화
            </div>
            <div class="movie-body">
                <div class="movie" >
                    <input type="radio" onClick={(e) => movieClick(e)}  name="user_level" id="rd1" value="브로커"/>
                    <label for="rd1">브로커</label><br/>
                    <input type="radio" onClick={(e) => movieClick(e)} name="user_level" id="rd2" value="범죄도시2"/>
                    <label for="rd2">범죄도시2</label><br/>
                    <input type="radio" onClick={(e) => movieClick(e)} name="user_level" id="rd3" value="마녀2"/>
                    <label for="rd3">마녀2</label><br/>
                    <input type="radio" onClick={(e) => movieClick(e)} name="user_level" id="rd4" value="탑건-매버릭"/>
                    <label for="rd4">탑건-매버릭</label><br/>
                </div>   
            </div>
        </div>
        <div class="time-container">
            <div class="time-head">
            시간
            </div>
            <div class="time-body">
            <div class="time" id="time">
                    <span class="1층1관">
                        <h2>1관 1층</h2>
                    <input type="radio"  onClick={(e) => timeClick(e)}  name="time_level" id="rd5" value="시간_1층1관1"/>
                    <label for="rd5" id="시간_1층1관1"></label><br/>
                    <input type="radio"  onClick={(e) => timeClick(e)} name="time_level" id="rd6" value="시간_1층1관2"/>
                    <label for="rd6" id="시간_1층1관2"></label><br/>
                    </span>
                    
                    <span class="2층2관">
                        <h2>2관 2층</h2>
                    <input type="radio"  onClick={(e) => timeClick(e)} name="time_level" id="rd7" value="시간_2층2관1"/>
                    <label for="rd7" id="시간_2층2관1"></label><br/>
                    <input type="radio"  onClick={(e) => timeClick(e)} name="time_level" id="rd8" value="시간_2층2관2"/>
                    <label for="rd8" id="시간_2층2관2"></label><br/>
                    </span>
                </div>   
            </div>
        </div>
    </div>

    {/* <link rel="stylesheet" href="http://img.cgv.co.kr/CGV_RIA/Ticket/Common/css/2022/0512/FORM_TYPE/reservation_tnb.css"/> */}

<div id="ticket_tnb" class="tnb_container ">
    <div class="tnb step2">
        
        <div class="info movie">
            <span class="movie_poster"><img src="http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_185.JPG" alt="영화 포스터"/></span>
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
                <span class="data letter-spacing-min ellipsis-line1"><a target="_blank" onmousedown="javascript:logClick('SUMMARY/극장상세보기');" href="http://www.cgv.co.kr/theaters/?theaterCode=0057" title="CGV 미아">CGV 구미</a></span>
            </div>
            <div class="row date">
                <span class="header">일시</span>
                <span class="data" title="2022.6.19(일) 15:20">2022.6.19(일) 15:20</span>
            </div>
            <div class="row screen_">
                <span class="header">상영관</span>
                <span class="data" title="1관 9층">1관 1층</span>
            </div>
            <div class="row number">
                <span class="header">인원</span>
                <span class="data" title="일반 5명"></span>
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
        
        <div class="info path">
            <div class="row colspan4">
                <span class="path-step2" title="좌석선택">&nbsp;</span>
                <span class="path-step3" title="결제">&nbsp;</span>
            </div>
        </div>
        <a class="btn-right" id="tnb_step_btn_right" href="/selectSeat" title="결제선택"></a>
        {/* </Link> */}
    </div>
</div>
  </>
    )
}

var 시간_1층1관 = [];
var 시간_2층2관 = [];



var val;



function movieClick(e){
    

    var con = document.getElementById("time");
    
	// if(con.style.display=='none'){
		con.style.display = 'block';
	// }else{
	// 	con.style.display = 'none';
	// }

    const time1 = document.getElementById('시간_1층1관1');
    const time2 = document.getElementById('시간_1층1관2');
    const time3 = document.getElementById('시간_2층2관1');
    const time4 = document.getElementById('시간_2층2관2');

    var 브로커_시간_1층1관 = ["13:00", "15:30"];
    var 브로커_시간_2층2관 = ["10:15", "18:00"];
    var 범죄도시2_시간_1층1관 = ["9:10", "12:00"];
    var 범죄도시2_시간_2층2관 = ["13:00", "20:30"];
    var 마녀2_시간_1층1관 = ["10:00", "16:30"];
    var 마녀2_시간_2층2관 = ["9:15", "22:00"];
    var 탑건_매버릭_시간_1층1관 = ["11:30", "17:00"];
    var 탑건_매버릭_시간_2층2관 = ["10:00", "15:30"];

    val = e.target.value;
    console.log(val);
    
    if(val == "브로커"){
        시간_1층1관 = 브로커_시간_1층1관;
        시간_2층2관 = 브로커_시간_2층2관;

    } else if(val == "범죄도시2"){
        시간_1층1관 = 범죄도시2_시간_1층1관;
        시간_2층2관 = 범죄도시2_시간_2층2관;
    } else if(val == "마녀2"){
        시간_1층1관 = 마녀2_시간_1층1관;
        시간_2층2관 = 마녀2_시간_2층2관;
    } else if(val == "탑건-매버릭"){
        시간_1층1관 = 탑건_매버릭_시간_1층1관;
        시간_2층2관 = 탑건_매버릭_시간_2층2관;
    }


    time1.innerHTML = 시간_1층1관[0];
        time2.innerHTML = 시간_1층1관[1];
        time3.innerHTML = 시간_2층2관[0];
        time4.innerHTML = 시간_2층2관[1];

        
    
}

function timeClick(e){
    console.log(e.target.value);
    var con = document.getElementById("tnb_step_btn_right");
    
		con.className = "btn-right_on";
    

}

export default Reserve;
