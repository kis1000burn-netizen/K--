"use client";

import Image from "next/image";
import { portfolioConfig } from "@/config/portfolio";
import { useEffect } from "react";
import { restoreScrollPosition } from "@/utils/scroll";
import { canDownloadFile, handleFileDownload, isLoggedIn } from "@/utils/auth";

export default function ProfilePage() {
  const { hero, about, services, contact, design } = portfolioConfig;

  useEffect(() => {
    // 페이지 로드 시 스크롤 위치 복원
    restoreScrollPosition();
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${design.backgroundGradient} font-sans`}>
      {/* Hero Section - 배경 영상 제거된 순수 소개페이지 */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center px-4 py-16">
        {/* 배경 그라데이션만 사용 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        
        <div className={`relative z-10 w-full ${design.containerMaxWidth} mx-auto`}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Dynamic Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                {hero.profileImage.enabled && (
                  <>
                    {hero.profileImage.type === "gradient" ? (
                      <div className={`${hero.profileImage.size} rounded-full bg-gradient-to-br ${hero.profileImage.gradientColors} flex items-center justify-center text-white ${hero.profileImage.textSize} font-bold ${design.shadow} ring-4 ${hero.profileImage.ringColor} backdrop-blur-sm`}>
                        {hero.profileImage.text}
                      </div>
                    ) : (
                      <div className={`${hero.profileImage.size} rounded-full overflow-hidden ${design.shadow} ring-4 ${hero.profileImage.ringColor}`}>
                        <Image
                          src={hero.profileImage.imagePath!}
                          alt="Profile"
                          width={320}
                          height={320}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                  </>
                )}
              </div>
            </div>
            
            {/* Dynamic Main Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h1 className={`${hero.texts.greeting.size} ${hero.texts.greeting.weight} ${hero.texts.greeting.color} mb-4 ${hero.texts.greeting.shadow} tracking-tight`}>
                    {hero.texts.greeting.text}
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto lg:mx-0 rounded-full"></div>
                </div>
                
                <h2 className={`${hero.texts.company.size} ${hero.texts.company.weight} ${hero.texts.company.color} mb-6 drop-shadow-lg`}>
                  <span className={hero.texts.company.gradient}>
                    {hero.texts.company.text}
                  </span>
                  <br />
                  대표 <span className={hero.texts.ceo.color}>{hero.texts.ceo.text}</span>입니다
                </h2>
                
                <p className={`${hero.texts.description.size} ${hero.texts.description.weight} ${hero.texts.description.color} mb-8 max-w-3xl leading-relaxed`}>
                  {hero.texts.description.text}
                </p>
                
                <p className={`${hero.texts.slogan.size} ${hero.texts.slogan.weight} ${hero.texts.slogan.color} ${hero.texts.slogan.style} tracking-wide`}>
                  "{hero.texts.slogan.text}"
                </p>
                
                {/* Dynamic CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6 lg:pt-8">
                  <a
                    href="/project-inquiry"
                    className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10">프로젝트 문의</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  <a
                    href="#services"
                    className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                  >
                    더 알아보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
      </section>

      {/* About Section */}
      <section id="about" className={`${design.sectionSpacing} px-4 bg-gradient-to-b from-slate-900 to-slate-800`}>
        <div className={`w-full ${design.containerMaxWidth} mx-auto`}>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className={`${about.title.size} ${about.title.weight} ${about.title.color} mb-6`}>
              {about.title.text.split(' ').map((word, index) => 
                index === 1 ? (
                  <span key={index} className={about.title.gradient}> {word}</span>
                ) : (
                  <span key={index}>{word}</span>
                )
              )}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Dynamic About Boxes */}
            <div className="space-y-6 lg:space-y-8">
              {about.boxes.map((box, index) => (
                <div key={box.id} className={`${box.backgroundColor} backdrop-blur-sm ${design.borderRadius} p-6 lg:p-8 border ${box.borderColor} hover:scale-105 transition-transform duration-300`}>
                  <div className="flex items-start gap-4">
                    <div className={`${box.iconSize} flex-shrink-0`}>
                      {box.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`${box.titleSize} ${box.titleWeight} ${box.titleColor} mb-4`}>
                        {box.title}
                      </h3>
                      <p className={`${box.contentSize} ${box.contentColor} leading-relaxed`}>
                        {box.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dynamic Stats Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {about.stats.map((stat, index) => (
                <div key={index} className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm ${design.borderRadius} p-6 lg:p-8 text-center border border-white/10 hover:scale-105 transition-transform duration-300`}>
                  <div className={`text-3xl lg:text-4xl font-black text-${stat.color} mb-2 lg:mb-3`}>{stat.number}</div>
                  <div className="text-white/70 font-medium text-sm lg:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`${design.sectionSpacing} px-4 bg-gradient-to-b from-slate-800 to-slate-900`}>
        <div className={`w-full ${design.containerMaxWidth} mx-auto`}>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className={`${services.title.size} ${services.title.weight} ${services.title.color} mb-6`}>
              {services.title.text.split(' ').map((word, index) => 
                index === 0 ? (
                  <span key={index}>{word}</span>
                ) : (
                  <span key={index} className={services.title.gradient}> {word}</span>
                )
              )}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.cards.map((card, index) => (
              <div key={card.id} className={`group bg-white/5 backdrop-blur-sm ${design.borderRadius} p-8 lg:p-10 border border-white/10 hover:border-${card.hoverColor} transition-all duration-500 hover:scale-105 hover:${design.shadow} hover:shadow-${card.shadowColor}`}>
                {/* Icon */}
                <div className={`w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br ${card.color} ${design.borderRadius} flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl lg:text-3xl">{card.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-6">
                  {card.description}
                </p>
                
                {/* Media Content */}
                {card.media.image && (
                  <div className="mb-6">
                    <Image
                      src={card.media.image}
                      alt={card.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
                
                {card.media.video && (
                  <div className="mb-6">
                    <video
                      className="w-full h-48 object-cover rounded-lg"
                      controls
                      muted
                    >
                      <source src={card.media.video} type="video/mp4" />
                    </video>
                  </div>
                )}
                
                {/* Features */}
                {card.features && card.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">주요 특징:</h4>
                    <ul className="space-y-2">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-white/70 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Download Files */}
                {card.downloadFiles && card.downloadFiles.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">다운로드 자료:</h4>
                    <div className="space-y-2">
                      {card.downloadFiles.map((file, fileIndex) => (
                        <div key={fileIndex} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                          <div className="flex-1">
                            <div className="text-white font-medium text-sm">{file.name}</div>
                            <div className="text-white/60 text-xs">{file.description}</div>
                          </div>
                          <button
                            onClick={() => handleFileDownload(file.fileName, file.memberOnly)}
                            className={`px-3 py-1 rounded text-xs font-semibold transition-all duration-300 ${
                              canDownloadFile(file.memberOnly)
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                            }`}
                            disabled={!canDownloadFile(file.memberOnly)}
                          >
                            {canDownloadFile(file.memberOnly) ? '다운로드' : '회원 전용'}
                          </button>
                        </div>
                      ))}
                    </div>
                    {!isLoggedIn() && card.downloadFiles.some(f => f.memberOnly) && (
                      <div className="mt-3 p-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
                        <p className="text-yellow-300 text-xs">
                          💡 회원 전용 자료입니다. <a href="/signup" className="underline">회원가입</a> 또는 <a href="/login" className="underline">로그인</a> 후 다운로드하실 수 있습니다.
                        </p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Price */}
                {card.price && (
                  <div className="mb-6">
                    <span className="text-yellow-300 font-semibold">{card.price}</span>
                  </div>
                )}
                
                {/* Action Button */}
                <div className="flex gap-3">
                  {card.media.link && (
                    <a
                      href={card.media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                    >
                      자세히 보기
                    </a>
                  )}
                  <a
                    href="/contact-form"
                    className="flex-1 border border-white/30 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-white/10 transition-all duration-300"
                  >
                    문의하기
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${design.sectionSpacing} px-4 bg-gradient-to-b from-slate-900 to-black`}>
        <div className={`w-full ${design.containerMaxWidth} mx-auto text-center`}>
          <div className="mb-16 lg:mb-20">
            <h2 className={`${contact.title.size} ${contact.title.weight} ${contact.title.color} mb-6`}>
              <span className={contact.title.gradient}>{contact.title.text}</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {contact.info.map((info, index) => (
              <div key={info.type} className={`group bg-white/5 backdrop-blur-sm ${design.borderRadius} p-6 lg:p-8 border border-white/10 hover:border-${info.color.split(' ')[1].split('-')[0]}-400/50 transition-all duration-300 hover:scale-105`}>
                <div className={`w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl lg:text-3xl">{info.icon}</span>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">{info.label}</h3>
                <p className="text-white/70 text-base lg:text-lg">{info.value}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            {contact.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`group relative px-8 lg:px-10 py-4 lg:py-5 ${
                  button.type === "primary" 
                    ? `bg-gradient-to-r ${button.gradient} text-white font-bold text-base lg:text-lg ${design.shadow} hover:shadow-blue-500/25` 
                    : `border-2 ${button.border} text-white font-bold text-base lg:text-lg hover:bg-white/10 backdrop-blur-sm`
                } rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3`}
              >
                <span className="text-lg lg:text-xl">{button.icon}</span>
                <span className="relative z-10">{button.text}</span>
                {button.type === "primary" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
