var value = 0;
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
});

function captureValue() {
  value = document.getElementById("timeBox").value;
  alert(value);
}
