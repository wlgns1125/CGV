import "./SelectSeat.css";
import Ticket_tnb from './Ticket_Tnb';


function SelectSeat(){
    
    return (
        <>
            <div class="container_">
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
                                <span class="site">CGV 건대입구 | </span>
                                <span class="screen2">3관 4층 | </span>
                                <span class="seatNum">남은좌석 <b class="restNum">144</b>/<b class="totalNum">151</b></span>
                            
                                <p class="playYMD-info"><b>2022.06.13</b>
                                <b class="exe">(월)</b>
                                <b>10:00 ~ 12:37</b>
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
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="A9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="B9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="C9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="D9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="E9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="F9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="G9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="H9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="I9"/>
        </div>
        <div>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J1"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J2"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J3"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J4"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J5"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J6"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J7"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J8"/>
            <input type="button"  onClick={(e) => clickFunc(e)} name="seats" class="seat" value="J9"/>
        </div>
    </div>
    <Ticket_tnb />
        </>
    );
}





var count = 0;
var arr = [];
var pos = 0;
// 이걸 나중에 일반에서 고른 수로 고치기
var max = 0;

function rdoClick(e){
    max = e.target.value;
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