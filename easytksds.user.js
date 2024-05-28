// ==UserScript==
// @name        Easy TKSDS
// @namespace   Violentmonkey Scripts
// @match       http://10.211.110.123/tksds/TKK807/WKK80701DSP.do*
// @grant       none
// @version     1.1.1
// @downloadURL https://github.com/CIopt-Bot/easy-scripts/raw/main/easytksds.user.js
// @updateURL   https://github.com/CIopt-Bot/easy-scripts/raw/main/easytksds.user.js
// @author      -
// @description Make TKSDS System More User Friendly
// ==/UserScript==
(function() {
    'use strict';

    // Function to wait for the target element to be available
    function waitForElement(selector, callback) {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                callback(element);
            }
        }, 100); // Check every 100ms
    }

    // Initialize all required elements and add event listeners
    function initializeElements() {
        const selectElement = document.querySelector('select[name="strCdType"]');
        const electronicInput = document.querySelector('input[name="strNmElectronic"]');
        const dataInput = document.querySelector('input[name="strData01"]');
        const otherTextarea = document.querySelector('textarea[name="strOther"]');
        const otherInput = document.querySelector('input[name="strOther04"]');

        // Add event listener for strCdType select element
        if (selectElement) {
            selectElement.value = "";
            selectElement.addEventListener('change', function() {
                handleStrCdTypeChange(selectElement, electronicInput, dataInput, otherTextarea, otherInput);
            });
        }

        // Add event listener for electronic input
        if (electronicInput) {
            electronicInput.addEventListener('input', function() {
                handleElectronicInputChange(selectElement, electronicInput, dataInput, otherTextarea, otherInput);
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

        if (selectElement.value === 'lb06InBusinessTrip') {
            const valueToCopy = electronicInput.value;
            [dataInput, otherTextarea, otherInput].forEach(input => input.value = valueToCopy);
        }
    }

    // Handle input event for electronic input
    function handleElectronicInputChange(selectElement, electronicInput, dataInput, otherTextarea, otherInput) {
        if (selectElement.value === 'lb06InBusinessTrip') {
            const valueToCopy = electronicInput.value;
            [dataInput, otherTextarea, otherInput].forEach(input => input.value = valueToCopy);
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
            "18:30": ["1800"],
            "19:00": ["1800", "1830"],
            "19:30": ["1800", "1830", "1900"],
            "20:00": ["1800", "1830", "1900", "1930"],
            "20:30": ["1800", "1830", "1900", "1930", "2000"],
            "21:00": ["1800", "1830", "1900", "1930", "2000", "2030"],
            "21:30": ["1800", "1830", "1900", "1930", "2000", "2030", "2100"],
            "22:00": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130"],
            "22:30": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200"],
            "23:00": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230"],
            "23:30": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300"],
            "00:00": ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300", "2330"]
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

    // Wait for the target element and initialize the auto-time selector
    waitForElement('body > form > div:nth-child(3) > table > tbody > tr:nth-child(19) > td:nth-child(4)', function(targetElement) {
        targetElement.innerHTML += `
            <select id="auto-time-selector" style="vertical-align: middle; width:50px;">
                <option value=""></option>
                ${['18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '00:00'].map(time => `<option value="${time}">${time}</option>`).join('')}
            </select>
            <input type="text" maxlength="30" id="auto-text" style="width:130px;">
            <div id="selected-time"></div><div id="selected-value" style="margin-left: 35px;"></div>
        `;

        document.getElementById('auto-time-selector').onchange = handleAutoTimeSelectorChange;
        document.getElementById('auto-text').onkeyup = handleAutoTimeSelectorChange;
    });

    // Initialize elements on page load
    window.addEventListener('load', initializeElements);
})();
