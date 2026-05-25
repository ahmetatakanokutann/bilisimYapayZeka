# GEMINI.md — Kök Talimat Dosyası (Gemini CLI her açılışta bunu okur)

> Bu dosya Gemini CLI tarafından otomatik bağlam olarak yüklenir. **Her oturumun başında önce bu dosyayı, sonra `PROGRESS.md`'yi oku.** Böylece nerede kaldığını anlarsın, veri kaybı olmaz.

## Proje Tek Cümlede
Yeditepe Üniversitesi **Bilişim ve Yapay Zeka Uygulama ve Araştırma Merkezi** için, GitHub Pages'te yayınlanacak **statik, çift dilli (TR/EN), saf HTML/CSS/JS + Tailwind** bir tanıtım web sitesi geliştiriyoruz.

## Her Oturumda İzlenecek Akış
1. **`PROGRESS.md`'yi oku** → `Mevcut Adım` ve `Sıradaki Eylem` alanlarına bak. Nerede kaldığını oradan öğren.
2. O adıma karşılık gelen **`prompts/NN-*.md`** dosyasını aç ve **birebir uygula**.
3. İşi bitirince **`PROGRESS.md`'yi güncelle** (adımı `✅ Tamamlandı` yap, değişiklik kaydını ekle, `Mevcut Adım`/`Sıradaki Eylem`'i ilerlet).
4. Mimari/şema/isim kararları için tek doğruluk kaynağı: **`ARCHITECTURE.md`**. Buna aykırı kod yazma.

## Değişmez Kurallar
- **Build adımı YOK.** Saf HTML/CSS/JS. Tailwind CDN üzerinden gelir (`<script src="https://cdn.tailwindcss.com">`). Node/npm kurma.
- **İçerik koda gömülmez.** Tüm metin/veri `data/*.json` içinde, `{ "tr": "...", "en": "..." }` biçiminde tutulur. HTML, JS ile bu JSON'lardan doldurulur. (Bu, ileride CMS bağlamayı mümkün kılar.)
- **Çift dil:** Varsayılan TR. Dil değişimi JS ile (`localStorage`), sayfa kopyalamadan. Detay: `ARCHITECTURE.md > i18n`.
- **Tasarım:** Hibrit (açık ana bölümler + koyu/gradient vurgu bölümleri). Renk/font/token'lar `ARCHITECTURE.md > Tasarım Sistemi`'nde sabittir; oradan sapma.
- **Doğrulanmamış veri:** İsim/tarih/unvan gibi alanlar JSON'da `"verify": true` bayrağıyla işaretli. Bunları silme, kullanıcı onaylayınca `false` yap.
- Tek seferde bir adım. Adımı bitirmeden sonrakine geçme. Her adım kendi `Kabul Kriterleri`ni sağlamalı.

## Dosya Haritası
- `ARCHITECTURE.md` — mimari, klasör yapısı, tasarım sistemi, JSON şemaları (TEK DOĞRULUK KAYNAĞI)
- `PROGRESS.md` — ilerleme durumu + "nerede kaldım" (HER ADIMDA GÜNCELLE)
- `PROJECT-OVERVIEW.md` — proje künyesi + doğrulanmış araştırma verileri (içerik kaynağı)
- `prompts/` — 01..10 adım adım yapılacaklar
- `prompts/README.md` — prompt kullanım sırası

## İlk Kez mi Çalışıyorsun?
`PROGRESS.md`'de tüm adımlar `⬜ Bekliyor` ise: `prompts/01-iskelet-ve-tasarim-sistemi.md` ile başla.
