# VeryChat KYC Guide

VeryChat 2차 KYC & 마이그레이션 안내 페이지. 단일 정적 HTML(`index.html`)과 예시 이미지(`assets/`)로 구성된 한/영 바일링구얼 가이드.

- 언어: 브라우저 언어 자동 감지(한국어 → 한국어, 그 외 → 영어), 상단 토글로 수동 전환
- 디자인: Very Design System 토큰
- 서버: Express 정적 서버 (`server.js`), `PORT` 환경변수 대응

## 로컬 실행

```bash
npm install
npm start
# http://localhost:3000
```

## 배포

VeryCloud에 Express 앱으로 배포됩니다.
