$("#empId").focus();

function validateAndGetFormData() {
  var empIdVar = $("#empId").val();
  if (empIdVar === "") {
    alert("Employee ID Required Value");
    $("#empId").focus();
    return "";
  }

  var jsonStrObj = {
    empId: empIdVar,
  };

  return JSON.stringify(jsonStrObj);
}
function resetForm() {
  $("#empId").val("");
}

function loginEmployee() {
  var jsonStr = validateAndGetFormData();
  if (jsonStr === "") {
    return;
  }
  var query = `{ "empId": "1234" }`;
  var getReqStr = createGET_BY_KEYRequest(
    "90938095|-31949268913001335|90953108",
    "Employee",
    "Emp-Rel",
    query
  );
  console.log(getReqStr);
  jQuery.ajaxSetup({ async: false });
  var resultObj = executeCommandAtGivenBaseUrl(
    getReqStr,
    "http://api.login2explore.com:5577",
    "/api/irl"
  );
  console.log(JSON.stringify(resultObj));
  jQuery.ajaxSetup({ async: true });
  resetForm();
  emp = JSON.parse(resultObj.data).record;

  var str = `Welcome, ${emp.empName}, ${emp.empEmail}`
  alert(str);
}
