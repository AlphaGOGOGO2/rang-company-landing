import Image from "next/image";

const showcaseItems = [
  {
    src: "/assets/rang-service-wholesale.webp",
    label: "도매",
    englishLabel: "Wholesale",
    alt: "도매 식품 유통 이미지",
  },
  {
    src: "/assets/rang-service-retail.webp",
    label: "소매",
    englishLabel: "Retail",
    alt: "소매 식품 유통 이미지",
  },
  {
    src: "/assets/rang-service-consignment.webp",
    label: "위탁",
    englishLabel: "Consignment",
    alt: "위탁 식품 유통 이미지",
  },
  {
    src: "/assets/rang-service-delivery.webp",
    label: "납품",
    englishLabel: "Delivery",
    alt: "납품 식품 유통 이미지",
  },
  {
    src: "/assets/rang-service-export.webp",
    label: "수출",
    englishLabel: "Export",
    alt: "수출 식품 유통 이미지",
  },
];

const loopItems = [...showcaseItems, ...showcaseItems];

export default function HeroShowcase() {
  return (
    <div className="hero-showcase" aria-label="주식회사 랑 유통 범위 이미지 쇼케이스">
      <div className="showcase-orbit" aria-hidden="true" />
      <div className="showcase-viewport">
        <div className="showcase-track">
          {loopItems.map((item, index) => (
            <article
              className="showcase-card"
              key={`${item.label}-${index}`}
              style={{ animationDelay: `${Math.min(index, 4) * 0.08}s` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={640}
                sizes="(max-width: 640px) 52vw, (max-width: 980px) 32vw, 260px"
                quality={75}
                {...(index < 4
                  ? { priority: true, fetchPriority: "high" as const }
                  : { loading: "lazy" as const })}
              />
              <div className="showcase-card-copy">
                <strong>{item.label}</strong>
                <span>{item.englishLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
