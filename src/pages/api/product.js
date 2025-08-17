export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        title: "Wireless Headphones",
        description: "High-quality sound with noise cancellation.",
        price: 120,
        rating: 4,
        image: "/img/headphone.jpg",
        outOfStock: false,
      },
      {
        id: 2,
        title: "Speakers",
        description: "High-performance speakers delivering powerful bass and clear treble.",
        price: 199,
        rating: 5,
        image: "/img/speaker.png",
        outOfStock: true,
      },
    ]);
}  