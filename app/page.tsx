import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Projects from '../components/main/Projects'
import Tools from '../components/main/Tools'
import Categories from '../components/home/Categories'


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <Header />
      <Hero />
      <Categories />
      <main  className="flex flex-col w-full">
        <Projects />
        <Tools />
      </main>
    </div>
  );
}
