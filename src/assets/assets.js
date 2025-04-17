import logo from './logo.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import aus from './aus.png'
import Am from './Am.png'
import pk from './pk.png'
import call from './call.png'
export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Personal portfolio",
      price: "Stack:",
      location: "React JS, Tailwind CSS",
      image: project_img_1
    },
    {
      title: "Personal portfolio",
      price: "Stack:",
      location: "HTML CSS JavaScript",
      image: project_img_2
    },
    {
      title: "Digital Agency",
      price: "Stack:",
      location: "Wordpress, Elementor",
      image: project_img_3
    },
    {
      title: "Ecommerce website product page", 
      price: "Stack:",
      location: "Wordpress, Woocommerce",
      image: project_img_4
    },
    {
      title: "AC Repairing",
      price: "stack:",
      location: "Wordpress, Elementor",
      image: project_img_5
    },
    {
      title: "Personal portfolio",
      price: "Stack:",
      location: "HTML CSS JavaScript",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Merry",
        title: "Austratian",
        imagies: aus.png,
        image: profile_img_1,
        alt: "Portrait of Merry",
        rating: 5,
        text: "Working with you was such a smooth experience! You understood my vision perfectly and brought it to life beautifully. My website looks amazing and works flawlessly. Highly recommended!"
    },
    {
        name: "Ali",
        title: "Pakistani",
        imagies: pk.png,
        image: profile_img_2,
        alt: "Portrait of Ali",
        rating: 4,
        text: "Very professional and quick! The website you built for my business is clean, responsive, and exactly what I needed. Thank you for your hard work and communication throughout the process."
    },
    {
        name: "Lissa ",
        title: "American",
        imagies: Am.png,
        image: profile_img_3,
        alt: "Portrait of Lissa",
        rating: 5,
        text: "Absolutely loved the creativity and attention to detail. You delivered more than I expected, and my website now looks super professional. I’ve already received compliments from my customers!"
    }
];