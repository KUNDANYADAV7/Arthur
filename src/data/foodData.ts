// Food data for ARTHUR SANDWICH HOUSE

export type FoodCategory = {
  id: string;
  name: string;
  image: string;
  itemCount: number;
};

export type FoodItem = {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  image: string;
  price?: string | number; 
  originalPrice?: number;
  featured: boolean;
  onSale: boolean;
  prepInstructions?: string; // Detailed preparation instructions
};


export const categories: FoodCategory[] = [
  {
    id: "all_menu",
    name: "SHOW OUR ALL MENU",
    image: "/images/images2/allmenu.png",
    itemCount: 43,
  },
  {
    id: "sandwich",
    name: "Sandwich",
    image: "/images/images2/1.jpg",
    itemCount: 8,
  },
  {
    id: "signature_sandwich",
    name: "Signature Sandwich",
    image: "/images/images2/10.jpeg",
    itemCount: 2,
  },
  {
    id: "panini",
    name: "Panini",
    image: "/images/images2/2.jpeg",
    itemCount: 5,
  },
  {
    id: "burrito",
    name: "Burrito",
    image: "/images/images2/3.jpeg",
    itemCount: 5,
  },
  {
    id: "bowls",
    name: "Bowls",
    image: "/images/images2/4.jpeg",
    itemCount: 4,
  },
  {
    id: "wraps",
    name: "Wraps",
    image: "/images/images2/5.jpeg",
    itemCount: 6,
  },
  {
    id: "grab-and-go",
    name: "Grab & Go",
    image: "/images/images2/6.jpeg",
    itemCount: 3,
  },
  {
    id: "salad",
    name: "Salad",
    image: "/images/images2/7.jpeg",
    itemCount: 2,
  },
  {
    id: "milkshake",
    name: "Milk Shake",
    image: "/images/images2/8.jpeg",
    itemCount: 6,
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    image: "/images/images2/9.jpeg",
    itemCount: 6,
  },
];

export const foodItems: FoodItem[] = [
  {
    id: "Grilled Cheese",
    categoryId: "sandwich",
    name: "Grilled Cheese",
    description: "Mozzarella, Cheddar Cheese",
    image: "/images/images2/grilled.png",
    price: 4.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Buffalo Chickpea",
    categoryId: "sandwich",
    name: "Buffalo Chickpea",
    description: "Chickpeas tossed in Frank's Buffalo sauce, Veggies, Mozzarella",
    image: "/images/images2/chickpea.png",
    price: 6.99,
    featured: false,
    onSale: false,
  },
  {
    id: "Buffalo Chicken",
    categoryId: "sandwich",
    name: "Buffalo Chicken",
    description: "Chicken tossed in Frank's Buffalo sauce, Veggies, Mozzarella",
    image: "/images/images2/buffalo_chicken.png",
    price: 7.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Chicken Bacon Ranch",
    categoryId: "sandwich",
    name: "Chicken Bacon Ranch",
    description: "Chicken, Bacon Strips ,Lettuce, Tomato, Cheddar with Ranch Sauce",
    image: "/images/images2/chicken_bacon_ranch.png",
    price: 7.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Meaty Pizza Sandwich",
    categoryId: "sandwich",
    name: "Meaty Pizza Sandwich",
    description: "Bacon Strips, Beef Shaving, Marinara sauce, Parmesan, Mozzarella",
    image: "/images/images2/meaty-pizza-sandwich.png",
    price: 7.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Pesto Chicken",
    categoryId: "sandwich",
    name: "Pesto Chicken",
    description: "Pesto sauce, Chicken, Lettuce, Tomato, Mozzarella, Garlic Aioli",
    image: "/images/images2/pesto-chicken.png",
    price: 7.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Bacon Avocado",
    categoryId: "sandwich",
    name: "Bacon Avocado",
    description: "Bacon Strips, Salsa, Guacamole Lettuce, Cucumber, Cheddar",
    image: "/images/images2/bacon-avocado.png",
    price: 7.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Roast Beef",
    categoryId: "sandwich",
    name: "Roast Beef",
    description: "Beef Pastrami with Cheddar Cheese and Veggies",
    image: "/images/images2/roast-beef.png",
    price: 7.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Arthur House Melt",
    categoryId: "signature_sandwich",
    name: "Arthur House Melt",
    description: "Double Decker Sandwich, Chicken, Smoked Turkey with Veggies",
    image: "/images/images2/arthur-house-melt.png",
    price: 8.99,
    // originalPrice : 10.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Club Sandwich",
    categoryId: "signature_sandwich",
    name: "Club Sandwich",
    description: "Ham, Turkey, Bacon, Cheese with Veggies & Italian Dressing.",
    image: "/images/images2/club-sandwich.png",
    price: 8.99,
    // originalPrice : 12.6,
    featured: true,
    onSale: false,
  },
  {
    id: "Chipotle Chicken",
    categoryId: "panini",
    name: "Chipotle Chicken",
    description: "Chicken, Lettuce, Tomato, Onion, Cheddar with Chipotle Sauce on Focaccia Bread",
    image: "/images/images2/chipotle-chicken.png",
    price: 9.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Turkey Bacon Club",
    categoryId: "panini",
    name: "Turkey Bacon Club",
    description: "Smoked Turkey, bacon, lettuce, tomato, Cheddar with Ranch Sauce on Focaccia Bread",
    image: "/images/images2/turkey-bacon-club.png",
    price: 175.00,
    featured: false,
    onSale: false,
  },
  ,
  {
    id: "Deli Style",
    categoryId: "panini",
    name: "Deli Style",
    description: "Ham, Smoked Turkey, Bacon, Lettuce, Tomato, Cheddar, Italian Dressing on Focaccia Bread",
    image: "/images/images2/deli-style.png",
    price: 11.49,
    featured: false,
    onSale: false,
  },
  ,
  {
    id: "Veggie Delight",
    categoryId: "panini",
    name: "Veggie Delight",
    description: "Lettuce, Tomato, Cucumber, Onion, Red Pepper on Focaccia Bread",
    image: "/images/images2/veggie-delight.png",
    price: 9.49,
    featured: false,
    onSale: false,
  },
  ,
  {
    id: "Steakhouse",
    categoryId: "panini",
    name: "Steakhouse",
    description: "Beef shavings, lettuce, tomato, onion, Red Pepper, mozzarella, Chipotle Focaccia Bread",
    image: "/images/images2/steakhouse.png",
    price: 11.40,
    featured: false,
    onSale: false,
  },
  {
    id: "Bean & Cheese",
    categoryId: "burrito",
    name: "Bean & Cheese",
    description: "Rice, Black Beans, Cheese, Corn, Salsa, Lettuce, Onion, Red Pepper",
    image: "/images/images2/bean-cheese.png",
    price: 9.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Chicken",
    categoryId: "burrito",
    name: "Chicken",
    description: "Rice, Chicken, Black Beans, Cheese, Corn, Salsa, Lettuce, Onion, Red Peppe.",
    image: "/images/images2/chicken-burrito.png",
    price: 10.99,
    featured: false,
    onSale: false,
  },
  {
    id: "Tex Mex Steak",
    categoryId: "burrito",
    name: "Tex Mex Steak",
    description: "Rice, Beef Shavings, Black Beans, Cheese, Corn, Salsa, Lettuce, Onion, Red Pepper.",
    image: "/images/images2/tex-mex-steak.png",
    price: 10.99,
    featured: false,
    onSale: false,
  },
  {
    id: "Bean & Cheese Bowl",
    categoryId: "bowls",
    name: "Bean & Cheese Bowl",
    description: "Rice, Black Beans, Cheese, Corn, Salsa, Lettuce, Onion, Red Pepper.",
    image: "/images/images2/bean-cheese-bowl.png",
    price: 10.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Tex Mex Steak Bowl",
    categoryId: "bowls",
    name: "Tex Mex Steak Bowl",
    description: "Rice, Beef Shavings, Black Beans, Cheese, Corn, Salsa, Lettuce, Onion, Red Pepper.",
    image: "/images/images2/tex-mex-steak-bowl.png",
    price: 11.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Chicken Bowl",
    categoryId: "bowls",
    name: "Chicken Bowl",
    description: "Rice, Chicken, Black Beans, Cheese, Corn, Salsa, Lettuce, Onion, Red Pepper.",
    image: "/images/images2/chicken-bowl.png",
    price: 11.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Butter Chicken Bowl",
    categoryId: "bowls",
    name: "Butter Chicken Bowl",
    description: "Basmati Rice, Creamy butter Chicken gravy with Locally sourced Chicken.",
    image: "/images/images2/butter-chicken-bowl.png",
    price: 12.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Buffalo Chickpea",
    categoryId: "wraps",
    name: "Buffalo Chickpea",
    description: "Chickpeas tossed in Buffalo sauce, lettuce, Onion, Red pepper.",
    image: "/images/images2/buffalo-chickpea-wrap.png",
    price: 6.99,
    featured: false,
    onSale: false,
  },
  {
    id: "Chicken Caesar",
    categoryId: "wraps",
    name: "Chicken Caesar",
    description: "Chicken, bacon, lettuce, Parmesan, Croutons, Caesar dressing.",
    image: "/images/images2/chicken-caesar.png",
    price: 7.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Philly Cheese Steak",
    categoryId: "wraps",
    name: "Philly Cheese Steak",
    description: "Philly Steak, lettuce, Onion, Mozzarella, Garlic Aioli/ Chipotle.",
    image: "/images/images2/philly-cheese-steak.png",
    price: 8.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Veggie Wrap",
    categoryId: "wraps",
    name: "Veggie Wrap",
    description: "Lettuce, Tomato, Cucumber, Onion, Red pepper, Cheddar.",
    image: "/images/images2/veggie-wrap.png",
    price: 6.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Chicken Bacon Ranch",
    categoryId: "wraps",
    name: "Chicken Bacon Ranch",
    description: "Chicken, Bacon Strips, Lettuce, Tomato, Cheddar with Ranch Sauce.",
    image: "/images/images2/chicken-bacon-ranch.png",
    price: 7.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Panner Wrap",
    categoryId: "wraps",
    name: "Panner Wrap",
    description: "Veggie with Marinated Panner (Cubed Cottage Cheese).",
    image: "/images/images2/panner-wrap.png",
    price: 9.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Hot Dog",
    categoryId: "grab-and-go",
    name: "Hot Dog",
    description: "7 Sausage, Bun, Choice of Condiments.",
    image: "/images/images2/hot-dog.png",
    price: 3.99,
    featured: true,
    onSale: false,
  },
  {
    id: "Ham & Cheese",
    categoryId: "grab-and-go",
    name: "Ham & Cheese",
    description: "Ham, Cheddar Cheese.",
    image: "/images/images2/ham-cheese.png",
    price: 4.99,
    featured: false,
    onSale: false,
  },
  {
    id: "Mam & Cheese",
    categoryId: "grab-and-go",
    name: "Mam & Cheese",
    description: "Pasta enveloped in a rich, velvety cheese sauce for a comforting classic.",
    image: "/images/images2/mam-cheese.png",
    price: 3.49,
    featured: false,
    onSale: false,
  },
  {
    id: "Caesar Salad",
    categoryId: "salad",
    name: "Caesar Salad",
    description: "Croutons, Bacon Strips, lettuce, Parmesan, creamy Caesar dressing.",
    image: "/images/images2/caesar-salad.png",
    price: 4.49,
    featured: true,
    onSale: false,

  },
  {
    id: "Greek Salad",
    categoryId: "salad",
    name: "Greek Salad",
    description: "Lettuce, Cucumber, Tomatoes, Onions, Feta.",
    image: "/images/images2/greek-salad.png",
    price: 4.99,
    featured: false,
    onSale: false,
  },
  {
    id: "Strawberry",
    categoryId: "milkshake",
    name: "Strawberry",
    image: "/images/images2/strawberry.png",
    price: 4.49,
    featured: true,
    onSale: false,
  },
  {
    id: "Chocolate",
    categoryId: "milkshake",
    name: "Chocolate",
    image: "/images/images2/chocolate.png",
    price: 4.49,
    featured: false,
    onSale: false,
  },
  {
    id: "Nutella",
    categoryId: "milkshake",
    name: "Nutella",
    image: "/images/images2/nutella.png",
    price: 4.49,
    featured: false,
    onSale: false,
  },
  {
    id: "Peanut Butter",
    categoryId: "milkshake",
    name: "Peanut Butter",
    image: "/images/images2/peanut-butter.png",
    price: 4.49,
    featured: false,
    onSale: false,
  },
  {
    id: "French Vanila",
    categoryId: "milkshake",
    name: "French Vanila",
    image: "/images/images2/french-vanila-milkshake.png",
    price: 4.49,
    featured: false,
    onSale: false,
  },
  {
    id: "Rainbow Milkshake",
    categoryId: "milkshake",
    name: "Rainbow Milkshake",
    image: "/images/images2/rainbow-milkshake.png",
    price: 5.49,
    featured: false,
    onSale: false,
  },
  {
    id: "French Vanilla",
    categoryId: "ice-cream",
    name: "French Vanilla",
    image: "/images/images2/french-vanilla-icecream.png",
    price :"$ 1.99 for 1 Scoop | $ 3.99 for  3 Scoop",
    featured: true,
    onSale: false,
    },
  {
    id: "Dutch Chocolate",
    categoryId: "ice-cream",
    name: "Dutch Chocolate",
    image: "/images/images2/dutch-chocolate.png",
    price :"$ 1.99 for 1 Scoop | $ 3.99 for  3 Scoop",
    featured: false,
    onSale: false,
  },
  {
    id: "Black Raspberry Cheesecake",
    categoryId: "ice-cream",
    name: "Black Raspberry Cheesecake",
    image: "/images/images2/black-raspberry-cheesecake.png",
    price :"$ 1.99 for 1 Scoop | $ 3.99 for  3 Scoop",
    featured: false,
    onSale: false,
  },
  {
    id: "Choco Chip Cookie Dough",
    categoryId: "ice-cream",
    name: "Choco Chip Cookie Dough",
    image: "/images/images2/choco-chip.png",
    price :"$ 1.99 for 1 Scoop | $ 3.99 for  3 Scoop",
    featured: false,
    onSale: false,
  },
  {
    id: "Cotton Candy",
    categoryId: "ice-cream",
    name: "Cotton Candy",
    image: "/images/images2/cotton-candy.png",
    price :"$ 1.99 for 1 Scoop | $ 3.99 for  3 Scoop",
    featured: false,
    onSale: false,
  },
];

// Helper function to get featured items
export const getFeaturedItems = () => {
  return foodItems.filter(item => item.featured);
};

// Helper function to get items by category
export const getItemsByCategory = (categoryId: string) => {
  return foodItems.filter(item => item.categoryId === categoryId);
};

// Helper function to get a single item by ID
export const getItemById = (id: string) => {
  return foodItems.find(item => item.id === id);
};
