export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://rang-eight.vercel.app";

export const company = {
  name: "주식회사 랑",
  legalName: "주식회사 랑",
  representative: "모근호",
  phone: "010.5738.8728",
  phoneHref: "tel:01057388728",
  phoneInternational: "+82-10-5738-8728",
  email: "rangcompany@kakao.com",
  emailHref: "mailto:rangcompany@kakao.com",
  address: "대구광역시 달서구 용산로 141, 그랜드M타워 1305호",
  addressRegion: "대구광역시",
  addressLocality: "달서구",
  streetAddress: "용산로 141, 그랜드M타워 1305호",
};

export const siteDescription =
  "주식회사 랑은 식품을 중심으로 도매, 소매, 위탁, 납품, 수출까지 연결하며 전국 거래처의 판매 방식과 물량, 일정, 채널에 맞춰 안정적인 공급 흐름을 설계합니다.";

export const serviceAreas = [
  { label: "도매", detail: "대량 공급과 반복 발주에 맞춘 식품 유통" },
  { label: "소매", detail: "판매 채널별 상품 구색과 안정적 운영" },
  { label: "위탁", detail: "상품 특성에 맞춘 유연한 위탁 판매" },
  { label: "납품", detail: "사업장 일정에 맞춘 빠른 공급 대응" },
  { label: "수출", detail: "해외 거래를 염두에 둔 식품 소싱" },
];

export const processSteps = [
  {
    title: "거래 방식 확인",
    body: "도매, 소매, 위탁, 납품, 수출 중 필요한 방식과 판매 채널을 먼저 정리합니다.",
  },
  {
    title: "상품과 물량 매칭",
    body: "취급 품목, 희망 수량, 납기, 보관 조건을 기준으로 공급 가능한 상품을 연결합니다.",
  },
  {
    title: "일정과 조건 조율",
    body: "입고 일정, 납품 주기, 결제 조건, 수출 진행 범위를 거래처 상황에 맞춰 조율합니다.",
  },
  {
    title: "안정 공급 운영",
    body: "반복 발주와 시즌 물량에 대응할 수 있도록 공급 흐름을 지속적으로 관리합니다.",
  },
];

export const partnerTypes = [
  {
    title: "유통사와 도매 거래처",
    body: "반복 발주, 시즌 물량, 채널별 구색에 맞춰 공급 가능한 식품을 검토합니다.",
  },
  {
    title: "온라인 판매 채널",
    body: "상세페이지 구성, 포장 단위, 위탁 조건 등 판매 방식에 맞는 상품 연결을 돕습니다.",
  },
  {
    title: "사업장 납품처",
    body: "입고 일정, 납품 주기, 보관 조건을 기준으로 안정적인 공급 흐름을 맞춥니다.",
  },
  {
    title: "수출 및 해외 거래",
    body: "희망 국가, 물량, 포장 조건을 확인하고 수출 가능 품목과 공급 조건을 검토합니다.",
  },
];

export const inquiryChecklist = [
  "희망 거래 방식",
  "취급 또는 희망 품목",
  "예상 물량과 납품 주기",
  "판매 채널과 입고 지역",
  "포장, 보관, 수출 조건",
];

export const faqs = [
  {
    question: "주식회사 랑은 어떤 식품 거래를 주로 하나요?",
    answer:
      "식품을 중심으로 도매, 소매, 위탁 판매, 사업장 납품, 수출 거래를 연결합니다. 거래처의 판매 방식과 물량에 맞춰 상품을 검토합니다.",
  },
  {
    question: "전국 단위 납품이나 공급 상담도 가능한가요?",
    answer:
      "가능합니다. 특정 지역에만 한정하지 않고 거래 방식, 물량, 납품 일정, 입고 지역을 기준으로 전국 공급 가능성을 검토합니다.",
  },
  {
    question: "소량 소매 거래와 대량 도매 거래를 모두 상담할 수 있나요?",
    answer:
      "가능합니다. 판매 채널, 희망 물량, 납품 일정에 따라 소매 구색부터 반복 도매 공급까지 조건을 나눠 상담합니다.",
  },
  {
    question: "위탁 판매나 납품 일정 조율도 가능한가요?",
    answer:
      "가능합니다. 상품 특성, 보관 조건, 입고 주기, 판매 채널을 확인한 뒤 위탁 또는 납품에 적합한 운영 방식을 조율합니다.",
  },
  {
    question: "수출 문의는 어떤 정보를 준비하면 좋나요?",
    answer:
      "희망 품목, 국가 또는 거래 지역, 물량, 납기, 포장 조건을 알려주시면 수출 가능성과 공급 흐름을 더 빠르게 검토할 수 있습니다.",
  },
  {
    question: "온라인 판매용 식품 공급도 상담할 수 있나요?",
    answer:
      "가능합니다. 온라인 판매 채널, 판매 단위, 포장 형태, 위탁 여부를 확인한 뒤 상품 연결과 공급 조건을 검토합니다.",
  },
  {
    question: "상담 전에 어떤 정보를 준비하면 좋나요?",
    answer:
      "거래 방식, 희망 품목, 예상 물량, 납품 주기, 입고 지역, 포장이나 보관 조건을 알려주시면 더 정확하게 상담할 수 있습니다.",
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
