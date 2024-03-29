function getIpInfo() {
    fetch(`https://restapi.amap.com/v3/ip?key=${gaud_map_key}`).then(res => res.json()).then(data => {
        fetch(`https://devapi.qweather.com/v7/weather/now?location=${data.rectangle.split(";")[0]}&key=${qweather_key}`).then(res2 => res2.json()).then(data2 => {
            if (document.getElementById("hexo_electric_clock")) {
                var res_text1 = data
                    , res_text2 = data2
                    , clock_box = document.getElementById("hexo_electric_clock");
                let currentColor = "#000";
                switch (res_text2.now.icon) {
                    case "100":
                        currentColor = "#fdcc45";
                        break;
                    case "101":
                        currentColor = "#fe6976";
                        break;
                    case "102":
                    case "103":
                        currentColor = "#fe7f5b";
                        break;
                    case "104":
                    case "150":
                    case "151":
                    case "152":
                    case "153":
                    case "154":
                        currentColor = "#2152d1";
                        break;
                    case "300":
                    case "301":
                        currentColor = "#49b1f5";
                        break;
                    case "302":
                    case "303":
                    case "304":
                        currentColor = "#fdcc46";
                        break;
                    case "305":
                    case "306":
                    case "307":
                    case "308":
                    case "309":
                    case "310":
                    case "311":
                    case "312":
                    case "313":
                    case "314":
                    case "315":
                    case "316":
                    case "317":
                    case "318":
                    case "350":
                    case "351":
                    case "399":
                        currentColor = "#49b1f5";
                        break;
                    case "400":
                    case "401":
                    case "402":
                    case "403":
                    case "404":
                    case "405":
                    case "406":
                    case "407":
                    case "408":
                    case "409":
                    case "410":
                    case "456":
                    case "457":
                    case "499":
                        currentColor = "#a3c2dc";
                        break;
                    case "500":
                    case "501":
                    case "502":
                    case "503":
                    case "504":
                    case "507":
                    case "508":
                    case "509":
                    case "510":
                    case "511":
                    case "512":
                    case "513":
                    case "514":
                    case "515":
                        currentColor = "#97acba";
                        break;
                    case "800":
                    case "801":
                    case "802":
                    case "803":
                    case "804":
                    case "805":
                    case "806":
                    case "807":
                        currentColor = "#2152d1";
                        break;
                    case "900":
                        currentColor = "red";
                        break;
                    case "901":
                        currentColor = "#179fff;";
                        break;
                    case "999":
                        currentColor = "red"
                }
                clock_box_html = `\n            <div class="clock-row">\n              <span id="card-clock-clockdate" class="card-clock-clockdate"></span>\n              <span class="card-clock-weather"><i class="qi-${res_text2.now.icon}-fill" style="color: ${currentColor}"></i> ${res_text2.now.text} <span>${res_text2.now.temp}</span> ℃</span>\n              <span class="card-clock-humidity">💧 ${res_text2.now.humidity}%</span>\n            </div>\n            <div class="clock-row">\n              <span id="card-clock-time" class="card-clock-time"></span>\n            </div>\n            <div class="clock-row">\n              <span class="card-clock-windDir"> <i class="qi-gale"></i> ${res_text2.now.windDir}</span>\n              <span class="card-clock-location">${res_text1.city}</span>\n              <span id="card-clock-dackorlight" class="card-clock-dackorlight"></span>\n            </div>\n            `;
                function updateTime() {
                    var cd = new Date, card_clock_time = zeroPadding(cd.getHours(), 2) + ":" + zeroPadding(cd.getMinutes(), 2) + ":" + zeroPadding(cd.getSeconds(), 2), card_clock_date = zeroPadding(cd.getFullYear(), 4) + "-" + zeroPadding(cd.getMonth() + 1, 2) + "-" + zeroPadding(cd.getDate(), 2) + " ", card_clock_dackorlight = cd.getHours(), card_clock_dackorlight_str;
                    if (card_clock_dackorlight > 12 ? (card_clock_dackorlight -= 12,
                        card_clock_dackorlight_str = " P M") : card_clock_dackorlight_str = " A M",
                        document.getElementById("card-clock-time")) {
                        var card_clock_time_dom = document.getElementById("card-clock-time")
                            , card_clock_date_dom = document.getElementById("card-clock-clockdate")
                            , card_clock_dackorlight_dom = document.getElementById("card-clock-dackorlight");
                        card_clock_time_dom.innerHTML = card_clock_time,
                            card_clock_date_dom.innerHTML = card_clock_date,
                            card_clock_dackorlight_dom.innerHTML = card_clock_dackorlight_str
                    }
                }
                function zeroPadding(num, digit) {
                    for (var zero = "", i = 0; i < digit; i++)
                        zero += "0";
                    return (zero + num).slice(-digit)
                }
                document.getElementById("card-clock-loading").innerHTML = "",
                    clock_box.innerHTML = clock_box_html;
                updateTime()
            }
        }
        )
    }
    )
}
getIpInfo();
