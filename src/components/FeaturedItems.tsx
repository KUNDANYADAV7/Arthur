import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePopularChoice } from '@/context/PopularChoiceContext';
import config from '@/config';
import Marquee from "react-fast-marquee";

interface MenuItem {
  id: string;
  name: string;
  photo: string;
}

const FeaturedMenu = () => {
  const navigate = useNavigate();
  const { allPopularChoices, fetchAllPopularChoices } = usePopularChoice();
  const [loading, setLoading] = useState(true); // 👈 Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // start loading
      await fetchAllPopularChoices();
      setLoading(false); // finish loading
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
            <Marquee
              direction="left"
              speed={90}
              gradient={false}
              pauseOnHover={false}
              className="px-12"
            >
              {allPopularChoices.map((item, index) => (
                <div
                  key={`${item._id}-${index}`}
                  className="cursor-pointer w-[200px] md:w-[422px] h-[100px] md:h-[200px] mr-4 last:mr-0 rounded-lg overflow-hidden flex items-center justify-center "
                >
                  <img
                    src={`${config.apiUrl}/${item.photo}`}
                    loading="lazy"
                    alt="img"
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </Marquee>
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
