export const portfolioConfig = {
  // 히어로 섹션 설정
  hero: {
    // 배경 영상
    backgroundVideo: "/KakaoTalk_20251022_132408567.mp4",
    
    // 프로필 이미지 설정
    profileImage: {
      enabled: true,
      type: "gradient", // "gradient" 또는 "image"
      gradientColors: "from-blue-400 via-purple-500 to-pink-500",
      imagePath: null, // 실제 이미지가 있다면 경로 입력
      size: "w-80 h-80", // 크기 조정 가능
      text: "최", // 그라데이션일 때 표시할 텍스트
      textSize: "text-8xl",
      ringColor: "ring-white/20"
    },
    
    // 텍스트 설정
    texts: {
      greeting: {
        text: "안녕하세요",
        size: "text-6xl lg:text-8xl",
        weight: "font-black",
        color: "text-white",
        shadow: "drop-shadow-2xl"
      },
      company: {
        text: "(주)누리온홀딩스",
        size: "text-3xl lg:text-4xl",
        weight: "font-bold",
        color: "text-white/90",
        gradient: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      },
      ceo: {
        text: "최인석",
        size: "text-3xl lg:text-4xl",
        weight: "font-bold",
        color: "text-yellow-300"
      },
      description: {
        text: "기업컨설팅, 응용 소프트웨어 개발, 부동산 개발을 통해 고객의 성공을 돕습니다.",
        size: "text-xl lg:text-2xl",
        weight: "font-normal",
        color: "text-white/80"
      },
      slogan: {
        text: "미래를 향한 등불...누리온",
        size: "text-2xl",
        weight: "font-light",
        color: "text-white/70",
        style: "italic"
      }
    },
    
    // CTA 버튼들
    buttons: [
      {
        text: "프로젝트 문의",
        type: "primary",
        href: "#contact",
        gradient: "from-blue-600 to-purple-600"
      },
      {
        text: "더 알아보기",
        type: "secondary",
        href: "#about",
        border: "border-white/30"
      }
    ]
  },

  // About Us 섹션 설정
  about: {
    title: {
      text: "About Us",
      size: "text-5xl lg:text-6xl",
      weight: "font-black",
      color: "text-white",
      gradient: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
    },
    
    // 동적 박스들
    boxes: [
      {
        id: "overview",
        title: "회사 개요",
        titleSize: "text-3xl",
        titleWeight: "font-bold",
        titleColor: "text-white",
        content: "누리온홀딩스는 기업컨설팅, 응용 소프트웨어 개발 및 공급업, 부동산 개발을 통해 고객의 성공을 최우선으로 하는 종합 기업입니다.",
        contentSize: "text-xl",
        contentColor: "text-white/80",
        icon: "🏢",
        iconSize: "text-4xl",
        backgroundColor: "bg-white/5",
        borderColor: "border-white/10"
      },
      {
        id: "vision",
        title: "비전",
        titleSize: "text-3xl",
        titleWeight: "font-bold",
        titleColor: "text-white",
        content: "미래를 향한 등불이 되어 고객과 함께 성장하는 글로벌 기업으로 발전하겠습니다.",
        contentSize: "text-xl",
        contentColor: "text-white/80",
        icon: "🌟",
        iconSize: "text-4xl",
        backgroundColor: "bg-white/5",
        borderColor: "border-white/10"
      },
      {
        id: "mission",
        title: "미션",
        titleSize: "text-3xl",
        titleWeight: "font-bold",
        titleColor: "text-white",
        content: "고객의 성공을 최우선으로 하여 최고의 서비스와 가치를 제공합니다.",
        contentSize: "text-xl",
        contentColor: "text-white/80",
        icon: "🎯",
        iconSize: "text-4xl",
        backgroundColor: "bg-white/5",
        borderColor: "border-white/10"
      }
    ],
    
    // 성과 지표
    stats: [
      { 
        number: "10+", 
        label: "년 경력", 
        color: "blue-400",
        gradient: "from-blue-500/20 to-purple-500/20"
      },
      { 
        number: "100+", 
        label: "프로젝트", 
        color: "purple-400",
        gradient: "from-purple-500/20 to-pink-500/20"
      },
      { 
        number: "50+", 
        label: "고객사", 
        color: "pink-400",
        gradient: "from-pink-500/20 to-orange-500/20"
      },
      { 
        number: "99%", 
        label: "만족도", 
        color: "orange-400",
        gradient: "from-orange-500/20 to-yellow-500/20"
      }
    ]
  },

  // 주요 사업 영역 섹션
  services: {
    title: {
      text: "주요 사업 영역",
      size: "text-5xl lg:text-6xl",
      weight: "font-black",
      color: "text-white",
      gradient: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
    },
    
    // 동적 서비스 카드들
    cards: [
      {
        id: "consulting",
        icon: "💼",
        title: "기업컨설팅",
        description: "기업의 성장과 발전을 위한 전략적 컨설팅 서비스를 제공합니다.",
        color: "from-blue-500 to-blue-600",
        hoverColor: "blue-400/50",
        shadowColor: "blue-500/25",
        // 미디어 파일들
        media: {
          image: null, // 이미지 경로
          video: null, // 영상 경로
          link: null   // 외부 링크
        },
        // 추가 정보
        features: ["전략 수립", "성과 분석", "프로세스 개선"],
        price: "상담 후 결정"
      },
      {
        id: "software",
        icon: "💻",
        title: "응용 소프트웨어 개발",
        description: "고객 맞춤형 소프트웨어 개발 및 공급업을 통해 디지털 혁신을 지원합니다.",
        color: "from-purple-500 to-purple-600",
        hoverColor: "purple-400/50",
        shadowColor: "purple-500/25",
        media: {
          image: null,
          video: null,
          link: null
        },
        features: ["웹 개발", "모바일 앱", "시스템 통합"],
        price: "프로젝트별 견적"
      },
      {
        id: "realestate",
        icon: "🏢",
        title: "부동산 개발",
        description: "혁신적인 부동산 개발 프로젝트를 통해 새로운 가치를 창조합니다.",
        color: "from-pink-500 to-pink-600",
        hoverColor: "pink-400/50",
        shadowColor: "pink-500/25",
        media: {
          image: null,
          video: null,
          link: null
        },
        features: ["개발 계획", "투자 분석", "프로젝트 관리"],
        price: "투자 규모별"
      },
      {
        id: "pm-contract",
        icon: "📋",
        title: "PM계약대행",
        description: "프로젝트 매니저 계약 대행 서비스로 안전하고 효율적인 계약을 지원합니다.",
        color: "from-emerald-500 to-emerald-600",
        hoverColor: "emerald-400/50",
        shadowColor: "emerald-500/25",
        media: {
          image: null,
          video: null,
          link: null
        },
        features: ["계약서 작성", "법적 검토", "리스크 관리", "계약 체결 지원"],
        price: "프로젝트 규모별",
        downloadFiles: [
          {
            name: "PM계약서 양식",
            description: "표준 PM계약서 양식 다운로드",
            fileName: "pm-contract-template.pdf",
            memberOnly: true
          },
          {
            name: "계약 체크리스트",
            description: "PM계약 시 확인사항 체크리스트",
            fileName: "contract-checklist.pdf",
            memberOnly: true
          }
        ]
      }
    ]
  },

  // 연락처 섹션
  contact: {
    title: {
      text: "연락처",
      size: "text-5xl lg:text-6xl",
      weight: "font-black",
      color: "text-white",
      gradient: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
    },
    
    info: [
      {
        type: "phone",
        icon: "📞",
        label: "전화",
        value: "010-5945-5925",
        href: "tel:010-5945-5925",
        color: "from-blue-500 to-blue-600"
      },
      {
        type: "email",
        icon: "✉️",
        label: "이메일",
        value: "aibrew@naver.com",
        href: "mailto:aibrew@naver.com",
        color: "from-purple-500 to-purple-600"
      },
      {
        type: "address",
        icon: "📍",
        label: "주소",
        value: "세종특별자치시 집현중앙7로6, 9층",
        href: null,
        color: "from-pink-500 to-pink-600"
      },
      {
        type: "website",
        icon: "🌐",
        label: "웹사이트",
        value: "www.nurionholdings.com",
        href: "https://www.nurionholdings.com",
        color: "from-green-500 to-green-600"
      }
    ],
    
    buttons: [
      {
        text: "전화하기",
        href: "tel:010-5945-5925",
        type: "primary",
        gradient: "from-blue-600 to-purple-600",
        icon: "📞"
      },
      {
        text: "이메일 보내기",
        href: "mailto:aibrew@naver.com",
        type: "secondary",
        border: "border-white/30",
        icon: "✉️"
      },
      {
        text: "웹사이트 방문",
        href: "https://www.nurionholdings.com",
        type: "secondary",
        border: "border-green-300",
        icon: "🌐"
      }
    ]
  },

  // 전체 디자인 설정
  design: {
    theme: "dark",
    primaryGradient: "from-blue-400 to-purple-400",
    accentColor: "yellow-300",
    backgroundGradient: "from-slate-900 via-purple-900 to-slate-900",
    sectionSpacing: "py-32",
    containerMaxWidth: "max-w-7xl",
    borderRadius: "rounded-3xl",
    shadow: "shadow-2xl"
  }
};
