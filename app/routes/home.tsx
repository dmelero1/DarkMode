import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import ThemeToggle from "~/components/ThemeToggle";
import Card1 from "~/components/Card1";
import Header from "~/components/Header";


export default function Home() {
  return (
    <main className="flex items-center justify-center pb-4">
      <div className="flex-1 flex flex-col ml-15 mr-15 gap-16 min-h-0">
        <Header />
        <Card1 />
      </div>
    </main>
  )
}
