import Header from '../components/home/Header'
import Hero from '../components/home/Hero'


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Header />
      <Hero />
      <main  className="flex flex-col items-center justify-center">
      </main>
    </div>
  );
}
