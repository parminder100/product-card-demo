'use client';
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import handler from "../pages/api/product";// import your API handler

export default function Home({ products }) {
  const [dark, setDark] = useState(false);
  const [isMobileTablet, setIsMobileTablet] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobileTablet(window.innerWidth <= 660);
    };

    checkWidth(); // initial check
    window.addEventListener('resize', checkWidth); // update on resize
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <main className={`min-h-screen py-10 px-6 transition-colors duration-300
    ${dark ? "bg-[#000] text-white" : "bg-gray-50 text-gray-900"}`}>
      <ThemeToggle dark={dark} setDark={setDark}/>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
        Product Store
      </h1>

      {/* Centered Product Card */}
      <div data-testid="product-container" className={`sm:flex sm:flex-col md:flex md:flex-col flex flex-row gap-[20px] justify-center ${isMobileTablet ? "card-container" : ""}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  // Mock req and res objects
  const req = {};
  let jsonData;
  const res = {
    status: () => res,
    json: (data) => {
      jsonData = data;
    },
  };

  // Call the API handler directly
  await handler(req, res);

  return {
    props: {
      products: jsonData,
    },
  };
}

