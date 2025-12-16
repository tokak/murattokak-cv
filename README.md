
## Kişisel Portfolyo/CV Sitesi: İletişim Formu Otomasyonu

## Proje Linki: https://murattokakcv.lovable.app/


Kişisel Portfolyo/CV Sitesi geliştirdim ve sitedeki İletişim Formunu n8n ile otomatik bildirim sistemine bağladım.

Kullanıcı `İletişime Geç` veya `Mesaj Gönder` butonuna tıkladığında form açılmaktadır. Formda Ad, Soyad, E-posta ve Mesaj bilgileri girilip gönderildiğinde, form verileri n8n Webhook üzerinden alınmaktadır.

Mesaj bana e-posta ve telegramdan anlık bildirim  olarak kullanıcının ne yazdıgı mesaj ile berabar iletilmektedir.

İşlem tamamlandığında kullanıcıya ekranda başarılı gönderim geri bildirimi mesajı ve n8n ile otomatik mesajınız alındı mesajı gönderilir.

## N8N WORKFLOW ÖZETİ

**Webhook (Trigger)**
 - Portfolyo sitesindeki iletişim formundan gelen POST isteğini karşılar (ad, soyad, e-posta, mesaj).
 - Webhook üzerinden alınan verileri kullanarak mesajı benim e-posta adresime iletir.
 - Yeni bir mesaj geldiğinde Telegram üzerinden anlık bildirim gönderir. Bildirim içeriğinde gönderen bilgisi ve mesajı  yer alır.

**Response / Feedback**
 - Web sitesine başarılı yanıt dönerek kullanıcıya “Mesajınız alındı” şeklinde geri bildirim sağlar.

**kişisel portfolio sitesinden fotograflar ve form üzerinden mesaj gönderildiğinde otomatik mail gelmesi, telegram bot bildirimi ve geri dönüş mail bildirimlerin ekran görüntüsü aşağıdadır.**

<img width="1934" height="666" alt="image" src="https://github.com/user-attachments/assets/bfb0a266-7b1c-45cc-9853-16d7bdffe668" />

**İletişim Formu**
<img width="1082" height="743" alt="image" src="https://github.com/user-attachments/assets/8c7a36c1-4935-4565-81a1-befc9bb1a7f8" />

**Mesaj gönderildi bildirimi geldiyse mail ve telegram botuna mesaj gelmiştir**
<img width="475" height="150" alt="image" src="https://github.com/user-attachments/assets/48563778-e164-4f57-a788-baaf4964e7a7" />

**Mail ekran görüntüsü**
<img width="881" height="392" alt="image" src="https://github.com/user-attachments/assets/61181315-769e-427a-a8a4-8832aeceb4e9" />

**Telegram Ekran Görüntüsü**
<img width="716" height="1482" alt="image" src="https://github.com/user-attachments/assets/08d5c4b2-8add-4ae9-a4aa-66d944bbdc0f" />

**Geri bildirim Mail Ekran Görüntüsü**
<img width="689" height="259" alt="image" src="https://github.com/user-attachments/assets/96956fed-0c81-4141-81a8-3bea7da9e5c8" />




















