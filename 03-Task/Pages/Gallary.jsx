const images = [
    "https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Gallary = () => {
    return (
        <section className="py-16 bg-gray-100">
            <h1 className="text-center text-4xl font-semibold text-gray-800 mb-10">
                Gallery 🌍
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="h-130 rounded-2xl overflow-hidden shadow-lg group"
                    >
                        <img
                            src={img}
                            alt="travel"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallary;
