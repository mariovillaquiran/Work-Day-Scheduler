$(document).ready(function(){
    $(".saveBtn").on("click", function(){
var value = $(this).siblings(".description").val()
var time = $(this).parent().attr("id")
localStorage.setItem(time,value)
    })
    function hourupdater (){
        var currenthour = moment().hours()
        $(".time-block").each(function(){
            var hourblock = parseInt($(this).attr("id").split("-")[1])
        
        if (hourblock < currenthour) {
            $(this).addClass("past")
        } else if (hourblock === currenthour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future") 
        
        }
        })
    }
    hourupdater()
    var interval = setInterval(hourupdater, 30000)
  // add line 30 for each hour
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))   
    $("#currentDay").text(moment().format("MMM Do YY"))
    
})




