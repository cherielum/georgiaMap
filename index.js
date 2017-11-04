function initMap() {
  //map options
  var options = {
    zoom: 11,
    center: {lat: 33.7490, lng: -84.3880} //atlanta
  }
  //new map
  var map = new
  google.maps.Map(document.getElementById('map'), options);

//   //add marker
//   var marker1 = new google.maps.Marker({
//     position: {lat: 33.8373, lng: -84.4068}, //buckhead
//     map:map,
//     // icon:'https:developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
//   });
//
// //adding information
//   var infoWindow = new google.maps.InfoWindow({
//     content: '<h1> Buckhead, GA </h1>'
//   });
//
//   marker1.addListener('click', function() {
//     infoWindow.open(map, marker1);
// });

addMarker({
  coordinates: {lat: 33.8373, lng: -84.4068},
  iconImage: 'https:developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  content: '<h3> Home: Buckhead, GA</h3>'
  }); //Buckhead
addMarker({
  coordinates: {lat: 33.7756, lng: -84.3963},
  content: '<h3> Georgia Tech, GA</h3>'
  }); //Georgia Tech

addMarker({coordinates: {lat: 33.7634, lng: -84.3951},
  content: '<h3> Georgia Aquarium, GA</h3>'
  }); //Georgia Aquarium

addMarker({coordinates: {lat: 33.6404, lng: -84.4277},
  content: '<h3> Hartsfield-Jackson Airport, GA</h3>'
  }); //Hartsfield-Jacksonairport


//Add Marker function
function addMarker (props){
  var marker = new google.maps.Marker({
      position: props.coordinates, //buckhead
      map:map,
      //icon:props.iconImage
    });

    //check for customicon
    if(props.iconImage) {
      //set Icon Image
      marker.setIcon(props.iconImage);
    }

    //check content
    if(props.content) {
      var infoWindow = new google.maps.InfoWindow({
          content: props.content
        });

        marker.addListener('click', function() {
          infoWindow.open(map, marker);
      });
    }

  }

}




  // var marker2 = new google.maps.Marker({
  //   position: {lat: 33.7756, lng: -84.3963}, //Georgia Tech
  //   map:map,
  //   // icon:'https:developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  // });
  //
  // var marker3 = new google.maps.Marker({
  //   position: {lat: 33.7634, lng: -84.3951}, //Georgia Aquarium
  //   map:map,
  //   // icon:'https:developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  // });
  //
  // var marker4 = new google.maps.Marker({
  //   position: {lat: 33.640411, lng: -84.4277}, //airport
  //   map:map,
  //   // icon:'https:developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  // });
