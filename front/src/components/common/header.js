// $.get(serverRoot + "html/common/header.html", (data) => {
//     $("#header").html(data);
// });


// Print Report
function info_print() {
    // let initBody = document.body;
    // let hiddenBtn = document.querySelector('.print-button'); 
    // let hiddenHeader = document.querySelector('#header');
    // let hiddenNavbar = document.querySelector('.navbar-device');
    // let hiddenClearfix = document.querySelector('.clearfix');
   
    // window.onbeforeprint = function () {
    //   hiddenBtn.style.display = "none";
    //   hiddenHeader.style.display = "none";
    //   hiddenNavbar.style.display = "none";
    //   hiddenClearfix.style.display = "none";
    //   document.body = document.querySelector('.main-container');
    // }
    // window.onafterprint = function () {
    //   hiddenBtn.style.display = "block";
    //   hiddenHeader.style.display = "block";
    //   hiddenNavbar.style.display = "block";
    //   hiddenClearfix.style.display = "block";
    //   document.body = initBody;
    // }
    window.print();
  }