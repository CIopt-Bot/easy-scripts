// ==UserScript==
// @name        Easy TKSDS
// @namespace   Violentmonkey Scripts
// @match       http://10.211.110.123/tksds/TKK807/WKK80701DSP.do*
// @grant       none
// @version     1.0.1
// @downloadURL https://github.com/CIopt-Bot/easy-scripts/raw/easytksds.user.js
// @author      -
// @description Make TKSDS System More User Friendly
// ==/UserScript==
(function() {
    'use strict';

    window.addEventListener('load', function() {
        var selectElement = document.getElementsByName('strCdType')[0]; 
        if (selectElement) {
            selectElement.value = ""; 
        }
        var selector = 'body > form > div:nth-child(3) > table > tbody > tr:nth-child(19) > td:nth-child(4)';
        var targetElement = document.querySelector(selector);

        // 检查目标元素是否存在
        if (targetElement) {
            // 您的JavaScript代码
            targetElement.innerHTML += '<select id="auto-time-selector" style="vertical-align: middle; width:50px;"><option value=""> </option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option><option value="00:00">00:00</option></select>';
            targetElement.innerHTML += '<input type="text" maxlength="30" value="" id="auto-text" style="width:130px;">'; // 示例：添加文本输入框
            targetElement.innerHTML += '<div id="selected-time"></div><div id="selected-value" style="margin-left: 35px;"></div>'; // 示例：添加用于显示选中值的容器

            // 添加事件监听器的代码
            document.getElementById('auto-time-selector').onchange = function() {
                document.getElementById('selected-time').innerHTML = this.value;
                appendData();
            };
            document.getElementById('auto-text').onkeyup = function() {
                document.getElementById('selected-value').innerHTML = this.value;
                appendData();
            };

        }
    });
    function clearOptionsAndValues(fromTime) {
        var times = ["1800", "1830", "1900", "1930", "2000", "2030", "2100", "2130", "2200", "2230", "2300", "2330"];
        var startIndex = times.indexOf(fromTime);
        if (startIndex !== -1) {
            times.slice(startIndex).forEach(function(time) {
                var check = document.getElementsByName('check' + time)[0];
                var str = document.getElementById('str' + time);
                if (check) check.value = "--";
                if (str) str.value = "";
            });
        }
    }
    function appendData(){
      let selectedValue = document.getElementById('auto-time-selector').value;
      let selectedText = document.getElementById('auto-text').value;
      // 根据选中的时间执行相应逻辑
      if (selectedValue === "" || selectedValue.isEmpty || selectedValue === null || selectedValue === undefined || selectedValue.length <= 1) {
            // 未选中时间的逻辑
            clearOptionsAndValues("1800");
      } else if (selectedValue === "18:30") {
          // 选中18:30的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          clearOptionsAndValues("1830");
      } else if (selectedValue === "19:00") {
          // 选中19:00的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          clearOptionsAndValues("1900");
      } else if (selectedValue === "19:30") {
          // 选中19:30的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          clearOptionsAndValues("1930");
      } else if (selectedValue === "20:00") {
          // 选中20:00的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          clearOptionsAndValues("2000");
      } else if (selectedValue === "20:30") {
          // 选中20:30的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementsByName('check2000')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          document.getElementById('str2000').value = selectedText;
          clearOptionsAndValues("2030");
      } else if (selectedValue === "21:00") {
          // 选中21:00的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementsByName('check2000')[0].value = "lbWorking";
          document.getElementsByName('check2030')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          document.getElementById('str2000').value = selectedText;
          document.getElementById('str2030').value = selectedText;
          clearOptionsAndValues("2100");
      } else if (selectedValue === "21:30") {
          // 选中21:30的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementsByName('check2000')[0].value = "lbWorking";
          document.getElementsByName('check2030')[0].value = "lbWorking";
          document.getElementsByName('check2100')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          document.getElementById('str2000').value = selectedText;
          document.getElementById('str2030').value = selectedText;
          document.getElementById('str2100').value = selectedText;
          clearOptionsAndValues("2130");
      } else if (selectedValue === "22:00") {
          // 选中22:00的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementsByName('check2000')[0].value = "lbWorking";
          document.getElementsByName('check2030')[0].value = "lbWorking";
          document.getElementsByName('check2100')[0].value = "lbWorking";
          document.getElementsByName('check2130')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          document.getElementById('str2000').value = selectedText;
          document.getElementById('str2030').value = selectedText;
          document.getElementById('str2100').value = selectedText;
          document.getElementById('str2130').value = selectedText;
          clearOptionsAndValues("2200");
      } else if (selectedValue === "22:30") {
          // 选中22:30的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementsByName('check2000')[0].value = "lbWorking";
          document.getElementsByName('check2030')[0].value = "lbWorking";
          document.getElementsByName('check2100')[0].value = "lbWorking";
          document.getElementsByName('check2130')[0].value = "lbWorking";
          document.getElementsByName('check2200')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          document.getElementById('str2000').value = selectedText;
          document.getElementById('str2030').value = selectedText;
          document.getElementById('str2100').value = selectedText;
          document.getElementById('str2130').value = selectedText;
          document.getElementById('str2200').value = selectedText;
          clearOptionsAndValues("2230");
      } else if (selectedValue === "23:00") {
          // 选中23:00的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementsByName('check2000')[0].value = "lbWorking";
          document.getElementsByName('check2030')[0].value = "lbWorking";
          document.getElementsByName('check2100')[0].value = "lbWorking";
          document.getElementsByName('check2130')[0].value = "lbWorking";
          document.getElementsByName('check2200')[0].value = "lbWorking";
          document.getElementsByName('check2230')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          document.getElementById('str2000').value = selectedText;
          document.getElementById('str2030').value = selectedText;
          document.getElementById('str2100').value = selectedText;
          document.getElementById('str2130').value = selectedText;
          document.getElementById('str2200').value = selectedText;
          document.getElementById('str2230').value = selectedText;
          clearOptionsAndValues("2300");
      } else if (selectedValue === "23:30") {
          // 选中23:30的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementsByName('check2000')[0].value = "lbWorking";
          document.getElementsByName('check2030')[0].value = "lbWorking";
          document.getElementsByName('check2100')[0].value = "lbWorking";
          document.getElementsByName('check2130')[0].value = "lbWorking";
          document.getElementsByName('check2200')[0].value = "lbWorking";
          document.getElementsByName('check2230')[0].value = "lbWorking";
          document.getElementsByName('check2300')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          document.getElementById('str2000').value = selectedText;
          document.getElementById('str2030').value = selectedText;
          document.getElementById('str2100').value = selectedText;
          document.getElementById('str2130').value = selectedText;
          document.getElementById('str2200').value = selectedText;
          document.getElementById('str2230').value = selectedText;
          document.getElementById('str2300').value = selectedText;
          clearOptionsAndValues("2330");
      } else if (selectedValue === "00:00") {
          // 选中00:00的逻辑
          document.getElementsByName('check1800')[0].value = "lbWorking";
          document.getElementsByName('check1830')[0].value = "lbWorking";
          document.getElementsByName('check1900')[0].value = "lbWorking";
          document.getElementsByName('check1930')[0].value = "lbWorking";
          document.getElementsByName('check2000')[0].value = "lbWorking";
          document.getElementsByName('check2030')[0].value = "lbWorking";
          document.getElementsByName('check2100')[0].value = "lbWorking";
          document.getElementsByName('check2130')[0].value = "lbWorking";
          document.getElementsByName('check2200')[0].value = "lbWorking";
          document.getElementsByName('check2230')[0].value = "lbWorking";
          document.getElementsByName('check2300')[0].value = "lbWorking";
          document.getElementsByName('check2330')[0].value = "lbWorking";
          document.getElementById('str1800').value = selectedText;
          document.getElementById('str1830').value = selectedText;
          document.getElementById('str1900').value = selectedText;
          document.getElementById('str1930').value = selectedText;
          document.getElementById('str2000').value = selectedText;
          document.getElementById('str2030').value = selectedText;
          document.getElementById('str2100').value = selectedText;
          document.getElementById('str2130').value = selectedText;
          document.getElementById('str2200').value = selectedText;
          document.getElementById('str2230').value = selectedText;
          document.getElementById('str2300').value = selectedText;
          document.getElementById('str2330').value = selectedText;
      }
    }
})();
