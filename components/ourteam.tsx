import Gallery from "@/components/Gallery";
import React from "react";

const OurTeam = () => {
  const images = [
    { url: "/ShamsAhson.jpg", name: "Shams Ahson", link: "https://www.linkedin.com/in/shams-ahson-6453ab210/" },
    { url: "/HudaHussaini.jpg", name: "Huda Hussaini", link: "https://www.linkedin.com/in/hussainihuda/" },
    { url: "/FaithlonG.jpg", name: "Faith Long", link: "https://www.linkedin.com/in/faith-long-40963b168/" },
    { url: "/EejoyLim.jpg", name: "Eejoy Lim", link: "https://www.linkedin.com/in/eejoylim/" },
    { url: "/shouryanNikam.jpeg", name: "Shouryan Nikam", link: "https://www.linkedin.com/in/shouryannikam/" },
    { url: "/RohitNair.jpg", name: "Rohit Nair", link: "https://www.linkedin.com/in/r-s-nair/" },
    { url: "/ZahraaAlhmood.jpg", name: "Zahraa Alhmood", link: "https://www.linkedin.com/in/zahraa-alhmood/" },
    { url: "/RosyShrestha.jpg", name: "Rosy Shrestha", link: "https://www.linkedin.com/in/rosyshrestha/" },
    { url: "/souadOmar.jpeg", name: "Souad Omar", link: "https://www.linkedin.com/in/souad-omar-0105aa217/" },
    { url: "/Shashanka-Prajapati.jpg", name: "Shashanka Prajapati", link: "https://www.linkedin.com/in/shashanka-prajapati/" },
    { url: "/ali.jpg", name: "Ali Al Zein", link: "https://www.linkedin.com/in/alielzei/" },
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Maryam"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Regan Maharjan"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "  "},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Amirit"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Yamama"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Sumia"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Ali Al Zein"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Fatima"},
  ]

  return (
    <div className="items-center justify-center">
      <h1 className="mb-4 px-5 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:px-20 lg:text-6xl">
        Meet Our Team
      </h1>
      <Gallery images={images} />
    </div>
  );
}

export default OurTeam;