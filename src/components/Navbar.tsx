export const NavBar = () => {
  return (
    <section className="w-full px-5 py-5 text-center bg-[#ff00ff] welcome-animation ">
      <div className="flex justify-between">
        <div>
          <h3 className="text-5xl font-bold text-white">Notes App</h3>
          <p className="mt-4 text-xl text-white">Start Your Day 🚀 !!!</p>
        </div>
        <div className="flex gap-5 items-center py-5">
          <input
            className="h-[45px] w-[300px] rounded-full outline-none input-centered-placeholder text-center"
            placeholder="Search Notes"
          />
          <h4 className="text-white hover:text-black cursor-pointer">Go Pro</h4>
          <h4 className="text-white hover:text-black cursor-pointer">
            {" "}
            Trending
          </h4>
          <h4 className="text-white hover:text-black cursor-pointer">
            Ai Text
          </h4>

          <button className="px-6 py-3 text-lg font-medium text-white bg-black rounded-lg hover:bg-green-600">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};
