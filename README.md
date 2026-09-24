# Yeditepe Üniversitesi - Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi

Yeditepe Üniversitesi Teknoloji Üssü'nde faaliyet gösteren Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi'nin resmi web sitesi.

## 🚀 Teknolojiler
- **Saf HTML/CSS/JS:** Build adımı gerektirmez.
- **Tailwind CSS:** CDN üzerinden stil yönetimi.
- **Lucide Icons:** Modern ikon kütüphanesi.
- **i18n:** Çift dil (TR/EN) desteği (localStorage tabanlı).
- **Dinamik Veri:** İçerik `data/*.json` dosyalarından beslenir.

## 🛠️ Yerel Geliştirme
Projeyi yerel makinenizde çalıştırmak için:
1. Depoyu klonlayın.
2. Proje kök dizininde bir HTTP sunucusu başlatın (Örn: VS Code **Live Server** eklentisi).
3. Tarayıcıda `index.html` dosyasını açın.

## 📝 İçerik Güncelleme
Sitedeki metinleri, projeleri veya ekip üyelerini güncellemek için `data/` klasöründeki ilgili `.json` dosyalarını düzenlemeniz yeterlidir. 
- `site.json`: Genel site ayarları, navigasyon ve iletişim bilgileri.
- `about.json`: Misyon, vizyon ve birim tanıtımları.
- `research.json`: Araştırma odak alanları.
- `projects.json`: Uygulamalı projeler.
- `team.json`: Yönetim ve araştırmacı kadrosu.
- `news.json`: Haberler ve duyurular.

## 📦 GitHub Pages Yayını
1. Değişiklikleri commit edip pushlayın.
2. GitHub'da deponuza gidin: `Settings > Pages`.
3. **Build and deployment > Source** kısmını "Deploy from a branch" olarak seçin.
4. **Branch** olarak `main` (veya ilgili branch) ve `/ (root)` seçip kaydedin.
5. Yayınlandığında site şu adreste olacaktır: `https://ahmetatakanokutann.github.io/bilisimYapayZeka/`

## 📂 Dosya Yapısı
- `assets/css/styles.css`: Özel stiller ve tasarım sistemi token'ları.
- `assets/js/i18n.js`: Dil yönetimi altyapısı.
- `assets/js/components.js`: Header ve Footer enjeksiyonu.
- `assets/js/render.js`: JSON verilerini HTML'e dönüştüren mantık.
- `assets/js/main.js`: Uygulama giriş noktası ve router.
- `assets/img/`: Logolar, ekip fotoğrafları ve görseller.
