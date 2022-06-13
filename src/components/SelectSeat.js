import "./SelectSeat.css";
import Ticket_tnb from './Ticket_Tnb';


function SelectSeat(){
    
    return (
        <>
            <div class="container2">
                <div class="head">
                        인원/좌석
                </div>
                <div class="box">
                    <div class ="left-box">
                        일반 
                        <div class ="select-num">
                            <div class="toggle3">
                                <input type="radio" onClick={(e) => rdoClick(e)} id="toggle3-1" name="num" value="1"/>
                                <label for="toggle3-1">1</label>
                                <input type="radio" onClick={(e) => rdoClick(e)} id="toggle3-2" name="num" value="2"/>
                                <label for="toggle3-2">2</label>
                                <input type="radio" onClick={(e) => rdoClick(e)} id="toggle3-3" name="num"  value="3"/>
                                <label for="toggle3-3">3</label>
                                <input type="radio" onClick={(e) => rdoClick(e)} id="toggle3-4" name="num"  value="4"/>
                                <label for="toggle3-4">4</label>
                            </div>    
                        </div>
                    </div>
                    <div class ="right-box">
                        <div id="user-select-info">
                                <span class="site">CGV 구미 | </span>
                                {/* <span class="screen2">1관 1층 | </span> */}
                                <span class="seatNum">남은좌석 <b class="restNum">90</b>/<b class="totalNum">90</b></span>
                            
                                <p class="playYMD-info"><b>2022.06.16</b>
                                <b class="exe">(목)</b>
                                {/* <b>10:00 ~ 12:37</b> */}
                                </p>
                        </div>
                    </div>
                </div>
            </div>



            <div class="screen">
                <span class="text">
                    SCREEN
            </span>
            </div>

            <div class="seat-wrapper">
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A1" value="A1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A2" value="A2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A3" value="A3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A4" value="A4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A5" value="A5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A6" value="A6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A7" value="A7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A8" value="A8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="A9" value="A9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B1" value="B1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B2" value="B2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B3" value="B3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B4" value="B4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B5" value="B5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B6" value="B6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B7" value="B7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B8" value="B8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="B9" value="B9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C1" value="C1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C2" value="C2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C3" value="C3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C4" value="C4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C5" value="C5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C6" value="C6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C7" value="C7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C8" value="C8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="C9" value="C9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D1" value="D1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D2" value="D2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D3" value="D3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D4" value="D4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D5" value="D5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D6" value="D6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D7" value="D7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D8" value="D8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="D9" value="D9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E1" value="E1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E2" value="E2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E3" value="E3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E4" value="E4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E5" value="E5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E6" value="E6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E7" value="E7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E8" value="E8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="E9" value="E9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F1" value="F1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F2" value="F2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F3" value="F3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F4" value="F4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F5" value="F5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F6" value="F6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F7" value="F7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F8" value="F8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="F9" value="F9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G1" value="G1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G2" value="G2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G3" value="G3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G4" value="G4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G5" value="G5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G6" value="G6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G7" value="G7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G8" value="G8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="G9" value="G9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H1" value="H1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H2" value="H2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H3" value="H3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H4" value="H4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H5" value="H5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H6" value="H6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H7" value="H7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H8" value="H8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="H9" value="H9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I1" value="I1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I2" value="I2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I3" value="I3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I4" value="I4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I5" value="I5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I6" value="I6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I7" value="I7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I8" value="I8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="I9" value="I9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J1" value="J1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J2" value="J2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J3" value="J3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J4" value="J4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J5" value="J5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J6" value="J6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J7" value="J7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J8" value="J8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" id="J9" value="J9"/>
        </div>
    </div>
  
    <div id="ticket_tnb" class="tnb_container ">
    <div class="tnb step2">
        
        
        <div class="info path">
            <div class="row colspan4">
                <span class="path-step2" title="좌석선택">&nbsp;</span>
                <span class="path-step3" title="결제">&nbsp;</span>
            </div>
        </div>
        <a class="btn-right2" onClick={(e) => reserve(e)} id="tnb_step_btn_right" title="결제선택"></a>
        
    </div>
</div>
        </>
    );
}





var count = 0;
var arr = [];
var pos = 0;

var reservedArr = [];

// 이걸 나중에 일반에서 고른 수로 고치기
var max = 0;

function rdoClick(e){
    if(count > e.target.value){
        alert("선택한 좌석이 예매 인원 보다 많습니다.");
        window.location.reload();
    }
    max = e.target.value
}

function reserve(e){
    for(var i=0; i<arr.length; i++){
        document.getElementById(arr[i]).className = "seat_reserved";
    }
        count = 0;  
        arr = [];
        pos = 0;
}

function clickFunc(e){
    const val = e.target.value;
    console.log(val);
    console.log(arr.indexOf(val));

    if(arr.includes(val)){
        console.log("포함");
        pos = arr.indexOf(val);
        arr[pos] = 0;
        e.target.classList.toggle("clicked");
        count--;
        if(count == 0){
            pos = 0;
        }
    
    }
    else{

        if(count < max){
            console.log("미포함");
        if(pos < max){
        arr[pos] = val;

        
        count++;
        pos++;
        e.target.classList.toggle("clicked");
        }
        
        }
    
    }

    console.log(arr);

    console.log("pos", pos);
    console.log("count", count);

}



export default SelectSeat;