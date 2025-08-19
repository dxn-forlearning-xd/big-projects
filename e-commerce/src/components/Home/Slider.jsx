import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import styles from './Slider.module.css';

const Slider = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged() {},
    },
    [
      function AutoplayPlugin(slider) {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      {' '}
      <div className={styles.container}>
        <div className={styles.card}>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide ">
              <img src="./slider1.png" alt="slider1" />
            </div>
            <div className="keen-slider__slide">
              <img src="./slider2.png" alt="slider2" />
            </div>
            <div className="keen-slider__slide">
              <img src="./slider3.png" alt="slider3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
