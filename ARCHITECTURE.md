# ARCHITECTURE.md — Tek Doğruluk Kaynağı

Tüm yapısal/stil/şema kararları buradadır. Kod bu dosyaya uymak zorundadır. Değişiklik gerekiyorsa önce burayı güncelle, sonra kodu.

---

## 1. Teknoloji Kararları
| Konu | Karar | Neden |
|---|---|---|
| Yığın | Saf HTML + CSS + Vanilla JS | Build yok, GitHub Pages'e direkt, Gemini dosyaları tek tek düzenler |
| Stil | **Tailwind CDN** + küçük `assets/css/styles.css` | Hızlı, tutarlı; özel token'lar CSS değişkenleriyle |
| İçerik | `data/*.json` (TR/EN) | Koddan ayrık → ileride CMS bağlanabilir |
| Dil | TR (varsayılan) + EN, JS i18n | Sayfa kopyalamadan çift dil |
| İkon | [Lucide](https://lucide.dev) (CDN `<script>`) veya inline SVG | Hafif, tutarlı |
| Font | Google Fonts: **Space Grotesk** (başlık) + **Inter** (gövde) | Modern + okunur tech görünüm |
| Hosting | GitHub Pages (statik) | Kullanıcı tercihi |
| Build | YOK | — |

## 2. Hedef Klasör Yapısı
```
/
├── index.html                 # Ana sayfa
├── hakkimizda.html            # Hakkımızda / Merkez
├── arastirma.html             # Araştırma alanları
├── projeler.html              # Projeler (Fraunhofer/IIB)
├── ekip.html                  # Ekip
├── haberler.html              # Haberler / Duyurular
├── iletisim.html              # İletişim
├── 404.html
├── .nojekyll                  # GitHub Pages'in Jekyll'ı atlamması için
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/styles.css         # Tailwind dışı özel stiller + token'lar
│   ├── js/
│   │   ├── config.js          # global ayarlar (varsayılan dil vb.)
│   │   ├── i18n.js            # dil yükle/değiştir, data-i18n çöz
│   │   ├── components.js      # header/footer enjeksiyonu, mobil menü
│   │   ├── render.js          # JSON → DOM (kartlar, listeler)
│   │   └── main.js            # sayfa açılışı: hepsini başlat
│   └── img/                   # logolar, görseller (placeholder ile başla)
├── data/
│   ├── site.json              # marka, nav, footer, iletişim, sosyal
│   ├── research.json          # odak alanları
│   ├── projects.json          # projeler
│   ├── partners.json          # ortaklar (Fraunhofer, IIB, Teknopark)
│   ├── team.json              # ekip
│   └── news.json              # haberler/duyurular
└── admin/                     # OPSİYONEL (Adım 10) — Decap/Sveltia CMS
    ├── index.html
    └── config.yml
```

## 3. Tasarım Sistemi (SABİT — buradan sapma)

### Yaklaşım: Hibrit
Açık zeminli ana içerik bölümleri + stratejik **koyu/gradient vurgu bölümleri** (hero, CTA, istatistik şeridi, öne çıkan projeler). Bol beyaz alan, yumuşak gölge, ince kenarlık.

### Renk Token'ları (`styles.css` içinde `:root`)
```css
:root{
  /* Kurumsal taban (lacivert) */
  --c-ink:        #0A1A33;   /* en koyu — koyu bölüm zemini */
  --c-navy:       #0B2A5B;   /* kurumsal lacivert */
  --c-navy-700:   #143A78;
  /* AI-tech vurgu (gradient) */
  --c-accent:     #2E7CF6;   /* elektrik mavisi */
  --c-accent-2:   #22D3EE;   /* camgöbeği */
  --c-accent-3:   #7C3AED;   /* mor (gradient ucu) */
  /* Nötr / açık yüzeyler */
  --c-bg:         #FFFFFF;
  --c-surface:    #F6F8FC;   /* açık bölüm zemini */
  --c-border:     #E3E9F2;
  --c-text:       #0F172A;   /* ana metin */
  --c-muted:      #5B6B85;   /* ikincil metin */
  --c-on-dark:    #E7EEFB;   /* koyu zeminde metin */
}
```
- **Birincil gradient:** `linear-gradient(120deg, var(--c-accent), var(--c-accent-2))` (vurgu) ve hero için `var(--c-ink) → var(--c-navy)` + üstüne ince accent ışıması.
- **Buton (primary):** accent gradient zemin, beyaz metin, `rounded-xl`, hover'da hafif yukarı + gölge.
- **Buton (ghost):** şeffaf, `--c-border` kenarlık.

### Tipografi
- Başlık: `Space Grotesk`, ağırlık 600–700, sıkı satır yüksekliği.
- Gövde: `Inter`, 400/500, `leading-relaxed`.
- Ölçek (Tailwind): h1 `text-4xl md:text-6xl`, h2 `text-3xl md:text-4xl`, gövde `text-base md:text-lg`.

### Düzen & Bileşen Dili
- Kapsayıcı: `max-w-7xl mx-auto px-5 md:px-8`.
- Bölüm boşluğu: `py-16 md:py-24`.
- Kart: `rounded-2xl border border-[--c-border] bg-white shadow-sm hover:shadow-md transition`.
- Köşe yuvarlama dili: `rounded-2xl` (kart), `rounded-xl` (buton/input).
- Mikro etkileşim: hover'da `translate-y-[-2px]`, görünürlükte fade-up (IntersectionObserver, `assets/js/main.js`).
- Erişilebilirlik: kontrast AA, `:focus-visible` halkası, `aria-label`, mobil menüde odak yönetimi.

### Responsive
Mobile-first. Kırılımlar Tailwind varsayılanı (`sm 640 / md 768 / lg 1024 / xl 1280`). Hamburger menü `< md`.

## 4. i18n (Çift Dil) Mekanizması
- Varsayılan dil **TR**. Aktif dil `localStorage["lang"]` içinde (`"tr"`/`"en"`).
- **Statik metinler:** HTML'de `data-i18n="anahtar"`. `data/site.json > strings` içinde `{ "anahtar": { "tr": "...", "en": "..." } }`. `i18n.js` sayfa yüklenince tüm `[data-i18n]`leri doldurur.
  - *Kural:* `data-i18n` elemanın `textContent`'ini değiştirir; ikon/çocuk eleman içeren yapılarda `data-i18n` yalnızca metni taşıyan iç `<span>`'e konur, kapsayıcıya konmaz.
- **Dinamik içerik (JSON kartları):** her alan `{ "tr": "...", "en": "..." }`. `render.js`, aktif dile göre `obj.baslik[lang]` seçer.
- **Dil değiştirici:** header'da TR | EN düğmesi → `lang` günceller, `<html lang>` değişir, içerik yeniden render edilir (reload gerekmez).
- `<html lang="tr">` başlangıçta; JS güncelliyor. Tarih biçimi `Intl.DateTimeFormat(lang)`.

## 5. JSON Şemaları (data/)
> Her metin alanı `{tr, en}`. `verify:true` → onay bekleyen veri.

**site.json**
```json
{
  "brand": { "short": "Yeditepe AI", "full": { "tr": "Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi", "en": "Center for Applied Artificial Intelligence Research" } },
  "nav": [ { "key": "home", "href": "index.html", "label": { "tr": "Ana Sayfa", "en": "Home" } } ],
  "strings": { "hero_cta": { "tr": "Bizimle çalışın", "en": "Work with us" } },
  "contact": { "address": { "tr": "...", "en": "..." }, "email": "", "phone": "", "mapEmbed": "" },
  "social": { "linkedin": "", "x": "", "youtube": "" }
}
```
**research.json** — `[{ "id","icon","title":{tr,en},"desc":{tr,en} }]`
**projects.json** — `[{ "id","title":{tr,en},"summary":{tr,en},"partner":"Fraunhofer IOSB","tags":["id-ref"],"status":{tr,en},"image":"","verify":true }]`
> Not: `tags` = `research.json` id referanslarıdır; etiket metni render anında aktif dile göre `research.json`'dan çözülür.
**partners.json** — `[{ "id","name","logo":"","url":"","role":{tr,en} }]`
**team.json** — `[{ "id","name","role":{tr,en},"photo":"","group":"leadership|research" }]`
**news.json** — `[{ "id","date":"2026-03-30","title":{tr,en},"excerpt":{tr,en},"body":{tr,en},"image":"","verify":true }]`

## 6. JS Yükleme Sırası (her sayfada, `</body>` öncesi)
```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="assets/js/config.js"></script>
<script src="assets/js/i18n.js" defer></script>
<script src="assets/js/components.js" defer></script>
<script src="assets/js/render.js" defer></script>
<script src="assets/js/main.js" defer></script>
```
`main.js` akışı: dil belirle → header/footer enjekte et → i18n uygula → sayfaya özel render → animasyonları bağla.

## 7. Konvansiyonlar
- HTML dosya adları Türkçe ve kısa (`hakkimizda.html`). Linkler köke göre **göreli** (GitHub Pages alt-dizin uyumu için `/` ile başlama).
- Görseller `assets/img/`; bulunmayan görseller için `assets/img/placeholder.svg`.
- JS: ES modülü değil, global IIFE/fonksiyon; `defer`. Bağımlılık yok (Tailwind + Lucide CDN hariç).
- Yorumlar TR. Sınıf adlarında Tailwind; tekrarlayan kalıplar için `styles.css`'te `@apply` yerine sade utility kombinasyonu (CDN'de `@apply` çalışmaz — özel sınıfları düz CSS yaz).
- Erişilebilirlik ve SEO her sayfada: benzersiz `<title>`, `meta description`, Open Graph, `lang`, anlamlı `alt`.

## 8. GitHub Pages Notları
- Depo kökünden yayın (`main` / root) veya `/docs`. Kök öneriliyor.
- `.nojekyll` zorunlu (alt çizgili klasör/CDN sorunlarını önler).
- Özel domain varsa `CNAME` dosyası eklenir.
- Tüm yollar göreli; mutlak `/assets/...` yerine `assets/...`.

## 9. CMS'e Hazırlık (ileride, Adım 10)
İçerik zaten `data/*.json`'da olduğu için **Decap CMS** (eski Netlify CMS) veya **Sveltia CMS** doğrudan bu dosyaları düzenleyecek şekilde bağlanır:
- `admin/index.html` + `admin/config.yml` (backend: `git-gateway` veya doğrudan `github`).
- Her JSON dosyası için bir "collection" tanımı; alanlar yukarıdaki şemayla birebir.
- GitHub OAuth ile giriş → düzenleme → repo'ya commit → site güncellenir. Ekstra sunucu gerekmez.
