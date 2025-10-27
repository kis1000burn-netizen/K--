"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(""); // 에러 메시지 제거
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // 로컬 스토리지에서 사용자 데이터 확인
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = existingUsers.find((u: any) => 
        u.email === formData.email && u.password === formData.password
      );

      if (user) {
        // 로그인 성공 - 세션에 사용자 정보 저장
        const sessionData = {
          isLoggedIn: true,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            company: user.company,
            role: user.role
          },
          loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('session', JSON.stringify(sessionData));
        
        // 메인 페이지로 이동
        router.push('/main');
      } else {
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      }

    } catch (error) {
      console.error('로그인 오류:', error);
      setError("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-16">
      <div className="max-w-md mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            로그인
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-white/80 mt-6 text-lg">
            회원 전용 자료를 다운로드하려면 로그인해주세요.
          </p>
        </div>

        {/* 폼 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 에러 메시지 */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* 이메일 */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                placeholder="이메일을 입력해주세요"
              />
            </div>

            {/* 비밀번호 */}
            <div>
              <label htmlFor="password" className="block text-white font-semibold mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "로그인 중..." : "로그인"}
            </button>
          </form>
        </div>

        {/* 회원가입 링크 */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            계정이 없으신가요?{" "}
            <a href="/signup" className="text-blue-400 hover:text-blue-300 font-semibold">
              회원가입하기
            </a>
          </p>
        </div>

        {/* 메인 페이지 링크 */}
        <div className="mt-4 text-center">
          <a
            href="/main"
            className="text-white/60 hover:text-white/80 text-sm"
          >
            메인 페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
