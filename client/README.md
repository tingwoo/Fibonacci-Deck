# Fibonacci Deck

Fibonacci Deck 是一款應用費波那契數列的學習記憶程式。
當你新增一張紀錄著單字資訊的「卡片」，這張卡片會依次在第 1、2、3、5、8、13⋯⋯天時出現，隨著複習次數增加，複習的間隔也會拉長，最終成為不易丟失的長期記憶。
目前本程式僅有基本的新增卡片、翻牌、切換日期等功能，介面亦無響應式支援。

## 待辦事項
- 在「所有卡片」一頁，加入搜尋、排序、篩選等操作
- 在「設計卡片」一頁，加入編輯卡片排版、欄位名稱的功能
- 加入管理數堆卡片的功能，每堆卡片可有不同的目的與設定
- 結合資料庫
- 加入帳號功能，使用 Google 帳號登入
- 改善頁面切換、日期切換、讀取時的動畫
- 修好一次可新增的卡片數量有上限的問題
- 檢討程式架構

# Original README message

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

