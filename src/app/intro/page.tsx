"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VideoIntro() {
  const [showSkipButton, setShowSkipButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 3초 후 스킵 버튼 표시
    const timer = setTimeout(() => {
      setShowSkipButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    router.push("/profile");
  };

  const handleVideoEnd = () => {
    router.push("/profile");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* 동영상 배경 - 전체 화면 */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          onEnded={handleVideoEnd}
          playsInline
        >
          <source src="/KakaoTalk_20251022_132408567.mp4" type="video/mp4" />
        </video>
        
        {/* 최소한의 오버레이 - 동영상이 주인공 */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 로딩 텍스트 - 동영상 위에 간단하게 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl">
            (주)누리온홀딩스
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 drop-shadow-lg">
            미래를 향한 등불...누리온
          </p>
          <div className="mt-8">
            <div className="w-40 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 스킵 버튼 */}
      {showSkipButton && (
        <div className="absolute top-8 right-8">
          <button
            onClick={handleSkip}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            건너뛰기
          </button>
        </div>
      )}

      {/* 진행 표시 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}
