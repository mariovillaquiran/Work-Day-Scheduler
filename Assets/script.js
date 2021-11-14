$(document).ready(function(){
    $(".saveBtn").on("click", function(){
var value = $(this).siblings(".description").val()
var time = $(this).parent().attr("id")
localStorage.setItem(value,time)
    })
    function hourupdater (){
        var currenthour = moment().hours()
        $(".time-block").each(function(){
            var hourblock = parseInt($(this).attr("id").split("-")[1])
        })
    }
})

//add if else statement to compare the current hour with the hour block to add a class from css or remove class from css
function time() {
    if (currenthour.textContent = time) {
        setAttribute("present")
     }
     if (currenthour.textContent <= time) {
        setAttribute("future")
    }
    
    if (currenthour.textContent >= time) {
        setAttribute("past")
    }
}


