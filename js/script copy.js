import booklists from "./bookList.js";



// console.log(booklists[0].subject)
// document.getElementById("dd").innerHTML=booklists[0].subject;



let menu_checkbox = document.getElementById("menu_checkbox");

var indexLength = booklists.length;
var indexLengthTen = 1;
var yesornot = [];
var blackScreen = document.getElementById("blackScreen");
var sectionBox = document.getElementById("sectionBox");
var selectSectionBox = document.getElementById("selectSectionBox");
var screenMaker = document.getElementById("sectionBoxScreen");

var moving = document.getElementById("moving");
var movingLeft = document.getElementById("left");
var movingRight = document.getElementById("right");
//▽▽▽▽▽HOME BUTTON WOKRING!!▽▽▽▽▽▽//
var homeButton = document.getElementById("homeButton");
var homeButtonChecked = document.getElementById("homeButtonClicking").value;
homeButton.addEventListener("click", homeButtonClickEvent);
function homeButtonClickEvent() {
    if (homeButtonChecked == "off") {
        homeButtonChecked = "on"
        blackScreen.classList.remove("off")
        blackScreen.classList.add("on")
        measuringIndex();
        makingIndex();
        makingScreensIndex()
        makingScreens()
        var selectSection = document.querySelectorAll("#selectSectionBox > span");
        var selectDivOne = document.querySelectorAll("#sectionBox > div")
        var selectScreen = document.querySelectorAll("#sectionBox > div > .boonum")
        var selectScreenBox = document.getElementById("sectionBoxScreen")
        var selectScreenValue = document.querySelectorAll("#sectionBoxScreen>div")
        selectSection[0].classList.add("viewable")
        selectDivOne[0].classList.add("viewable")
        for (let ii = 0; ii < selectSection.length; ++ii) {

            selectSection[ii].onclick = function () {

                for (let jj = 0; jj < selectSection.length; ++jj) {
                    selectSection[jj].classList.remove("viewable")
                    selectDivOne[jj].classList.remove("viewable");
                }
                this.classList.add("viewable")
                selectDivOne[ii].classList.add("viewable")
            }
        }
        for (let io = 0; io < selectScreen.length; ++io) {
            selectScreen[io].onclick = function () {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`);
                }
                selectScreenBox.classList.add("viewable")
                selectScreenValue[io].classList.add("viewable")
                moving.classList.add("viewable")
                if (io != 0) {
                    movingLeft.classList.add(`${io - 1}`);
                    movingRight.classList.add(`${io + 1}`);
                }
                else {
                    movingLeft.classList.add(`${0}`);
                    movingRight.classList.add(`${io + 1}`);
                }
            }

        }
        movingLeft.addEventListener("click", moving1left);
        movingRight.addEventListener("click", moving1right);
        function moving1left() {
            let moving_check = this.classList;
            let moving_check2 = parseInt(moving_check.value)

            if (moving_check2 != 0) {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`);
                }
                movingLeft.classList.add(`${moving_check2 - 1}`)
                movingRight.classList.add(`${moving_check2}`)
                selectScreenValue[`${moving_check2}`].classList.add("viewable");
            }

            else {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`);
                }
                movingLeft.classList.add(`0`)
                movingRight.classList.add(`${moving_check2 + 2}`)
                selectScreenValue[`${moving_check2 + 1}`].classList.add("viewable");
            }

        }
        function moving1right() {
            let moving_check = this.classList;
            let moving_check2 = parseInt(moving_check.value)
            if (moving_check2 != indexLength) {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`);
                }
                movingLeft.classList.add(`${moving_check2}`)
                movingRight.classList.add(`${moving_check2 + 1}`)
                selectScreenValue[`${moving_check2}`].classList.add("viewable");
            }

            else {
                for (let jj = 0; jj < selectScreen.length; ++jj) {
                    selectScreenValue[jj].classList.remove("viewable")
                    movingLeft.classList.remove(`${jj}`);
                    movingRight.classList.remove(`${jj}`)
                    movingRight.classList.remove(`${jj + 1}`);
                }
                movingLeft.classList.add(`${moving_check2 - 2}`)
                movingRight.classList.add(`${indexLength}`)
                selectScreenValue[`${indexLength - 1}`].classList.add("viewable");

            }
        }
        menu_checkbox.addEventListener("click", event)
        function event() {


            setTimeout(function () {
                if (menu_checkbox.checked) {
                    menu_checkbox.checked = false;
                    for (let jj = 0; jj < selectScreen.length; ++jj) {
                        selectScreenValue[jj].classList.remove("viewable")
                        movingLeft.classList.remove(`${jj}`);
                        movingRight.classList.remove(`${jj}`);
                        selectScreenBox.classList.remove("viewable")
                    }

                }
                else {

                }

            }, 1000)
        }

    }
    else {
        homeButtonChecked = "off"
        blackScreen.classList.remove("on")
        blackScreen.classList.add("off")
    }
}
//△△△△△HOME BUTTON WOKRING!!△△△△△//
//▽▽▽▽▽IndexPage▽▽▽▽▽▽//
function measuringIndex() {
    var indexLength = booklists.length;
    if (indexLength == 0) {
        indexLength++;

    }
    if (indexLength % 10 == 0) {
        indexLengthTen = (parseInt(indexLength / 10));
    }
    else {
        indexLengthTen = (parseInt(indexLength / 10) + 1);
    }


}
function makingIndex() {
    var TestSectionBox = "";
    var TestSectionBoxes = [];
    var TestIndexLength = 0;
    var TestSelectSectionBox = "";
    if (indexLength > 10) {
        TestIndexLength = indexLength;
        while (TestIndexLength > 10) {
            TestSectionBoxes.push(10);
            TestIndexLength -= 10;
            if (TestIndexLength > 10) {
                TestSectionBoxes.push(10)
            }
            else {
                TestSectionBoxes.push(TestIndexLength);
            }
        }

        for (let i = 0; i < TestSectionBoxes.length; ++i) {
            TestSectionBox += `<div class=sectionBoxes${i}>`
            for (var indexSelectLength = 0; indexSelectLength < TestSectionBoxes[i]; ++indexSelectLength) {
                if (indexSelectLength !== 9) {
                    TestSectionBox += `<a href="#none" class='boonum bookNum${i}${indexSelectLength}'> No.${i}${indexSelectLength + 1} <span class=bookName>${booklists[indexSelectLength].subject}</span> </a><br>`;
                }
                else {
                    TestSectionBox += `<a href="#none" class='boonum bookNum${i}${indexSelectLength}'> No.${indexSelectLength + 1} <span class=bookName>${booklists[indexSelectLength].subject}</span> </a><br>`;
                }

            }
            TestSectionBox += `</div>`
        }

    }
    else {
        TestSectionBox += `<div class=sectionBoxes${indexLengthTen}>`
        for (var indexSelectLength = 0; indexSelectLength < indexLength; ++indexSelectLength) {
            TestSectionBox += `<a href="#none" class='boonum bookNum${indexSelectLength}'> No.${indexSelectLength + 1} <span class=bookName>${booklists[indexSelectLength].subject}</span> </a><br>`;

        }
        TestSectionBox += `</div>`


    }
    for (let j = 0; j < indexLengthTen; ++j) {
        TestSelectSectionBox += `<span class="selectSection selectSections${j + 1}">${j + 1}</span>`
    }
    sectionBox.innerHTML = TestSectionBox;
    selectSectionBox.innerHTML = TestSelectSectionBox;
}





//△△△△△IndexPage△△△△△//

//▽▽▽▽▽SCRENNPage▽▽▽▽▽▽//
function makingScreensIndex(){
    for (let ii = 0; ii < booklists.length; ii++) {
        function checkIfImageExists(url, callback) {
            const img = new Image();
            img.src = url;

            if (img.complete) {
                callback(true);
            } else {
                img.onload = () => {
                    callback(true);
                };

                img.onerror = () => {
                    callback(false);
                };
            }
        }
        
        checkIfImageExists(`./images/${booklists[ii].photo}`, (exists) => {
            if (exists) {
                console.log("we have")
                yesornot.push(1)
            } else {
                yesornot.push(0)
            }
        });
        console.log("work")
    }
    
    console.log(yesornot.length)
}
function makingScreens() {
    var TestSectionBox2 = "";
    
    
    for (let i = 0; i < indexLength; i++) {
        TestSectionBox2 += `<div class=screenBoxes${i}>`
        TestSectionBox2 += `<div class="subject"><span>${booklists[i].subject}</span></div>`;
        
        if (yesornot[i] == 0) {
            TestSectionBox2 += `<div class="photo" style="background-image: url(./images/noimage.gif); background-repeat: no-repeat; background-position: center; background-size:contain;"></div>`
        }
        else{
            
            TestSectionBox2 += `<div class="photo" style="background-image: url(./images/${booklists[i].photo}); background-repeat: no-repeat; background-position: center; background-size:contain;"></div>`
        }


        TestSectionBox2 += `<div class="author"><span>${booklists[i].author}</span></div>
                <div class="publisher"><span>${booklists[i].publisher}</span></div>
                <div class="date"><span>${booklists[i].date}</span></div>
                <div class="price"><span>${booklists[i].price.toLocaleString()}</span></div>
                <div class="summary"><br><span>${booklists[i].summary}</span></div>
                `;
        TestSectionBox2 += `</div>`
    }

    screenMaker.innerHTML = TestSectionBox2;

}

//△△△△△SCRENNPage△△△△△//
