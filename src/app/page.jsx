import ImageCarousel from "./components/imageCarousel";

const images = [
  "/Startsida-lightmode.jpeg",
  // Add more image URLs here
];

const imagesSecond = [
  "/Startsida-lightmode.jpeg",
  "/budget.png"
]
export default function Home() {
  return (
    <main>
      <div className="bg-red-600 h-screen min-h-full">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-black p-10 [font-variation-settings:'wght'_900] hover:[font-variation-settings:'wght'_10] transition-[font-variation-settings] duration-200 text-white">
          Urvalsprov Webbutveckling{" "}
        </h1>
        <div>
          
        </div>
      </div>
      
      <div className="justify-center items-center h-screen mt-4 mb-4">
        <h2 className = "text-2xl text-center p-4 mb-4">PROBLEMLÖSNING EXEMPEL</h2>
        <ImageCarousel images={images} />
        <h2 className = "text-xl text-center p-4 mb-4">KOD FRÅGOR EXEMPEL</h2>
        <ImageCarousel images = {imagesSecond} />
      </div>
    </main>
  );
}
