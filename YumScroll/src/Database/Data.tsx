import { useState } from "react";

const [posts] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327",
      title: "Herb-Crusted Salmon",
      likes: 1234,
      author: "ChefJulia",
      description: "Perfect salmon with fresh herbs and lemon zest 🍋"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352",
      title: "Classic Pasta Carbonara",
      likes: 2156,
      author: "PastaLover",
      description: "Authentic Italian carbonara with pancetta 🍝"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
      title: "Morning Breakfast Bowl",
      likes: 987,
      author: "HealthyEats",
      description: "Start your day right! 🥣"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
      title: "Garden Fresh Salad",
      likes: 765,
      author: "VeggieKing",
      description: "Fresh from the garden to your plate 🥗"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a",
      title: "Homemade Pizza",
      likes: 1543,
      author: "PizzaMaster",
      description: "Wood-fired perfection 🍕"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b",
      title: "Chocolate Lava Cake",
      likes: 2341,
      author: "DessertQueen",
      description: "Molten chocolate goodness 🍫"
    }
  ]);

export default posts;