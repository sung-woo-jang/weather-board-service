# weather-board-service API Server

[회원 등급에 따른 게시판/통계 서비스](https://drive.google.com/file/d/1OyHiyNyUQCFw7oOuq50S4UZQouj7RvE2/view?usp=sharing)입니다.

<div align="center">
  <img src="https://img.shields.io/badge/node-16.17.0-339933?logo=node.js"> 
  <img src="https://img.shields.io/badge/NestJS-9.0.0-E0234E?logo=NestJS"> 
  <img src="https://img.shields.io/badge/TypeScript-4.4.5-3178C6?logo=typescript"> 
  <img src="https://img.shields.io/badge/MySQL-8.0.11-4479A1?logo=mysql"> 
  <img src="https://img.shields.io/badge/Swagger-6.1.0-DC382D?logo=swagger"> 
  <img src="https://img.shields.io/badge/TypeORM-0.3.9-010101"> 
</div>

## 소개

> 저희 서비스는 회원가입 없이 누구나 사용 가능한 자유게시판 서비스입니다.

---

## 테스트 방법

```bash
$  docker run --name mysql-local -p 3306:3306/tcp -e MYSQL_ROOT_PASSWORD=test -d mysql:8
```

```bash
$ npm i
$ npm start:dev
```

---

## 1. 서비스 개요

- 본 서비스는 회원가입 없이 비밀번호 설정만으로 자유로운 글 작성이 가능한 서비스입니다.
- 사용하시는 비밀번호는 암호화되어 저장되기에 안심하시고 익숙한 비밀번호를 사용하여도 됩니다.
- (예정) 게시글을 작성하시면 자동으로 서비스 사용 지역의 날씨가 게시글과 함께 저장됩니다.

## 2. 구현 사항

### 게시판

- 회원가입 없이 게시글 비밀번호 설정만으로 자유로운 글 작성
- 수정 삭제를 글 작성 시 입력한 비밀번호만으로 인증
- 페이지네이션 적용 (한 페이지에 20개씩 조회 가능)

## 3. To Do

### 날씨정보 가져오기

- [날씨 정보 API](https://www.weatherapi.com/)를 활용하여 게시글 작성 시 작성자의 거주 지역의 날씨 포함 예정
- req객체의 ip값으로 위도 경도값을 구해 적용시킬 예정

## 4. ERD

<img width="785" alt="스크린샷 2022-09-01 오후 10 44 18" src="https://user-images.githubusercontent.com/54757435/188878080-8da00b76-36ad-4b52-af1c-27c18c14d22e.png">
</br>

## 5. Swagger

- API를 테스트는 Swagger를 이용해 가능합니다.
- URL: localhost:3000/docs

# 참조문서

## 📒 [노션](https://www.notion.so/weather-board-service-2ebd55417dba4062aeaeb8cb71c9d0bc) - 아래의 내용을 한번에 보실 수 있습니다.

## 📒 [API 명세서](https://www.notion.so/4-API-9e3767fe01914b05bda9ae9a6062edf6)

자세한 내용은 스웨거 페이지에서 가능하니 스웨거를 이용해주시면 매우 감사하겠습니다.🙇🏻‍♂️

## 📌 [개발 컨벤션](https://www.notion.so/2-Convention-Code-2d3b30df5e6c4ddcbcce98ab2eb58752)

## 🥵 [이슈 & 회고](https://www.notion.so/05d7a80c47224d92962f34e112a3b623)
