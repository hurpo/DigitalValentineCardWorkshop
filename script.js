const message = document.getElementById("message")
const no_image = document.getElementById("no")
const yes_image = document.getElementById("yes")

messages = [
    "Is your heart open-source? Because Id love to contribute",
    "Are we connected by UART? Because Id like this to be a two-way communication",
    "Are you an ideal voltage source? Because you keep me going no matter the load",
    "Are we synchronized clocks? Because I think were perfectly in phase",
    "Do you accept incoming signals? Because Ive been transmitting feelings",
    "Are you a pull-up resistor? Because you keep me from floating",
    "Do you believe in feedback loops? Because you make me better every cycle",
    "Are you an ADC? Because you make my analog feelings discrete",
    "Are you my main function? Because everything starts with you",
    "Do you throw exceptions? Because you just caught my heart"
]



no_images = [
    "Images/single1.gif",
    "Images/single2.gif",
    "Images/single3.gif",
    "Images/single4.gif",
    "Images/single5.gif"
]

yes_images = [
    "Images/couple1.webp",
    "Images/couple2.gif",
    "Images/couple3.gif",
    "Images/couple4.webp",
    "Images/couple5.webp"
]

message_index = Math.floor(Math.random() * 10)
image_index = Math.floor(Math.random() * 5)

no_image.src = no_images[image_index]
yes_image.src = yes_images[image_index]

message.innerText = messages[message_index]

