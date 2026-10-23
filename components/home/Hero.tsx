import SkyGradient from "./SkyGradient"

// Hero

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Calque du fond animé */}
      <div className="absolute inset-0">
        <SkyGradient style={{ height: "100%", aspectRatio: "auto" }} />
      </div>

      {/* Calque du texte, au-dessus du fond */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white font-bold heading">Laisser libre court à sa créativité.</h1>
      </div>
    </section>
  )
}