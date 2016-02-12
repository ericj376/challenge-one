https://gist.github.com/fresh5447/32826da54ceb78c0491c

var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

var people = [personOne, personTwo, personThree];


  event.preventDefault();

  var $form = $(event.target).parents('form-group');


  var firstName = $('#firstName').val();
  var lastName = $('#lastDate').val();
  var phoneNumber = $('#phoneNumber').val();

	if (firstName && lastName && phoneNumber){
  		$list.append( '<tr>\
		                    <td><input type="text" name="" id="input" class="form-control" value="' + firstName + '" required="required" pattern="" title=""></td>\
		                    <td><input type="date" name="" id="input" class="form-control" value="' + lastName + '" required="required" title=""></td>\
		                    <td><input type="text" name="" id="input" class="form-control" value="' + phoneNumber + '" required="required" pattern="" title=""></td>\
		                    <td><button type="button" class="btn btn-primary deleteToDo">Done</button></td>\
	                   </tr>');

  $('#firstName').val('');
  $('#lastName').val('');
  $('#phoneNumber').val('');
}

$('#submitTodo').on('click', newTodo)
