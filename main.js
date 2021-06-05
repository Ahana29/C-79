var names_array=[];
function submit_button(){
    var name1= document.getElementById("name_1").value;
    var name2= document.getElementById("name_2").value;
    var name3= document.getElementById("name_3").value;
    var name4= document.getElementById("name_4").value;
    names_array.push(name1);
    names_array.push(name2);
    names_array.push(name3);
    names_array.push(name4);
   document.getElementById("display_name").innerHTML= names_array;
  document.getElementById("submit").style.display="none";
  document.getElementById("sortinghat").style.display="inline-block";

}
function sort_text(){
    names_array.sort();
    document.getElementById("display_name").innerHTML= names_array;
}