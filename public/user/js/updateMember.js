$(document).ready(function () {
    //update member information
    $("#edit_member").on("click", function (event) {
        event.preventDefault();
        let oldMemberObj = {
            fName: $("#member_fName").text(),
            lName: $("#member_lName").text(),
            email: $("#member_email").text(),
            password: $("#member_password").text()
        };
        $("#fName").html(`
            <input type="text" value="${oldMemberObj.fName}" name="new_fName" id="new_fName" class="form-control">
        `);
        $("#lName").html(`
            <input type="text" value="${oldMemberObj.lName}" name="new_lName" id="new_lName" class="form-control">
        `);
        $("#email").html(`
            <input type="text" value="${oldMemberObj.email}" name="new_email" id="new_email" class="form-control">
        `);
        $("#save_btn_placeholder").html(
            // eslint-disable-next-line quotes
            `<button class="btn btn-dark" id="member_save">Save</button>
            <button class="btn btn-danger" id="cancel">Cancel</button>`
        );
    });

    $(document).on("click", "#member_save", function (event) {
        event.preventDefault();
        let editedMemberObj = {
            fName: $("#new_fName")
                .val()
                .trim(),
            lName: $("#new_lName")
                .val()
                .trim(),
            email: $("#new_email")
                .val()
                .trim(),
            password: $("#new_password")
                .val()
                .trim()
        };
        $.ajax({
            url: "/memberships/" + $("#user_id").text(),
            type: "PUT",
            data: editedMemberObj
        }).then(() => location.reload());
    });
});