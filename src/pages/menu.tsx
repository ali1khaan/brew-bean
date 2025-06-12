"use client"

import { useState } from "react"
import { useOrder } from "@/context/OrderContext"
import { FaCoffee, FaLeaf, FaFireAlt, FaClock } from "react-icons/fa"
import { MdLocalOffer, MdNewReleases } from "react-icons/md"
import { GiCupcake } from "react-icons/gi"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Layout from "@/components/Layout"
import styles from "./Menu.module.css"

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

// Static menu data - NO getStaticProps needed
const MENU_ITEMS: MenuItem[] = [
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

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const { cart, addToCart } = useOrder()

  const parsePrice = (price: string) => Number(price.replace("$", ""))

  const categories = ["All", "Coffee", "Snacks", "Seasonal"]

  const filteredItems =
    selectedCategory === "All" ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.category === selectedCategory)

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return <FaFireAlt className={styles.badgeIcon} />
      case "New":
        return <MdNewReleases className={styles.badgeIcon} />
      case "Seasonal":
        return <MdLocalOffer className={styles.badgeIcon} />
      default:
        return null
    }
  }

  const getBadgeVariant = (badge: string): "default" | "secondary" | "destructive" | "outline" => {
    switch (badge) {
      case "Best Seller":
        return "destructive"
      case "New":
        return "default"
      case "Seasonal":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <FaCoffee className={styles.titleIcon} />
            Brew & Beans Cafe Menu
          </h1>
          <p className={styles.subtitle}>Freshly brewed coffee and delicious treats</p>
        </div>

        {/* Category Filters */}
        <div className={styles.filters}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={styles.filterButton}
            >
              {category === "Coffee" && <FaCoffee />}
              {category === "Snacks" && <GiCupcake />}
              {category === "Seasonal" && <MdLocalOffer />}
              <span className={styles.filterText}>{category}</span>
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className={styles.menuGrid}>
          {filteredItems.map((item) => (
            <Card key={item.id} className={`${styles.menuCard} ${!item.available ? styles.unavailableCard : ""}`}>
              <CardHeader>
                <div className={styles.itemHeader}>
                  <CardTitle className={styles.itemTitle}>{item.name}</CardTitle>
                  {item.badge && (
                    <Badge variant={getBadgeVariant(item.badge)} className={styles.itemBadge}>
                      {getBadgeIcon(item.badge)}
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{item.price}</span>
                  <span className={styles.calories}>{item.calories} kcal</span>
                </div>

                <div className={styles.badges}>
                  {item.dietary?.includes("Vegan") && (
                    <Badge variant="outline" className={styles.dietBadge}>
                      <FaLeaf className={styles.leafIcon} />
                      Vegan
                    </Badge>
                  )}
                  {item.dietary?.includes("Vegetarian") && (
                    <Badge variant="outline" className={styles.dietBadge}>
                      <FaLeaf className={styles.leafIcon} />
                      Vegetarian
                    </Badge>
                  )}
                  {!item.available && (
                    <Badge variant="secondary" className={styles.unavailableBadge}>
                      <FaClock />
                      Unavailable
                    </Badge>
                  )}
                </div>

                <Button
                  className={styles.addButton}
                  disabled={!item.available}
                  onClick={() => {
                    addToCart({
                      id: item.id.toString(),
                      name: item.name,
                      price: parsePrice(item.price),
                      quantity: 1,
                      image: `/placeholder.svg?height=80&width=80`,
                    })
                  }}
                >
                  {item.available ? "Add to Cart" : "Currently Unavailable"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <Card className={styles.orderCard}>
          <CardHeader>
            <CardTitle>Your Order</CardTitle>
          </CardHeader>
          <CardContent>
            {cart.length === 0 ? (
              <p className={styles.emptyCart}>No items in your order yet.</p>
            ) : (
              <div className={styles.cartItems}>
                {cart.map((item, index) => (
                  <div key={`${item.id}-${index}`} className={styles.cartItem}>
                    <span>{item.name}</span>
                    <span>
                      ${item.price.toFixed(2)} × {item.quantity}
                    </span>
                  </div>
                ))}
                <Separator />
                <div className={styles.total}>
                  <span>Total:</span>
                  <span>${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
