import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="bio">
      <SectionTitle>Bio</SectionTitle>
      <SectionText className="bio-text">
        24 rokov, pracovne Web Developer, skoro absolvent FEI STU v Bratislave,
        pochádzam z Vrábel, malého mesta pri Nitre. Momentálne bývam v
        Bratislave. Už od šiestich rokov, čo ma mamka posadila za gitaru na
        krúžku v škole sa venujem hudbe. Klavír som začal na umeleckej škole od
        ôsmich, bicie od trinástich a nejak som sa dostal aj ku spevu. Takto sa
        to nabaľovalo az ku hudobnej produkcii a mixáži prvých songov kapely Not
        Yet Awake (nájdete ju na spotify/youtube). Toto bol môj život asi do
        minulého roku, kedy som začal riešiť viac prácu a školu (diplomovú
        prácu). Koncerty a hranie každý víkend nebolo to čo som hľadal a
        rozhodol som sa toto hobby na chvíľu pozastaviť. Už dlhšie som sa
        pohrával s myšlienkou robiť video, bavilo ma editovať fotky a hrať sa s
        farbami, tak to začalo asi u viacerých. Keď som sa rozhodol konečne si
        kúpiť moju prvú Sony bezzrkadlovku, objavil som další passion, ktorému
        som ihneď prepadol. Môj proces hľadania sa v tomto svete začal hudbou a
        teraz pokračuje videom, nehovorím, že tu aj skončím ale na teraz to je
        moja cesta. Dnes končím posledný semester vysokej školy, riešim prestup
        z brigádnika na full-time a po víkendoch rád točím a strihám video.
        Veľká časť video produkcie, ktorá ma zhltla je samotné farbenie a color
        grade. Ako mi to ide môžeš pozrieť aj dole v projektoch, ak tam toho moc
        nie je, znamená že tu si dosť skoro, a ešte som toho veľa nestihol, tak
        vitaj :). <br /> Verím, že toho bude čoskoro viac.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
