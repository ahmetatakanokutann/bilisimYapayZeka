# Web Sayfası Eklemeler — Kapsamlı DOCX Denetim ve Uygulama Raporu

**Belge:** `Web Sayfası Eklemeler.docx`  
**Tarih:** 24 Eylül 2026  
**Denetim Yöntemi:** LibreOffice ile PDF dönüştürme, `pdftoppm` ile 200 DPI tam sayfa rasterlaştırma, 4 sayfanın her birinin tek tek görsel olarak incelenmesi, DOCX XML metin çıkarımı ve özgün medya (`word/media/*`) SHA-256 doğrulaması.

---

## 1. İncelenen DOCX Sayfaları ve Kontrol Listesi

- [x] **Sayfa 1 (page-1.png):** Üst başlık ("Yeditepe Üniversitesi Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi") ve ana sayfa logo düzeltmesi incelendi. Türkçe sitede İngilizce logonun yer aldığı belirtilmiş ve yerine konulacak Türkçe logo gösterilmiştir.
- [x] **Sayfa 2 (page-2.png):** İletişim bilgileri bölümü ve Prof. Dr. E. Şule Aydeniz'in kart düzeltmesi incelendi. E-posta adresleri (Oğuz Bayat ve E. Şule Aydeniz) verilmiş, iç hat tanımlı olmadığı belirtilmiştir. Şule Hoca'nın adının başına "E." harfi ve bölümünün "Almanca Uluslararası İşletme Yönetimi" olarak düzeltilmesi istenmiştir.
- [x] **Sayfa 3 (page-3.png):** "Global AI Bridge Network" infografiği (orijinal tasarım) ve ekip notu ("Burada sadece Oğuz Hocam ve ben varım; asistan olarak senin ve Ekin’in de isimlerini/resimlerini koyalım???") incelendi.
- [x] **Sayfa 4 (page-4.png):** Araştırma odak alanları düzeltmeleri (Endüstri 4.0 ve 5.0 ile Kurumsal Sürdürülebilirlik ve Yeşil Dönüşüm), açılış fotoğrafları ve büyükelçi/uluslararası ziyaret fotoğrafları (özellikle Cenker Han Bey'in yer aldığı fotoğraflar) talepleri incelendi.

---

## 2. Sayfa Bazlı Gereksinim Matrisi

| Belge Sayfası | Bölge / Öğe | Talep Türü | Kaynaktaki Kesin Bilgi | Hedef Site Sayfası | Hedef Veri / Kod Dosyası | Görsel Kaynağı | Durum |
|---|---|---|---|---|---|---|---|
| **Sayfa 1** | Header / Logo | Düzeltme & Dil Ayrımı | Türkçe arayüzde Türkçe logo ("YEDİTEPE ÜNİVERSİTESİ \| BİLİŞİM ve YAPAY ZEKA UYGULAMA ve ARAŞTIRMA MERKEZİ") olmalıdır. | Tüm sayfalar (`site-header`) | `data/site.json`, `assets/js/components.js` | DOCX `word/media/image1.png` → `assets/img/logo-tr.png` | ✅ Uygulandı |
| **Sayfa 2** | İletişim Bilgileri | Düzeltme & Güncelleme | E-posta: Prof. Dr. Oğuz Bayat (`oguz.bayat@yeditepe.edu.tr`), Prof. Dr. E. Şule Aydeniz (`sule.aydeniz@yeditepe.edu.tr`). Telefon: "İç hattımız tanımlı mı?" (tanımlı hat yok). | `iletisim.html`, Tüm sayfalar (`site-footer`) | `data/site.json`, `assets/js/components.js`, `assets/js/render.js` | DOCX `word/media/image3.png` (referans ekran görüntüsü) | ✅ Uygulandı |
| **Sayfa 2** | Ekip Kartı | Düzeltme | İsim: "Prof. Dr. E. Şule Aydeniz". Bölüm: "Almanca Uluslararası İşletme Yönetimi". E-posta: `sule.aydeniz@yeditepe.edu.tr`. | `ekip.html` | `data/team.json` | DOCX `word/media/image4.png` (referans ekran görüntüsü), `assets/img/team-sule-aydeniz.jpg` | ✅ Uygulandı |
| **Sayfa 3** | Ekosistem Diyagramı | Yeni Bölüm & Görsel Entegrasyonu | "Global AI Bridge Network — Küresel Yapay Zekâ İşbirliği ve Dönüşüm Ekosistemi" şeması (6 bileşen, 5 köprü) webe entegre edilmelidir. | `index.html` | `data/ecosystem.json`, `index.html`, `assets/js/render.js`, `assets/css/styles.css` | DOCX `word/media/image5.png` → `assets/img/global-ai-bridge-network.png` (orijinal çözünürlük) | ✅ Uygulandı |
| **Sayfa 3** | Ekip | Yeni Kişi / Danışma | "Asistan olarak senin [Ahmet Atakan Okutan] ve Ekin'in de isimlerini/resimlerini koyalım???" | `ekip.html` | `data/team.json`, `assets/js/render.js` | Kullanıcı ve Ekin fotoğrafı belgede verilmedi. | ⚠️ Kısmen uygulandı (Ahmet Atakan Okutan "Uzman" olarak eklendi, fotoğraf/email uydurulmadı; Ekin bilgileri açık soru) |
| **Sayfa 4** | Araştırma Odak Alanı 1 | Düzeltme & Genişletme | Başlık: "Endüstri 4.0 ve 5.0". Açıklama: "Üretim süreçlerinin dijitalleşmesi ve akıllı fabrikaların inşası. Bu inşa, insan odaklı, sürdürülebilir ve dirençli üretim modelleri ile entegre edilmektedir." | `index.html`, `arastirma.html`, `projeler.html` | `data/research.json`, `data/site.json`, `projeler.html` | DOCX `word/media/image6.png` (referans ekran görüntüsü), ikon: `factory` | ✅ Uygulandı |
| **Sayfa 4** | Araştırma Odak Alanı 6 | Düzeltme & Genişletme | Başlık: "Kurumsal Sürdürülebilirlik ve Yeşil Dönüşüm". Açıklama: "İşletmelerin çevresel, ekonomik ve sosyal performanslarını geliştirmeye yönelik stratejiler. Karbon yönetimi, kaynak ve enerji verimliliği, döngüsel ekonomi, sürdürülebilir tedarik zincirleri ve yeşil iş modelleri." | `index.html`, `arastirma.html`, `projeler.html` | `data/research.json`, `data/site.json`, `projeler.html` | DOCX `word/media/image7.png` (referans ekran görüntüsü), ikon: `leaf` | ✅ Uygulandı |
| **Sayfa 4** | Açılış Fotoğrafları | Yeni Görsel & Galeri | Büyük YZ merkez açılışının resimleri ve altına katılımcıların isimleri. | `hakkimizda.html`, `haberler.html`, `index.html` | `data/gallery.json`, `data/news.json`, `assets/js/render.js` | Yeditepe Üniversitesi resmi açılış haberi fotoğrafları (`assets/img/opening-ceremony.jpg`, `assets/img/opening-bayat.png`) | ✅ Uygulandı |
| **Sayfa 4** | Elçilerin Olduğu Fotoğraflar | Yeni Görsel & Galeri | Üniversitenin uluslararası ziyaret fotoğrafları (özellikle Uluslararası Ofis Müdürü Cenker Han Bey'in bulunduğu fotoğraflar). | `hakkimizda.html`, `haberler.html` | `data/gallery.json`, `assets/js/render.js` | Yeditepe Üniversitesi resmi duyuru fotoğrafları (`assets/img/ireland-visit.jpg`, `assets/img/ireland-meeting.png`) | ✅ Uygulandı |

---

## 3. Uygulanan Değişiklikler ve İlgili Dosyalar

1. **Header Logo Çift Dil Ayrımı:**
   - `data/site.json > brand.logo`: Türkçe için `assets/img/logo-tr.png`, İngilizce için `assets/img/logo.png` olarak ayarlandı.
   - `assets/js/components.js`: `renderHeader` dil değişiminde doğru logoyu dinamik olarak yüklüyor.

2. **İletişim Bilgileri & Telefon Kaldırılması:**
   - `data/site.json > contact.people`: Prof. Dr. Oğuz Bayat (`oguz.bayat@yeditepe.edu.tr`) ve Prof. Dr. E. Şule Aydeniz (`sule.aydeniz@yeditepe.edu.tr`) eklendi.
   - `data/site.json > contact.phone`: Tanımlı iç hat bulunmadığı için boş bırakıldı; `components.js` ve `render.js` boş telefon değerinde `tel:` linkini ve telefon satırını gizliyor.

3. **Prof. Dr. E. Şule Aydeniz Kartı:**
   - `data/team.json`: İsim `Prof. Dr. E. Şule Aydeniz`, bölüm `Almanca Uluslararası İşletme Yönetimi` (EN: `International Business Management (German)`) olarak güncellendi.

4. **Global AI Bridge Network Bölümü:**
   - `data/ecosystem.json` oluşturuldu; 6 bileşen (Akademi, Sanayi, Finans, Kamu, Teknoloji, Uluslararası Ağ) TR ve EN metinleriyle yapılandırıldı.
   - `index.html`: `ecosystem-layout` bölümü eklendi.
   - `assets/js/render.js`: `renderEcosystem` fonksiyonu ile orijinal infografik ve erişilebilir metin listesi bağlandı.
   - `assets/css/styles.css`: Responsive grid ve kart stilleri tanımlandı.

5. **Ekip Listesi:**
   - `data/team.json`: Oğuz Bayat, E. Şule Aydeniz ve Ahmet Atakan Okutan tek listede sıralandı.
   - Ahmet Atakan Okutan "Uzman / Specialist" unvanıyla eklendi; fotoğraf ve e-posta kullanıcı tarafından teyit edilene kadar boş bırakıldı (baş harflerinden oluşan "AAO" avatarı gösteriliyor).

6. **Araştırma Alanları Güncellemeleri:**
   - `data/research.json`: "Endüstri 4.0 ve 5.0" ve "Kurumsal Sürdürülebilirlik ve Yeşil Dönüşüm" başlıkları ve açıklamaları TR/EN olarak güncellendi.
   - `data/site.json`: `filter_industry4` ve `filter_green` anahtarları güncellendi.
   - `projeler.html`: Filtre butonlarının HTML fallback metinleri güncellendi.

7. **Açılış ve Uluslararası Ziyaret Galerileri (Genişletildi & Kurumsallaştırıldı):**
   - `data/gallery.json` güncellendi:
     - Açılış kategorisi 5 zengin fotoğrafa çıkarıldı (`opening-ceremony.jpg`, `opening-ribbon-cutting.jpg`, `opening-bayat.png`, `opening-protocol.jpg`, `opening-event.jpg`).
     - Uluslararası diplomasi kategorisi 3 fotoğrafa çıkarıldı (`ireland-meeting.png`, `ireland-visit.jpg`, `international-office-delegation.png`). Uluslararası Ofis Müdürü Cenker Han'ın yer aldığı odak fotoğraf eklendi.
   - Kullanıcı talebi doğrultusunda **tüm dış haber ve kaynak ("Kaynak: ...") bağlantıları tamamen kaldırıldı**. Kartlar haber agregasyonu havasından çıkarılıp doğrudan merkezin resmi ve kurumsal yayın diliyle yeniden yazıldı.
   - `assets/js/render.js`: `renderGalleries` fonksiyonundan kaynak linki (`item.source`) üretimi kaldırıldı; salt başlık ve kurumsal açıklama metni sunulması sağlandı.

8. **Büyükelçi ve Diplomatik Heyetler Haberi:**
   - `data/news.json` içine "Uluslararası Diplomatik Heyetler ve Büyükelçi Ziyaretleri" haberi eklendi (İrlanda, İtalya, Almanya büyükelçileri ve heyetleri; Bedrettin Dalan, Prof. Dr. Oğuz Bayat ve Cenker Han katılımıyla).
   - Ana sayfadaki son haberler alanı 2 sütunlu dinamik yapıyla her iki haberi gösterir hale geldi.

9. **Kod Kalitesi ve Kusur Düzeltmeleri:**
   - `data/site.json`: Yinelenen `"projects_empty"` anahtarı silinerek duplicate key hatası giderildi.
   - `index.html`: Satır 170'teki `<a>` etiketindeki mükerrer `data-i18n="view_all"` kaldırıldı, böylece dil değişiminde içteki ikonun kaybolması engellendi.
   - `assets/js/i18n.js`: `getLang()` fonksiyonuna URL query parametresi (`?lang=en`) desteği eklendi. `updateUI()` içindeki mükerrer render çağrısı optimize edilerek header/footer'ın çift render edilmesi önlendi.
   - `assets/js/main.js`: `initAnimations()` içindeki `IntersectionObserver` mantığı iyileştirildi; görünür alandaki kartların `opacity: 0` kalması engellendi.
   - `assets/js/render.js`: Kritik infografik ve galeri resimlerinde `loading="lazy"` yerine güvenli yükleme sağlandı.
   - `ARCHITECTURE.md`: `ecosystem.json` ve `gallery.json` dosya ağacına ve şema tanımlarına eklendi.

---

## 4. Eklenen ve Doğrulanan Görseller

| Dosya Yolu | Belge Kaynağı / Özgün Medya | Çözünürlük / Format | Kullanım Alanı | Açıklama |
|---|---|---|---|---|
| `assets/img/logo-tr.png` | DOCX Sayfa 1 / `word/media/image1.png` | 1012×196 PNG | Header Türkçe Logo | Birebir eşleşti (`014bb8a0...`) |
| `assets/img/logo.png` | DOCX Sayfa 1 / `word/media/image2.png` | 460×101 PNG | Header İngilizce Logo | Doğrulandı |
| `assets/img/global-ai-bridge-network.png` | DOCX Sayfa 3 / `word/media/image5.png` | 902×797 PNG | Ana Sayfa Ekosistem İnfografiği | Birebir eşleşti (`2e4195b3...`) |
| `assets/img/opening-ceremony.jpg` | Teknopark İstanbul Açılış | 3861×2304 JPG | Açılış Galerisi & Haber | Genel protokol ve kurdele kesimi |
| `assets/img/gallery/opening-ribbon-cutting.jpg` | Açılış Fotoğrafından Odak Kırpma | 1300×1500 JPG | Açılış Galerisi | Bedrettin Dalan & Dr. Olaf Sauer kurdele anı |
| `assets/img/opening-bayat.png` | Teknopark İstanbul Açılış | 800×585 PNG | Açılış Galerisi | Prof. Dr. Oğuz Bayat amfi sunumu |
| `assets/img/gallery/opening-protocol.jpg` | Açılış Fotoğrafından Odak Kırpma | 1200×1500 JPG | Açılış Galerisi | Yönetim ve Protokol Heyeti |
| `assets/img/opening-event.jpg` | Teknoloji Üssü Binası | 1080×814 JPG | Açılış Galerisi & Yerleşke | Teknopark İstanbul Teknoloji Üssü |
| `assets/img/ireland-meeting.png` | Uluslararası Ziyaret | 955×639 PNG | Uluslararası Galeri & Haber | Bayat, Dalan, Brosnan, Cenker Han |
| `assets/img/ireland-visit.jpg` | Uluslararası Ziyaret | 1080×720 JPG | Uluslararası Galeri | Dalan ve Büyükelçi Brosnan plaket |
| `assets/img/gallery/international-office-delegation.png` | Uluslararası Ziyaret Odak Kırpma | 470×540 PNG | Uluslararası Galeri | Cenker Han & Büyükelçi Brosnan |

---

## 5. Bilerek Uygulanmayan / Uydurulmayan Bilgiler

1. **Telefon Numarası:** DOCX sayfa 2'de yer alan "Telefon: İç hattımız tanımlı mı?" notu gereği, merkezin tahsis edilmiş bir iç hat numarası bulunmadığı için genel santral veya sahte telefon eklenmemiş, telefon bağlantıları temizlenmiştir.
2. **Ekin'in Ekip Kaydı:** DOCX sayfa 3'te geçen "Ekin" için soyadı, akademik unvanı, görevi ve fotoğrafı belgede bulunmamaktadır. Uydurma bilgi ekleme yasağı gereğince teyit edilene kadar kayıt açılmamıştır.
3. **Ahmet Atakan Okutan İletişim & Fotoğraf:** Rolü "Uzman / Specialist" olarak eklenmiş, ancak kişisel e-posta ve fotoğraf belgede yer almadığı için uydurulmamış; CSS tabanlı baş harf avatarı kullanılmıştır.
4. **Haber Atıfları:** Sitede verilerin dış haberlerden alındığını ima eden tüm ibareler ("haberinde belirtilen", "haber kaynağı", "öğrenci merkezi" vb.) kaldırılmış; doğrudan resmi kurumsal ve prestijli yayın dili uygulanmıştır.

---

## 7. Büyükelçi Ziyaretleri ve Fraunhofer Heyeti Fotoğraflarının Entegrasyonu

Kullanıcı talebi doğrultusunda resmi kanallar ve Prof. Dr. Oğuz Bayat'ın arşivleri taranarak yüksek çözünürlüklü, doğrulanmış etkinlik fotoğrafları siteye entegre edilmiştir:

1. **Uluslararası Büyükelçi Kabulleri:**
   - **Norveç Büyükelçisi:** Norveç'in Türkiye Büyükelçisi Andreas Gaarder ve heyetinin Kurucu ve Onursal Başkanımız Bedrettin Dalan ve Prof. Dr. Oğuz Bayat tarafından makamda ağırlanması, hediye takdimi (`assets/img/ambassador-norway-dalan.png`).
   - **İtalya Büyükelçisi:** İtalya Büyükelçisi Giorgio Marrapodi'ye iki ülke akademik ve diplomatik ilişkilerine katkılarından dolayı Bedrettin Dalan ve Rektör Mehmet Durman tarafından Fahri Doktora beratının takdimi (`assets/img/ambassador-italy-dalan.jpg`).
   - **Uruguay Büyükelçisi:** Uruguay Büyükelçisi Hugo Cayrús ve Başkonsolos Mauro Bruno Sapokas'ın Prof. Dr. Oğuz Bayat ile laboratuvar incelemesi ve görüşmesi (`assets/img/ambassador-uruguay.png`).
   - **İrlanda Diplomatik Heyeti:** Bedrettin Dalan, Prof. Dr. Oğuz Bayat ve Uluslararası Ofis Müdürü Cenker Han'ın katılımıyla çalışma toplantısı ve plaket takdimi (`assets/img/ireland-meeting.png`, `assets/img/ireland-visit.jpg`, `assets/img/gallery/international-office-delegation.png`).

2. **Fraunhofer Enstitüsü ve Merkez Açılışı:**
   - **Almanya Stuttgart Stratejik İmzası:** Bedrettin Dalan ve Prof. Dr. Oğuz Bayat'ın Fraunhofer Enstitüsü - IIB ile Teknopark İstanbul Yapay Zekâ Merkezi kuruluş anlaşmasını imzalaması (`assets/img/fraunhofer-germany-dalan.jpeg`).
   - **Açılış Protokolü ve Tören:** Bedrettin Dalan, Fraunhofer IOSB Direktörü Dr. Olaf Sauer, Rektör Mehmet Durman ve Teknopark İstanbul yönetiminin yer aldığı açılış salonu ve sunumu (`assets/img/fraunhofer-opening-hall.jpg`).
   - **Dr. Olaf Sauer Açılış Konuşması:** Fraunhofer IOSB Direktörünün Türkiye-Almanya endüstriyel yapay zeka ve dijital ikiz vizyonu hitabı (`assets/img/fraunhofer-olaf-sauer.jpg`).
   - **Bedrettin Dalan & Dr. Olaf Sauer İstişaresi:** Açılışta yapay zeka projeleri değerlendirmesi (`assets/img/fraunhofer-dalan-consultation.jpg`).
   - **Merkez Laboratuvarları ve Girişimci Turu:** Açılış heyetinin laboratuvar incelemesi (`assets/img/opening-lab-tour.png`).
   - **İSTKA Yapay Zeka Heyeti:** Prof. Dr. E. Şule Aydeniz ve Prof. Dr. Oğuz Bayat'ın İSTKA Genel Sekreteri ile toplantısı (`assets/img/istka-aydeniz-bayat.png`).

3. **Kullanıcı Talebiyle Yapılan İnce Ayarlar:**
   - **"Uluslararası Ofis ve Diplomatik Temsilcilikler Teması"** kartı (`international-office-coordination`) `data/gallery.json`'dan kaldırıldı.
   - **"Kurucu Heyet ve Fraunhofer İş Birliği Başlangıcı"** fotoğrafı (`assets/img/gallery/opening-ribbon-cutting.jpg`), sağ tarafta yer alan Rektör Yardımcımız Prof. Dr. Oğuz Bayat'ı da tam boy kapsayacak şekilde genişletilerek yeniden kadrajlandı ve açıklaması güncellendi.

---

## 8. İletişim Formunun Yenilenmesi ve Kurumsal E-posta Entegrasyonu

1. **İletişim Formunun Kaldırılması & Doğrudan İletişim Masası:**
   - `iletisim.html` üzerinde statik ortamda bir backend'e bağlı olmayan "Bize Mesaj Gönderin" formu tamamen kaldırıldı.
   - Yerine doğrudan kurumsal iş birliği, heyet ziyaretleri ve Teknopark İstanbul Teknoloji Üssü yerleşkesi ziyaretlerini düzenleyen modern "Doğrudan İletişim ve Randevu / Akademik İş Birliği Masası" paneli yerleştirildi.
   - Hafta içi çalışma ve ziyaret saatleri (09:00 - 17:00), ön randevu gereksinimi ve doğrudan e-posta istemcisini açan `mailto:` yönlendirmesi eklendi.
   - `data/site.json` içine TR ve EN dil desteği anahtarları eklendi.

2. **Ahmet Atakan Okutan E-posta Entegrasyonu:**
   - Kullanıcı tarafından teyit edilen kurumsal e-posta adresi (`ahmetatakan.okutan@yeditepe.edu.tr`):
     - `data/site.json` > `contact.people` listesine üçüncü kişi olarak eklendi (böylece hem `iletisim.html` iletişim sayfasında hem de tüm sayfaların paylaşımlı footer'ında görüntülendi).
     - `data/team.json` > `ahmet-atakan-okutan` kartındaki `email` alanına tanımlandı (ekip sayfasında tıklanabilir e-posta bağlantısı aktif).

3. **Ahmet Atakan Okutan Profil Fotoğrafı:**
   - Kullanıcı tarafından iletilen `WhatsApp Image 2026-09-24 at 22.28.37.jpeg` fotoğrafı incelendi.
   - Ekip kartlarının dairesel (1:1) portre standardına uygun şekilde 1086×1086 ebadında baş ve omuz hizalı olarak kadrajlandı ve `assets/img/team-ahmet-atakan-okutan.jpg` adıyla kaydedildi.
   - `data/team.json` içindeki `ahmet-atakan-okutan` kartına eklendi.
   - `assets/js/main.js` animasyon seçicisi güncellenerek kart içi metinlerin görünürlüğü korundu; TR ve EN görünümleri Playwright ile test edilerek doğrulandı.


