/* Individual Booking Site*/
class Individualbook{
    constructor(id,dob,email,county,date,site){        
        this.id = id;
        this.dob =dob;
        this.email =email;
        this.county = county;
        this.date = date;
        this.site = site;
    }

}
class Companybook{
    constructor(companyname,timeslot,people,companyaddress,companyemail){
        this.companyname =companyname;
        this.timeslot = timeslot;
        this.people = people;
        this.companyaddress = companyaddress;
        this.companyemail = companyemail;
                
    }
}
class Store{
    static getbooking(){
        let booking;
        if (localStorage.getItem("bookings")=== null) {
             booking =[];
        }else{
            booking= JSON.parse(localStorage.getItem("bookings"));
        }
        return booking;

    }
    static addbooking(booking){
        const bookings = Store.getbooking();
        bookings.push(booking);
        localStorage.setItem("bookings",JSON.stringify(bookings));
    }
}

function individualFunc(e) {
    e.preventDefault();
    //collect user data
    Id = $("#id").val();  
    dob = $("#dob").val();
    email =$("#email").val();
    county = $("#county").val();
    date = $("#date").val();
    site = $("#location").val();
    const individualbook = new Individualbook(Id,dob,email,county,date,site);
    console.log(individualbook);
    Store.addbooking(individualbook); 
    console.log(individualbook); 
    alert("Check your email we have send the summary of the appointment")
    location.reload();
     
    
}

function companyFunc(e){
    e.preventDefault();
    //collect user data
    companyName = $("#companyName").val();
    timeslot = $("#timeslot").val();
    people =$("#people").val();
    companyaddress = $("#companyaddress").val();
    companyemail = $("#companyemail").val();
    alert("booking success")
    const companybook = new Companybook(companyName,timeslot,people, companyaddress, companyemail);
    console.log(companybook);
    location.reload();
}
//add event listeners
$("#indvidual-form").submit(individualFunc);
$("#company-form").submit(companyFunc);

//form reset



/* About  Section */
$(document).ready(function() {
    $(".shown").click(function() {
        $(this).toggle();
        $(this).siblings().toggle();
    });
    $(".hidden").click(function() {
        $(this).toggle();
        $(this).siblings().toggle();
    })
})
/*  Contact  Section */