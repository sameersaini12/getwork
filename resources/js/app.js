import { jsPDF } from "jspdf";
// const socket = io();


const getpdf = document.querySelectorAll("#getpdf");

const printResume = (user) => {
var doc = new jsPDF();

var generateData = function(remarks) {
  var result = [];
  for(var j=1;j<=remarks.length;j+=1) {
    var data = {
      SNo : `${j}` ,
      Rating : remarks[j-1].jobRate ,
      Feedback : remarks[j-1].feedback
    }
    result.push(Object.assign({} ,data))
  }
  return result;
};

function createHeaders(keys) {
  var result = [];
  for (var i = 0; i < keys.length; i += 1) {
    result.push({
      id: keys[i],
      name: keys[i],
      prompt: keys[i],
      width: 65,
      align: "center",
      padding: 0
    });
  }
  return result;
}

var headers = createHeaders([
  "SNo",
  "Rating",
  "Feedback"
]);

var imgDataFacebook = 'img/facebook-icon.png';
var imgDataInstagram = 'img/instagram-icon.png';
var imgDataWeb = 'img/web-icon.png';
var imgDataTwitter = 'img/twitter-icon.png';


doc.setFontSize(22);
doc.setTextColor(0, 153, 204);
doc.text("getwork", 20, 25);
doc.setTextColor(59, 248, 59);
doc.text(".com",47,25);
doc.setFontSize(13);
doc.setTextColor(89, 88, 88);
doc.text("get assured work here..",20,30);
doc.setFontSize(16);
doc.setTextColor(0, 0, 0);
doc.setLineWidth(1.5);
doc.line(20, 65, 190, 65);
doc.text("TO WHOMSOEVER IT MAY CONCERN",55,80);
doc.text("This is to certify that",20,95);
doc.text("was registed with our site as a worker.",96,95);
doc.text("With his previous perfromance he get average rating of",20,105);
doc.addImage("/img/sign.jpg", 'JPEG', 150, 110, 40, 30);
doc.setFontSize(22);
doc.text("Previous work history",65,179);
doc.setFontSize(14)
doc.text("CEO(getwork.com)",150,151);
doc.setFontSize(19);
doc.setFont("default", "bold");
doc.text(`${user.name}`,73,95);
doc.text(`${user.rating} .`,160,105);
doc.text("Sameer",160,145);
doc.setFont("default","normal");
doc.table(70, 190, generateData(user.remark), headers, { autoSize: true });
    doc.save("resume.pdf");
}

getpdf.forEach((btn)=> {
    btn.addEventListener('click' , (e)=> {
        let user = JSON.parse(btn.dataset.user);
        console.log(e)
        printResume(user);
    })
})



