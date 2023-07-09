import { BlitzPage } from "@blitzjs/auth"
import { Routes } from "@blitzjs/next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Login: BlitzPage = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    //check if user is already logged in
    const userLoggedIn = localStorage.getItem("isLoggedIn")
    if (userLoggedIn === "true") {
      router
        .push(Routes.Home())
        .then((e) => console.log(""))
        .catch((e) => console.log(e))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(process.env.NEXT_PUBLIC_USERNAME)
    if (
      username === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      localStorage.setItem("isLoggedIn", "true")
      router
        .push(Routes.Home())
        .then((e) => console.log(""))
        .catch((e) => console.log(e))
    } else {
      setError("Incorrect username or password")
    }
  }

  return (
    <>
      <section className="h-screen">
        <div className="container h-full py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="md:relative sm:absolute sm:collapse mb-12 md:mb-0 md:visible md:w-8/12 lg:w-6/12 lg:visible">
              <img
                src="https://www.barterenergy.es/wp-content/uploads/2022/01/ComoFunciona_MOB_02-1024x757.jpg"
                className="w-full"
                alt="Phone"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center pl-10">
                <h1 className="sm:text-2xl md:text-3xl lg:text-5xl text-white font-bold">
                  #InnovatingWithAI
                </h1>
              </div>
            </div>

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12 pr-7">
              <div className="flex justify-center">
                <img
                  src="https://www.barterenergy.es/wp-content/uploads/2021/12/logo_barter_color-1.png"
                  alt="Barter Logo"
                  className="pb-10 w-52"
                />
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="login-form__input"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />

                <input
                  type="password"
                  className="login-form__input"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500 mb-3">{error}</p>}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-purple-950 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-purple-950 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-purple-950 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
