// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
function sendMail(){
  var subject = $("#subject").val();
  var body = $("#message").val();
  window.open('mailto:qan.soft@gmail.com?subject='+subject+'&body='+body);
}