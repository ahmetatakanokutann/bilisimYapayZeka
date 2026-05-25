# Adım 03 — Ortak Bileşenler (Header/Footer) + i18n Altyapısı

## 🎯 Amaç
Tüm sayfalarda paylaşılan header (logo + nav + dil değiştirici + mobil menü) ve footer'ı JS ile enjekte et; çift dil mekanizmasını çalışır hale getir. Bu, 04+ sayfalarının iskeletini hazırlar.

## 📖 Önce Oku
- `ARCHITECTURE.md` → bölüm 4 (i18n), 6 (JS Yükleme Sırası), 3 (Tasarım Sistemi).
- `data/site.json` (nav, brand, strings).

## ✅ Yapılacaklar
1. **`assets/js/i18n.js`**:
   - `getLang()` / `setLang(l)` → `localStorage["lang"]`, varsayılan `SITE.defaultLang`.
   - `t(obj)` → `obj[getLang()]` döndür (çift dilli alanlar için).
   - `applyI18n()` → tüm `[data-i18n]` elemanlarını `site.json.strings`'ten doldur; `<html lang>` güncelle.
   - `site.json`'u `fetch` ile yükleyip global `window.SITE.data` altında sakla (bir kez).
2. **`assets/js/components.js`**:
   - `renderHeader()` → sticky, hibrit stil header: solda marka (`brand.short` + tam ad tooltip), ortada/sağda `nav` (site.json'dan), sağda **TR | EN** değiştirici ve mobil hamburger.
   - Mobil menü: `< md`'de hamburger; açılır panel, ESC ile kapanır, odak yönetimi, `aria-expanded`.
   - Aktif sayfayı vurgula (URL dosya adına göre).
   - `renderFooter()` → koyu (`.dark-section`) footer: marka, kısa açıklama, hızlı linkler, iletişim, sosyal, telif "© Yeditepe Üniversitesi".
   - Header/footer'ı `#site-header` / `#site-footer` boş `<div>`lerine enjekte et.
3. **`assets/js/main.js`**:
   - Akış: `await loadSiteData()` → `renderHeader()` → `renderFooter()` → `applyI18n()` → sayfaya özel `render()` (varsa) → `initAnimations()` (IntersectionObserver fade-up) → dil değiştirme dinleyicisi (değişince header/footer/içeriği yeniden render + `applyI18n`).
4. **`index.html`**'i güncelle: `<body>` başına `<div id="site-header"></div>`, sonuna `<div id="site-footer"></div>` ekle. Geçici "kurulum tamam" içeriğini koru.

## 🔍 Kabul Kriterleri
- [ ] Header ve footer `index.html`'de görünüyor, nav linkleri doğru.
- [ ] **TR | EN** düğmesi tıklanınca nav/footer metinleri anında değişiyor, reload yok, seçim `localStorage`'da kalıyor.
- [ ] Mobil görünümde hamburger menü açılıp kapanıyor (klavye ile de).
- [ ] `<html lang>` dile göre güncelleniyor. Konsolda hata yok.

## 🏁 Bitince
`PROGRESS.md`: Adım 03 → ✅, Mevcut Adım → 04. Günlüğe satır ekle.
