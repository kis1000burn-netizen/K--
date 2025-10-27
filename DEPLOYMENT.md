# 🚀 배포 가이드

포트폴리오를 온라인에 배포하는 방법을 안내합니다.

## 📋 배포 전 체크리스트

### 1. 설정 파일 확인
- [ ] `src/config/portfolio.ts`에서 모든 정보가 올바른지 확인
- [ ] 연락처 정보가 정확한지 확인
- [ ] 미디어 파일 경로가 올바른지 확인

### 2. 미디어 파일 최적화
- [ ] 배경 영상 파일 크기 확인 (권장: 10MB 이하)
- [ ] 이미지 파일 최적화 (WebP 형식 권장)
- [ ] 모든 파일이 `public/` 폴더에 있는지 확인

### 3. 빌드 테스트
```bash
npm run build
npm run start
```

## 🌐 배포 옵션

### 1. Vercel (권장) ⭐

**장점**: Next.js 최적화, 무료, 자동 배포, CDN

**단계**:
1. [Vercel](https://vercel.com) 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

**환경 변수** (필요시):
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 2. Netlify

**장점**: 무료, 쉬운 설정, 폼 처리 기능

**단계**:
1. [Netlify](https://netlify.com) 계정 생성
2. 저장소 연결
3. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 3. GitHub Pages

**단계**:
1. `next.config.ts` 수정:
```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

2. `package.json`에 스크립트 추가:
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

3. GitHub Actions로 자동 배포 설정

### 4. AWS S3 + CloudFront

**장점**: 높은 성능, 글로벌 CDN

**단계**:
1. S3 버킷 생성
2. CloudFront 배포 생성
3. GitHub Actions로 자동 배포

## 🔧 고급 설정

### 커스텀 도메인 연결

1. **Vercel**:
   - 프로젝트 설정 → Domains
   - 도메인 추가 및 DNS 설정

2. **Netlify**:
   - Site settings → Domain management
   - Custom domain 추가

### SEO 최적화

`src/app/layout.tsx`에서 메타데이터 수정:

```typescript
export const metadata: Metadata = {
  title: "회사명 - 포트폴리오",
  description: "회사 설명",
  keywords: "키워드1, 키워드2, 키워드3",
  openGraph: {
    title: "회사명 - 포트폴리오",
    description: "회사 설명",
    images: ["/og-image.jpg"]
  }
};
```

### Google Analytics 추가

1. Google Analytics 계정 생성
2. `src/app/layout.tsx`에 스크립트 추가:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `}
</Script>
```

## 📱 모바일 최적화

### 반응형 테스트
- [ ] 모바일 화면에서 레이아웃 확인
- [ ] 터치 인터페이스 테스트
- [ ] 로딩 속도 확인

### PWA 설정 (선택사항)

`next.config.ts`에 PWA 설정 추가:

```typescript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA(nextConfig)
```

## 🔍 성능 최적화

### 이미지 최적화
- Next.js Image 컴포넌트 사용
- WebP 형식 사용
- 적절한 크기로 리사이징

### 코드 분할
- 동적 import 사용
- 불필요한 라이브러리 제거

### 캐싱 설정
- 정적 파일 캐싱
- API 응답 캐싱

## 🚨 문제 해결

### 빌드 오류
```bash
# 캐시 삭제
rm -rf .next
npm run build
```

### 배포 실패
1. 환경 변수 확인
2. 파일 경로 확인
3. 의존성 버전 확인

### 성능 이슈
1. Lighthouse 점수 확인
2. 번들 크기 분석
3. 이미지 최적화

## 📊 모니터링

### 성능 모니터링
- Vercel Analytics
- Google PageSpeed Insights
- Lighthouse CI

### 사용자 분석
- Google Analytics
- Hotjar
- Mixpanel

---

**배포 완료 후**: 도메인을 확인하고 모든 기능이 정상 작동하는지 테스트하세요! 🎉
