# PROJECT-OVERVIEW.md — Ne Yapıyoruz & Doğrulanmış İçerik

Bu dosya iki işe yarar: (1) projenin amacını ve neyi neden yaptığımızı anlatır, (2) sitenin gerçek içeriğini besleyecek **doğrulanmış araştırma verilerini** tutar. JSON dosyaları bu kaynaktan doldurulacak.

---

## 1. Amaç

Yeditepe Üniversitesi **Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi**'nin tanıtım sitesi. Hedef: üniversitenin diğer merkez sitelerinin (ör. Konfüçyüs Enstitüsü, YUCTEC) arasında "inci gibi parlayan", modern bir vitrin. Fraunhofer ve IIB ortaklıkları öne çıkacak.

**Teknik çerçeve:** Statik (GitHub Pages), saf HTML/CSS/JS + Tailwind, çift dil (TR/EN), içerik JSON'da → ileride admin/CMS eklenebilir.

## 2. Referans Siteler (ilham, kopya değil)
- **YUCTEC** — https://yuctec.com/ → kurumsal, sade, "Teknoloji Üssü içinde" vurgusu, ekip + blog + iletişim yapısı.
- **Konfüçyüs Enstitüsü** — https://confucius.yeditepe.edu.tr/ → çift dil (bayrak ile geçiş), haber/duyuru + galeri + carousel.
- **Açılış haberi (X)** — https://x.com/YeditepeUni/status/2037581869261226014
- **Resmi duyuru (EN)** — https://yeditepe.edu.tr/en/announcements/turkiye-and-germany-join-forces-artificial-intelligence

---

## 3. DOĞRULANMIŞ ARAŞTIRMA VERİLERİ
> Haber/duyuru kaynaklarından derlendi. ⚠️ ile işaretliler kullanıcı onayı bekliyor (JSON'da `"verify": true`).

### Merkez Künyesi
| Alan | TR | EN |
|---|---|---|
| Tam ad | Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi | **Informatics and Artificial Intelligence Applications and Research Center** (resmi — logodan; tüm sitede bu kullanılıyor) |
| Konum | Yeditepe Üniversitesi Teknoloji Üssü — Teknopark İstanbul | Yeditepe University Technology Hub — Teknopark Istanbul |
| Açılış | Mart 2026 sonu ⚠️ (kaynaklar 24–30 Mart arası; kesin tarihi teyit et) | Late March 2026 ⚠️ |

### Açılışta Tanıtılan 3 Birim
1. Girişim Stüdyosu (Venture Studio)
2. **Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi** (bu sitenin konusu)
3. Karbon Çözümleri Laboratuvarı (Carbon Solutions Laboratory)

### Ortaklar (sitede gösterilen sıra — gerçek logolar `assets/img/`'de)
1. **Fraunhofer IOSB (Almanya)** — `partner-fraunhofer.svg` — https://www.iosb.fraunhofer.de/
2. **IIB — International Institute of Business Enterprises e.V.** — `partner-iib.png` — https://www.iib-enterprises.eu
3. **Teknopark İstanbul** (ev sahibi ekosistem) — `partner-teknopark.svg` — https://www.teknoparkistanbul.com.tr
4. **Yeditepe Üniversitesi** (kurucu) — `partner-yeditepe.svg` — https://www.yeditepe.edu.tr

### Açılış Katılımcıları ⚠️ (unvanları teyit et)
- Bedrettin Dalan — Yeditepe Üniversitesi Kurucu ve Onursal Başkanı
- Prof. Dr. Mehmet Durman — Rektör
- Prof. Dr. Oğuz Bayat — AR-GE ve İnovasyondan Sorumlu Rektör Yardımcısı
- Dr. Olaf Sauer — Fraunhofer IOSB Almanya Müdürü
- Recep Tanrıkulu — IIB Kurucusu
- Doç. Dr. Faik Tanrıkulu — IIB Türkiye Temsilcisi
- Dr. Burak Keskik — Teknopark İstanbul Genel Müdür Yardımcısı

### Odak Alanları (Fraunhofer işbirliği)
Endüstri 4.0 · Veri Yönetimi · Endüstriyel Yapay Zeka · Dijital İkizler (Digital Twins) · Robotik · Yeşil Dönüşüm / Sürdürülebilirlik

### Öncelikli Sektörler
Sağlık · Otomotiv · Çelik · Alüminyum · Üretim sanayi (Türkiye'de faaliyet gösteren Alman şirketleri dahil)

### Önemli Alıntı ⚠️
> Bedrettin Dalan: "Bu işbirliğiyle çok daha önemli çalışmalar gerçekleştirilecek." (kaynaktan derlendi, teyit et)

---

## 4. Site Sayfa Envanteri
1. **Ana Sayfa** — hero, merkez tanıtımı, odak alanları, öne çıkan projeler, ortaklar şeridi, son haberler, CTA
2. **Hakkımızda / Merkez** — misyon-vizyon, 3 birim, açılış etkinliği, Teknoloji Üssü
3. **Araştırma Alanları** — odak alanları kartları
4. **Projeler** — ŞU AN PROJE YOK (`projects.json = []`). Sayfa "yakında" mesajı gösteriyor; ana sayfada "Öne Çıkan Projeler" bölümü gizli. (Filtre/modal altyapısı hazır; gerçek proje gelince doldurulacak.)
5. **Ekip** — 2 gerçek kişi (Yönetim): **Prof. Dr. Oğuz Bayat** (Merkez Müdürü · AR-GE'den Sorumlu Rektör Yardımcısı) ve **Prof. Dr. Şule Aydeniz** (Müdür Yardımcısı). "Araştırmacılar" bölümü boş olduğu için gizli.
6. **Haberler / Duyurular** — açılış haberi seed olarak
7. **İletişim** — adres, harita, form (statik / formspree opsiyonel)

## 5. Açık Bilgiler (durum)
- [x] Merkez logosu / görseller — eklendi (bkz. bölüm 7)
- [x] Ekip üyeleri — Bayat + Aydeniz eklendi
- [x] Yayın hedefi — GitHub Pages varsayılan URL'ye karar verildi (özel domain yok)
- [ ] Kesin açılış tarihi (Mart 2026 sonu — teyit edilecek)
- [ ] Resmi e-posta / telefon / tam adres (site.json.contact placeholder, `verify:true`)
- [ ] İletişim formu için Formspree endpoint (`site.json.contact.formspreeUrl`)
- [ ] Gerçek proje listesi (şu an proje yok)

## 6. İlerleme Özeti (insan dili)
- **2026-05-25** — İskelet/mimari/prompt yapısı kuruldu (Claude).
- **2026-05-25** — Adım 01–08 tamamlandı: 7 sayfa, çift dil, i18n, tasarım sistemi, SEO/erişilebilirlik (Gemini CLI).
- **2026-05-25** — İçerik finalizasyonu: gerçek logo, hero videosu, ekip (Bayat/Aydeniz), 4 ortak gerçek logoyla, açılış fotoğrafı, "proje yok" durumu, resmi EN ad. Header menüsü ortalandı, logo büyütüldü.
- **Şu an:** Site içerik+teknik olarak hazır. Sıradaki = **Adım 09 (GitHub Pages yayını)**, varsayılan github.io URL'siyle.

## 7. Eklenen Görseller (assets/img/) — kaynaklarıyla
| Dosya | Ne | Kaynak |
|---|---|---|
| `logo.png` | Header logosu (boşlukları kırpılmış, 3140×495) | `ENG_Universite ile@300x-8.png` (kök) → kırpıldı |
| `logo-full.png` | Orijinal geniş logo (yedek) | Kullanıcı |
| `hero-bg.mp4` | Hero arka plan videosu (silik) | Kullanıcı (`6171440901722685946_sample_2.mp4`) |
| `team-oguz-bayat.png` | Prof. Dr. Oğuz Bayat | yeditepe.edu.tr/tr/akademik-kadro/4931 |
| `team-sule-aydeniz.jpg` | Prof. Dr. Şule Aydeniz | yeditepe.edu.tr/tr/akademik-kadro/427 |
| `partner-fraunhofer.svg` | Fraunhofer logosu | fraunhofer.de |
| `partner-iib.png` | IIB logosu | iib-enterprises.eu |
| `partner-teknopark.svg` | Teknopark İstanbul logosu | teknoparkistanbul.com.tr |
| `partner-yeditepe.svg` | Yeditepe Üniversitesi logosu | yeditepe.edu.tr |
| `opening-event.jpg` | Teknoloji Üssü binası / açılış foto | ogrencimerkezi.yeditepe.edu.tr |

## 8. Önemli İçerik Kararları (özet)
- **Proje yok:** `projects.json = []`; ilgili bölümler "yakında"/gizli.
- **Ekip = 2 kişi (Yönetim):** Bayat (Müdür), Aydeniz (Müdür Yrd.); Araştırmacılar bölümü gizli.
- **Ortaklar = 4** (Fraunhofer, IIB, Teknopark, Yeditepe) gerçek logo + tıklanır.
- **Resmi EN ad:** "Informatics and Artificial Intelligence Applications and Research Center".
- **Yayın:** GitHub Pages varsayılan URL (özel domain yok, CNAME yok).
