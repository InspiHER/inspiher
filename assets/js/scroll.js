$(document).scroll(function() { 
    if($(window).scrollTop() === 0) {
        $(".navbar").removeClass('bg-pink-half');
        $(".navbar").addClass('bg-purple');
    } else{
        $(".navbar").removeClass('bg-purple');
        $(".navbar").addClass('bg-pink-half');
    }
});

document.querySelectorAll('.dropdown-toggle').forEach(item => {
item.addEventListener('click', event => {

if(event.target.classList.contains('dropdown-toggle') ){
  event.target.classList.toggle('toggle-change');
}
else if(event.target.parentElement.classList.contains('dropdown-toggle')){
  event.target.parentElement.classList.toggle('toggle-change');
}
})
});