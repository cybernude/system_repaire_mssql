$(document).ready(function(){
    var type_txt;
    if(permission == "1"){
        $(".table").DataTable({
            responsive: true,
            "order": [[ 0, "asc" ]],
            "columnDefs": [
                { "targets": [1,2,7], "orderable": false }
            ]
        });
    }else{
        $(".table").DataTable({
            responsive: true,
            "order": [[ 0, "asc" ]],
            "columnDefs": [
                { "targets": [1], "orderable": false }
            ]
        });
    }
  

    if(msg){

        if(status == true){
            type_txt = "success";
        }else{
            type_txt = "error";
        }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
    

      Toast.fire({
        type: type_txt,
        title: msg
      })

    }
})

// function check_all(s){
//     var checkboxes = document.getElementsByName("ch[]");
//     for(var i=0, n=checkboxes.length;i<n;i++) {
//         checkboxes[i].checked = s.checked;
//     }
// }


$("#checkall").on("click", function(){
    if($(this).is(':checked')){
        $("input[name='ch[]']").prop("checked", true);
    }else{
        $("input[name='ch[]']").prop("checked", false);
    }
   
})  

$("input[type='checkbox']").on("click", function(){
    if($(this).is(':checked')){
        $(".btn-delete-all").prop("disabled", false);
    }else{
        $(".btn-delete-all").prop("disabled", true);
    }
})

$('#modalDelete').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var user_id = button.data('user-id')
    var username = button.data('username')
    var profile = button.data('profile')
    var modal = $(this)
    modal.find('.modal-body span').text("Are you sure you want to delete "+username+"?")

    $("#modalDelete .btn-continue").off();
    $("#modalDelete .btn-continue").on("click", function(){
		var url= "apps/users/do_users.php?action=delete&user_id="+user_id+"&profile="+profile;
		alert(url);
        window.location.href=url;
    })
  })

$("#modalDeleteAll .btn-continue").off();
$("#modalDeleteAll .btn-continue").on("click", function(){
    $("#frm").submit();
})