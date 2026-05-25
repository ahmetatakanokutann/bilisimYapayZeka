# Adım 04 — Ana Sayfa

## 🎯 Amaç
`index.html`'i, merkezi etkileyici biçimde tanıtan tam ana sayfaya dönüştür. "İnci gibi parlayan" izlenimi burada başlar.

## 📖 Önce Oku
- `ARCHITECTURE.md` → bölüm 3 (Tasarım Sistemi — hibrit yaklaşım, gradient, kart dili).
- `data/site.json`, `research.json`, `projects.json`, `partners.json`, `news.json`.

## ✅ Yapılacaklar
`index.html` içine, yukarıdan aşağıya bölümler (içerik JSON'dan, statik metinler `data-i18n`):
1. **Hero (koyu/gradient — `.dark-section`)**: büyük başlık (`gradient-text` vurgulu), alt başlık (merkez + Teknoloji Üssü), iki CTA (Projeler / İletişim). Arka planda ince ızgara veya yumuşak ışıma (CSS, abartısız). Aşağı kaydırma ipucu.
2. **Tanıtım şeridi**: kısa "Biz kimiz" + Teknopark İstanbul / Yeditepe Teknoloji Üssü vurgusu.
3. **Odak Alanları** (`research.json`): 6 kart ızgarası (Lucide ikon + başlık + açıklama), hover efekti.
4. **İstatistik / vurgu şeridi (koyu)**: 3-4 rakam (ör. odak alanı sayısı, ortak sayısı, kuruluş yılı 2026). Sayılar JSON'dan ya da `site.json.strings`.
5. **Öne Çıkan Projeler** (`projects.json`, ilk 3): kart + "partner" rozeti (Fraunhofer/IIB) + "Tümünü gör" linki.
6. **Ortaklar şeridi** (`partners.json`): logolar yatay dizi (placeholder logo). "Fraunhofer ile ortak araştırma" vurgusu.
7. **Son Haberler** (`news.json`, ilk 2-3): tarih + başlık + excerpt kartı.
8. **CTA bölümü (gradient)**: "Bizimle çalışın / İşbirliği" → İletişim'e yönlendir.

`render.js`'e ana sayfa render fonksiyonlarını ekle (`renderResearch`, `renderFeaturedProjects`, `renderPartners`, `renderLatestNews`). `main.js` ana sayfada bunları çağırsın.

## 🔍 Kabul Kriterleri
- [ ] Tüm bölümler JSON'dan doluyor; dil değişince tüm içerik çevriliyor.
- [ ] Hibrit ritim görünür: açık bölümler + en az 2 koyu/gradient vurgu bölümü.
- [ ] Mobil/masaüstü responsive; kartlar düzgün sarıyor.
- [ ] Görünürlükte fade-up animasyonu çalışıyor; `prefers-reduced-motion`'a saygılı.
- [ ] Konsolda hata yok, eksik görseller `placeholder.svg` kullanıyor.

## 🏁 Bitince
`PROGRESS.md`: Adım 04 → ✅, Mevcut Adım → 05. Günlüğe satır ekle.
