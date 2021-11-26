const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "396fb18f9987c9ba7e9e4e3d880d9f70";


//자기 위치찾기
function onGeoOk(position) {
    const lat = position.coords.latitude;//위도
    const lon = position.coords.longitude;//경도
    console.log(lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //처음 복사한 url이 화씨온도이기에 섭씨 온도를 원하는경우 끝에 unit=maetric을 추가
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}' / ${data.main.temp}'c`;
        });
    //fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. 반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject합니다.
    //promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것이다,
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 자기위치찾기 끝

//https://openweathermap.org/