"use client";

import { useState, useEffect } from "react";

interface Inquiry {
  id: string;
  type: string;
  name: string;
  contact: string;
  inquiry: string;
  timestamp: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  role: string;
  createdAt: string;
}

export default function AdminPanel() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'inquiries' | 'users'>('inquiries');

  useEffect(() => {
    // 로컬 스토리지에서 문의 내역과 회원 정보 불러오기
    const storedInquiries = localStorage.getItem('inquiries');
    if (storedInquiries) {
      setInquiries(JSON.parse(storedInquiries));
    }
    
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    
    setIsLoading(false);
  }, []);

  const deleteInquiry = (id: string) => {
    const updatedInquiries = inquiries.filter(inquiry => inquiry.id !== id);
    setInquiries(updatedInquiries);
    localStorage.setItem('inquiries', JSON.stringify(updatedInquiries));
    setSelectedInquiry(null);
  };

  const deleteUser = (id: string) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setSelectedUser(null);
  };

  const clearAllInquiries = () => {
    if (confirm('모든 문의 내역을 삭제하시겠습니까?')) {
      setInquiries([]);
      localStorage.removeItem('inquiries');
      setSelectedInquiry(null);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('ko-KR');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            관리자 페이지
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-white/80 mt-6 text-lg">
            문의 내역과 회원 정보를 확인하고 관리할 수 있습니다.
          </p>
        </div>

        {/* 탭 메뉴 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'inquiries'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              문의 관리
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              회원 관리
            </button>
          </div>
        </div>

        {/* 통계 */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">{inquiries.length}</div>
            <div className="text-white/70">총 문의 수</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {inquiries.filter(i => i.type === '프로젝트 문의').length}
            </div>
            <div className="text-white/70">프로젝트 문의</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">
              {inquiries.filter(i => i.type === '일반 문의').length}
            </div>
            <div className="text-white/70">일반 문의</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">{users.length}</div>
            <div className="text-white/70">총 회원 수</div>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="flex justify-end mb-6">
          {activeTab === 'inquiries' && (
            <button
              onClick={clearAllInquiries}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              전체 문의 삭제
            </button>
          )}
        </div>

        {/* 문의 관리 탭 */}
        {activeTab === 'inquiries' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 문의 리스트 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">문의 목록</h2>
              {inquiries.length === 0 ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-white/60">아직 문의가 없습니다.</div>
                </div>
              ) : (
                inquiries
                  .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                  .map((inquiry) => (
                    <div
                      key={inquiry.id}
                      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                        selectedInquiry?.id === inquiry.id ? 'ring-2 ring-blue-400' : ''
                      }`}
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            inquiry.type === '프로젝트 문의' 
                              ? 'bg-blue-500/20 text-blue-300' 
                              : 'bg-purple-500/20 text-purple-300'
                          }`}>
                            {inquiry.type}
                          </span>
                        </div>
                        <div className="text-white/60 text-sm">
                          {formatDate(inquiry.timestamp)}
                        </div>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{inquiry.name}</h3>
                      <p className="text-white/70 text-sm line-clamp-2">{inquiry.inquiry}</p>
                    </div>
                  ))
              )}
            </div>

            {/* 문의 상세 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">문의 상세</h2>
              {selectedInquiry ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div>
                      <label className="text-white/70 text-sm">문의 유형</label>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${
                        selectedInquiry.type === '프로젝트 문의' 
                          ? 'bg-blue-500/20 text-blue-300' 
                          : 'bg-purple-500/20 text-purple-300'
                      }`}>
                        {selectedInquiry.type}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-white/70 text-sm">이름</label>
                      <div className="text-white font-semibold">{selectedInquiry.name}</div>
                    </div>
                    
                    <div>
                      <label className="text-white/70 text-sm">연락처</label>
                      <div className="text-white">{selectedInquiry.contact}</div>
                    </div>
                    
                    <div>
                      <label className="text-white/70 text-sm">문의 시간</label>
                      <div className="text-white">{formatDate(selectedInquiry.timestamp)}</div>
                    </div>
                    
                    <div>
                      <label className="text-white/70 text-sm">문의 내용</label>
                      <div className="text-white bg-white/5 rounded-lg p-4 mt-2 whitespace-pre-wrap">
                        {selectedInquiry.inquiry}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => deleteInquiry(selectedInquiry.id)}
                        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                      >
                        삭제
                      </button>
                      <button
                        onClick={() => setSelectedInquiry(null)}
                        className="px-4 py-2 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-white/60">문의를 선택해주세요.</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 회원 관리 탭 */}
        {activeTab === 'users' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 회원 리스트 */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">회원 목록</h2>
              {users.length === 0 ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-white/60">아직 가입된 회원이 없습니다.</div>
                </div>
              ) : (
                users
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .map((user) => (
                    <div
                      key={user.id}
                      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                        selectedUser?.id === user.id ? 'ring-2 ring-blue-400' : ''
                      }`}
                      onClick={() => setSelectedUser(user)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.role === 'admin' 
                              ? 'bg-red-500/20 text-red-300' 
                              : 'bg-green-500/20 text-green-300'
                          }`}>
                            {user.role === 'admin' ? '관리자' : '회원'}
                          </span>
                        </div>
                        <div className="text-white/60 text-sm">
                          {formatDate(user.createdAt)}
                        </div>
                      </div>
                      <h3 className="text-white font-semibold mb-2">{user.name}</h3>
                      <p className="text-white/70 text-sm">{user.email}</p>
                      {user.company && (
                        <p className="text-white/60 text-xs mt-1">{user.company}</p>
                      )}
                    </div>
                  ))
              )}
            </div>

            {/* 회원 상세 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">회원 상세</h2>
              {selectedUser ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div>
                      <label className="text-white/70 text-sm">회원 유형</label>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold inline-block ${
                        selectedUser.role === 'admin' 
                          ? 'bg-red-500/20 text-red-300' 
                          : 'bg-green-500/20 text-green-300'
                      }`}>
                        {selectedUser.role === 'admin' ? '관리자' : '회원'}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-white/70 text-sm">이름</label>
                      <div className="text-white font-semibold">{selectedUser.name}</div>
                    </div>
                    
                    <div>
                      <label className="text-white/70 text-sm">이메일</label>
                      <div className="text-white">{selectedUser.email}</div>
                    </div>
                    
                    <div>
                      <label className="text-white/70 text-sm">연락처</label>
                      <div className="text-white">{selectedUser.phone}</div>
                    </div>
                    
                    {selectedUser.company && (
                      <div>
                        <label className="text-white/70 text-sm">회사명</label>
                        <div className="text-white">{selectedUser.company}</div>
                      </div>
                    )}
                    
                    <div>
                      <label className="text-white/70 text-sm">가입일</label>
                      <div className="text-white">{formatDate(selectedUser.createdAt)}</div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => deleteUser(selectedUser.id)}
                        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
                      >
                        회원 삭제
                      </button>
                      <button
                        onClick={() => setSelectedUser(null)}
                        className="px-4 py-2 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="text-white/60">회원을 선택해주세요.</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 하단 정보 */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            이 페이지는 관리자 전용입니다. 문의 내역과 회원 정보는 로컬 스토리지에 저장됩니다.
          </p>
          <a
            href="/main"
            className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
          >
            메인 페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}