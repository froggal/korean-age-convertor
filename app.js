function submitBirth(){
    const birthDay = document.querySelector("#birthday").value
    var y = birthDay.split('-')[0]
    var m = birthDay.split('-')[1]
    var d = birthDay.split('-')[2]
    const today = new Date()
    var ty = today.getFullYear()
    var tm = today.getMonth()
    var td = today.getDate()
    
    age = ty - y // 2023 - 2011 = 12
    if(m > tm){
        age = age - 1
    }

    document.getElementById('converted').innerHTML = "만 " + age + " 세"
}