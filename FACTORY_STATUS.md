# FACTORY_STATUS

## Product

- App: Juku Follow
- Purpose: 塾講師が今日の授業、宿題、次に対応すべき生徒を把握するためのデモ
- Data policy: 初期データはすべて架空。入力内容はブラウザの localStorage のみに保存し、外部送信しない

## Implemented

- [x] 今日の授業ダッシュボード
- [x] 要対応生徒の自動判定
- [x] 宿題未提出・期限超過・要復習・授業記録未入力の表示
- [x] 生徒の追加・編集・検索・学年絞り込み
- [x] 授業記録と理解度・次回対応の保存
- [x] 授業記録から宿題を同時登録
- [x] 宿題追加・状態変更・削除
- [x] 生徒詳細、宿題履歴、授業履歴
- [x] 再読み込み後のデータ保持
- [x] 初期データへのリセット
- [x] PC・タブレット・スマートフォン対応

## Automated validation

- GitHub Actions: 必須画面・保存処理・主要機能を静的検査
- Deployment: GitHub Pages custom workflow

## Known limitations

- 単一端末・単一講師向けデモ
- ログイン、クラウド同期、保護者連絡、請求管理、複数教室権限は未実装
- 実在する生徒情報を入力する本番運用は想定していない
