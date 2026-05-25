# Adım 06 — Araştırma Alanları + Projeler (Fraunhofer / IIB)

## 🎯 Amaç
İki sayfa: `arastirma.html` (odak alanları detaylı) ve `projeler.html` (ortak projeler, filtrelenebilir). Fraunhofer ortaklığı burada öne çıkar.

## 📖 Önce Oku
- `data/research.json`, `data/projects.json`, `data/partners.json`.
- `ARCHITECTURE.md` → bölüm 3, 5.

## ✅ Yapılacaklar
### `arastirma.html`
1. Başlık bölümü (koyu/gradient) + giriş paragrafı.
2. Odak alanları (`research.json`) için zengin kartlar/satırlar: ikon, başlık, açıklama; istenirse her alana 2-3 örnek alt başlık. Endüstri 4.0, Dijital İkizler, Endüstriyel YZ, Veri Yönetimi, Robotik, Yeşil Dönüşüm.
3. "Fraunhofer ile metodoloji" / uygulamalı araştırma vurgusu bölümü.

### `projeler.html`
1. Başlık bölümü.
2. **Filtre çubuğu**: ortağa/etikete göre (Tümü, Fraunhofer, IIB, etiketler). JS ile istemci-tarafı filtre (`render.js > renderProjects(filter)`).
3. Proje kartları (`projects.json`): görsel/placeholder, başlık, özet, partner rozeti, etiketler, durum. Tıklayınca detay — basit modal veya `proje.html?id=` yerine **modal** (statik kalsın). 
4. Gerçek projeler gelmeden önce `"verify":true` örneklerle doldur; üstte küçük "örnek içerik" notu (yalnız geliştirme aşamasında).

`render.js`'e `renderResearchPage()` ve `renderProjects(filter)` ekle; `main.js` ilgili sayfada çağırsın.

## 🔍 Kabul Kriterleri
- [ ] Her iki sayfa çift dilli, içerik JSON'dan.
- [ ] Proje filtresi çalışıyor (ör. "Fraunhofer" seçilince yalnız ilgili projeler).
- [ ] Partner rozetleri ve etiketler görünüyor.
- [ ] Modal/erişim klavyeyle kullanılabilir; responsive; konsol temiz.

## 🏁 Bitince
`PROGRESS.md`: Adım 06 → ✅, Mevcut Adım → 07. Günlüğe satır ekle.
