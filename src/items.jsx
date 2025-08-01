import graphics from './Images/graphics.jpg';
import graphics1 from './Images/graphics1.jpg'; 
import graphics2 from './Images/graphics2.jpg';
import graphics3 from './Images/graphics3.jpg';
import graphics4 from './Images/graphics4.jpg';
import temu from './Images/temu.jpg'
import  ecommerce from './Images/ecommerce.jpg'
import todo from './Images/todo.jpg'
import weather from './Images/weather.jpg'

export const designs = [
    { id: 1, img: graphics },
    { id: 2, img: graphics1 },
    { id: 3, img: graphics2 },
    { id: 4, img: graphics3 },
    { id: 5, img: graphics4 },
];


export const web = [
    { id: 1, img: temu, description:"A modern e-commerce platform inspired by Temu, showcasing curated products with a focus on affordability and user experience.", link:'https://new-ecom-smoky.vercel.app/', btn:'view'},
    { id: 2, img: ecommerce, description:"Developed a responsive e-commerce website with product listings and seamless checkout.", link:'https://food-website-steel-sigma.vercel.app/', btn:'view'},
    { id: 3, img: weather, description:"Developed a responsive e-commerce website and a weather application to showcase my web development skills.", link:'https://weather-qaog.vercel.app/', btn:'view'},
    { id: 4, img: todo, description:"Built a React to-do list app with local storage persistence.", link:'https://todo-list-fawn-five-64.vercel.app/', btn:'view'},
];
