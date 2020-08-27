function toggle() {

  // we are getting a reference to the blue box element
  var blue_box = document.getElementById('blue-box');

  // checks to see if the element is currently hidden
  if (blue_box.style.opacity == 0){

    // if it is hidden. Unhide with opacity = 1
    blue_box.style.opacity = 1;

  } else {

    // if it's not already hidden. hide this element
    blue_box.style.opacity = 0;

  }
}