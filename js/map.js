ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map01", {
        center: [55.758443869725475, 37.60527274606313],
        zoom: 15,
        controls: []
    }, {
        suppressMapOpenBlock: true,
    });
    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            height: '9px',
            position: {
                right: '15px',
                top: '280px'
            },
        },
    });
    myMap.controls.add(zoomControl);
    var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            position: {
                right: '15px',
                top: '375px'
            },
        }
    });
    myMap.controls.add(geolocationControl);
    if (window.innerWidth <= 450) {
        myMap.controls.remove(geolocationControl);
        myMap.controls.remove(zoomControl);
    }
    // Размещение геообъекта на карте.
    var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Subtract.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
}
