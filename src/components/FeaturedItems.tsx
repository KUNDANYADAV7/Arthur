import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePopularChoice } from '@/context/PopularChoiceContext';
import config from '@/config';
import Marquee from "react-fast-marquee";

const FeaturedMenu = () => {
  const navigate = useNavigate();
  const { allPopularChoices, fetchAllPopularChoices } = usePopularChoice();
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchAllPopularChoices();
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="section-padding">
      <div className="mx-auto px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pesto-brown mb-4 mt-10">Popular Choices</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our customer favorites, handcrafted with love and fresh ingredients
          </p>
        </div>

        <div className="overflow-hidden">
          {loading ? (
            <div className="text-center text-gray-600 py-10">Loading popular choices...</div>
          ) : allPopularChoices.length > 0 ? (
            <>
              <Marquee
                direction="left"
                speed={90}
                gradient={false}
                pauseOnHover={true}
                className="px-12"
              >
                {allPopularChoices.map((item, index) => (
                  <div
                    key={`${item._id}-${index}`}
                    className="cursor-pointer w-[200px] md:w-[422px] h-[100px] md:h-[200px] mr-4 last:mr-0 rounded-lg overflow-hidden flex items-center justify-center"
                    onClick={() => setModalImage(`${config.apiUrl}/${item.photo}`)}
                  >
                    <img
                      src={`${config.apiUrl}/${item.photo}`}
                      alt={item.title}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </Marquee>

              {/* Modal */}
              {modalImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
    <div className="relative w-[90vw] max-w-[600px] md:w-[600px]">
      {/* Close Button */}
      <button
        onClick={() => setModalImage(null)}
        className="absolute top-2 right-2 text-green-600 text-3xl font-bold z-10"
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={modalImage}
        alt="Enlarged"
        className="w-full h-auto max-h-[80vh] object-contain rounded-md"
      />
    </div>
  </div>
)}

            </>
          ) : (
            <div className="text-center text-gray-600 py-10">
              No popular choices available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
