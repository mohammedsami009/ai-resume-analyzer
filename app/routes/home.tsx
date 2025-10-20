import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback to your dream job!" },
  ];
}

export default function Home() {
    const {auth} = usePuterStore();

    const navigate = useNavigate();


    useEffect(()=>{
        if(!auth.isAuthenticated) navigate('/auth?next=/');

    },[auth.isAuthenticated]);
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar/>

      <section className="main_section flex flex-col items-center text-center pt-24">
          <div className="page-heading max-w-2xl">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                  Track your application & Resume Ratings
              </h1>
              <h2 className="text-xl text-gray-700">
                  Review your submissions and check AI-powered feedback
              </h2>
          </div>

          {resumes.length > 0 && (
              <div className="resumes-section mt-16 flex flex-wrap justify-center gap-7 w-full">
                  {resumes.map(resume => (
                      <ResumeCard key={resume.id} resume={resume} />
                  ))}
              </div>
          )}
      </section>


  </main>
}
