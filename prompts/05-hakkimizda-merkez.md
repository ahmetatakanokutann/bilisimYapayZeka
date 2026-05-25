# Adım 05 — Hakkımızda / Merkez + Açılış Etkinliği

## 🎯 Amaç
`hakkimizda.html` sayfasını oluştur: merkezin kimliği, misyon-vizyon, açılışta tanıtılan 3 birim, açılış etkinliği ve Teknoloji Üssü konumu.

## 📖 Önce Oku
- `PROJECT-OVERVIEW.md` → bölüm 3 (3 birim, açılış katılımcıları, konum).
- `ARCHITECTURE.md` → bölüm 3, 7.

## ✅ Yapılacaklar
`hakkimizda.html` (ortak header/footer + script sırası dahil), bölümler:
1. **Sayfa başlığı (koyu/gradient)**: "Hakkımızda" + kısa tanım.
2. **Misyon & Vizyon**: iki kart; yapay zeka, Endüstri 4.0 ve uluslararası işbirliği vurgusu (`site.json.strings`'e ekle).
3. **Yeditepe Teknoloji Üssü**: merkezin Teknopark İstanbul bünyesinde konumlandığı; 3 birimin (Girişim Stüdyosu, Bilişim ve YZ Merkezi, Karbon Çözümleri Lab.) birlikte tanıtıldığı bilgisi. 3'lü kart.
4. **Açılış Etkinliği**: kısa anlatı (Mart 2026, `"verify"` notu) + katılımcılar listesi (PROJECT-OVERVIEW'dan; unvanlar `"verify"`). İstersen `news.json`'daki açılış haberine link.
5. **Uluslararası İşbirliği**: Fraunhofer IOSB + IIB tanıtımı, ne yapılacağı (Endüstri 4.0, dijital ikizler, endüstriyel YZ...).
6. **CTA**: İletişim / Projeler.

Statik anlatı metinleri uzun olduğundan: kısa olanları `site.json.strings`'e, paragraf düzeyindekileri yeni bir `data/about.json`'a (`{tr,en}` bloklar) koyabilirsin — **koda gömme**. `render.js`'e `renderAbout()` ekle.

## 🔍 Kabul Kriterleri
- [ ] Sayfa çift dilli; tüm metin JSON'dan.
- [ ] 3 birim ve açılış katılımcıları doğru listeleniyor; `"verify"` veriler not edilmiş.
- [ ] Header'da "Hakkımızda" aktif vurgulu.
- [ ] Responsive, konsol temiz.

## 🏁 Bitince
`PROGRESS.md`: Adım 05 → ✅, Mevcut Adım → 06. Günlüğe satır ekle. Yeni `about.json` oluşturduysan `ARCHITECTURE.md > 2 ve 5`'e ekle.
