import { ContactForm } from "../components/ContactForm";


export function Contact() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-zinc-900 p-8 rounded-3xl shadow-l">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="text-zinc-300 space-y-6">
          <p className="text-lg"> 
            Feel free to reach out through any of the following channels:
          </p>

          <ContactForm />
          
          <div className="space-y-4 mt-8">
            <a
              href="mailto:zak.darnoise@gmail.com"
              className="flex items-center gap-4 p-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl transition-colors shadow-l"
            >
              <i className="fa-solid fa-envelope text-2xl"></i>
              <div>
                <div className="font-semibold text-zinc-100">Email</div>
                <div className="text-sm text-zinc-400">zak.darnoise@gmail.com</div>
              </div>
            </a>

            <a
              href="https://github.com/Zac-oihfdwrrtuinvbcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl transition-colors shadow-l"
            >
              <i className="fa-brands fa-github text-2xl"></i>
              <div>
                <div className="font-semibold text-zinc-100">GitHub</div>
                <div className="text-sm text-zinc-400">Check out my repositories</div>
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/zac-darmoise-058a82319/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl transition-colors shadow-l"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
              <div>
                <div className="font-semibold text-zinc-100">LinkedIn</div>
                <div className="text-sm text-zinc-400">Let's connect professionally</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}