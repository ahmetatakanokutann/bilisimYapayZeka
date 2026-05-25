# PROGRESS.md — İlerleme & "Nerede Kaldım"

> **Gemini, her oturum başında burayı oku; her adım bitince burayı güncelle.** Bu dosya, oturum kapansa bile kaldığın yeri kaybetmemen içindir.

## 🔖 Durum İşaretçisi
- **Mevcut Adım:** Adım 09 — GitHub Pages yayını
- **Sıradaki Eylem:** `prompts/09-github-pages-yayin.md` dosyasını aç ve uygula.
- **Son güncelleyen:** Gemini CLI (içerik ve görsel finalizasyon) — 2026-05-25

## ✅ Adım Durum Tablosu
| # | Adım | Dosya | Durum |
|---|------|-------|-------|
| 01 | Proje iskeleti + tasarım sistemi | `prompts/01-iskelet-ve-tasarim-sistemi.md` | ✅ Tamamlandı |
| 02 | Veri katmanı (JSON şeması + seed) | `prompts/02-veri-katmani-json.md` | ✅ Tamamlandı |
| 03 | Ortak bileşenler (header/footer) + i18n | `prompts/03-ortak-bilesenler-i18n.md` | ✅ Tamamlandı |
| 04 | Ana sayfa | `prompts/04-ana-sayfa.md` | ✅ Tamamlandı |
| 05 | Hakkımızda / Merkez + açılış | `prompts/05-hakkimizda-merkez.md` | ✅ Tamamlandı |
| 06 | Araştırma alanları + Projeler (Fraunhofer/IIB) | `prompts/06-arastirma-projeler.md` | ✅ Tamamlandı |
| 07 | Ekip + Haberler/Duyurular | `prompts/07-ekip-haberler.md` | ✅ Tamamlandı |
| 08 | İletişim + SEO/erişilebilirlik/cila | `prompts/08-iletisim-cila.md` | ✅ Tamamlandı |
| 09 | GitHub Pages yayını | `prompts/09-github-pages-yayin.md` | ⬜ Bekliyor |
| 10 | (Opsiyonel) Admin / CMS | `prompts/10-opsiyonel-admin-cms.md` | ⬜ Bekliyor |

**Durum kodları:** ⬜ Bekliyor · 🔄 Devam ediyor · ✅ Tamamlandı · ⏸️ Bloke (sebep yaz)

## 📝 Değişiklik Günlüğü (yeni en üstte)
- **2026-05-25 — Gemini CLI:** Header düzeni iyileştirildi: Menü masaüstünde tam ortalandı, geniş logo çakışmasını önlemek için hamburger menü geçişi 1280px (XL) seviyesine çekildi. Logo boyutu daha da büyütüldü (md:h-[4.5rem]).
- **2026-05-25 — Gemini CLI:** Logo güncellendi (logo.png) ve boyutları optimize edildi. Header ve sticky filtre yükseklikleri senkronize edildi. Hakkımızda ve Haberler bölümlerindeki açılış görselleri (opening-event.jpg) eklendi.
- **2026-05-25 — Gemini CLI:** Kapsamlı görsel ve içerik güncellemeleri yapıldı: Header logo büyütüldü, hero videosu eklendi, ekip ve ortaklar verileri gerçek bilgilerle yenilendi, resmi İngilizce isim tüm siteye yansıtıldı.
- **2026-05-25 — Gemini CLI:** Adım 08 tamamlandı. iletisim.html oluşturuldu, formspree ve harita entegrasyonu yapıldı. Site geneli SEO, erişilebilirlik ve performans cilaları uygulandı.
- **2026-05-25 — Gemini CLI:** Adım 07 tamamlandı. ekip.html ve haberler.html oluşturuldu.
- **2026-05-25 — Gemini CLI:** Adım 06 tamamlandı. arastirma.html ve projeler.html oluşturuldu.
- **2026-05-25 — Gemini CLI:** Adım 05 tamamlandı. hakkimizda.html oluşturuldu.
- **2026-05-25 — Gemini CLI:** Adım 04 tamamlandı. Ana sayfa dinamik bölümleri ve Lucide ikonları eklendi.
- **2026-05-25 — Gemini CLI:** Adım 03 tamamlandı. Header/Footer ve i18n altyapısı kuruldu.
- **2026-05-25 — Gemini CLI:** Adım 02 tamamlandı. JSON veri katmanı oluşturuldu.
- **2026-05-25 — Gemini CLI:** Adım 01 tamamlandı. Proje iskeleti kuruldu.

## ⚠️ Açık Sorular / Bloke Edenler
- **Yayın hedefi (KARAR):** GitHub Pages **varsayılan URL** (kullanıcı.github.io/depo-adı). Özel domain (ai.yeditepe.edu.tr) KULLANILMAYACAK; CNAME oluşturulmayacak. Depo **zaten mevcut**. Adım 09'da canonical/OG/JSON-LD içindeki "ai.yeditepe.edu.tr" adresleri gerçek github.io URL'siyle değiştirilecek; og:image mutlak URL + PNG yapılacak.
- **İçerik teyidi bekleyenler:** kesin açılış tarihi (Mart 2026 sonu); resmi e-posta/telefon (site.json.contact placeholder, verify:true); iletişim formu Formspree endpoint'i (site.json.contact'a `formspreeUrl` eklenmeli, yoksa form hata mesajı verir); gerçek projeler (şu an proje YOK, projects.json = []).
