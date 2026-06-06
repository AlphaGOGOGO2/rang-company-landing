import Image from "next/image";

const showcaseItems = [
  {
    src: "/assets/rang-carousel-citrus.webp",
    title: "Citrus & grocery",
    label: "소매 구색",
    alt: "감귤류 과일과 프리미엄 식품 패키지 이미지",
  },
  {
    src: "/assets/rang-carousel-berries.webp",
    title: "Fresh cold chain",
    label: "신선 공급",
    alt: "베리류와 냉장 식품 공급 이미지",
  },
  {
    src: "/assets/rang-carousel-drygoods.webp",
    title: "Dry goods",
    label: "위탁 상품",
    alt: "곡물과 건조 식품 패키지 이미지",
  },
  {
    src: "/assets/rang-carousel-export.webp",
    title: "Export ready",
    label: "수출 납품",
    alt: "수출용 과일 상자와 납품 박스 이미지",
  },
  {
    src: "/assets/rang-hero-produce.webp",
    title: "Produce mix",
    label: "도매 식품",
    alt: "도매와 납품용 신선 채소 이미지",
  },
];

const loopItems = [...showcaseItems, ...showcaseItems];

export default function HeroShowcase() {
  return (
    <div className="hero-showcase" aria-label="주식회사 랑 취급 상품 이미지 쇼케이스">
      <div className="showcase-orbit" aria-hidden="true" />
      <div className="showcase-viewport">
        <div className="showcase-track">
          {loopItems.map((item, index) => (
            <article
              className="showcase-card"
              key={`${item.title}-${index}`}
              style={{ animationDelay: `${Math.min(index, 4) * 0.08}s` }}
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
            </article>
          ))}
        </div>
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
