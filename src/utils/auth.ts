// 인증 관련 유틸리티 함수들

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  role: string;
  createdAt: string;
}

export interface Session {
  isLoggedIn: boolean;
  user: User;
  loginTime: string;
}

// 로그인 상태 확인
export const isLoggedIn = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const session = localStorage.getItem('session');
  if (!session) return false;
  
  try {
    const sessionData: Session = JSON.parse(session);
    return sessionData.isLoggedIn;
  } catch {
    return false;
  }
};

// 현재 사용자 정보 가져오기
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  const session = localStorage.getItem('session');
  if (!session) return null;
  
  try {
    const sessionData: Session = JSON.parse(session);
    return sessionData.isLoggedIn ? sessionData.user : null;
  } catch {
    return null;
  }
};

// 로그아웃
export const logout = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('session');
  window.location.href = '/main';
};

// 회원 전용 페이지 접근 권한 확인
export const requireAuth = (): boolean => {
  if (!isLoggedIn()) {
    alert('회원 전용 서비스입니다. 로그인 후 이용해주세요.');
    window.location.href = '/login';
    return false;
  }
  return true;
};

// 관리자 권한 확인
export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'admin';
};

// 파일 다운로드 권한 확인
export const canDownloadFile = (memberOnly: boolean = false): boolean => {
  if (!memberOnly) return true;
  return isLoggedIn();
};

// 다운로드 파일 처리
export const handleFileDownload = (fileName: string, memberOnly: boolean = false) => {
  if (memberOnly && !isLoggedIn()) {
    alert('회원 전용 자료입니다. 로그인 후 다운로드해주세요.');
    return;
  }
  
  // 실제 파일 다운로드 로직
  // 여기서는 예시로 알림만 표시
  alert(`${fileName} 파일을 다운로드합니다.`);
  
  // 실제 구현에서는 다음과 같이 처리:
  // const link = document.createElement('a');
  // link.href = `/files/${fileName}`;
  // link.download = fileName;
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
};
