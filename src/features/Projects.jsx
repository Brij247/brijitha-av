export const Projects = () => {
  return (
    <>
      <div className="text-2xl font-medium">Projects</div>
      <div className="p-5 border-2 border-gray-700 rounded-xl">
        <div className="text-xl font-medium">Sleep with Pees</div>
        <div className="">
          A calming and interactive web application designed for people
          struggling with insomnia.
        </div>
        <br />
        <div className="flex w-full gap-8 justify-evenly">
          <div>
            <iframe
              width="540"
              height="250"
              src="https://www.youtube.com/embed/gcQtO418V2E?si=Vb5urcm2jlgFCpLx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex justify-start items-start flex-col gap-3 text-left">
            <div>
              <span className="font-semibold">Features:</span>
              <ul className="list-none pl-0 space-y-1">
                <li>✅ Spotify Integration</li>
                <li>✅ Scribble Space</li>
                <li>✅ Futuristic Notepad</li>
                <li>✅ To-Do List with Actions</li>
                <li>✅ Daily Activity Calendar</li>
                <li>✅ Interactive Form</li>
                <li>✅ Authentication</li>
              </ul>
            </div>

            <div>
              <span className="font-semibold">Tech stack:</span> React JS,
              Router, Axios, Ant Design System, Spotify API, Vite
            </div>
            <a
              className="text-sky-600 underline"
              href="https://github.com/Brij247/sleep-with-pees"
              target="_blank"
            >
              <div>Source code</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
