# 암호화폐 실시간 시세 (Coin Tracker)

![](./public/images/coin-tracker-app.gif)

<br/>

## Introduction
- 1위부터 100위까지 암호화폐 실시간 시세 정보를 출력하는 페이지입니다.
- 새로고침을 버튼을 통해 실시간 업데이트가 가능합니다.
- API : [coinpaprika](https://api.coinpaprika.com/)

<br/>

## Development Environment
- Client: React, TypeScript, SCSS

<br />

## Tree
```
coin-tracker
├── public (정적 자원 관리)
│   ├── images (이미지 관리)
│   └── index.html
├── src
│   ├── App.scss (컴포넌트 스타일)
│   ├── index.scss (글로벌 스타일)
│   ├── components
│   │   ├── App.tsx (컴포넌트 구성)
│   │   └── CoinTable.tsx (코인 정보 테이블)
│   └── index.tsx (App.tsx와 index.html 연결)
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```
