# Adım 10 — (Opsiyonel) Admin / CMS Paneli

## 🎯 Amaç
Kod bilmeden içerik (haber, proje, ekip...) düzenlenebilsin diye **git-tabanlı bir CMS** ekle. İçerik zaten `data/*.json`'da olduğu için bu katman üstüne oturur — istediğin zaman ekleyebilirsin, gerekmiyorsa atla.

> **Bu sorunun cevabıydı:** "Statik sitede admin sayfası olur mu?" → Evet. Git-tabanlı CMS, `/admin` sayfasından girdiğin değişiklikleri GitHub'a commit eder; ekstra sunucu gerekmez, GitHub Pages ile çalışır.

## 📖 Önce Oku
- `ARCHITECTURE.md` → bölüm 9 (CMS'e Hazırlık), 5 (JSON Şemaları).

## ✅ Yapılacaklar
1. **CMS seç**: **Sveltia CMS** (önerilir — Decap'in modern, bakımı aktif çatalı, GitHub backend ile tek dosya) veya **Decap CMS**. Tek `admin/index.html` + CDN script ile kurulur, build yok.
2. **`admin/index.html`**: CMS script'ini CDN'den yükle, `config.yml`'i işaret et.
3. **`admin/config.yml`**:
   - `backend: { name: github, repo: KULLANICI/DEPO, branch: main }` (GitHub OAuth). Doğrudan `github` backend için küçük bir OAuth aracısı gerekir (ör. ücretsiz bir Cloudflare Worker / hazır servis) — kuruluma not düş.
   - Her JSON dosyası için bir **collection** (`files` tipi), alanları `ARCHITECTURE.md > 5` şemasıyla birebir: `news`, `projects`, `team`, `research`, `partners`, `site`, `about`.
   - Çift dilli alanlar için her alanı `..._tr` / `..._en` ikilisi olarak ya da `object` (`{tr,en}`) olarak tanımla — JSON şemasıyla uyumlu kalsın.
4. **Erişim**: yalnız yetkili GitHub hesapları. README'ye giriş/kurulum adımlarını yaz.
5. **Doğrula**: `/admin`'den bir haber ekle/düzenle → commit oluşuyor mu → site güncelleniyor mu?

## 🔍 Kabul Kriterleri
- [ ] `/admin` açılıyor, GitHub ile giriş yapılıyor.
- [ ] Bir içerik düzenlemesi repo'ya commit oluyor ve sitede görünüyor.
- [ ] CMS alanları JSON şemasını bozmuyor (site hâlâ doğru render ediyor).

## 🏁 Bitince
`PROGRESS.md`: Adım 10 → ✅ (veya atlandıysa not düş). `ARCHITECTURE.md > 2`'ye `admin/` ekle. Günlüğe satır ekle. 🎉 Proje tamam.
