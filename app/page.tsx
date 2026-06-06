import {
  ArrowUpRight,
  Boxes,
  Building2,
  CheckCircle2,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  ShoppingBag,
  Truck,
} from "lucide-react";
import Image from "next/image";
import HeroShowcase from "./HeroShowcase";
import ScrollReveal from "./ScrollReveal";
import ScrollControls from "./ScrollControls";
import ContactLink from "./ContactLink";
import {
  absoluteUrl,
  company,
  faqs,
  inquiryChecklist,
  partnerTypes,
  processSteps,
  productCoverage,
  serviceAreas,
  siteDescription,
  siteUrl,
} from "./site";
import FaqAccordion from "./FaqAccordion";

const serviceIcons = [Boxes, ShoppingBag, Handshake, Truck, Globe2];
const services = serviceAreas.map((service, index) => ({
  ...service,
  icon: serviceIcons[index],
}));

const foodImages = [
  {
    title: "Fresh produce",
    subtitle: "선도 중심",
    src: "/assets/rang-fresh-produce.webp",
    alt: "신선한 채소와 과일을 촬영한 주식회사 랑 식품 유통 이미지",
  },
  {
    title: "Packaged goods",
    subtitle: "납품 대응",
    src: "/assets/rang-packaged-goods.webp",
    alt: "위탁과 납품을 위한 포장 식품과 박스 이미지",
  },
  {
    title: "Global routes",
    subtitle: "수출 확장",
    src: "/assets/rang-export-logistics.webp",
    alt: "식품 수출 물류와 납품 박스를 촬영한 이미지",
  },
];

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": absoluteUrl("/#organization"),
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: absoluteUrl("/assets/logo/ranglogo.webp"),
    image: [
      absoluteUrl("/assets/rang-hero-produce.webp"),
      absoluteUrl("/assets/rang-fresh-produce.webp"),
      absoluteUrl("/assets/rang-packaged-goods.webp"),
    ],
    description: siteDescription,
    telephone: company.phoneInternational,
    email: company.email,
    founder: {
      "@type": "Person",
      name: company.representative,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: company.addressRegion,
      addressLocality: company.addressLocality,
      streetAddress: company.streetAddress,
      postalCode: company.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.latitude,
      longitude: company.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${company.latitude},${company.longitude}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: company.openingHours.days,
        opens: company.openingHours.opens,
        closes: company.openingHours.closes,
      },
    ],
    priceRange: company.priceRange,
    areaServed: [
      {
        "@type": "Country",
        name: "대한민국",
      },
      {
        "@type": "AdministrativeArea",
        name: "전국 식품 납품 및 유통 상담",
      },
      {
        "@type": "Place",
        name: "해외 수출 거래 지역",
      },
    ],
    knowsAbout: [
      ...serviceAreas.map((service) => `식품 ${service.label}`),
      ...productCoverage.map((item) => item.title),
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phoneInternational,
        email: company.email,
        contactType: "business inquiry",
        areaServed: "KR",
        availableLanguage: ["ko"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "식품 유통 서비스",
      itemListElement: serviceAreas.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `식품 ${service.label}`,
          description: service.detail,
          provider: {
            "@id": absoluteUrl("/#organization"),
          },
        },
      })),
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: company.name,
    url: siteUrl,
    inLanguage: "ko-KR",
    description: siteDescription,
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const productCoverageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/#coverage"),
    name: "주식회사 랑 취급 품목과 공급 채널",
    itemListElement: productCoverage.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.body,
      url: absoluteUrl("/#coverage"),
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationJsonLd,
            webSiteJsonLd,
            faqJsonLd,
            productCoverageJsonLd,
          ]),
        }}
      />
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header" aria-label="주요 메뉴">
          <a className="brand-mark" href="#top" aria-label="주식회사 랑 홈">
            <Image
              className="header-logo-image"
              src="/assets/logo/ranglogo.webp"
              alt="주식회사 랑"
              width={240}
              height={101}
              priority
            />
          </a>
          <nav className="nav-links" aria-label="페이지 이동">
            <a href="#services">서비스</a>
            <a href="#process">운영</a>
            <a href="#partners">상담 준비</a>
            <a href="#contact">문의</a>
          </nav>
          <a className="header-action" href={company.phoneHref}>
            <Phone size={17} aria-hidden="true" />
            상담하기
          </a>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Food trading partner</p>
            <h1 id="hero-title" className="hero-logo-title">
              <span className="sr-only">
                주식회사 랑 식품 도매 소매 위탁 납품 수출 파트너
              </span>
              <Image
                className="hero-logo-image"
                src="/assets/logo/ranglogo.webp"
                alt=""
                width={800}
                height={337}
                priority
              />
            </h1>
            <p className="hero-lede">
              <span>식품 도매와 소매, 위탁, 납품, 수출을</span>
              <span>한 번에 연결하는 프리미엄 유통 파트너입니다.</span>
            </p>
            <div className="hero-actions" aria-label="주요 연락">
              <ContactLink
                className="primary-button"
                href={company.phoneHref}
                copyValue={company.phone}
                feedback="전화번호를 복사했습니다"
              >
                <Phone size={18} aria-hidden="true" />
                {company.phone}
              </ContactLink>
              <ContactLink
                className="secondary-button"
                href={company.emailHref}
                copyValue={company.email}
                feedback="이메일을 복사했습니다"
              >
                <Mail size={18} aria-hidden="true" />
                이메일 문의
              </ContactLink>
            </div>
            <div className="hero-metrics" aria-label="주요 사업 영역">
              <span>도매</span>
              <span>소매</span>
              <span>위탁</span>
              <span>납품</span>
              <span>수출</span>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </section>

      <ScrollReveal className="statement" aria-label="핵심 소개">
        <div className="statement-art">
          <span>납품</span>
          <span>위탁</span>
          <span>수출</span>
        </div>
        <div>
          <p className="eyebrow dark">Rang company</p>
          <h2>
            <span>식품 유통의 필요한 지점을</span>
            <span>한 번에 맞춥니다.</span>
          </h2>
        </div>
        <p className="statement-copy">
          <span>거래처의 판매 방식, 물량, 일정, 채널에 따라</span>
          <span>상품을 연결하고 안정적인 공급 흐름을</span>
          <span>만드는 데 집중합니다.</span>
        </p>
      </ScrollReveal>

      <ScrollReveal className="services-section" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <p className="eyebrow dark">Business area</p>
          <h2 id="services-title">다섯 가지 유통 범위</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.label}>
                <Icon size={24} aria-hidden="true" />
                <h3>{service.label}</h3>
                <p>{service.detail}</p>
              </article>
            );
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal className="partners-section" id="partners" aria-labelledby="partners-title">
        <div className="section-heading">
          <p className="eyebrow dark">Trade fit</p>
          <h2 id="partners-title">이런 거래에 맞습니다</h2>
        </div>
        <div className="partners-layout">
          <div className="partner-grid">
            {partnerTypes.map((partner) => (
              <article className="partner-card" key={partner.title}>
                <Building2 size={23} aria-hidden="true" />
                <h3>{partner.title}</h3>
                <p>{partner.body}</p>
              </article>
            ))}
          </div>
          <aside className="inquiry-panel" aria-labelledby="inquiry-title">
            <p className="eyebrow">Before contact</p>
            <h3 id="inquiry-title">상담 전 확인 정보</h3>
            <ul>
              {inquiryChecklist.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={company.phoneHref}>
              <Phone size={18} aria-hidden="true" />
              바로 상담하기
            </a>
          </aside>
        </div>
      </ScrollReveal>

      <ScrollReveal className="process-section" id="process" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="eyebrow dark">How we work</p>
          <h2 id="process-title">공급 운영 방식</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="coverage-section" id="coverage" aria-labelledby="coverage-title">
        <div className="section-heading">
          <p className="eyebrow dark">Coverage</p>
          <h2 id="coverage-title">취급 품목과 공급 채널</h2>
        </div>
        <div className="coverage-grid">
          {productCoverage.map((item) => (
            <article className="coverage-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="food-section" id="food" aria-labelledby="food-title">
        <div className="section-heading">
          <p className="eyebrow dark">Food first</p>
          <h2 id="food-title">식품이 중심인 운영 방식</h2>
        </div>
        <div className="food-grid">
          {foodImages.map((image) => (
            <article className="food-tile" key={image.title}>
              <Image
                src={image.src}
                alt={image.alt}
                width={720}
                height={760}
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                loading="lazy"
              />
              <div>
                <span>{image.subtitle}</span>
                <h3>{image.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="eyebrow dark">FAQ</p>
          <h2 id="faq-title">자주 묻는 질문</h2>
        </div>
        <FaqAccordion items={faqs} />
      </ScrollReveal>

      <ScrollReveal className="contact-band" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">
            <span>거래 문의는 대표 연락처로</span>
            <span>바로 연결됩니다.</span>
          </h2>
        </div>
        <div className="contact-actions">
          <a href={company.phoneHref}>
            <Phone size={19} aria-hidden="true" />
            전화 문의
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={company.emailHref}>
            <Mail size={19} aria-hidden="true" />
            메일 문의
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </ScrollReveal>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image
            className="footer-logo-image"
            src="/assets/logo/ranglogo.webp"
            alt="주식회사 랑"
            width={240}
            height={101}
          />
          <div>
            <p>도매 / 소매 / 위탁 / 납품 / 수출</p>
          </div>
        </div>
        <address>
          <span>대표 {company.representative}</span>
          <a href={company.phoneHref}>{company.phone}</a>
          <a href={company.emailHref}>{company.email}</a>
          <span>
            <MapPin size={16} aria-hidden="true" />
            {company.address}
          </span>
        </address>
        <div className="footer-seal" aria-label="주요 취급 분야">
          <PackageCheck size={19} aria-hidden="true" />
          Food distribution
        </div>
      </footer>
      <ScrollControls />
    </main>
  );
}
