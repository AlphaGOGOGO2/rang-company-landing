"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const showcaseItems = [
  {
    src: "/assets/rang-carousel-citrus.png",
    title: "Citrus & grocery",
    label: "소매 구색",
    alt: "감귤류 과일과 프리미엄 식품 패키지 이미지",
  },
  {
    src: "/assets/rang-carousel-berries.png",
    title: "Fresh cold chain",
    label: "신선 공급",
    alt: "베리류와 냉장 식품 공급 이미지",
  },
  {
    src: "/assets/rang-carousel-drygoods.png",
    title: "Dry goods",
    label: "위탁 상품",
    alt: "곡물과 건조 식품 패키지 이미지",
  },
  {
    src: "/assets/rang-carousel-export.png",
    title: "Export ready",
    label: "수출 납품",
    alt: "수출용 과일 상자와 납품 박스 이미지",
  },
  {
    src: "/assets/rang-hero-produce.png",
    title: "Produce mix",
    label: "도매 식품",
    alt: "도매와 납품용 신선 채소 이미지",
  },
];

export default function HeroShowcase() {
  const reduceMotion = useReducedMotion();
  const loopItems = [...showcaseItems, ...showcaseItems];

  return (
    <div className="hero-showcase" aria-label="주식회사 랑 취급 상품 이미지 쇼케이스">
      <div className="showcase-orbit" aria-hidden="true" />
      <div className="showcase-viewport">
        <motion.div
          className="showcase-track"
          animate={reduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 24,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          {loopItems.map((item, index) => (
            <motion.article
              className="showcase-card"
              key={`${item.title}-${index}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: Math.min(index, 4) * 0.08, duration: 0.45 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={680}
                height={680}
                sizes="(max-width: 640px) 74vw, (max-width: 980px) 42vw, 300px"
                {...(index === 0 ? { priority: true } : { loading: "lazy" as const })}
              />
              <div className="showcase-card-copy">
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <div className="showcase-caption">
        <span>Wholesale</span>
        <span>Consignment</span>
        <span>Delivery</span>
        <span>Export</span>
      </div>
    </div>
  );
}
