import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Page({ mainTitle, text, titles, numbers, image }) {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [scrollY, setScrollY] = useState(0);

  const location = useLocation();

  function setPosition() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setPosition);
    }
    let array = [...counters];
    function updateCounter() {
      counters.forEach((counter, index) => {
        if (counter < numbers[index]) {
          array[index]++;
          setCounters(array);
        }
      });
    }

    if (scrollY > 100) {
      setTimeout(updateCounter, 75);
    } else if (scrollY < 100 && counters[0] !== 0) {
      reset();
    }

    function reset() {
      setCounters([0, 0, 0]);
    }

    watchScroll();
    return () => {
      window.removeEventListener("scroll", setPosition);
    };
  }, [location, counters, numbers, scrollY]);

  return (
    <>
      <section
        className="section-animate"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></section>
      <div className="section-inner-center">
        <h3>{mainTitle}</h3>
        <p>{text}</p>
      </div>
      <div className="stats">
        <div>
          <span className="counter" data-target={numbers[0]}>
            {counters[0]}
          </span>
          <h4>{titles[0]}</h4>
        </div>
        <div>
          <span className="counter" data-target={numbers[1]}>
            {counters[1]}
          </span>
          <h4>{titles[1]}</h4>
        </div>
        <div>
          <span className="counter" data-target={numbers[2]}>
            {counters[2]}
          </span>
          <h4>{titles[2]}</h4>
        </div>
      </div>
    </>
  );
}

export default Page;
