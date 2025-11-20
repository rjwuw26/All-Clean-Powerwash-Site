export default function ServiceCard({ title, description }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transtion">
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>

                <a
                    href="/contact"
                    className="inline-bloc kbg-blue-600 text-white px-4 py-2 round-lg font-semibold hover:bg-blue-700 transition">
                        Learn More
                    </a>
      </div>
    </div>
  );
}