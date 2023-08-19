var numericalValues = new Array();
numericalValues["never"]= 0;
numericalValues["Sometimes"]= 1;
numericalValues["moreSometimes"]= 2;
numericalValues["Always"]= 3;




function getScoreQ1()
{
let scoreQ1 = 0;
let form = document.forms["form"];
let Q1 = form.elements["Q1"];
for(let i=0; i<Q1.length; i++)
{
    if(Q1[i].checked)
    {
    scoreQ1 = numericalValues[Q1[i].value];
    break;
    }

}
return scoreQ1;
};

function getScoreQ2()
{
let scoreQ2 = 0;
let form = document.forms["form"];
let Q2 = form.elements["Q2"];

for(let i=0; i<Q2.length; i++)
{
  if(Q2[i].checked)
  {
  scoreQ2 = numericalValues[Q2[i].value];
  break;
  }

}
return scoreQ2;
};



function getScoreQ3()
{
let scoreQ3 = 0;
let form = document.forms["form"];
let Q3 = form.elements["Q3"];

for(let i=0; i<Q3.length; i++)
{
  if(Q3[i].checked)
  {
  scoreQ3 = numericalValues[Q3[i].value];
  break;
  }

}
return scoreQ3;
};




function getScoreQ4()
{
var scoreQ4 = 0;
var form = document.forms["form"];
var Q4 = form.elements["Q4"];
for(let i=0; i<Q4.length; i++)
{
    if(Q4[i].checked)
    {
    scoreQ4 = numericalValues[Q4[i].value];
    break;
    }

}
return scoreQ4;
};




function getScoreQ5()
{
var scoreQ5 = 0;
var form = document.forms["form"];
var Q5 = form.elements["Q5"];
for(let i=0; i<Q5.length; i++)
{
    if(Q5[i].checked)
    {
    scoreQ5 = numericalValues[Q5[i].value];
    break;
    }

}
return scoreQ5;
};




function getScoreQ6()
{
var scoreQ6 = 0;
var form = document.forms["form"];
var Q6 = form.elements["Q6"];
for(let i=0; i<Q6.length; i++)
{
    if(Q6[i].checked)
    {
    scoreQ6 = numericalValues[Q6[i].value];
    break;
    }

}
return scoreQ6;
};




function getScoreQ7()
{
var scoreQ7 = 0;
var form = document.forms["form"];
var Q7 = form.elements["Q7"];
for(let i=0; i<Q7.length; i++)
{
    if(Q7[i].checked)
    {
    scoreQ7 = numericalValues[Q7[i].value];
    break;
    }

}
return scoreQ7;
};





function getTotal()
{
 

let  totalScoreq1 = getScoreQ1();
let totalScoreq2 = getScoreQ2();
let totalScoreq3 = getScoreQ3();
let totalScoreq4 = getScoreQ4();
let totalScoreq5 = getScoreQ5();
let totalScoreq6 = getScoreQ6();
let totalScoreq7 = getScoreQ7();






let totalScore = totalScoreq1 + totalScoreq2 + totalScoreq3 + totalScoreq4 + totalScoreq5 + totalScoreq6 + totalScoreq7;


let highAnx = 'تعاني من قلق عام شديد ننصحك بمراجعة الطبيب';
let midAnx = ' تعاني من قلق عام متوسط لذا ننصحك بمراجعة الطبيب ';
let smAnx = 'تعاني من قلق عام بسيط لذا ننصحك بمراجعة الطبيب';
let noAnx = ' لا تعاني من قلق ولله الحمد';
let comment = document.getElementById("comment")

    if (totalScore  > 15) {
 comment.textContent = highAnx;
    } else if 
        (totalScore <= 15 && totalScore >= 10) {
  comment.textContent = midAnx;
        } else if (totalScore <= 10 && totalScore >= 5 ) {
            comment.textContent = smAnx;
        }else{
            comment.textContent = noAnx;
        }


return document.getElementById('result').innerHTML= "المجموع :  " +  totalScore ;


}



document.getElementById('calculate').onclick=getTotal;