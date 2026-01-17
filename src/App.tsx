import Compare from "./components/Compare";
import { Product } from "./Interfaces";
import "./App.css";

const PRODUCTS: Product[] = [
  { id: 1, name: "Galaxy S23", brand: "Samsung", price: 74999, battery: 3900, display: '6.1" AMOLED', camera: '50 MP', image: 'https://placehold.co/200x200?text=Galaxy+S23' },
  { id: 2, name: "iPhone 14", brand: "Apple", price: 79999, battery: 3279, display: '6.1" OLED', camera: '12 MP', image: 'https://placehold.co/200x200?text=iPhone+14' },
  { id: 3, name: "Pixel 7", brand: "Google", price: 59999, battery: 4355, display: '6.3" OLED', camera: '50 MP', image: 'https://placehold.co/200x200?text=Pixel+7' },
  { id: 4, name: "OnePlus 11", brand: "OnePlus", price: 56999, battery: 5000, display: '6.7" AMOLED', camera: '50 MP', image: 'https://placehold.co/200x200?text=OnePlus+11' },
  { id: 5, name: "Xiaomi 13", brand: "Xiaomi", price: 54999, battery: 4500, display: '6.36" AMOLED', camera: '50 MP', image: 'https://placehold.co/200x200?text=Xiaomi+13' },
  { id: 6, name: "Realme GT 3", brand: "Realme", price: 42999, battery: 4600, display: '6.74" AMOLED', camera: '50 MP', image: 'https://placehold.co/200x200?text=Realme+GT+3' },
  { id: 7, name: "Vivo X90", brand: "Vivo", price: 63999, battery: 4810, display: '6.78" AMOLED', camera: '50 MP', image: 'https://placehold.co/200x200?text=Vivo+X90' },
  { id: 8, name: "Nothing Phone (2)", brand: "Nothing", price: 44999, battery: 4700, display: '6.7" OLED', camera: '50 MP', image: 'https://placehold.co/200x200?text=Nothing+Phone+2' }
];

function App() {
  return (
    <>
      <Compare
        products={PRODUCTS}
      />
    </>
  )
}

export default App
