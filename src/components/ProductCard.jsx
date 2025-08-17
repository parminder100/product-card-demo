// import Image from "next/image";
import { ShoppingCart, Star, Sun, Moon } from 'lucide-react';

// export default function ProductCard({ product }) {
//   return (
//     <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
//       <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden">
//         <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
//           {/* Image */}
//           <div className="relative w-full h-48">
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={500}
//               height={500}
//               className="w-full object-cover"
//             />
//           </div>

//           {/* Content */}
//           <div className="p-4">
//             <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
//             <p className="text-gray-700 dark:text-gray-300 mb-2">
//               ${product.price}
//             </p>
//             <div className="flex items-center mb-3">
//               ⭐⭐⭐⭐☆ {/* Example rating */}
//             </div>
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





export default function ProductCard({ product }) {
  return (
    <div className="w-full max-w-sm mx-auto hover:shadow-lg">
      <div className="bg-white dark:bg-gray-800 border-2 p-[10px] border-dashed border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500">
        
        {/* Image Section */}
        <div className="relative h-64 bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {product.outOfStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Out of Stock</span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              NEW
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4 leading-relaxed">
            {product.description}
          </p>

          {/* Rating and Price */}
          <div className="flex items-center justify-between mb-6">
            {/* <RatingStars rating={product.rating} /> */}
            ⭐⭐⭐⭐☆
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${product.price}
            </div>
          </div>

          {/* View More Button */}
          <button
            className={`w-full py-3 px-6 rounded-lg h-[31px] font-semibold transition-all duration-300 flex items-center justify-center space-x-2
              ${product.outOfStock
                ? "bg-gray-400 text-gray-200 cursor-not-allowed hover:scale-100 hover:shadow-none"
                : "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:scale-105 hover:shadow-lg active:scale-95"
              }`}
            disabled={product.outOfStock}
          >
            <span>{product.outOfStock ? "Out of Stock" : "[ View More ]"}</span>
            {!product.outOfStock && <ShoppingCart className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}