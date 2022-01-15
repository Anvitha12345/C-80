name_of_the_student_arry=[];

function submit(){

for(var j=1; j<=4; j++){

var name_of_the_student= "Name-"+document.getElementById("name_of_the_student_"+j).value;

name_of_the_student_arry.push(name_of_the_student);


}
document.getElementById("display_name_with_commas").innerHTML=name_of_the_student_arry;

var remove_commas =name_of_the_student_arry.join("  ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display= "inline-block";


  



}
function  sort()
{
name_of_the_student_arry.sort()

document.getElementById("display_name_with_commas").innerHTML =name_of_the_student_arry;
var remove_commas = name_of_the_student_arry.join(" * ");
document.getElementById("display_name_without_commas").innerHTML = remove_commas;




}

