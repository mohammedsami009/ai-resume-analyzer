import React, {useEffect} from "react"
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router-dom";
export const meta = () =>([
    {title:'Resumind | Auth'},
    {name:'description',content:'Log into your account'},
])

const auth = () =>{
    const {isLoading,auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();


    useEffect(()=>{
        if(auth.isAuthenticated) navigate(next);

    },[auth.isAuthenticated,next]);
    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center p-5">
            <div className = "gradient-border shadow-lg">
                <section className = "flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div>
                        <h1>
                            Welcome
                        </h1>
                        <h2>
                            Log In to Continue Your Job Journey
                        </h2>
                    </div>
                    <div>
                        {isLoading ?(
                            <button className = "auth-button animate-pulse">
                                <p>Signing you in...</p>
                            </button>
                        ):(
                            <>
                                {auth.isAuthenticated ? (
                                    <button className = "auth-button" onClick={auth.signOut}>
                                        <p>Log out</p>
                                    </button>
                                ):(
                                    <button className = "auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}
export default auth;