import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <AnimatedGradientBackground />
      <img 
        src="/logo.png" 
        alt="BookNGo Logo" 
        className="relative z-10
          w-60 h-60
          sm:w-48 sm:h-48
          md:w-56 md:h-56
          lg:w-64 lg:h-64
          xl:w-72 xl:h-72
          -mt-20
          sm:-mt-24
          md:-mt-32
          lg:-mt-40
          xl:-mt-48" 
      />
    </div>
  );
}

export default App;