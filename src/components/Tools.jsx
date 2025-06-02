import { React, Firebase, HTML5, CSS3, TailwindCSS, JavaScript, Git, GitHubLight, Supabase } from "developer-icons"

const Tools = () => {
  return (
    <section className="w-full min-h-screen">
        <div className="w-full h-[4rem] flex ">
            <React/>
            <Firebase className="ml-2" />
            <HTML5 className="ml-2" />
            <CSS3 className="ml-2" />
            <TailwindCSS className="ml-2" />
            <JavaScript className="ml-2" />
            <Git className="ml-2" />
            <GitHubLight className="ml-2" />
            <Supabase className="ml-2" />
        </div>
    </section>
  )
}

export default Tools