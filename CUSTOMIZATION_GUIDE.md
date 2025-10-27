# 🚀 완전 커스터마이징 가능한 프리미엄 포트폴리오 템플릿

인석 형님의 요구사항을 모두 반영한 완전히 커스터마이징 가능한 포트폴리오 템플릿입니다!

## ✨ 새로운 주요 기능

### 🎨 **1. 히어로 섹션 완전 커스터마이징**
- ✅ 프로필 이미지 교체 (그라데이션 또는 실제 이미지)
- ✅ 모든 텍스트 크기, 색상, 폰트 자유 편집
- ✅ CTA 버튼 개수 및 스타일 자유 설정

### 📦 **2. About Us 동적 박스 시스템**
- ✅ 원하는 만큼 박스 추가/삭제
- ✅ 각 박스별 아이콘, 제목, 내용 자유 편집
- ✅ 성과 지표 동적 생성

### 🎯 **3. 주요사업영역 고급 기능**
- ✅ 원하는 만큼 서비스 카드 추가
- ✅ 각 카드에 이미지/영상/링크 삽입 가능
- ✅ 주요 특징, 가격 정보 표시
- ✅ 외부 링크 및 문의 버튼

### 📱 **4. 완벽한 반응형 디자인**
- ✅ PC, 태블릿, 모바일 최적화
- ✅ 모든 화면 크기에서 깨지지 않는 레이아웃
- ✅ 터치 인터페이스 최적화

## 🛠️ 설치 및 실행

```bash
# 프로젝트 클론
git clone [your-repo-url]
cd portfolio

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## ⚙️ 완전 커스터마이징 가이드

### 🎬 **히어로 섹션 설정**

`src/config/portfolio.ts`에서 히어로 섹션을 완전히 커스터마이징할 수 있습니다:

```typescript
hero: {
  // 배경 영상 변경
  backgroundVideo: "/your-video.mp4",
  
  // 프로필 이미지 설정
  profileImage: {
    enabled: true,
    type: "image", // "gradient" 또는 "image"
    imagePath: "/profile.jpg", // 실제 이미지 경로
    size: "w-96 h-96", // 크기 조정
    text: "최", // 그라데이션일 때 텍스트
    textSize: "text-9xl", // 텍스트 크기
    ringColor: "ring-blue-500/50" // 테두리 색상
  },
  
  // 모든 텍스트 커스터마이징
  texts: {
    greeting: {
      text: "안녕하세요",
      size: "text-7xl lg:text-9xl", // 크기
      weight: "font-extrabold", // 폰트 굵기
      color: "text-blue-100", // 색상
      shadow: "drop-shadow-2xl" // 그림자
    },
    company: {
      text: "새로운 회사명",
      size: "text-4xl lg:text-5xl",
      weight: "font-black",
      color: "text-white",
      gradient: "bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
    },
    // ... 나머지 텍스트들
  },
  
  // CTA 버튼들
  buttons: [
    {
      text: "새로운 버튼",
      type: "primary",
      href: "#contact",
      gradient: "from-green-600 to-blue-600"
    },
    {
      text: "추가 버튼",
      type: "secondary",
      href: "#about",
      border: "border-green-300"
    }
  ]
}
```

### 📦 **About Us 박스 추가/수정**

원하는 만큼 박스를 추가할 수 있습니다:

```typescript
about: {
  boxes: [
    {
      id: "overview",
      title: "회사 개요",
      titleSize: "text-4xl", // 제목 크기
      titleWeight: "font-extrabold", // 제목 굵기
      titleColor: "text-blue-100", // 제목 색상
      content: "새로운 회사 설명...",
      contentSize: "text-2xl", // 내용 크기
      contentColor: "text-white/90", // 내용 색상
      icon: "🏢", // 아이콘 변경
      iconSize: "text-5xl", // 아이콘 크기
      backgroundColor: "bg-blue-500/10", // 배경색
      borderColor: "border-blue-400/30" // 테두리 색상
    },
    {
      id: "new-box",
      title: "새로운 박스",
      titleSize: "text-3xl",
      titleWeight: "font-bold",
      titleColor: "text-white",
      content: "새로운 내용...",
      contentSize: "text-xl",
      contentColor: "text-white/80",
      icon: "🌟",
      iconSize: "text-4xl",
      backgroundColor: "bg-white/5",
      borderColor: "border-white/10"
    }
    // 원하는 만큼 박스 추가 가능!
  ]
}
```

### 🎯 **주요사업영역 고급 설정**

각 서비스 카드에 이미지, 영상, 링크를 추가할 수 있습니다:

```typescript
services: {
  cards: [
    {
      id: "consulting",
      icon: "💼",
      title: "기업컨설팅",
      description: "서비스 설명...",
      color: "from-blue-500 to-blue-600",
      hoverColor: "blue-400/50",
      shadowColor: "blue-500/25",
      
      // 미디어 파일들
      media: {
        image: "/consulting-image.jpg", // 이미지 추가
        video: "/consulting-demo.mp4", // 영상 추가
        link: "https://example.com" // 외부 링크
      },
      
      // 추가 정보
      features: ["전략 수립", "성과 분석", "프로세스 개선", "새로운 특징"],
      price: "상담 후 결정"
    },
    {
      id: "new-service",
      icon: "🚀",
      title: "새로운 서비스",
      description: "새로운 서비스 설명...",
      color: "from-green-500 to-green-600",
      hoverColor: "green-400/50",
      shadowColor: "green-500/25",
      media: {
        image: "/new-service.jpg",
        video: null,
        link: "https://newservice.com"
      },
      features: ["특징1", "특징2", "특징3"],
      price: "월 100만원"
    }
    // 원하는 만큼 서비스 카드 추가!
  ]
}
```

### 📞 **연락처 정보 수정**

```typescript
contact: {
  info: [
    {
      type: "phone",
      icon: "📞",
      label: "전화",
      value: "010-1234-5678",
      href: "tel:010-1234-5678",
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "email",
      icon: "✉️",
      label: "이메일",
      value: "new@email.com",
      href: "mailto:new@email.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      type: "address",
      icon: "📍",
      label: "주소",
      value: "새로운 주소",
      href: null,
      color: "from-pink-500 to-pink-600"
    },
    {
      type: "kakao",
      icon: "💬",
      label: "카카오톡",
      value: "카카오톡 ID",
      href: "https://pf.kakao.com/_yourid",
      color: "from-yellow-500 to-yellow-600"
    }
    // 원하는 만큼 연락처 추가!
  ]
}
```

## 🎨 디자인 커스터마이징

### 색상 테마 변경

```typescript
design: {
  theme: "dark",
  primaryGradient: "from-green-400 to-blue-400", // 메인 그라데이션
  accentColor: "yellow-300", // 액센트 색상
  backgroundGradient: "from-gray-900 via-blue-900 to-gray-900", // 배경 그라데이션
  sectionSpacing: "py-40", // 섹션 간격
  containerMaxWidth: "max-w-8xl", // 최대 너비
  borderRadius: "rounded-2xl", // 모서리 둥글기
  shadow: "shadow-3xl" // 그림자
}
```

## 📱 반응형 디자인 특징

### 화면별 최적화
- **모바일 (320px~)**: 세로 레이아웃, 큰 터치 버튼
- **태블릿 (768px~)**: 2열 그리드, 중간 크기 요소
- **데스크톱 (1024px~)**: 3열 그리드, 호버 효과

### 반응형 클래스 예시
```css
/* 모바일 우선, 점진적 향상 */
text-sm lg:text-lg        /* 모바일: 작은 텍스트, 데스크톱: 큰 텍스트 */
p-4 lg:p-8               /* 모바일: 작은 패딩, 데스크톱: 큰 패딩 */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  /* 반응형 그리드 */
```

## 🚀 배포

### Vercel 배포 (권장)
1. GitHub에 저장소 생성
2. Vercel에서 저장소 연결
3. 자동 배포 완료!

### 커스텀 도메인 연결
1. 도메인 구매
2. Vercel/Netlify에서 도메인 설정
3. DNS 설정 완료

## 💡 사용 팁

### 1. 이미지 최적화
- WebP 형식 사용 권장
- 적절한 크기로 리사이징
- `public/` 폴더에 저장

### 2. 영상 최적화
- MP4 형식 사용
- 10MB 이하 권장
- 자동 재생은 muted 속성 필수

### 3. 성능 최적화
- 이미지는 Next.js Image 컴포넌트 사용
- 불필요한 요소 제거
- Lighthouse 점수 확인

## 🔧 문제 해결

### 빌드 오류
```bash
# 캐시 삭제
rm -rf .next
npm run build
```

### 반응형 이슈
- 브라우저 개발자 도구로 확인
- Tailwind CSS 클래스 확인
- 컨테이너 너비 설정 확인

---

**이제 완전히 자유롭게 포트폴리오를 커스터마이징할 수 있습니다!** 🎉

인석 형님의 비즈니스에 맞게 모든 것을 자유롭게 수정해보세요! 🚀✨
