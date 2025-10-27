# 🚀 누리온홀딩스 포트폴리오 배포 가이드

**도메인**: www.nurionholdings.com  
**회사**: (주)누리온홀딩스  
**대표**: 최인석  

## 📋 배포 전 체크리스트

### ✅ 필수 확인사항
- [ ] 모든 기능이 정상 작동하는지 확인
- [ ] 반응형 디자인이 모든 기기에서 올바르게 표시되는지 확인
- [ ] 회원가입/로그인 기능 테스트
- [ ] 다운로드 기능 테스트
- [ ] 관리자 페이지 접근 테스트
- [ ] 도메인 연결 준비 완료

### 🔧 환경 설정
- [ ] 프로덕션 환경 변수 설정
- [ ] 데이터베이스 연결 설정 (실제 배포 시)
- [ ] 파일 업로드/다운로드 경로 설정
- [ ] SSL 인증서 준비

## 🌐 도메인 설정

### **도메인 정보**
- **메인 도메인**: www.nurionholdings.com
- **회사명**: (주)누리온홀딩스
- **대표**: 최인석

### **DNS 설정**
```
Type: A
Name: www
Value: [서버 IP 주소]

Type: CNAME  
Name: @
Value: www.nurionholdings.com
```

## 🚀 배포 옵션

### **1. Vercel 배포 (권장)**

#### 장점
- Next.js 최적화
- 자동 HTTPS
- 글로벌 CDN
- 무료 플랜 제공

#### 배포 단계
1. **GitHub 저장소 생성**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/nurionholdings-portfolio.git
   git push -u origin main
   ```

2. **Vercel 연결**
   - [vercel.com](https://vercel.com) 접속
   - GitHub 계정으로 로그인
   - "New Project" 클릭
   - 저장소 선택 후 "Import"

3. **도메인 연결**
   - 프로젝트 설정 → Domains
   - "Add Domain" 클릭
   - `www.nurionholdings.com` 입력
   - DNS 설정 안내에 따라 도메인 설정

### **2. Netlify 배포**

#### 배포 단계
1. **빌드 설정**
   ```bash
   npm run build
   npm run export
   ```

2. **Netlify 연결**
   - [netlify.com](https://netlify.com) 접속
   - GitHub 저장소 연결
   - 빌드 설정: `npm run build && npm run export`
   - 배포 폴더: `out`

3. **도메인 연결**
   - Site settings → Domain management
   - Custom domain 추가: `www.nurionholdings.com`

### **3. AWS S3 + CloudFront**

#### 장점
- 높은 성능
- 글로벌 CDN
- 비용 효율적

#### 배포 단계
1. **S3 버킷 생성**
   ```bash
   aws s3 mb s3://nurionholdings-portfolio
   ```

2. **정적 파일 업로드**
   ```bash
   npm run build
   npm run export
   aws s3 sync out/ s3://nurionholdings-portfolio --delete
   ```

3. **CloudFront 설정**
   - Origin: S3 버킷
   - Custom domain: `www.nurionholdings.com`
   - SSL 인증서 설정

### **4. Firebase Hosting**

#### 배포 단계
1. **Firebase 프로젝트 생성**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   ```

2. **빌드 및 배포**
   ```bash
   npm run build
   npm run export
   firebase deploy
   ```

## 🔒 보안 설정

### **HTTPS 필수**
- 모든 배포 플랫폼에서 HTTPS 자동 설정
- SSL 인증서 자동 갱신

### **환경 변수**
```env
# .env.local (개발용)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_DOMAIN=www.nurionholdings.com

# .env.production (프로덕션용)
NEXT_PUBLIC_SITE_URL=https://www.nurionholdings.com
NEXT_PUBLIC_COMPANY_DOMAIN=www.nurionholdings.com
```

## 📊 성능 최적화

### **이미지 최적화**
- Next.js Image 컴포넌트 사용
- WebP 형식 권장
- 적절한 크기로 리사이징

### **코드 분할**
- 동적 import 사용
- 페이지별 코드 분할
- 번들 크기 최적화

### **캐싱 전략**
- 정적 파일 캐싱
- API 응답 캐싱
- CDN 캐싱 설정

## 🔧 실제 운영을 위한 추가 설정

### **데이터베이스 연동**
```javascript
// 실제 운영 시 필요한 설정
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: true
};
```

### **파일 업로드/다운로드**
```javascript
// AWS S3 또는 다른 클라우드 스토리지 연동
const uploadConfig = {
  bucket: 'nurionholdings-files',
  region: 'ap-northeast-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};
```

### **이메일 서비스**
```javascript
// 문의 메일 발송을 위한 설정
const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
};
```

## 📱 모바일 최적화

### **PWA 설정**
- Service Worker 등록
- 오프라인 지원
- 앱 설치 가능

### **모바일 성능**
- 터치 최적화
- 빠른 로딩
- 배터리 효율성

## 🔍 SEO 최적화

### **메타 태그**
```html
<meta name="description" content="(주)누리온홀딩스 - 기업컨설팅, 소프트웨어개발, 부동산개발, PM계약대행 서비스">
<meta name="keywords" content="누리온홀딩스, 기업컨설팅, 소프트웨어개발, 부동산개발, PM계약대행, 최인석, nurionholdings.com">
<meta property="og:title" content="(주)누리온홀딩스 - 미래를 향한 등불">
<meta property="og:url" content="https://www.nurionholdings.com">
```

### **사이트맵**
- XML 사이트맵 생성
- Google Search Console 등록
- 네이버 웹마스터 도구 등록

## 📈 분석 도구

### **Google Analytics**
```javascript
// Google Analytics 4 설정
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: '(주)누리온홀딩스',
  page_location: 'https://www.nurionholdings.com'
});
```

### **사용자 행동 분석**
- 페이지 조회수 추적
- 다운로드 횟수 추적
- 문의 폼 제출 추적

## 🚨 모니터링

### **오류 추적**
- Sentry 연동
- 실시간 오류 알림
- 성능 모니터링

### **가용성 모니터링**
- Uptime Robot 설정
- 서버 상태 모니터링
- 알림 설정

## 📞 지원 및 유지보수

### **백업 전략**
- 정기적인 데이터 백업
- 코드 버전 관리
- 설정 파일 백업

### **업데이트 계획**
- 정기적인 보안 업데이트
- 기능 개선
- 성능 최적화

---

## 🎯 배포 완료 후 확인사항

1. **기능 테스트**
   - [ ] 모든 페이지 정상 로드
   - [ ] 회원가입/로그인 작동
   - [ ] 다운로드 기능 작동
   - [ ] 문의 폼 제출 작동

2. **성능 확인**
   - [ ] 페이지 로딩 속도
   - [ ] 모바일 반응성
   - [ ] SEO 점수

3. **보안 확인**
   - [ ] HTTPS 정상 작동
   - [ ] 보안 헤더 설정
   - [ ] 취약점 스캔

**배포 완료 후 www.nurionholdings.com에서 확인하세요!** 🎉

---

**누리온홀딩스 포트폴리오가 성공적으로 배포되길 바랍니다!** 🚀✨
