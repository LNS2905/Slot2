function showNav() {
    //Nhờ JS tìm cái Navbar hiện tại
    const navElement = document.getElementById("nav");

    //add class " active" vào cái navbar hiện tại
    navElement.classList.add("active");
}

function hideNav() {
    const navElement = document.getElementById("nav");
    navElement.classList.remove("active");
}