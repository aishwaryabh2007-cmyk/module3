$(document).ready(function () {


    // ==================================================
    // LOCAL STORAGE KEY
    // ==================================================

    const storageKey = "studentRegistrations";


    // ==================================================
    // LOAD STUDENTS WHEN PAGE OPENS
    // ==================================================

    displayStudents();


    // ==================================================
    // ADDRESS CHARACTER COUNTER
    // ==================================================

    $("#address").on("input", function () {

        let length = $(this).val().length;

        $("#charCount").text(length);

    });


    // ==================================================
    // PHONE - ONLY NUMBERS
    // ==================================================

    $("#phone").on("input", function () {

        $(this).val(
            $(this).val().replace(/[^0-9]/g, "")
        );

    });


    // ==================================================
    // PINCODE - ONLY NUMBERS
    // ==================================================

    $("#pincode").on("input", function () {

        $(this).val(
            $(this).val().replace(/[^0-9]/g, "")
        );

    });


    // ==================================================
    // FORM SUBMIT
    // ==================================================

    $("#studentForm").submit(function (event) {

        event.preventDefault();


        // ----------------------------------------------
        // CLEAR OLD ERRORS
        // ----------------------------------------------

        $(".error-message").text("");


        // ----------------------------------------------
        // GET VALUES
        // ----------------------------------------------

        let studentId =
            $("#studentId").val().trim();

        let firstName =
            $("#firstName").val().trim();

        let lastName =
            $("#lastName").val().trim();

        let dob =
            $("#dob").val();

        let gender =
            $("input[name='gender']:checked").val();

        let email =
            $("#email").val().trim();

        let phone =
            $("#phone").val().trim();

        let course =
            $("#course").val();

        let department =
            $("#department").val();

        let year =
            $("#year").val();

        let address =
            $("#address").val().trim();

        let city =
            $("#city").val().trim();

        let state =
            $("#state").val();

        let pincode =
            $("#pincode").val().trim();

        let password =
            $("#password").val();

        let confirmPassword =
            $("#confirmPassword").val();

        let terms =
            $("#terms").is(":checked");


        // ----------------------------------------------
        // VALIDATION
        // ----------------------------------------------

        let valid = true;


        let namePattern =
            /^[A-Za-z ]+$/;


        // ==============================================
        // STUDENT ID
        // ==============================================

        if (studentId === "") {

            $("#studentIdError")
                .text("Please enter student ID.");

            valid = false;

        }


        // ==============================================
        // CHECK DUPLICATE STUDENT ID
        // ==============================================

        let students =
            JSON.parse(
                localStorage.getItem(storageKey)
            ) || [];


        let duplicateStudent =
            students.some(function (student) {

                return student.studentId.toLowerCase()
                    === studentId.toLowerCase();

            });


        if (duplicateStudent) {

            $("#studentIdError")
                .text("This Student ID is already registered.");

            valid = false;

        }


        // ==============================================
        // FIRST NAME
        // ==============================================

        if (firstName === "") {

            $("#firstNameError")
                .text("Please enter first name.");

            valid = false;

        }
        else if (!namePattern.test(firstName)) {

            $("#firstNameError")
                .text("Name should contain only letters.");

            valid = false;

        }


        // ==============================================
        // LAST NAME
        // ==============================================

        if (lastName === "") {

            $("#lastNameError")
                .text("Please enter last name.");

            valid = false;

        }
        else if (!namePattern.test(lastName)) {

            $("#lastNameError")
                .text("Name should contain only letters.");

            valid = false;

        }


        // ==============================================
        // DATE OF BIRTH
        // ==============================================

        if (dob === "") {

            $("#dobError")
                .text("Please select date of birth.");

            valid = false;

        }


        // ==============================================
        // GENDER
        // ==============================================

        if (!gender) {

            $("#genderError")
                .text("Please select gender.");

            valid = false;

        }


        // ==============================================
        // EMAIL
        // ==============================================

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            $("#emailError")
                .text("Please enter email.");

            valid = false;

        }
        else if (!emailPattern.test(email)) {

            $("#emailError")
                .text("Please enter a valid email.");

            valid = false;

        }


        // ==============================================
        // PHONE
        // ==============================================

        let phonePattern =
            /^[6-9][0-9]{9}$/;


        if (phone === "") {

            $("#phoneError")
                .text("Please enter phone number.");

            valid = false;

        }
        else if (!phonePattern.test(phone)) {

            $("#phoneError")
                .text(
                    "Enter a valid 10-digit mobile number."
                );

            valid = false;

        }


        // ==============================================
        // COURSE
        // ==============================================

        if (course === "") {

            $("#courseError")
                .text("Please select course.");

            valid = false;

        }


        // ==============================================
        // DEPARTMENT
        // ==============================================

        if (department === "") {

            $("#departmentError")
                .text("Please select department.");

            valid = false;

        }


        // ==============================================
        // YEAR
        // ==============================================

        if (year === "") {

            $("#yearError")
                .text("Please select year.");

            valid = false;

        }


        // ==============================================
        // ADDRESS
        // ==============================================

        if (address === "") {

            $("#addressError")
                .text("Please enter address.");

            valid = false;

        }
        else if (address.length < 10) {

            $("#addressError")
                .text(
                    "Address must contain at least 10 characters."
                );

            valid = false;

        }


        // ==============================================
        // CITY
        // ==============================================

        if (city === "") {

            $("#cityError")
                .text("Please enter city.");

            valid = false;

        }
        else if (!namePattern.test(city)) {

            $("#cityError")
                .text("City should contain only letters.");

            valid = false;

        }


        // ==============================================
        // STATE
        // ==============================================

        if (state === "") {

            $("#stateError")
                .text("Please select state.");

            valid = false;

        }


        // ==============================================
        // PINCODE
        // ==============================================

        let pincodePattern =
            /^[0-9]{6}$/;


        if (pincode === "") {

            $("#pincodeError")
                .text("Please enter pincode.");

            valid = false;

        }
        else if (!pincodePattern.test(pincode)) {

            $("#pincodeError")
                .text("Pincode must contain 6 digits.");

            valid = false;

        }


        // ==============================================
        // PASSWORD
        // ==============================================

        if (password === "") {

            $("#passwordError")
                .text("Please enter password.");

            valid = false;

        }
        else if (password.length < 6) {

            $("#passwordError")
                .text(
                    "Password must contain at least 6 characters."
                );

            valid = false;

        }


        // ==============================================
        // CONFIRM PASSWORD
        // ==============================================

        if (confirmPassword === "") {

            $("#confirmPasswordError")
                .text("Please confirm password.");

            valid = false;

        }
        else if (password !== confirmPassword) {

            $("#confirmPasswordError")
                .text("Passwords do not match.");

            valid = false;

        }


        // ==============================================
        // TERMS
        // ==============================================

        if (!terms) {

            $("#termsError")
                .text(
                    "Please accept the Terms and Conditions."
                );

            valid = false;

        }


        // ==================================================
        // IF VALID
        // ==================================================

        if (valid) {


            // ----------------------------------------------
            // GET SKILLS
            // ----------------------------------------------

            let skills = [];

            $("input[name='skills']:checked")
                .each(function () {

                    skills.push(
                        $(this).val()
                    );

                });


            if (skills.length === 0) {

                skills.push("Not specified");

            }


            // ----------------------------------------------
            // CREATE STUDENT OBJECT
            // ----------------------------------------------

            let student = {

                studentId: studentId,

                firstName: firstName,

                lastName: lastName,

                dob: dob,

                gender: gender,

                email: email,

                phone: phone,

                course: course,

                department: department,

                year: year,

                address: address,

                city: city,

                state: state,

                pincode: pincode,

                skills: skills,

                registeredDate:
                    new Date().toLocaleString()

            };


            // ----------------------------------------------
            // ADD STUDENT TO ARRAY
            // ----------------------------------------------

            students.push(student);


            // ----------------------------------------------
            // SAVE TO LOCAL STORAGE
            // ----------------------------------------------

            localStorage.setItem(
                storageKey,
                JSON.stringify(students)
            );


            // ----------------------------------------------
            // SHOW SUCCESS
            // ----------------------------------------------

            $("#successMessage")
                .hide()
                .fadeIn(500);


            // ----------------------------------------------
            // DISPLAY UPDATED TABLE
            // ----------------------------------------------

            displayStudents();


            // ----------------------------------------------
            // RESET FORM
            // ----------------------------------------------

            $("#studentForm")[0].reset();

            $("#charCount").text("0");


            // ----------------------------------------------
            // CLEAR ERRORS
            // ----------------------------------------------

            $(".error-message").text("");


            // ----------------------------------------------
            // SCROLL TO REGISTERED STUDENTS
            // ----------------------------------------------

            $("html, body").animate({

                scrollTop:
                    $(".students-card").offset().top - 30

            }, 700);


            // ----------------------------------------------
            // HIDE SUCCESS AFTER 3 SECONDS
            // ----------------------------------------------

            setTimeout(function () {

                $("#successMessage").fadeOut(500);

            }, 3000);

        }

        else {

            // ----------------------------------------------
            // SCROLL TO FIRST ERROR
            // ----------------------------------------------

            let firstError =
                $(".error-message")
                    .filter(function () {

                        return $(this)
                            .text()
                            .trim() !== "";

                    })
                    .first();


            if (firstError.length) {

                $("html, body").animate({

                    scrollTop:
                        firstError.offset().top - 100

                }, 500);

            }

        }

    });


    // ==================================================
    // DISPLAY STUDENTS
    // ==================================================

    function displayStudents() {


        // ----------------------------------------------
        // GET DATA
        // ----------------------------------------------

        let students =
            JSON.parse(
                localStorage.getItem(storageKey)
            ) || [];


        // ----------------------------------------------
        // UPDATE COUNT
        // ----------------------------------------------

        $("#studentCount")
            .text(students.length);


        // ----------------------------------------------
        // CLEAR TABLE
        // ----------------------------------------------

        $("#studentTableBody").empty();


        // ----------------------------------------------
        // EMPTY STATE
        // ----------------------------------------------

        if (students.length === 0) {

            $("#studentTable").hide();

            $("#emptyMessage").show();

            $("#clearAllContainer").hide();

            return;

        }


        // ----------------------------------------------
        // SHOW TABLE
        // ----------------------------------------------

        $("#studentTable").show();

        $("#emptyMessage").hide();

        $("#clearAllContainer").show();


        // ----------------------------------------------
        // CREATE TABLE ROWS
        // ----------------------------------------------

        $.each(students, function (index, student) {


            let row = `

                <tr>

                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        <strong>
                            ${student.studentId}
                        </strong>
                    </td>

                    <td>
                        ${student.firstName}
                        ${student.lastName}
                    </td>

                    <td>
                        ${student.email}
                    </td>

                    <td>
                        ${student.phone}
                    </td>

                    <td>
                        ${student.course}
                    </td>

                    <td>
                        ${student.department}
                    </td>

                    <td>
                        ${student.year}
                    </td>

                    <td>

                        <button
                            type="button"
                            class="btn btn-danger btn-sm delete-btn"
                            data-index="${index}">

                            <i class="bi bi-trash"></i>

                        </button>

                    </td>

                </tr>

            `;


            $("#studentTableBody")
                .append(row);

        });

    }


    // ==================================================
    // DELETE ONE STUDENT
    // ==================================================

    $(document).on(
        "click",
        ".delete-btn",
        function () {


            let index =
                $(this).data("index");


            // ------------------------------------------
            // GET STUDENTS
            // ------------------------------------------

            let students =
                JSON.parse(
                    localStorage.getItem(storageKey)
                ) || [];


            // ------------------------------------------
            // GET STUDENT NAME
            // ------------------------------------------

            let studentName =
                students[index].firstName +
                " " +
                students[index].lastName;


            // ------------------------------------------
            // CONFIRM DELETE
            // ------------------------------------------

            let confirmDelete =
                confirm(
                    "Delete registration of " +
                    studentName +
                    "?"
                );


            if (confirmDelete) {


                // Remove student
                students.splice(index, 1);


                // Save updated data
                localStorage.setItem(
                    storageKey,
                    JSON.stringify(students)
                );


                // Refresh table
                displayStudents();

            }

        }
    );


    // ==================================================
    // CLEAR ALL STUDENTS
    // ==================================================

    $("#clearAllBtn").click(function () {


        let confirmClear =
            confirm(
                "Are you sure you want to delete all registered students?"
            );


        if (confirmClear) {

            localStorage.removeItem(
                storageKey
            );


            displayStudents();

        }

    });


    // ==================================================
    // SEARCH STUDENTS
    // ==================================================

    $("#searchStudent").on(
        "keyup",
        function () {


            let searchValue =
                $(this)
                    .val()
                    .toLowerCase();


            $("#studentTableBody tr")
                .filter(function () {


                    let rowText =
                        $(this)
                            .text()
                            .toLowerCase();


                    $(this).toggle(
                        rowText.indexOf(searchValue) > -1
                    );


                });

        }
    );


    // ==================================================
    // RESET BUTTON
    // ==================================================

    $("#resetBtn").click(function () {


        // Reset form
        $("#studentForm")[0].reset();


        // Clear errors
        $(".error-message").text("");


        // Reset character counter
        $("#charCount").text("0");


        // Hide success message
        $("#successMessage").hide();


        // Form remains visible
        $("#studentForm").show();


    });


    // ==================================================
    // CLEAR ERRORS WHILE TYPING
    // ==================================================

    $("#studentId").on("input", function () {

        $("#studentIdError").text("");

    });


    $("#firstName").on("input", function () {

        $("#firstNameError").text("");

    });


    $("#lastName").on("input", function () {

        $("#lastNameError").text("");

    });


    $("#email").on("input", function () {

        $("#emailError").text("");

    });


    $("#phone").on("input", function () {

        $("#phoneError").text("");

    });


    $("#address").on("input", function () {

        $("#addressError").text("");

    });


    $("#city").on("input", function () {

        $("#cityError").text("");

    });


    $("#pincode").on("input", function () {

        $("#pincodeError").text("");

    });


    $("#password").on("input", function () {

        $("#passwordError").text("");

    });


    $("#confirmPassword").on("input", function () {

        $("#confirmPasswordError").text("");

    });


});