export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-customBlue flex items-center justify-center py-5"
    >
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold mb-6 text-white">My Projects</h2>
        <p className="text-lg text-white text-gray-600 mb-12">
          A showcase of the work and accomplishments I've been proud to
          contribute to.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center max-w-screen-lg mx-auto">
          <div className="relative bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 mx-auto">
            <img
              src="/home.png"
              alt="Inventory Management System"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2 mt-4 text-gray-800">
                Sales and Inventory Management System
              </h4>
              <p className="text-gray-600 mb-2">
                Built using Laravel and MySQL
              </p>
              <p className="text-gray-700 leading-relaxed">
                Implemented an inventory management system that supports
                real-time stock tracking, supplier management, and purchase
                order generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
