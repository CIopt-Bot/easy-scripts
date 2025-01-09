// ==UserScript==
// @name        Easy TKSDS
// @namespace   easy-tksds
// @match       http://10.211.110.123/tksds/*
// @match       http://jkorscp.co.kr/tkscp/*
// @grant       none
// @version     1.4.1
// @downloadURL https://github.com/CIopt-Bot/easy-scripts/raw/main/easytksds.user.js
// @updateURL   https://github.com/CIopt-Bot/easy-scripts/raw/main/easytksds.user.js
// @author      CIopt-Bot
// @description Make TKSDS System More User Friendly
// ==/UserScript==
(function () {
    'use strict';

    document.head.appendChild(Object.assign(document.createElement('meta'), {
        name: 'viewport',
        content: 'width=device-width'
    }));

    const SVG = `<svg width="300" height="220" viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><mask id="satori_om-id"><rect x="0" y="0" width="300" height="220" fill="#fff"></rect></mask><rect x="0" y="0" width="300" height="220" fill="#cccccc"></rect><clipPath id="satori_bct-id-0"><path d="M89.6 106.9L89.6 106.9L84.6 106.9Q84.4 105.9 84.0 105.2Q83.6 104.4 82.9 103.9Q82.3 103.3 81.4 103.0Q80.6 102.8 79.6 102.8L79.6 102.8Q77.8 102.8 76.4 103.7Q75.1 104.5 74.3 106.2Q73.6 107.9 73.6 110.4L73.6 110.4Q73.6 112.9 74.3 114.5Q75.1 116.2 76.4 117.1Q77.8 118.0 79.5 118.0L79.5 118.0Q80.5 118.0 81.4 117.7Q82.2 117.4 82.9 116.9Q83.5 116.4 84.0 115.7Q84.4 115.0 84.6 114.0L84.6 114.0L89.6 114.1Q89.4 115.7 88.6 117.2Q87.8 118.6 86.5 119.8Q85.3 121.0 83.5 121.6Q81.7 122.3 79.5 122.3L79.5 122.3Q76.3 122.3 73.9 120.9Q71.4 119.5 70.0 116.8Q68.6 114.2 68.6 110.4L68.6 110.4Q68.6 106.6 70.0 103.9Q71.5 101.2 73.9 99.8Q76.4 98.4 79.5 98.4L79.5 98.4Q81.5 98.4 83.2 99.0Q84.9 99.5 86.3 100.6Q87.6 101.7 88.5 103.3Q89.3 104.9 89.6 106.9ZM91 98.7L95.8 98.7L95.8 122L91 122L91 98.7ZM102.5 122L97.7 122L97.7 104.5L102.5 104.5L102.5 122ZM100.1 102.3L100.1 102.3Q99.1 102.3 98.3 101.6Q97.5 100.9 97.5 99.8L97.5 99.8Q97.5 98.8 98.3 98.1Q99.1 97.4 100.1 97.4L100.1 97.4Q101.2 97.4 102.0 98.1Q102.8 98.8 102.8 99.8L102.8 99.8Q102.8 100.9 102.0 101.6Q101.2 102.3 100.1 102.3ZM112.3 122.3L112.3 122.3Q109.6 122.3 107.7 121.2Q105.8 120.1 104.7 118.0Q103.7 116.0 103.7 113.3L103.7 113.3Q103.7 110.7 104.7 108.6Q105.8 106.6 107.7 105.5Q109.6 104.3 112.3 104.3L112.3 104.3Q114.6 104.3 116.3 105.1Q118.0 106.0 119.0 107.5Q120.0 109.0 120.1 111L120.1 111L115.5 111Q115.3 109.7 114.5 108.9Q113.7 108.1 112.4 108.1L112.4 108.1Q111.2 108.1 110.4 108.7Q109.6 109.3 109.1 110.5Q108.6 111.6 108.6 113.3L108.6 113.3Q108.6 114.9 109.1 116.1Q109.5 117.3 110.4 117.9Q111.2 118.5 112.4 118.5L112.4 118.5Q113.2 118.5 113.8 118.2Q114.5 117.8 114.9 117.2Q115.4 116.5 115.5 115.6L115.5 115.6L120.1 115.6Q120.0 117.6 119.0 119.1Q118.0 120.6 116.3 121.5Q114.6 122.3 112.3 122.3ZM128.8 113.3L125.6 117.0L125.6 111.2L126.3 111.2L131.9 104.5L137.5 104.5L129.9 113.3L128.8 113.3ZM126.0 122L121.2 122L121.2 98.7L126.0 98.7L126.0 122ZM137.8 122L132.1 122L127.0 114.4L130.2 111.0L137.8 122Z M142.0 104.5L152.5 104.5L152.5 108.2L142.0 108.2L142.0 104.5ZM144.4 117.3L144.4 100.4L149.2 100.4L149.2 116.6Q149.2 117.3 149.4 117.7Q149.6 118.0 150.0 118.2Q150.4 118.3 150.9 118.3L150.9 118.3Q151.2 118.3 151.6 118.3Q151.9 118.2 152.1 118.2L152.1 118.2L152.8 121.8Q152.5 121.9 151.8 122.1Q151.2 122.2 150.2 122.2L150.2 122.2Q148.5 122.3 147.2 121.8Q145.8 121.2 145.1 120.1Q144.4 119.0 144.4 117.3L144.4 117.3ZM161.4 122.3L161.4 122.3Q158.7 122.3 156.8 121.2Q154.9 120.1 153.8 118.1Q152.8 116.0 152.8 113.3L152.8 113.3Q152.8 110.6 153.8 108.6Q154.9 106.6 156.8 105.4Q158.7 104.3 161.4 104.3L161.4 104.3Q164.0 104.3 165.9 105.4Q167.9 106.6 168.9 108.6Q170.0 110.6 170.0 113.3L170.0 113.3Q170.0 116.0 168.9 118.1Q167.9 120.1 165.9 121.2Q164.0 122.3 161.4 122.3ZM161.4 118.6L161.4 118.6Q162.6 118.6 163.4 117.9Q164.2 117.2 164.6 116.0Q165.0 114.8 165.0 113.3L165.0 113.3Q165.0 111.8 164.6 110.6Q164.2 109.4 163.4 108.7Q162.6 108.0 161.4 108.0L161.4 108.0Q160.2 108.0 159.4 108.7Q158.5 109.4 158.1 110.6Q157.7 111.8 157.7 113.3L157.7 113.3Q157.7 114.8 158.1 116.0Q158.5 117.2 159.4 117.9Q160.2 118.6 161.4 118.6Z M181.7 122L176.8 122L176.8 98.7L186.0 98.7Q188.6 98.7 190.5 99.7Q192.4 100.7 193.4 102.5Q194.3 104.3 194.3 106.6L194.3 106.6Q194.3 108.9 193.3 110.7Q192.3 112.5 190.4 113.5Q188.6 114.5 185.9 114.5L185.9 114.5L180.0 114.5L180.0 110.5L185.1 110.5Q186.5 110.5 187.4 110.0Q188.4 109.5 188.8 108.6Q189.3 107.8 189.3 106.6L189.3 106.6Q189.3 105.5 188.8 104.6Q188.4 103.7 187.4 103.2Q186.5 102.8 185.1 102.8L185.1 102.8L181.7 102.8L181.7 122ZM195.5 98.7L200.3 98.7L200.3 122L195.5 122L195.5 98.7ZM207.1 122.3L207.1 122.3Q205.5 122.3 204.2 121.7Q202.9 121.2 202.1 120.0Q201.3 118.9 201.3 117.1L201.3 117.1Q201.3 115.7 201.9 114.7Q202.4 113.7 203.3 113.1Q204.3 112.5 205.4 112.2Q206.6 111.9 207.9 111.8L207.9 111.8Q209.4 111.6 210.4 111.4Q211.3 111.3 211.7 111.0Q212.1 110.7 212.1 110.2L212.1 110.2L212.1 110.1Q212.1 109.0 211.4 108.4Q210.8 107.9 209.5 107.9L209.5 107.9Q208.2 107.9 207.5 108.4Q206.7 109 206.4 109.9L206.4 109.9L202.0 109.5Q202.3 107.9 203.3 106.7Q204.3 105.6 205.9 104.9Q207.5 104.3 209.6 104.3L209.6 104.3Q211.0 104.3 212.3 104.7Q213.7 105 214.7 105.7Q215.8 106.4 216.4 107.6Q217.0 108.7 217.0 110.2L217.0 110.2L217.0 122L212.4 122L212.4 119.6L212.2 119.6Q211.8 120.4 211.1 121.0Q210.4 121.6 209.4 122.0Q208.4 122.3 207.1 122.3ZM208.5 119.0L208.5 119.0Q209.6 119.0 210.4 118.6Q211.2 118.1 211.7 117.4Q212.2 116.7 212.2 115.8L212.2 115.8L212.2 113.9Q211.9 114.1 211.5 114.2Q211.1 114.3 210.7 114.4Q210.2 114.5 209.7 114.6Q209.2 114.6 208.8 114.7L208.8 114.7Q207.9 114.8 207.3 115.1Q206.7 115.4 206.3 115.8Q206.0 116.3 206.0 117.0L206.0 117.0Q206.0 118.0 206.7 118.5Q207.4 119.0 208.5 119.0ZM221.1 128.5L221.1 128.5Q220.2 128.5 219.4 128.4Q218.6 128.3 218.0 128.0L218.0 128.0L219.1 124.4Q220.0 124.7 220.7 124.7Q221.4 124.7 221.9 124.4Q222.4 124.1 222.7 123.2L222.7 123.2L223.0 122.5L216.7 104.5L221.8 104.5L225.4 117.4L225.6 117.4L229.2 104.5L234.4 104.5L227.6 123.9Q227.1 125.3 226.3 126.3Q225.4 127.4 224.1 128.0Q222.9 128.5 221.1 128.5Z "></path></clipPath><mask id="satori_om-id-0"><rect x="67" y="91" width="167" height="38" fill="#fff"></rect></mask><rect x="67" y="91" width="167" height="38" fill="#9c9c9c" clip-path="url(#satori_bct-id-0)"></rect></svg>`;
    const objects = document.querySelectorAll('object[data*=".mp4"], object[data*=".webm"], object[data*=".ogg"]');

    objects.forEach(obj => {
        const videoUrl = obj.getAttribute('data');
        const width = obj.getAttribute('width') || '640';
        const height = obj.getAttribute('height') || '360';
        const div = document.createElement('div');
        div.innerHTML = SVG;
        div.style.display = "contents";
        const svgElement = div.firstChild;
        svgElement.style.cursor = 'pointer';
        svgElement.addEventListener('click', () => {
            const videoElement = document.createElement('video');
            videoElement.src = videoUrl;
            videoElement.controls = true;
            videoElement.style.width = width + 'px';
            videoElement.style.height = height + 'px';
            div.replaceWith(videoElement);
            videoElement.play();
        });
        obj.parentNode.replaceChild(div, obj);
    });

    function waitForElement(selector, callback, timeout = 5000) {
        const intervalTime = 100;
        let elapsedTime = 0;
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                callback(element);
            } else if (elapsedTime >= timeout) {
                clearInterval(interval);
            }
            elapsedTime += intervalTime;
        }, intervalTime);
    }

    function initializeElements() {

        const selectElement = document.querySelector('select[name="strCdType"]');
        if (!selectElement) {
            return;
        }

        const electronicInput = document.querySelector('input[name="strNmElectronic"]');
        const dataInput = document.querySelector('input[name="strData01"]');
        const otherTextarea = document.querySelector('textarea[name="strOther"]');
        const otherInput = document.querySelector('input[name="strOther04"]');
        var targetTd = document.querySelector('body > form > div:nth-child(3) > table > tbody > tr:nth-child(12) > td:nth-child(4)');

        // Add event listener for strCdType select element
        if (selectElement) {
            selectElement.value = "";
            selectElement.addEventListener('change', function () {
                handleStrCdTypeChange(selectElement, electronicInput, dataInput, otherTextarea, otherInput);
            });
        }

        // Add event listener for electronic input
        if (electronicInput) {
            electronicInput.addEventListener('input', function () {
                handleElectronicInputChange(selectElement, electronicInput, dataInput, otherTextarea, otherInput);
            });
        }

        if (otherTextarea) {
            // 创建用于显示字符计数的元素
            var charCountDisplay = document.createElement('div');
            charCountDisplay.style.marginTop = '5px';
            charCountDisplay.style.fontWeight = 'bold';
            charCountDisplay.style.fontSize = 'large';
            charCountDisplay.style.color = '#ff6666';
            charCountDisplay.textContent = '0/50';
            charCountDisplay.style.textAlign = 'end';
            charCountDisplay.style.position = 'absolute';
            charCountDisplay.style.top = '512px';
            charCountDisplay.style.left = '1195px';
            charCountDisplay.style.userSelect = 'none';
            targetTd.appendChild(charCountDisplay);

            otherTextarea.addEventListener('input', function() {
                var inputLength = otherTextarea.value.length;
                if (inputLength < 50 || inputLength > 0 ){
                  charCountDisplay.style.color = '#ff6666';
                  charCountDisplay.style.fontWeight = 'none';
                  charCountDisplay.style.fontSize = '10px';
                  charCountDisplay.style.top = '515px';
                  charCountDisplay.style.left = '1210px';
                } else {
                  charCountDisplay.style.color = '#c0c0c0';
                }
                charCountDisplay.textContent = inputLength + '/50';
            });

        }
    }

    // Handle change event for strCdType select element
    function handleStrCdTypeChange(selectElement, electronicInput, dataInput, otherTextarea, otherInput) {
        const selectedOption = selectElement.options[selectElement.selectedIndex].text;
        let pElement = selectElement.parentElement.querySelector('p[data-tampermonkey="true"]');

        if (!pElement) {
            pElement = document.createElement('p');
            pElement.style.color = 'red';
            pElement.style.display = 'inline';
            pElement.style.fontWeight = 'bold';
            pElement.style.fontSize = 'large';
            pElement.setAttribute('data-tampermonkey', 'true');
            selectElement.parentElement.appendChild(pElement);
        }
        pElement.textContent = selectedOption;

        if (selectElement.value === 'lb06InBusinessTrip' || selectElement.value === 'lb26OverTime') {
            const valueToCopy = electronicInput.value;
            [dataInput, otherTextarea, otherInput].forEach(input => {
                input.value = valueToCopy;
                const event = new Event('input', { bubbles: true });
                input.dispatchEvent(event);
            });
            document.getElementById('strDate01').value = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        }
        if (selectElement.value === 'lb26OverTime') {
            document.getElementById('auto-time-selector').style.display = "inline";
            document.getElementById('auto-text').style.display = "inline";
        }
    }

    // Handle input event for electronic input
    function handleElectronicInputChange(selectElement, electronicInput, dataInput, otherTextarea, otherInput) {
        if (selectElement.value === 'lb06InBusinessTrip' || selectElement.value === 'lb26OverTime') {
            const valueToCopy = electronicInput.value;
            [dataInput, otherTextarea, otherInput].forEach(input => {
                input.value = valueToCopy;
                const event = new Event('input', { bubbles: true });
                input.dispatchEvent(event);
            });
        }
    }

    // Handle auto-time selector change and text input events
    function handleAutoTimeSelectorChange() {
        const selectedValue = document.getElementById('auto-time-selector').value;
        const selectedText = document.getElementById('auto-text').value;

        document.getElementById('selected-time').innerHTML = selectedValue;
        document.getElementById('selected-value').innerHTML = selectedText;

        const times = ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300", "2330"];
        const clearOptionsAndValues = fromTime => {
            const startIndex = times.indexOf(fromTime);
            if (startIndex !== -1) {
                times.slice(startIndex).forEach(time => {
                    const check = document.getElementsByName('check' + time)[0];
                    const str = document.getElementById('str' + time);
                    if (check) check.value = "--";
                    if (str) str.value = "";
                });
            }
        };

        if (!selectedValue) {
            clearOptionsAndValues("1800");
            return;
        }

        const timeMap = {
            "18:00": ["1800"],
            "18:30": ["1800", "1830"],
            "19:00": ["1800", "1830", "1900"],
            "19:30": ["1800", "1830", "1900", "1930"],
            "20:00": ["1800", "1830", "1900", "1930", "2000"],
            "20:30": ["1800", "1830", "1900", "1930", "2000", "2030"],
            "21:00": ["1800", "1830", "1900", "1930", "2000", "2030", "2100"],
            "21:30": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130"],
            "22:00": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200"],
            "22:30": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230"],
            "23:00": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300"],
            "23:30": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300", "2330"]
        };

        const selectedTimes = timeMap[selectedValue] || [];
        selectedTimes.forEach(time => {
            const check = document.getElementsByName('check' + time)[0];
            const str = document.getElementById('str' + time);
            if (check) check.value = "lbWorking";
            if (str) str.value = selectedText;
        });

        if (selectedTimes.length > 0) {
            clearOptionsAndValues(times[times.indexOf(selectedTimes[selectedTimes.length - 1]) + 1]);
        }
    }

    if (location.href.includes("WKK80701DSP")) {
        // Wait for the target element and initialize the auto-time selector
        console.log("Initializing on WKK80701DSP page...");
        waitForElement('body > form > div:nth-child(3) > table > tbody > tr:nth-child(19) > td:nth-child(4)',
            function (targetElement) {
                console.log("Target element found:", targetElement);
                targetElement.innerHTML += `<select id="auto-time-selector" style="vertical-align:middle;width:50px"><option value=""></option>${['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'].map(time => `<option value="${time}">${time}</option>`).join('')}</select> <input id="auto-text" maxlength="30" style="width:130px"><div id="selected-time" style="font-weight:700;color:red;font-size:larger"></div><div id="selected-value" style="margin-left:35px;font-weight:700;color:red;font-size:larger;padding-left:1rem"></div>`;
                document.getElementById('auto-time-selector').style.display = "none";
                document.getElementById('auto-text').style.display = "none";
                document.getElementById('auto-time-selector').onchange = handleAutoTimeSelectorChange;
                document.getElementById('auto-text').onkeyup = handleAutoTimeSelectorChange;
                initializeElements();
            }
        );
    }

    if (location.href.includes("PKK40701BL") || location.href.includes("PKK40801BL")) {
        document.querySelector('body > form > div:nth-child(3) > div.sear > table > tbody > tr > td:nth-child(8) > input:nth-child(1)').click();
    }

})();
