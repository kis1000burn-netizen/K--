// 스크롤 이동 유틸리티
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// 페이지 로드 시 스크롤 위치 복원
export const restoreScrollPosition = () => {
  if (typeof window !== 'undefined') {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem('scrollPosition');
    }
  }
};

// 스크롤 위치 저장
export const saveScrollPosition = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  }
};
