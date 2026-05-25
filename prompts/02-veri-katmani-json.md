# Adım 02 — Veri Katmanı (JSON Şeması + Gerçek Seed)

## 🎯 Amaç
Sitenin tüm içeriğini `data/*.json` dosyalarına, çift dilli ve gerçek verilerle doldur. Bundan sonra metinler HTML'e gömülmeyecek; sayfalar bu JSON'lardan beslenecek.

## 📖 Önce Oku
- `ARCHITECTURE.md` → bölüm 5 (JSON Şemaları), 4 (i18n).
- `PROJECT-OVERVIEW.md` → bölüm 3 (Doğrulanmış Araştırma Verileri) — seed içeriğin kaynağı budur.

## ✅ Yapılacaklar
`ARCHITECTURE.md > 5`'teki şemaya birebir uyarak şu dosyaları oluştur ve **PROJECT-OVERVIEW.md'deki gerçek verilerle** doldur:

1. **`data/site.json`** — `brand` (tam ad TR/EN), `nav` (7 sayfa: Ana Sayfa, Hakkımızda, Araştırma, Projeler, Ekip, Haberler, İletişim), `strings` (hero başlık/alt başlık/CTA, bölüm başlıkları), `contact` (placeholder + `"verify":true`), `social` (boş).
2. **`data/research.json`** — odak alanları: Endüstri 4.0, Veri Yönetimi, Endüstriyel Yapay Zeka, Dijital İkizler, Robotik, Yeşil Dönüşüm. Her biri için ikon adı (Lucide) + TR/EN kısa açıklama.
3. **`data/projects.json`** — 3-4 örnek proje (Fraunhofer IOSB / IIB ortaklığı, `tags` odak alanlarından, `"verify":true`). Gerçek proje gelince güncellenecek not düş.
4. **`data/partners.json`** — Fraunhofer IOSB, IIB (International Institute of Business Enterprises), Teknopark İstanbul, Yeditepe Üniversitesi. `logo` alanları `assets/img/...` placeholder.
5. **`data/team.json`** — `leadership` grubuna açılış katılımcılarını referans olarak ekleme; bunun yerine **placeholder müdür + 2-3 araştırmacı** koy (`"verify":true`), kullanıcı dolduracak. (Açılış katılımcıları "etkinlik" verisidir, ekip değil.)
6. **`data/news.json`** — **gerçek açılış haberini** seed olarak ekle: başlık "Türkiye ve Almanya Yapay Zekâda Güçlerini Birleştirdi" / "Türkiye and Germany Join Forces in Artificial Intelligence", tarih `2026-03-30` (`"verify":true`), excerpt + body (PROJECT-OVERVIEW'daki ortaklar/odak alanları/katılımcılardan derle).

## 🔍 Kabul Kriterleri
- [ ] Tüm JSON dosyaları geçerli (parse hatası yok — `JSON.parse` ile doğrula).
- [ ] Her metin alanı `{tr, en}` formatında.
- [ ] Doğrulanmamış alanlar `"verify": true` taşıyor.
- [ ] `nav` 7 sayfayı doğru `href`lerle içeriyor.

## 🏁 Bitince
`PROGRESS.md`: Adım 02 → ✅, Mevcut Adım → 03. Günlüğe satır ekle.
