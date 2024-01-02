// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//  owl carousel script
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

//    end owl carousel script

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(36.183152, 44.0243323),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker({
    position: { lat: 36.183152, lng: 44.0243323 },
    map: map,
    title: "My Location",
  });
}
