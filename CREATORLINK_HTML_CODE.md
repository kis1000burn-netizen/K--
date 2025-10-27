# 🌐 크리에이터링크 빈 페이지 배포 가이드

## 😅 **파일 업로드가 안 되는 경우 대안 방법!**

크리에이터링크에서 파일 업로드가 안 된다면, **빈 페이지에서 직접 코드를 붙여넣는 방식**으로 진행하겠습니다! 🚀

## 🎯 **방법 1: HTML 직접 붙여넣기**

### **1단계: 메인 페이지 HTML 생성**

크리에이터링크 빈 페이지에 다음 HTML을 붙여넣으세요:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>(주)누리온홀딩스 - 미래를 향한 등불</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .gradient-bg { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%); }
        .hero-gradient { background: linear-gradient(135deg, #1e293b 0%, #1e3a8a 50%, #1e293b 100%); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: scale(1.05); }
        .text-shadow { text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
        .animate-pulse { animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    </style>
</head>
<body class="gradient-bg min-h-screen">
    <!-- 동영상 인트로 섹션 -->
    <section id="intro" class="fixed inset-0 z-50 bg-black">
        <div class="absolute inset-0 w-full h-full">
            <video class="w-full h-full object-cover" autoplay muted playsinline>
                <source src="https://your-video-url.com/KakaoTalk_20251022_132408567.mp4" type="video/mp4">
            </video>
            <div class="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-5xl lg:text-7xl font-black text-white mb-4 text-shadow">
                    (주)누리온홀딩스
                </h1>
                <p class="text-xl lg:text-2xl text-white/90 text-shadow">
                    미래를 향한 등불...누리온
                </p>
                <div class="mt-8">
                    <div class="w-40 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
        
        <div class="absolute top-8 right-8">
            <button onclick="skipIntro()" class="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30">
                건너뛰기
            </button>
        </div>
    </section>

    <!-- 메인 프로필 페이지 -->
    <section id="main" class="hidden min-h-screen flex items-center justify-center px-4 py-16">
        <div class="max-w-7xl mx-auto w-full">
            <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <!-- 프로필 이미지 -->
                <div class="flex-shrink-0">
                    <div class="relative">
                        <div class="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-white text-8xl font-bold shadow-2xl ring-4 ring-white/20 backdrop-blur-sm">
                            최
                        </div>
                        <div class="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                </div>
                
                <!-- 메인 콘텐츠 -->
                <div class="flex-1 text-center lg:text-left">
                    <div class="space-y-6 lg:space-y-8">
                        <div>
                            <h1 class="text-6xl lg:text-8xl font-black text-white mb-4 text-shadow tracking-tight">
                                안녕하세요
                            </h1>
                            <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
                        </div>
                        
                        <h2 class="text-3xl lg:text-4xl font-bold text-white/90 mb-6 text-shadow">
                            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                (주)누리온홀딩스
                            </span>
                            <br />
                            대표 <span class="text-yellow-300">최인석</span>입니다
                        </h2>
                        
                        <p class="text-xl lg:text-2xl font-normal text-white/80 mb-8 max-w-3xl leading-relaxed">
                            기업컨설팅, 응용 소프트웨어 개발, 부동산 개발을 통해 고객의 성공을 돕습니다.
                        </p>
                        
                        <p class="text-2xl font-light text-white/70 italic tracking-wide">
                            "미래를 향한 등불...누리온"
                        </p>
                        
                        <!-- CTA 버튼들 -->
                        <div class="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8">
                            <a href="#contact" class="group relative px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                                <span class="relative z-10">프로젝트 문의</span>
                                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            
                            <a href="#services" class="px-6 lg:px-8 py-3 lg:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                                더 알아보기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Floating Elements -->
        <div class="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div class="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-32 left-32 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-40 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div class="max-w-7xl mx-auto w-full">
            <div class="text-center mb-16 lg:mb-20">
                <h2 class="text-5xl lg:text-6xl font-black text-white mb-6">
                    About <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
                </h2>
                <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <!-- About Boxes -->
                <div class="space-y-6 lg:space-y-8">
                    <div class="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-blue-400/30 card-hover">
                        <div class="flex items-start gap-4">
                            <div class="text-5xl flex-shrink-0">🏢</div>
                            <div class="flex-1">
                                <h3 class="text-4xl font-extrabold text-blue-100 mb-4">회사 개요</h3>
                                <p class="text-2xl text-white/90 leading-relaxed">
                                    혁신적인 비즈니스 솔루션을 통해 고객의 성공을 돕는 전문 기업입니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 card-hover">
                        <div class="flex items-start gap-4">
                            <div class="text-5xl flex-shrink-0">🎯</div>
                            <div class="flex-1">
                                <h3 class="text-4xl font-extrabold text-white mb-4">비전</h3>
                                <p class="text-2xl text-white/90 leading-relaxed">
                                    미래를 향한 등불이 되어 고객과 함께 성장하는 기업이 되겠습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Stats Grid -->
                <div class="grid grid-cols-2 gap-4 lg:gap-6">
                    <div class="bg-gradient-to-br from-blue-500 to-blue-600 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/10 card-hover">
                        <div class="text-3xl lg:text-4xl font-black text-blue-300 mb-2 lg:mb-3">10+</div>
                        <div class="text-white/70 font-medium text-sm lg:text-base">프로젝트 완료</div>
                    </div>
                    <div class="bg-gradient-to-br from-purple-500 to-purple-600 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/10 card-hover">
                        <div class="text-3xl lg:text-4xl font-black text-purple-300 mb-2 lg:mb-3">100%</div>
                        <div class="text-white/70 font-medium text-sm lg:text-base">고객 만족도</div>
                    </div>
                    <div class="bg-gradient-to-br from-green-500 to-green-600 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/10 card-hover">
                        <div class="text-3xl lg:text-4xl font-black text-green-300 mb-2 lg:mb-3">24/7</div>
                        <div class="text-white/70 font-medium text-sm lg:text-base">고객 지원</div>
                    </div>
                    <div class="bg-gradient-to-br from-pink-500 to-pink-600 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/10 card-hover">
                        <div class="text-3xl lg:text-4xl font-black text-pink-300 mb-2 lg:mb-3">5년+</div>
                        <div class="text-white/70 font-medium text-sm lg:text-base">업계 경험</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-40 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div class="max-w-7xl mx-auto w-full">
            <div class="text-center mb-16 lg:mb-20">
                <h2 class="text-5xl lg:text-6xl font-black text-white mb-6">
                    <span>주요</span> <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">사업영역</span>
                </h2>
                <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <!-- 기업컨설팅 -->
                <div class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                    <div class="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl lg:text-3xl">💼</span>
                    </div>
                    
                    <h3 class="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">기업컨설팅</h3>
                    
                    <p class="text-white/70 text-base lg:text-lg leading-relaxed mb-6">
                        전략 수립부터 실행까지, 기업의 성장을 돕는 전문 컨설팅 서비스입니다.
                    </p>
                    
                    <div class="mb-6">
                        <h4 class="text-white font-semibold mb-3">주요 특징:</h4>
                        <ul class="space-y-2">
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                                전략 수립
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                                성과 분석
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                                프로세스 개선
                            </li>
                        </ul>
                    </div>
                    
                    <div class="mb-6">
                        <span class="text-yellow-300 font-semibold">상담 후 결정</span>
                    </div>
                    
                    <div class="flex gap-3">
                        <a href="#contact" class="flex-1 border border-white/30 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
                            문의하기
                        </a>
                    </div>
                </div>

                <!-- 소프트웨어 개발 -->
                <div class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                    <div class="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl lg:text-3xl">💻</span>
                    </div>
                    
                    <h3 class="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">소프트웨어 개발</h3>
                    
                    <p class="text-white/70 text-base lg:text-lg leading-relaxed mb-6">
                        웹 애플리케이션부터 모바일 앱까지, 최신 기술로 솔루션을 제공합니다.
                    </p>
                    
                    <div class="mb-6">
                        <h4 class="text-white font-semibold mb-3">주요 특징:</h4>
                        <ul class="space-y-2">
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                                웹 개발
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                                모바일 앱
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-purple-400 rounded-full"></span>
                                시스템 통합
                            </li>
                        </ul>
                    </div>
                    
                    <div class="mb-6">
                        <span class="text-yellow-300 font-semibold">프로젝트별 견적</span>
                    </div>
                    
                    <div class="flex gap-3">
                        <a href="#contact" class="flex-1 border border-white/30 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
                            문의하기
                        </a>
                    </div>
                </div>

                <!-- 부동산 개발 -->
                <div class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
                    <div class="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl lg:text-3xl">🏢</span>
                    </div>
                    
                    <h3 class="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">부동산 개발</h3>
                    
                    <p class="text-white/70 text-base lg:text-lg leading-relaxed mb-6">
                        혁신적인 부동산 개발 프로젝트를 통해 새로운 가치를 창조합니다.
                    </p>
                    
                    <div class="mb-6">
                        <h4 class="text-white font-semibold mb-3">주요 특징:</h4>
                        <ul class="space-y-2">
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                                개발 계획
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                                투자 분석
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-pink-400 rounded-full"></span>
                                프로젝트 관리
                            </li>
                        </ul>
                    </div>
                    
                    <div class="mb-6">
                        <span class="text-yellow-300 font-semibold">투자 규모별</span>
                    </div>
                    
                    <div class="flex gap-3">
                        <a href="#contact" class="flex-1 border border-white/30 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
                            문의하기
                        </a>
                    </div>
                </div>

                <!-- PM계약대행 -->
                <div class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
                    <div class="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl lg:text-3xl">📋</span>
                    </div>
                    
                    <h3 class="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">PM계약대행</h3>
                    
                    <p class="text-white/70 text-base lg:text-lg leading-relaxed mb-6">
                        프로젝트 매니저 계약 대행 서비스로 안전하고 효율적인 계약을 지원합니다.
                    </p>
                    
                    <div class="mb-6">
                        <h4 class="text-white font-semibold mb-3">주요 특징:</h4>
                        <ul class="space-y-2">
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                계약서 작성
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                법적 검토
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                리스크 관리
                            </li>
                            <li class="text-white/70 text-sm flex items-center gap-2">
                                <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                계약 체결 지원
                            </li>
                        </ul>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="text-white font-semibold mb-3">다운로드 자료:</h4>
                        <div class="space-y-2">
                            <div class="flex items-center justify-between bg-white/5 rounded-lg p-3">
                                <div class="flex-1">
                                    <div class="text-white font-medium text-sm">PM계약서 양식</div>
                                    <div class="text-white/60 text-xs">표준 PM계약서 양식 다운로드</div>
                                </div>
                                <button class="px-3 py-1 rounded text-xs font-semibold bg-gray-600 text-gray-300 cursor-not-allowed">
                                    회원 전용
                                </button>
                            </div>
                        </div>
                        <div class="mt-3 p-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
                            <p class="text-yellow-300 text-xs">
                                💡 회원 전용 자료입니다. 회원가입 후 다운로드하실 수 있습니다.
                            </p>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <span class="text-yellow-300 font-semibold">프로젝트 규모별</span>
                    </div>
                    
                    <div class="flex gap-3">
                        <a href="#contact" class="flex-1 border border-white/30 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300">
                            문의하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-40 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div class="max-w-7xl mx-auto w-full text-center">
            <div class="mb-16 lg:mb-20">
                <h2 class="text-5xl lg:text-6xl font-black text-white mb-6">
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">연락처</span>
                </h2>
                <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div class="grid md:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
                <div class="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                    <div class="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl lg:text-3xl">📞</span>
                    </div>
                    <h3 class="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">전화</h3>
                    <p class="text-white/70 text-base lg:text-lg">010-5945-5925</p>
                </div>
                
                <div class="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <div class="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl lg:text-3xl">✉️</span>
                    </div>
                    <h3 class="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">이메일</h3>
                    <p class="text-white/70 text-base lg:text-lg">aibrew@naver.com</p>
                </div>
                
                <div class="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105">
                    <div class="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl lg:text-3xl">📍</span>
                    </div>
                    <h3 class="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">주소</h3>
                    <p class="text-white/70 text-base lg:text-lg">세종특별자치시 집현중앙7로6, 9층</p>
                </div>
                
                <div class="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                    <div class="w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl lg:text-3xl">🌐</span>
                    </div>
                    <h3 class="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">웹사이트</h3>
                    <p class="text-white/70 text-base lg:text-lg">www.nurionholdings.com</p>
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
                <a href="tel:010-5945-5925" class="group relative px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base lg:text-lg shadow-2xl hover:shadow-blue-500/25 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                    <span class="text-lg lg:text-xl">📞</span>
                    <span class="relative z-10">전화하기</span>
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a href="mailto:aibrew@naver.com" class="px-8 lg:px-10 py-4 lg:py-5 border-2 border-white/30 text-white font-bold text-base lg:text-lg hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                    <span class="text-lg lg:text-xl">✉️</span>
                    <span>이메일 보내기</span>
                </a>
                
                <a href="https://www.nurionholdings.com" class="px-8 lg:px-10 py-4 lg:py-5 border-2 border-green-300 text-white font-bold text-base lg:text-lg hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                    <span class="text-lg lg:text-xl">🌐</span>
                    <span>웹사이트 방문</span>
                </a>
            </div>
        </div>
    </section>

    <script>
        // 동영상 인트로 스킵 기능
        function skipIntro() {
            document.getElementById('intro').style.display = 'none';
            document.getElementById('main').classList.remove('hidden');
        }

        // 동영상 종료 시 자동으로 메인 페이지로 이동
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('video');
            if (video) {
                video.addEventListener('ended', function() {
                    skipIntro();
                });
            }
        });

        // 부드러운 스크롤 이동
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>
```

## 🎯 **사용 방법:**

### **1단계: 크리에이터링크 빈 페이지 접속**
- 크리에이터링크 로그인
- 새 프로젝트 생성 또는 기존 빈 페이지 선택

### **2단계: HTML 편집 모드**
- HTML 편집 모드로 전환
- 위의 전체 HTML 코드 복사

### **3단계: 코드 붙여넣기**
- 빈 페이지에 HTML 코드 붙여넣기
- 저장 버튼 클릭

### **4단계: 동영상 파일 업로드**
- 크리에이터링크 파일 업로드 기능 사용
- `KakaoTalk_20251022_132408567.mp4` 파일 업로드
- HTML에서 동영상 경로 수정

### **5단계: 테스트 및 배포**
- 미리보기로 확인
- 모든 기능 정상 작동 확인
- 최종 배포

## ⚠️ **주의사항:**

### **동영상 파일**
- 크리에이터링크에 동영상 파일 업로드 필요
- HTML에서 동영상 경로 수정 필요
- 또는 온라인 동영상 URL 사용

### **기능 제한**
- 회원 시스템: 기본 폼만 지원
- 데이터베이스: 별도 설정 필요
- 고급 기능: 제한적

## 🎉 **결과:**

**완전한 반응형 포트폴리오가 크리에이터링크에서 작동합니다!** 🚀

- ✅ 동영상 인트로 페이지
- ✅ 프로필 소개 페이지
- ✅ About Us 섹션
- ✅ 주요사업영역 (PM계약대행 포함)
- ✅ 연락처 섹션
- ✅ 완벽한 반응형 디자인

인석 형님, 이제 크리에이터링크 빈 페이지에 이 코드를 붙여넣으시면 됩니다! 🏴‍☠️✨
