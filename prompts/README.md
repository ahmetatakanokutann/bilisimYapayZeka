# prompts/ — Adım Adım Yapım Kılavuzu

Bu klasör, siteyi **katman katman** kuran 10 adımlık prompt setidir. Her dosya tek bir katmanı bitirir ve bir sonrakine zemin hazırlar.

## Nasıl Kullanılır (Gemini CLI)
1. Projeyi aç. Gemini `GEMINI.md`'yi otomatik okur.
2. `PROGRESS.md`'deki **Mevcut Adım**'a bak.
3. O adımın `NN-*.md` dosyasını Gemini'ye ver. Önerilen komut kalıbı:
   > "`prompts/NN-....md` dosyasını uygula. `ARCHITECTURE.md`'ye birebir uy. Bitince `PROGRESS.md`'yi güncelle."
4. Adım bitince kabul kriterlerini doğrula, sonraki adıma geç.

## Altın Kurallar
- **Sırayı bozma.** 01 → 10. Her adım öncekine dayanır.
- **Tek doğruluk kaynağı `ARCHITECTURE.md`.** Renk/şema/isim oradan.
- **İçerik JSON'da.** Adım 02'den sonra metinleri HTML'e gömme.
- Her adım sonunda **`PROGRESS.md`** güncellenir (yoksa kaldığın yer kaybolur).

## Adımlar
| # | Dosya | Katman |
|---|-------|--------|
| 01 | `01-iskelet-ve-tasarim-sistemi.md` | Klasörler, base HTML, Tailwind, tasarım token'ları |
| 02 | `02-veri-katmani-json.md` | Tüm `data/*.json` (TR/EN, gerçek seed) |
| 03 | `03-ortak-bilesenler-i18n.md` | Header/footer enjeksiyonu, dil değiştirici, JS altyapısı |
| 04 | `04-ana-sayfa.md` | Ana sayfa tüm bölümler |
| 05 | `05-hakkimizda-merkez.md` | Hakkımızda, 3 birim, açılış etkinliği |
| 06 | `06-arastirma-projeler.md` | Araştırma alanları + Projeler (Fraunhofer/IIB) |
| 07 | `07-ekip-haberler.md` | Ekip + Haberler/Duyurular |
| 08 | `08-iletisim-cila.md` | İletişim + SEO + erişilebilirlik + responsive cila |
| 09 | `09-github-pages-yayin.md` | `.nojekyll`, sitemap, GitHub Pages yayını |
| 10 | `10-opsiyonel-admin-cms.md` | (Opsiyonel) Decap/Sveltia CMS admin paneli |

> İlk 9 adım siteyi yayına hazır eder. Adım 10 isteğe bağlıdır; içerik JSON'da olduğu için sonradan da eklenebilir.
