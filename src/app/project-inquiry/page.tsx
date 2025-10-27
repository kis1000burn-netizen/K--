"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    inquiry: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 실제 환경에서는 API로 데이터 전송
      const inquiryData = {
        ...formData,
        type: "프로젝트 문의",
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };

      // 로컬 스토리지에 저장 (실제로는 서버에 전송)
      const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
      existingInquiries.push(inquiryData);
      localStorage.setItem('inquiries', JSON.stringify(existingInquiries));

      setIsSubmitted(true);
      
      // 3초 후 메인 페이지로 이동
      setTimeout(() => {
        router.push('/main');
      }, 3000);

    } catch (error) {
      console.error('문의 제출 오류:', error);
      alert('문의 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 text-center max-w-md w-full border border-white/20">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✓</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            문의가 접수되었습니다!
          </h2>
          <p className="text-white/80 mb-6">
            빠른 시일 내에 연락드리겠습니다.
          </p>
          <div className="text-sm text-white/60">
            3초 후 메인 페이지로 이동합니다...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-16">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            프로젝트 문의
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-white/80 mt-6 text-lg">
            프로젝트에 대한 문의사항을 남겨주세요. 상세히 답변드리겠습니다.
          </p>
        </div>

        {/* 폼 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이름 */}
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                이름 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                placeholder="이름을 입력해주세요"
              />
            </div>

            {/* 연락처 */}
            <div>
              <label htmlFor="contact" className="block text-white font-semibold mb-2">
                연락처 *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
                placeholder="연락처를 입력해주세요 (전화번호 또는 이메일)"
              />
            </div>

            {/* 문의내용 */}
            <div>
              <label htmlFor="inquiry" className="block text-white font-semibold mb-2">
                문의내용 *
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300 resize-none"
                placeholder="프로젝트에 대한 문의사항을 자세히 작성해주세요"
              />
            </div>

            {/* 버튼들 */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "제출 중..." : "문의 제출"}
              </button>
              
              <button
                type="button"
                onClick={() => router.push('/main')}
                className="flex-1 border border-white/30 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                취소
              </button>
            </div>
          </form>
        </div>

        {/* 추가 정보 */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            문의하신 내용은 관리자에게 전달되어 빠른 시일 내에 답변드리겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
