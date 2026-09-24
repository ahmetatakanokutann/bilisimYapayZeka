# PROGRESS.md — İlerleme & "Nerede Kaldım"

> **Gemini, her oturum başında burayı oku; her adım bitince burayı güncelle.** Bu dosya, oturum kapansa bile kaldığın yeri kaybetmemen içindir.

## 🔖 Durum İşaretçisi
- **Mevcut Adım:** `Web Sayfası Eklemeler.docx` revizyonu tamamlandı & Adım 09 — GitHub Pages yayınına hazır
- **Sıradaki Eylem:** Kullanıcı doğrulamaları sonrasında `prompts/09-github-pages-yayin.md` dosyasını aç ve uygula.
- **Son güncelleyen:** Antigravity (DOCX denetimi, görsel/veri/tasarım entegrasyonu ve çoklu cihaz testleri) — 2026-09-24

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
| *  | DOCX İçerik ve Görsel Revizyonu | `Web Sayfası Eklemeler.docx` | ✅ Tamamlandı |
| 09 | GitHub Pages yayını | `prompts/09-github-pages-yayin.md` | ⬜ Bekliyor |
| 10 | (Opsiyonel) Admin / CMS | `prompts/10-opsiyonel-admin-cms.md` | ⬜ Bekliyor |

**Durum kodları:** ⬜ Bekliyor · 🔄 Devam ediyor · ✅ Tamamlandı · ⏸️ Bloke (sebep yaz)

- **2026-09-24 — Antigravity:** Ahmet Atakan Okutan için sağlanan resmi profil fotoğrafı (`WhatsApp Image 2026-09-24 at 22.28.37.jpeg`) sisteme aktarıldı:
  - `assets/img/team-ahmet-atakan-okutan.jpg`: Orijinal yüksek çözünürlüklü kareden (1448x1086), ekip standartlarına (1:1 portre) uygun şekilde 1086x1086 boyutunda kadrajlandı ve optimize edildi.
  - `data/team.json`: Ahmet Atakan Okutan profil kartının `photo` alanı güncellendi.
  - `assets/js/main.js`: `initAnimations()` içindeki seçici güncellenerek kart içi metinlerin dil değişiminde görünmez kalması önlendi; `langChanged` olayında animasyonlar yeniden tetiklendi.
  - TR ve EN modlarında `ekip.html` tam sayfa görsel testi Playwright ile başarıyla tamamlandı.
- **2026-09-24 — Antigravity:** İletişim altyapısı ve galeri son revizyonları tamamlandı:
  - `iletisim.html`: Çalışmayan "Bize Mesaj Gönderin" iletişim formu kaldırıldı; yerine kurumsal ve doğrudan erişim sağlayan "Doğrudan İletişim ve Randevu / İş Birliği Masası" paneli yerleştirildi (Ziyaret & çalışma saatleri, Teknopark İstanbul Teknoloji Üssü yerleşkesi açıklaması ve doğrudan `mailto:` aksiyonu).
  - Ahmet Atakan Okutan'ın doğrulanmış kurumsal e-posta adresi (`ahmetatakan.okutan@yeditepe.edu.tr`) hem `data/site.json` (İletişim sayfası ve paylaşımlı footer) hem de `data/team.json` (ekip kartı) veri katmanına işlendi.
  - `data/gallery.json`: "Uluslararası Ofis ve Diplomatik Temsilcilikler Teması" kartı kaldırıldı; "Kurucu Heyet ve Fraunhofer İş Birliği Başlangıcı" görseli (`opening-ribbon-cutting.jpg`), Rektör Yardımcımız Prof. Dr. Oğuz Bayat'ı tam boy kapsayacak biçimde geniş kadrajlandı.
- **2026-09-24 — Antigravity:** Büyükelçi kabulleri (Norveç, İtalya, Uruguay, İrlanda) ve Fraunhofer Enstitüsü - Teknopark İstanbul Açılış fotoğrafları eksiksiz entegre edildi:
  - `data/gallery.json`: Toplam 15 yüksek çözünürlüklü fotoğrafa genişletildi (9 açılış/Fraunhofer + 6 uluslararası diplomasi). Bedrettin Dalan ve Prof. Dr. Oğuz Bayat'ın büyükelçilerle makam görüşmeleri, İtalya Büyükelçisi Giorgio Marrapodi'ye Fahri Doktora beratı takdimi ve Almanya Stuttgart Fraunhofer Enstitüsü ortaklık anlaşması fotoğrafları eklendi.
  - `data/news.json`: 3 kurumsal habere genişletildi (Açılış töreni, Büyükelçi ziyaretleri, Almanya Fraunhofer anlaşması).
  - Test & Doğrulama: `http://localhost:8080` üzerinde `hakkimizda.html`, `haberler.html` ve `index.html` Playwright ile test edildi; 0 kırık görsel, 0 hata onaylandı.
- **2026-09-24 — Antigravity:** Kullanıcı geri bildirimi doğrultusunda galeri, diplomasi ve içerik sunumu kurumsallaştırıldı:
  - Sitedeki tüm "Kaynak: ..." bağlantıları ve haber portallarından alıntı yapıldığını ima eden ifadeler tamamen kaldırıldı; metinler resmi ve kurumsal yayın diliyle yeniden yazıldı.
  - Açılış galerisi 5 fotoğrafa çıkarıldı: Protokol kurdele kesimi, Dalan & Sauer ortaklık anı, Oğuz Bayat vizyon sunumu, yönetim heyeti ve teknoloji üssü binası.
  - Uluslararası büyükelçi ziyaretleri kapsamı genişletildi: `data/news.json`'a diplomatik heyetler haberi eklendi; İrlanda, İtalya ve Almanya temasları ile Uluslararası Ofis Müdürü Cenker Han'ın yer aldığı odak fotoğraf galeride sunuldu.
- **2026-09-24 — Antigravity:** `Web Sayfası Eklemeler.docx` belgesi tam sayfa raster görüntüler ve çıkarılan özgün medya öğeleri üzerinden baştan sona denetlendi; talep edilen tüm içerik, görsel ve düzen değişiklikleri uygulandı:
  - Dil bazlı logo ayrımı (`brand.logo.tr` = `assets/img/logo-tr.png`, `brand.logo.en` = `assets/img/logo.png`) `site.json` ve `components.js`'e bağlandı.
  - İletişim bilgileri revize edildi: Prof. Dr. Oğuz Bayat ve Prof. Dr. E. Şule Aydeniz eklendi; merkezin henüz iç hattı olmadığı için sabit telefon kaldırıldı.
  - Global AI Bridge Network diyagramı (`global-ai-bridge-network.png`) ve `ecosystem.json` oluşturuldu, ana sayfaya entegre edildi.
  - Araştırma alanları ("Endüstri 4.0 ve 5.0", "Kurumsal Sürdürülebilirlik ve Yeşil Dönüşüm") `research.json` ve `site.json`'da güncellendi; `projeler.html` fallback filtre butonları senkronize edildi.
  - Açılış ve Clare Brosnan / Cenker Han etkinlik fotoğrafları `gallery.json` ile Hakkımızda ve Haberler sayfalarına dinamik galeri olarak eklendi.
  - Ahmet Atakan Okutan "Uzman / Specialist" unvanıyla `team.json`'a eklendi; Prof. Dr. E. Şule Aydeniz'in adı ve bölümü ("Almanca Uluslararası İşletme Yönetimi") güncellendi.
  - Kodlama ve UI iyileştirmeleri: `index.html` satır 170'teki mükerrer `data-i18n` temizlendi, `site.json` duplicate key giderildi, headless modda kartların gizli kalmaması için `main.js` `IntersectionObserver` davranışı düzeltildi.
  - 54 tam ekran görüntüsü (8 sayfa x 3 ekran boyutu [1440x900, 768x1024, 390x844] x 2 dil [TR/EN]) ile görsel ve teknik doğrulama yapıldı.
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
- **Doğrulama Bekleyen Ekip Bilgileri:**
  - **Ekin:** Belgede yalnızca "Ekin" adı geçtiği için (soyadı, akademik/idari unvanı, fotoğrafı ve e-posta adresi bulunmadığından) uydurma yapılmadan askıya alındı. Bilgiler sağlandığında `data/team.json`'a eklenecektir.
  - **Ahmet Atakan Okutan:** Unvan ("Uzman"), resmi e-posta (`ahmetatakan.okutan@yeditepe.edu.tr`) ve resmi profil fotoğrafı (`team-ahmet-atakan-okutan.jpg`) başarıyla tamamlandı.
- **İletişim:** Merkeze ait müstakil bir iç hat tahsis edildiğinde `data/site.json` contact bölümüne eklenecektir.
- **Yayın hedefi (KARAR):** GitHub Pages **varsayılan URL** (kullanıcı.github.io/depo-adı). Özel domain (ai.yeditepe.edu.tr) KULLANILMAYACAK; CNAME oluşturulmayacak. Depo **zaten mevcut**. Adım 09'da canonical/OG/JSON-LD içindeki "ai.yeditepe.edu.tr" adresleri gerçek github.io URL'siyle değiştirilecek; og:image mutlak URL + PNG yapılacak.
