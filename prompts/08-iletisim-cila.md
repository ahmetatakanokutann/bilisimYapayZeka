# Adım 08 — İletişim + SEO / Erişilebilirlik / Responsive Cila

## 🎯 Amaç
`iletisim.html`'i tamamla ve **tüm siteyi** yayına hazır kalitede cilala (SEO, erişilebilirlik, performans, tutarlılık).

## 📖 Önce Oku
- `data/site.json` (contact, social), `ARCHITECTURE.md` → bölüm 3, 7, 8.

## ✅ Yapılacaklar
### `iletisim.html`
1. Başlık bölümü (koyu/gradient).
2. İki sütun: solda iletişim bilgileri (adres — Teknopark İstanbul, e-posta, telefon — `site.json`'dan, `"verify"`), sağda **iletişim formu**. Statik site olduğu için form: [Formspree](https://formspree.io) veya `mailto:` fallback — backend kurma. Formspree endpoint'i placeholder, kullanıcı dolduracak; doğrulama + başarı/hata mesajı (i18n).
3. **Harita**: Teknopark İstanbul için Google Maps `<iframe>` embed (`site.json.contact.mapEmbed`). `loading="lazy"`.

### Site Geneli Cila
4. **SEO**: her sayfada benzersiz `<title>`, `meta description`, canonical, **Open Graph** + Twitter Card etiketleri, `assets/img/og.png` (yoksa placeholder). JSON-LD `Organization` (ana sayfa).
5. **Erişilebilirlik**: tüm görsellerde anlamlı `alt`, form etiketleri, kontrast AA, klavye gezinme, `:focus-visible`, "içeriğe atla" linki, landmark roller.
6. **Tutarlılık geçişi**: tüm sayfalarda aynı header/footer, boşluk ritmi, buton/kart dili (`ARCHITECTURE.md > 3`). Sapan yerleri düzelt.
7. **Performans**: görsellerde `loading="lazy"`, gereksiz reflow yok, JSON `fetch`leri tekille (cache). 404 sayfası stilize ve dönüş linkli.
8. **Çapraz kontrol**: TR↔EN tüm sayfalarda eksiksiz; kırık link yok.

## 🔍 Kabul Kriterleri
- [ ] İletişim formu doğruluyor ve mesaj gösteriyor; harita yükleniyor.
- [ ] Her sayfada benzersiz title + description + OG etiketleri var.
- [ ] Klavyeyle tüm site gezilebiliyor; "içeriğe atla" çalışıyor.
- [ ] 7 sayfanın tümü TR ve EN'de tam; kırık link/konsol hatası yok.
- [ ] Lighthouse (manuel): Accessibility ve SEO yeşil bandda.

## 🏁 Bitince
`PROGRESS.md`: Adım 08 → ✅, Mevcut Adım → 09. Günlüğe satır ekle.
