# Adım 01 — Proje İskeleti + Tasarım Sistemi

## 🎯 Amaç
Klasör yapısını, ortak HTML iskeletini ve tasarım token'larını kur. Bu adım sonunda boş ama doğru iskelete sahip, açıldığında stilize bir "kurulum tamam" sayfası gösteren bir site olacak.

## 📖 Önce Oku
- `ARCHITECTURE.md` → bölüm 2 (Klasör Yapısı), 3 (Tasarım Sistemi), 6 (JS Yükleme Sırası), 7 (Konvansiyonlar).

## ✅ Yapılacaklar
1. `ARCHITECTURE.md > 2`'deki klasörleri oluştur: `assets/css`, `assets/js`, `assets/img`, `data`. (`admin/` şimdilik yok.)
2. `assets/css/styles.css` oluştur:
   - `ARCHITECTURE.md > 3`'teki `:root` renk token'larını birebir ekle.
   - Google Fonts importu (Space Grotesk + Inter) **veya** ilgili `<link>`leri base HTML'e koy.
   - Yardımcı sınıflar: `.btn-primary` (accent gradient), `.btn-ghost`, `.card`, `.section`, `.container`, `.gradient-text`, `.dark-section` (koyu/gradient zemin). CDN Tailwind'de `@apply` ÇALIŞMAZ — bunları düz CSS yaz.
   - `prefers-reduced-motion` desteği + `:focus-visible` halkası.
3. `assets/img/placeholder.svg` ekle (1200×800, nötr gri, ortada ikon — eksik görseller için).
4. `assets/js/config.js` oluştur: `window.SITE = { defaultLang: "tr", supportedLangs: ["tr","en"] }`.
5. **Tek `index.html`** oluştur (diğer sayfalar sonraki adımlarda):
   - `<!doctype html>`, `<html lang="tr">`, UTF-8, responsive viewport.
   - `<head>`: Tailwind CDN, font link'leri, `assets/css/styles.css`, `<title>` + `meta description`.
   - `<body>`: basit bir `<main class="container section">` içinde "Kurulum tamam — Adım 01 ✅" başlığı, accent gradient'li bir buton (token'ların çalıştığını kanıtlamak için).
   - `</body>` öncesi `ARCHITECTURE.md > 6`'daki script sırasını ekle (henüz boş olsalar bile `i18n.js`, `components.js`, `render.js`, `main.js` dosyalarını boş/iskelet oluştur ki 404 olmasın).
6. Kök dosyalar: `.nojekyll` (boş), `robots.txt` (taramaya izin), `404.html` (basit, stilize).

## 🔍 Kabul Kriterleri
- [ ] `index.html` tarayıcıda açıldığında fontlar ve accent gradient buton doğru görünüyor.
- [ ] Konsolda 404/JS hatası yok (boş JS dosyaları yükleniyor).
- [ ] Renkler `ARCHITECTURE.md`'deki token'larla birebir.
- [ ] Klasör yapısı `ARCHITECTURE.md > 2` ile aynı.

## 🏁 Bitince
`PROGRESS.md`: Adım 01 → ✅, Mevcut Adım → 02, Sıradaki Eylem → `prompts/02-veri-katmani-json.md`. Değişiklik günlüğüne satır ekle.
