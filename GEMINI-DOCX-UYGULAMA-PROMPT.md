# Gemini CLI ana uygulama promptu

Aşağıdaki görevi doğrudan bu proje üzerinde, baştan sona uygula. Bu yalnızca analiz veya öneri görevi değildir: belgeyi eksiksiz denetle, gereken dosya değişikliklerini yap, siteyi çalıştır, görsel ve teknik testleri tamamla. Kullanıcıdan her adımda onay bekleme; güvenle uygulanabilen bütün işleri bitir. Ancak doğrulanamayan kişi adı, unvan, telefon, e-posta, tarih veya fotoğraftaki kimlik gibi olguları kesinlikle uydurma.

## Görev

Proje kökündeki `Web Sayfası Eklemeler.docx` belgesini **sayfa sayfa görsel olarak incele** ve belgede istenen bütün içerik, görsel, kişi, iletişim, araştırma alanı, galeri, düzen ve davranış değişikliklerini mevcut web sitesine eksiksiz uygula.

Belgenin yalnızca metnini çıkarmak, DOCX XML'ini okumak veya içindeki medya dosyalarına bakmak yeterli değildir. Belgenin **her sayfasını tam sayfa bir raster görüntü olarak görmen ve yorumlaman zorunludur.** OCR/metin çıkarımı yalnızca ikinci bir çapraz kontrol yöntemi olabilir; görsel incelemenin yerini alamaz. Tabloları, metin kutularını, okları, başlık hiyerarşisini, yan yana görselleri, açıklamaları ve bir öğenin hangi talebe ait olduğunu sayfa düzeninden anlamalısın.

## Projenin mevcut teknik yapısı

Bu proje Yeditepe Üniversitesi Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi sitesidir.

- Build adımı yoktur; saf HTML, CSS ve Vanilla JavaScript kullanılır.
- Tailwind CDN ve Lucide CDN kullanılır. Node/npm, bundler veya yeni framework ekleme.
- Site GitHub Pages alt dizininde çalışabilecek göreli yollar kullanır.
- Sayfalar: `index.html`, `hakkimizda.html`, `arastirma.html`, `projeler.html`, `ekip.html`, `haberler.html`, `iletisim.html`, `404.html`.
- İçerik katmanı: `data/*.json`.
- Ortak bileşenler: `assets/js/components.js`.
- JSON'dan sayfa üretimi: `assets/js/render.js`.
- Dil sistemi: `assets/js/i18n.js`; varsayılan TR, ikinci dil EN, `localStorage["lang"]`.
- Başlatma/sayfa yönlendirmesi: `assets/js/main.js`.
- Stil ve tasarım tokenları: `assets/css/styles.css`.
- Görseller: `assets/img/`.
- Mimari kurallar: `ARCHITECTURE.md`.
- Proje bağlamı: `PROJECT-OVERVIEW.md`.
- Mevcut çalışma yönergeleri: `GEMINI.md` ve `PROGRESS.md`.

Mevcut repoda belgeye dayanarak daha önce yapılmış veya yarım kalmış değişiklikler bulunabilir. `DEGISIKLIK-NOTLARI.md`, `tmp/` içeriği ya da mevcut kodun varlığı bir maddenin doğru ve eksiksiz uygulandığının kanıtı değildir. Word belgesini sıfırdan, bütün sayfalarıyla yeniden denetle; doğru olan mevcut çalışmayı koru, eksik veya hatalı olanı düzelt, aynı içeriği ikinci kez ekleme.

## Kaynak önceliği

Çelişki olduğunda şu ayrımı kullan:

1. Kullanıcının bu prompttaki açık talimatları görev kapsamını belirler.
2. `Web Sayfası Eklemeler.docx`, eklenecek/değiştirilecek **içeriğin** ana kaynağıdır.
3. `ARCHITECTURE.md`, içeriğin siteye **nasıl yapılandırılacağının** ana kaynağıdır.
4. Mevcut site davranışı ve tasarım sistemi korunacak tabandır.
5. `PROJECT-OVERVIEW.md`, yalnızca çelişmeyen arka plan bilgisidir.

Belge yeni bir veri alanı gerektiriyorsa JSON şemasını temiz biçimde genişlet, render kodunu güncelle ve ardından `ARCHITECTURE.md` içindeki şema açıklamasını da güncelle. Belge içerik bakımından mimari belgeden daha yeniyse yeni içeriği kaybetme.

## Değişiklik güvenliği

İşe başlamadan önce:

1. `pwd`, dosya envanteri ve varsa `AGENTS.md`/talimat dosyalarını kontrol et.
2. `git status --short`, `git diff --stat` ve `git diff` ile mevcut kullanıcı değişikliklerini belirle. Git kullanılamıyorsa bunu raporda belirt ama göreve devam et.
3. Kullanıcının mevcut değişikliklerini silme veya geri alma. `git reset --hard`, `git checkout --`, toplu dosya üzerine yazma veya ilgisiz temizlik yapma.
4. Önce mevcut sayfaları yerel HTTP sunucusu üzerinden aç; ana sayfa, ekip, hakkımızda, haberler, araştırma ve iletişim sayfalarının en az bir masaüstü ve bir mobil referans görüntüsünü al. `file://` kullanma; JSON `fetch` çağrıları için HTTP gerekir.
5. Mevcut konsol hatalarını ve kırık kaynakları başlangıç notuna kaydet. Böylece yeni regresyonla eski kusuru ayırabilirsin.

## Zorunlu DOCX görsel inceleme süreci

### 1. Belgeyi taze bir geçici alana render et

Repodaki mevcut `tmp/docx-review` veya daha önce üretilmiş sayfa görüntülerine güvenme. Repo dışında/taze ve benzersiz bir geçici klasör oluştur. DOCX'i LibreOffice/soffice ile PDF'e dönüştür, sonra PDF'in **tüm sayfalarını** yüksek çözünürlüklü PNG görüntülerine çevir. Tercihen 180–220 DPI kullan; küçük yazı okunmuyorsa ilgili sayfayı 300 DPI ile yeniden üret.

Örnek yaklaşım; ortamına göre eşdeğer araçlar kullanabilirsin:

```bash
review_dir="$(mktemp -d /tmp/web-eklemeler-review-XXXXXX)"
libreoffice --headless --convert-to pdf --outdir "$review_dir" "Web Sayfası Eklemeler.docx"
pdfinfo "$review_dir/Web Sayfası Eklemeler.pdf"
pdftoppm -png -r 200 "$review_dir/Web Sayfası Eklemeler.pdf" "$review_dir/page"
```

Araçlardan biri yoksa `soffice`, ImageMagick veya aynı sonucu veren başka yerel araçla devam et. Yalnızca araç eksik diye görevi bırakma. Belge sayfa sayısını PDF metadata'sından belirle ve oluşan PNG sayısıyla karşılaştır. Sayı eşleşmeden incelemeye geçme.

### 2. Her sayfayı gerçekten gör

- `page-01.png`'den son sayfaya kadar her görüntüyü görüntüleme aracınla **tek tek aç ve incele**.
- Yalnızca contact sheet/thumbnail üzerinden karar verme. Contact sheet yalnızca genel yön bulma amacıyla kullanılabilir.
- Bir sayfada küçük metin, tablo, görsel açıklaması veya karmaşık yerleşim varsa o bölgeyi yakınlaştır/crop alıp ayrıca incele.
- Sayfanın üst, orta ve alt bölgelerini kontrol et; alt kısımdaki not, numara veya açıklamaları atlama.
- Görselin yanında/üstünde/altında yer alan metnin hangi görsele ait olduğunu sayfa düzeninden doğrula.
- Belge içinde tekrar eden bir madde varsa bunu yinelenen talep mi yoksa ayrı kullanım noktası mı olduğunu belirle.
- Her sayfa için “incelendi” kaydı tut. Bir sayfayı atlayıp toplu yorum yapma.

### 3. Görsel okumayı metin katmanıyla çapraz kontrol et

Sayfaları görsel olarak inceledikten sonra DOCX/PDF metnini veya OCR sonucunu kullanarak şunları karşılaştır:

- özel adlar ve akademik unvanlar,
- Türkçe karakterler,
- e-posta, telefon, URL ve tarihler,
- başlıklar ve madde sayıları,
- görsel açıklamaları,
- tablo hücreleri ve dipnotlar.

Metin çıkarım sırası sayfadaki görsel okuma sırasından farklı olabilir. Böyle bir durumda sayfa görüntüsündeki yerleşimi esas al. OCR hatalarını siteye taşımadan orijinal görüntü üzerinden doğrula.

### 4. Sayfa bazlı gereksinim matrisi oluştur

Kod yazmadan önce çalışma notunda şu kolonlarla eksiksiz bir matris oluştur:

| Belge sayfası | Bölge/öğe | Talep türü | Kaynaktaki kesin bilgi | Hedef site sayfası | Hedef veri/kod dosyası | Görsel kaynağı | Durum |
|---|---|---|---|---|---|---|---|

Talep türleri en az şu sınıfları kapsasın: ekleme, düzeltme, kaldırma, yeniden sıralama, yeni görsel, yeni kişi, iletişim bilgisi, çeviri, yeni bölüm, responsive davranış, açık soru.

Her metin kutusu, tablo satırı, görsel ve açıklama matriste karşılık bulmalı. “Siteye uygun olanları seçtim” yaklaşımı yasaktır; belgede bulunan her öğe için ya uygulanmış bir hedef ya da somut ve dürüst bir engel açıklaması bulunmalı.

## DOCX içindeki görselleri alma kuralları

Sayfa PNG'leri belgeyi anlamak içindir. Web sitesinde kullanılacak görseller için:

1. DOCX'i ZIP olarak açıp `word/media/` altındaki özgün medya dosyalarını taze geçici klasöre çıkar.
2. Sayfa görüntüsündeki görseli özgün medya dosyasıyla eşleştir. Sadece dosya sırasına güvenme; görsel içerik, boyut, ilişki dosyaları ve sayfa bağlamıyla doğrula.
3. Mümkünse özgün çözünürlüklü medyayı kullan. Sayfa ekran görüntüsünden kırpılmış, bulanık görsel üretme.
4. Belgedeki şekil/metin kutularından oluşan ve tek medya dosyası olarak bulunmayan bir diyagram varsa önce yüksek kaliteli SVG/PDF/PNG üretme seçeneklerini dene; son çare olarak yüksek DPI sayfa renderından sınırları temiz biçimde kırp.
5. Dosyaları `assets/img/` altında anlamlı, ASCII, küçük harfli ve tireli adlarla sakla. Var olan doğru görselin gereksiz kopyasını oluşturma.
6. Görseli keyfi biçimde kırpma veya içeriğini değiştirme. Gerekiyorsa en-boy oranını koru; CSS ile `object-fit: contain` kullan.
7. Web için makul optimizasyon yap fakat okunması gereken diyagram/metinleri bulanıklaştırma. Büyük dosyalarda kaliteyi görsel karşılaştırmayla doğrula.
8. Her görsel için TR ve EN anlamlı `alt` metni ekle. Dekoratif görsel ise boş alt kullan.
9. Fotoğraftaki kişilerin kimliğini yalnızca görüntüden tahmin etme. Belge açıkça isim eşleştirmiyorsa genel ve doğru bir açıklama kullan.
10. Dış kaynaktan yeni görsel arama; önce belge içindeki gerçek varlıkları kullan. Dış kaynak zorunlu hale gelirse yalnızca güvenilir/resmî kaynağı kullan ve URL'yi veri/not dosyasında kaydet.

## Uygulama ilkeleri

### Veri ve çift dil

- Metin/içerik verilerini mümkün olduğunca `data/*.json` içinde tut; HTML veya JavaScript içine dağınık biçimde gömme.
- Kullanıcıya görünen her yeni metnin TR ve EN karşılığı olmalı.
- Belge yalnızca Türkçe içeriyorsa anlamı değiştirmeyen, kurumsal ve doğal bir İngilizce çeviri üret. Özel ad, e-posta, URL, numara ve marka adlarını çevirmeden koru.
- Statik UI metinlerini `data/site.json > strings` içine `{ "tr": "...", "en": "..." }` biçiminde ekle ve HTML'de `data-i18n` kullan.
- Dinamik kayıt alanlarını `{tr,en}` olarak yapılandır ve `window.i18n.t(...)` ile render et.
- `data-i18n` özelliğini ikon veya çocuk eleman içeren dış kapsayıcıya koyma; yalnızca metin taşıyan iç elemana koy.
- Dil değişince header, footer ve sayfa içeriği doğru yenilenmeli; aynı olay için gereksiz çift render veya çoğalan event listener bırakma.
- JSON içinde yinelenen anahtar bırakma. Özellikle `data/site.json` dosyasını duplicate-key algılayan bir yöntemle kontrol et; standart `JSON.parse` yinelenen anahtarları sessizce örtebilir.

### Sayfa ve bileşen yerleşimi

- Belgede açıkça belirtilen hedef sayfaya uygula. Belirsizse içerik anlamına göre en doğal sayfayı seç ve matriste gerekçeyi yaz.
- Aynı veri birden çok yerde görünüyorsa tek veri kaynağından render et. Örneğin iletişim bilgileri footer ve iletişim sayfasında aynı `site.json` alanından gelmeli.
- Yeni ekip kayıtları `data/team.json`, araştırma alanları `data/research.json`, haberler `data/news.json`, ortaklar `data/partners.json` ve hakkımızda içeriği `data/about.json` üzerinden ilerlemeli. Gerekli yeni içerik türü için ayrı JSON dosyası açabilirsin.
- Gerekli render fonksiyonlarını `assets/js/render.js` içinde küçük ve anlaşılır tut; `main.js` içindeki mevcut sayfa başlatma akışına bağla.
- Mevcut `--c-*` renk tokenlarını, Space Grotesk/Inter tipografisini, kart/köşe/boşluk dilini ve açık+koyu hibrit tasarımı koru.
- Yeni bölümler mevcut sitenin doğal bir parçası gibi görünmeli. Belgedeki Word sayfa tasarımını siteye birebir kopyalama; belgedeki içerik ve ilişkileri sitenin tasarım sistemine uyarlayarak aktar.
- Yeni içerik mevcut sayfada aşırı kalabalık yaratıyorsa bilgi mimarisini iyileştir, fakat hiçbir belge öğesini gizlice çıkarma.
- Proje verisi boşsa mevcut “yakında” davranışını koru; belge gerçek proje vermiyorsa örnek proje uydurma.

### Bilgi doğruluğu

- Belgedeki yazımı, sıra ve ilişkilendirmeleri dikkatle koru.
- Telefon numarası, dahili numara veya e-posta yoksa üretme.
- Tam adı bilinmeyen kişiyi tahmin ederek ekleme.
- Kişi fotoğrafı verilmemişse mevcut tasarıma uygun baş harf/placeholder kullan; başka bir kişiye ait görsel seçme.
- Belgede kaldırılması istenen veya geçersiz olduğu belirtilen bilgi varsa tüm görünür kullanımlardan, yapılandırılmış veriden ve ilgili bağlantılardan temizle.
- Bir bilgi gerçekten belirsizse önce sayfayı daha yüksek DPI ile tekrar incele, metin katmanını kontrol et ve mevcut site bağlamıyla karşılaştır. Hâlâ belirsizse güvenli kısmı uygula, tahmin yapma ve raporda tam sayfa/öğe referansıyla açık soru olarak belirt.

### SEO, erişilebilirlik ve güvenlik

- Her yeni görselde doğru `alt`, gerekirse `width`/`height`, aşağıdaki içeriklerde `loading="lazy"` kullan.
- Başlık hiyerarşisini bozma; sayfa başına anlamlı tek `h1`, bölümlerde sıralı `h2/h3` kullan.
- Etkileşimli öğeler klavyeyle erişilebilir olmalı; görünür focus, doğru `button`/`a`, `aria-expanded`, `aria-label` ve modal odağı korunmalı.
- Metin kontrastı WCAG AA seviyesinde olmalı; yalnızca renkle anlam aktarma.
- `target="_blank"` bağlantılarında `rel="noopener"` kullan.
- JSON/Word içeriğini `innerHTML` ile üretirken dışarıdan gelebilecek değerleri körlemesine HTML olarak yorumlama. Bu proje verileri yerel olsa da yeni kodda gereksiz XSS yüzeyi oluşturma.
- Her sayfanın canonical/OG yollarını GitHub Pages alt diziniyle uyumlu tut; mevcut repo yayın adresini değiştirme veya özel alan adı uydurma.

## Uygulama sırası

1. Repo, mimari ve mevcut siteyi incele.
2. Başlangıç site ekran görüntülerini ve hata notlarını al.
3. DOCX'i taze alanda PDF ve yüksek DPI sayfa PNG'lerine dönüştür.
4. Sayfa sayısını doğrula.
5. Her sayfa görüntüsünü sırayla, tek tek incele; gereken yakın planları aç.
6. Metin/OCR ve özgün medya dosyalarıyla çapraz kontrol et.
7. Sayfa bazlı eksiksiz gereksinim matrisini oluştur.
8. Mevcut kod/veride hangi maddelerin zaten doğru, hangilerinin eksik/hatalı olduğunu tek tek eşleştir.
9. Önce veri şemalarını ve `data/*.json` içeriklerini güncelle.
10. Sonra render/bileşen/i18n kodunu güncelle.
11. Ardından HTML bölümleri ve CSS responsive düzenini güncelle.
12. Yeni görselleri `assets/img/` içine ekle ve referanslarını bağla.
13. Gerekli mimari/proje belgelerini güncelle; eski veya yanlış tamamlama iddialarını düzelt.
14. Yerel HTTP sunucusunda teknik ve görsel testleri yap.
15. Son olarak gereksinim matrisini belge sayfalarıyla tekrar karşılaştır ve hiçbir satırın cevapsız kalmadığını doğrula.

## Zorunlu doğrulama

### Sözdizimi ve veri

- Bütün `data/*.json` dosyalarını parse et.
- Duplicate JSON key kontrolü yap.
- Değişen JavaScript dosyalarında sözdizimi kontrolü yap.
- HTML'deki yerel `src`/`href` hedeflerini ve JSON'daki yerel görsel yollarını kontrol et.
- Boş olmayan her e-posta için doğru `mailto:`, her doğrulanmış telefon için doğru `tel:` bağlantısını kontrol et.
- Yeni i18n anahtarlarının hem TR hem EN karşılığı bulunduğunu ve kullanılan anahtarların tanımlı olduğunu kontrol et.
- `git diff --check` çalıştır; Git yoksa eşdeğer whitespace/sözdizimi kontrollerini yap.

### Tarayıcı testi

Siteyi HTTP üzerinden çalıştır. En az şu görünümleri kontrol et:

- geniş masaüstü: yaklaşık 1440×900,
- tablet/dar masaüstü: yaklaşık 768×1024,
- mobil: yaklaşık 390×844.

Şunların tamamını test et:

- tüm 8 HTML sayfası,
- TR ve EN dil geçişi,
- header logo ve navigasyon,
- mobil menünün açılması/kapanması ve sayfanın kaydırma kilidi,
- footer ve iletişim bağlantıları,
- ekip kartları,
- araştırma kartları ve varsa proje filtreleri/modali,
- haber listesi ve her haber detay görünümü,
- yeni galeri/diyagram/görsellerin tam yüklenmesi,
- ana sayfadaki yeni bölümler,
- doğrudan URL ve GitHub Pages alt-dizin uyumu,
- 404 sayfası,
- yatay taşma, kesilen metin, çakışan logo/menü, bozuk en-boy oranı,
- konsol hataları, başarısız ağ istekleri ve 404 kaynakları.

Her ana değişiklik için en az bir masaüstü ve bir mobil ekran görüntüsü al. Uzun sayfalarda yalnızca üst kısmı değil, yeni içeriğin bulunduğu bölgeyi de görüntüle. TR ve EN'de uzun metinlerin düzeni bozmadığını görsel olarak doğrula.

Mümkünse otomasyonla şu kontrolleri de yap:

- görüntülerin doğal genişlik/yüksekliği sıfır değil,
- sayfa `scrollWidth <= clientWidth` (istem dışı yatay taşma yok),
- console error ve page error yok,
- bütün dahili sayfa linkleri HTTP 200 dönüyor,
- görünür metinde `undefined`, `[object Object]`, eksik çeviri anahtarı veya sahte placeholder yok.

## Bitirme ve raporlama

`DEGISIKLIK-NOTLARI.md` dosyasını bu denetimin gerçek sonucu olacak şekilde güncelle. En az şu başlıklar bulunsun:

1. İncelenen DOCX sayfa sayısı ve her sayfanın incelendiğine dair kısa kontrol listesi.
2. Sayfa bazlı gereksinim matrisi.
3. Uygulanan değişiklikler ve ilgili site/dosya hedefleri.
4. Eklenen görseller; hangi belge sayfasından/özgün medya öğesinden geldiği.
5. Bilerek uygulanmayan hiçbir madde varsa nedeni; “uygun görmedim” geçerli neden değildir.
6. Uydurulmadan açık bırakılan belirsiz bilgiler.
7. Çalıştırılan doğrulamalar, viewportlar, TR/EN sonuçları ve varsa kalan sorunlar.

Geçici render/OCR/crop dosyalarını repo içine kalıcı olarak bırakma. Yalnızca site için gereken optimize varlıkları `assets/img/` altında tut. Var olan kullanıcıya ait dosyaları silme.

Son yanıtın kısa fakat kanıtlı olsun:

- DOCX'in kaç sayfasının tek tek görsel incelendiğini belirt.
- Hangi site sayfalarının ve ana dosyaların değiştiğini özetle.
- Eklenen/güncellenen görselleri belirt.
- Yapılan testleri ve sonuçlarını söyle.
- Hâlâ kullanıcıdan gereken kesin bilgi varsa sayfa/öğe referansıyla listele.
- Commit/push/deploy yapma; yalnızca kullanıcı ayrıca açıkça isterse yap.

## Tamamlanma ölçütü

Şu koşulların hepsi sağlanmadan görevi tamamlandı sayma:

- DOCX'in toplam sayfa sayısı ile tek tek incelenen sayfa görüntüsü sayısı eşit.
- Her belge öğesi gereksinim matrisinde bir satıra bağlı.
- Her satırın uygulanmış hedefi veya dürüst, somut engel kaydı var.
- Word'deki görseller mümkün olan en kaliteli özgün kaynakla siteye alınmış.
- TR ve EN içerikler tamamlanmış ve dil değişiminde doğru çalışıyor.
- Mevcut mimari ve tasarım sistemi korunmuş.
- Mobil, tablet ve masaüstünde yeni içerikler görsel olarak doğrulanmış.
- Yerel kaynak 404'ü, JSON/JS hatası ve konsol hatası kalmamış.
- `DEGISIKLIK-NOTLARI.md` gerçek uygulamayla birebir uyumlu.

Şimdi analizi anlatmakla yetinme; bu süreci uygula ve işi doğrulanmış biçimde bitir.
