# Adım 09 — GitHub Pages Yayını

## 🎯 Amaç
Siteyi GitHub'a alıp GitHub Pages ile canlıya çıkar. Statik olduğu için ek altyapı yok.

## 📖 Önce Oku
- `ARCHITECTURE.md` → bölüm 8 (GitHub Pages Notları).

## ✅ Yapılacaklar
1. **Yayın öncesi kontrol**:
   - `.nojekyll` kökte var mı? (alt çizgili klasör/asset sorunlarını önler)
   - Tüm yollar **göreli** mi? (`assets/...`, `data/...` — başında `/` OLMAMALI; proje GitHub Pages alt-dizininde yayınlanabilir).
   - `fetch` yolları göreli mi? (alt-dizin yayınında `/data/x.json` kırılır).
2. **`sitemap.xml`** ve **`robots.txt`** güncelle (yayın URL'siyle).
3. **`README.md`** (depo için): proje tanımı, "nasıl çalışır" (sadece `index.html`'i aç / Live Server), GitHub Pages yayın adımları, içerik güncelleme (JSON düzenle) notu.
4. **Git**:
   - Bu klasörde repo yoksa: `git init`, `.gitignore` (gerekirse `.DS_Store`, editör dosyaları), ilk commit.
   - GitHub'da depo oluştur (kullanıcı `gh` ile veya web'den), `main`'e push.
   - > Bu adımları kullanıcı çalıştıracaksa, komutları net şekilde ona ver; sen otomatik push etme (kullanıcı onayı olmadan dışarı veri gönderme).
5. **Pages'i aç**: Settings → Pages → Source: `main` / root → Save. URL'yi al.
6. **Özel domain (varsa)**: `CNAME` dosyası ekle, DNS yönlendirmesini kullanıcıya açıkla.
7. **Canlı doğrulama**: yayın URL'sinde tüm sayfalar, JSON yüklemeleri, dil değişimi, görseller çalışıyor mu? Alt-dizin yol sorunu var mı?

## 🔍 Kabul Kriterleri
- [ ] Site canlı URL'de açılıyor; 7 sayfa, JSON içerik, TR/EN, görseller sorunsuz.
- [ ] Konsolda 404 yok (özellikle `data/*.json` ve `assets/*` yolları).
- [ ] `README.md` yayın ve içerik güncelleme adımlarını içeriyor.

## 🏁 Bitince
`PROGRESS.md`: Adım 09 → ✅, Mevcut Adım → 10 (opsiyonel). `PROJECT-OVERVIEW.md > İlerleme Özeti`'ne "site yayında" satırı ekle. Günlüğe satır ekle.
