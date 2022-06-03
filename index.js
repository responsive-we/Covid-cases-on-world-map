function updateMap() {
    {
        fetch("/data.json")
        .then(Response => Response.json())
        .then(rsp =>{
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude= element.latitude
                longitude= element.longitude
                let cases=element.infected
                color=`rgb(${cases},0,0)`
                new mapboxgl.Marker({
                    draggable: false,
                    color:color
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
    }
}

updateMap()