var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("content");
  
  // Hide all content sections
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // Show the specific tab
  if (n >= 0 && n < x.length) {
    x[n].style.display = "block";
  }
  //... and fix the Previous/Next buttons:
  const Prev = document.querySelectorAll("#previous_button")
  if (n == 0 || n == (x.length)) {
    document.getElementById("previous_button").style.display = "none";
    document.getElementById("previous_button1").style.display = "none";
  } else {
    document.getElementById("previous_button").style.display = "inline";
    document.getElementById("previous_button1").style.display = "inline";
  }
  const Next = document.querySelectorAll("#Next_button")
  if (n == (x.length - 1)) {
    Next.forEach(element =>{
      element.innerHTML = "Confirm";
      element.style.backgroundColor = "hsl(243, 100%, 62%)";
      element.style.paddingLeft ="25px";
      element.style.paddingRight ="25px";
    })
  } else {
    Next.forEach(element =>{
      element.innerHTML = "Next Step";
      element.style.backgroundColor = "hsl(213, 96%, 18%)";
      element.style.paddingLeft ="18px";
      element.style.paddingRight ="18px";
    })
    document.getElementById("Next_button").innerHTML = "Next Step";
    document.getElementById("Next_button").style.backgroundColor = "hsl(213, 96%, 18%)";
    document.getElementById("Next_button").style.paddingLeft ="18px";
    document.getElementById("Next_button").style.paddingRight ="18px";
  }
  if (n == (x.length - 1)){
    const option = document.querySelector('input[name="option_1"]:checked').value;
    const option2 = document.getElementById('check');
    document.getElementById("step4-2_details2").innerHTML ="Change";
    let a = 0;
    if(option == 'option1' & option2.checked){
      document.getElementById("step4_details1").innerHTML ="Arcade (Yearly)";
      document.getElementById("step4_price").innerText = "$90/yr";
      a = 90;
    } else if(option == 'option1' & !option2.checked){
      document.getElementById("step4_details1").innerHTML ="Arcade (Monthly)";
      //document.getElementById("step4-2_details2").innerHTML ="Change";
      document.getElementById("step4_price").innerText = "$9/mo";
      a = 9;
    }
    if(option == 'option2' & option2.checked){
      document.getElementById("step4_details1").innerHTML ="Advance (Yearthly)";
      document.getElementById("step4_price").innerText = "$120/yr";
      a = 120;
    } else if(option == 'option2' & !option2.checked){
      document.getElementById("step4_details1").innerHTML ="Advance (Monthly)";
      document.getElementById("step4_price").innerText = "$12/mo";
      a =12;
    }
    if(option == 'option3' & option2.checked){
      document.getElementById("step4_details1").innerHTML ="Pro (Yearly)";
      document.getElementById("step4_price").innerText = "$150/yr";
      a =150;
    } else if(option == 'option3' & !option2.checked){
      document.getElementById("step4_details1").innerHTML ="Pro (Monthly)";
      document.getElementById("step4_price").innerText = "$15/mo";
      a = 15;
    }

    var step3 = document.getElementsByClassName('step3_input');
    var step3_4 = document.getElementsByClassName('step4-3_details');
    var step3_4_price = document.getElementsByClassName('step4-3_price')
    
    for(var i = 0; i < step3.length; i++){
      for(var x = 0; x < step3_4.length; x++){
        if(step3[i].checked){
          if(i == x){
            step3_4[x].style.display = 'block';
          }
        }
        if(!step3[i].checked)
          if(i == x){
            step3_4[x].style.display = 'none';
          }
      }
    }
    var value = [10, 20, 20];
    var value2 = [1, 2, 2];
    let sum2 = 0;
    let unit = "";
    if(option2.checked){
      step3_4_price[0].innerText = "+10/yr";
      step3_4_price[1].innerText = "+20/yr";
      step3_4_price[2].innerText = "+20/yr";
      unit = "/yr";
      for(var m = 0; m < step3.length; m++){
        if(step3[m].checked){
          sum2 += value[m];
        }
      }
    } else{
      step3_4_price[0].innerText = "+1/mo";
      step3_4_price[1].innerText = "+2/mo";
      step3_4_price[2].innerText = "+2/mo";
      unit = "/mo";
      for(var m = 0; m < step3.length; m++){
        if(step3[m].checked){
          sum2 += value2[m];
        }
      }
    }
    let total = a + sum2
    document.getElementById('total_sum').innerText = "+$" + total + unit;
  }
if (n == (x.length - 2)){
  document.querySelectorAll('.step3_container').forEach(details => {
    const step3_price = details.querySelector('.step3_price');
    const option20 = document.getElementById('check');
    if(option20.checked){
      step3_price.textContent = step3_price.getAttribute('date-yearly');
    }else{
      step3_price.textContent = step3_price.getAttribute('date-monthly');
    }
  })
}
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("content");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    // document.getElementById("regForm").submit();
    // return false;
    document.getElementById("section5").style.display = "flex";
    document.getElementById("Next_button").style.display = "none";
    document.getElementById("footerButtons").style.display = "none";
    document.getElementById("footer2").style.display = "none";
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
const inputIds = ['username', 'email', 'phone'];
function validateForm() {
  // This function deals with validation of the form fields

  let valid = true;
  //clear previous error messages
  inputIds.forEach(id=> {
    const input = document.getElementById(id);
    const errorDiv = document.getElementById(`${id}-error`);

  errorDiv.textContent = '';
  input.classList.remove('error');
    if (input.value.trim() === '') {
      input.classList.add('error');
      errorDiv.textContent = `${id.charAt(0).toUpperCase() + id.slice(1)} is required`;
      valid = false;
    }
  })
  return valid; // return the valid status
}
inputIds.forEach(id => {
  const input = document.getElementById(id);
  input.addEventListener('input', function() {
      const errorDiv = document.getElementById(`${id}-error`);
      if (this.value.trim() !== '') {
          this.classList.remove('error');
          errorDiv.textContent = '';
      }
  });
});

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("circle");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
  var i, x = document.getElementsByClassName("circle_mobile");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

document.getElementById('check').addEventListener('change', function() {
  const toggleLeft = document.querySelector('.toggle_left');
  if (this.checked) {
      toggleLeft.style.color = 'hsl(231, 11%, 63%)';
  } else {
      toggleLeft.style.color = 'hsl(213, 96%, 18%)';
  }
  const priceContainers = document.querySelectorAll('.span_details');
  
  priceContainers.forEach(details => {
    const price = details.querySelector('.step2_details2');
    const freeMonths = details.querySelector('.free-months');

    if (this.checked) {
        price.textContent = price.getAttribute('data-yearly');
        freeMonths.style.display = 'inline';
    } else {
        price.textContent = price.getAttribute('data-monthly');
        freeMonths.style.display = 'none';
    }
  });
  const border = document.querySelector('.step2_border');
  const step2 = document.querySelectorAll('.step2_label')
  step2.forEach(details2 => {
  const check_toggle = details2.querySelector('.check2')
  if (this.checked ) {
    border.style.height = '150px';
    check_toggle.style.height = 'calc(100%)';
  } else {
    border.style.height = '133px';
    check_toggle.style.height = 'calc(100%)';
  }
})
});
