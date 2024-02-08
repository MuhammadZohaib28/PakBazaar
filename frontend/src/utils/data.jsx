export const sliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Shoes Villa",
    desc: "Get the best shoes in town",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Hot Gadgets",
    desc: "Get the best gadgets in town",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Cellphone Store",
    desc: "Get the best Cellphones in town",
  },
];

import { FaTruckFast } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

export const infoBoxData = [
  {
    icon: <FaTruckFast />,
    title: "Free Shipping",
    desc: "We Offer free shipping on special products",
  },
  {
    icon: <MdPayments />,
    title: "Secure Payment",
    desc: "Make secure payment for your product",
  },
  {
    icon: <FaCartShopping />,
    title: "Quality Products",
    desc: "We sell products from only tested and proven brands",
  },
  {
    icon: <IoTime />,
    title: "24/7 Support",
    desc: "Get access to our 24/7 customer support team",
  },
  {
    icon: <IoTime />,
    title: "24/7 Support",
    desc: "Get access to our 24/7 customer support team",
  },
  {
    icon: <IoTime />,
    title: "24/7 Support",
    desc: "Get access to our 24/7 customer support team",
  },
];

export const carouselItemResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const carouselProductData = [
  {
    id: 1,
    imageurl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Colorful sneakers",
    price: "$19.99",
    description: "Some text about the product..",
  },
  {
    id: 2,
    imageurl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Sport sneakers",
    price: "$21.99",
    description: "Some text about the product..",
  },
  {
    id: 3,
    imageurl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "iWatch",
    price: "$99.99",
    description: "Some text about the product..",
  },
  {
    id: 4,
    imageurl:
      "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Water Bottle",
    price: "$14.99",
    description: "Some text about the product..",
  },
  {
    id: 5,
    imageurl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Vans sneakers",
    price: "$38.99",
    description: "Some text about the product..",
  },
  {
    id: 6,
    imageurl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Coco Noir",
    price: "$149.99",
    description: "Some text about the product..",
  },
  {
    id: 7,
    imageurl:
      "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Sunglasses",
    price: "$38.99",
    description: "Some text about the product..",
  },
  {
    id: 8,
    imageurl:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Dove cream",
    price: "$49.99",
    description: "Some text about the product..",
  },
];
