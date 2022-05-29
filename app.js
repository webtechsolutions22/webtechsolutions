//start of testimonials page
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Saif Khan',
    position: 'Front End Developer',
    photo:
      'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      "Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal.",
  },
  {
    name: 'Azfar Uzair',
    position: 'Software Engineer',
    photo: 'https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      '“We get here the best quality products at a really good affordable price.”',
  },
  {
    name: 'Karim Ahmed',
    position: 'Architect',  
    photo: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    text:
      "“My wife loved the T.V she just purchased from the Comfort Home store.”",
  },
  {
    name: 'Asad Ahmed',
    position: 'Researcher',
    photo: 'https://images.unsplash.com/photo-1591543620767-582b2e76369e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60',
    text:
      "“Got the right telescope for my research. ",
  },
  
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
//end of testimonials page