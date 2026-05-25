# Adım 07 — Ekip + Haberler / Duyurular

## 🎯 Amaç
İki sayfa: `ekip.html` (yönetim + araştırmacılar) ve `haberler.html` (haber/duyuru listesi + detay).

## 📖 Önce Oku
- `data/team.json`, `data/news.json`.
- `ARCHITECTURE.md` → bölüm 3, 4, 5.

## ✅ Yapılacaklar
### `ekip.html`
1. Başlık bölümü.
2. Gruplara göre (`leadership`, `research`) ekip kartları: foto/placeholder, ad, rol (`{tr,en}`). Hover'da hafif yükselme.
3. Veriler `"verify":true` placeholder; kullanıcı dolduracak — sayfa boş üyeyle de düzgün görünmeli.

### `haberler.html`
1. Başlık bölümü.
2. Haber listesi (`news.json`, tarihe göre yeniden eskiye): kart (tarih `Intl.DateTimeFormat(lang)`, başlık, excerpt, görsel).
3. **Detay görünümü**: `haberler.html?id=...` query ile aynı sayfada detay render et (statik kalsın), veya modal. Açılış haberi tam metniyle görünmeli.
4. Boş/az içerik durumunda zarif "yakında" mesajı.

`render.js`'e `renderTeam()`, `renderNewsList()`, `renderNewsDetail(id)` ekle. `main.js` URL'de `id` varsa detay, yoksa liste göstersin.

## 🔍 Kabul Kriterleri
- [ ] Ekip kartları gruplu ve çift dilli; placeholder veriyle bozulmuyor.
- [ ] Haber listesi tarih sıralı; tarih biçimi dile göre.
- [ ] Açılış haberi detayında tam metin (ortaklar, odak alanları, katılımcılar) görünüyor.
- [ ] `?id=` ile detay açılıyor; geçersiz id'de listeye düşüyor. Konsol temiz.

## 🏁 Bitince
`PROGRESS.md`: Adım 07 → ✅, Mevcut Adım → 08. Günlüğe satır ekle.
