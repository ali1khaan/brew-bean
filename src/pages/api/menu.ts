import type { NextApiRequest, NextApiResponse } from "next"

interface MenuItem {
  id: number
  name: string
  description: string
  category: string
  price: string
  badge: string
  calories: number
  dietary: string[]
  available: boolean
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Rich, bold espresso with a perfect crema. Our house blend roasted to perfection.",
    category: "Coffee",
    price: "$3.50",
    badge: "Best Seller",
    calories: 5,
    dietary: ["Vegan"],
    available: true,
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    description: "Smooth espresso with steamed milk, vanilla syrup, and caramel drizzle.",
    category: "Coffee",
    price: "$4.75",
    badge: "",
    calories: 240,
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: 3,
    name: "Iced Vanilla Latte",
    description: "Refreshing iced coffee with vanilla syrup and cold milk.",
    category: "Coffee",
    price: "$4.25",
    badge: "",
    calories: 190,
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: 4,
    name: "Pumpkin Spice Latte",
    description: "Seasonal favorite with pumpkin, cinnamon, nutmeg, and clove spices.",
    category: "Seasonal",
    price: "$5.25",
    badge: "Seasonal",
    calories: 300,
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: 5,
    name: "Chocolate Croissant",
    description: "Buttery, flaky croissant filled with rich dark chocolate.",
    category: "Snacks",
    price: "$3.25",
    badge: "",
    calories: 280,
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: 6,
    name: "Blueberry Muffin",
    description: "Fresh baked muffin bursting with juicy blueberries.",
    category: "Snacks",
    price: "$2.75",
    badge: "",
    calories: 320,
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: 7,
    name: "Avocado Toast",
    description: "Multigrain bread topped with fresh avocado, lime, and sea salt.",
    category: "Snacks",
    price: "$6.50",
    badge: "New",
    calories: 250,
    dietary: ["Vegan"],
    available: true,
  },
  {
    id: 8,
    name: "Cold Brew Coffee",
    description: "Smooth, less acidic coffee brewed cold for 12 hours.",
    category: "Coffee",
    price: "$3.75",
    badge: "",
    calories: 5,
    dietary: ["Vegan"],
    available: true,
  },
  {
    id: 9,
    name: "Chai Tea Latte",
    description: "Spiced black tea with steamed milk and aromatic spices.",
    category: "Coffee",
    price: "$4.00",
    badge: "",
    calories: 180,
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: 10,
    name: "Cinnamon Roll",
    description: "Warm, gooey cinnamon roll with cream cheese frosting.",
    category: "Snacks",
    price: "$3.50",
    badge: "Best Seller",
    calories: 420,
    dietary: ["Vegetarian"],
    available: true,
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<MenuItem[]>) {
  if (req.method === "GET") {
    res.status(200).json(menuItems)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
