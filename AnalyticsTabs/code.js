const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((navL) => {

  navL.addEventListener('click', e => {
    navLinks.forEach((link) => {
      link.classList.remove(
        "border-top",
        "border-4",
        "border-warning",
        "border-bottom-0",
        "border-start-0",
        "border-end-0"
      )
    })

    navL.classList.add(
      "border-top",
      "border-4",
      "border-warning",
      "border-bottom-0",
      "border-start-0",
      "border-end-0"
    )

  })


})